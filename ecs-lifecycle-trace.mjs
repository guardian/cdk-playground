import { execFileSync } from 'node:child_process';
import { randomBytes } from 'node:crypto';

// Builds a Jaeger trace for one ECS task from its task-state-change events in
// CloudWatch Logs. Trace ID = the 32-hex ECS task ID; one span per lifecycle
// state (PROVISIONING/PENDING/ACTIVATING/RUNNING/...). No pull/container detail.
// Usage: node ecs-lifecycle-trace.mjs <taskId> [--flags]
//
// Jaeger container (all-in-one, in-memory; UI on 16687, OTLP HTTP on 4319):
//   Start:   docker run -d --name ecs-timeline-jaeger \
//              -p 16687:16686 -p 4319:4318 jaegertracing/jaeger:2.6.0
//   Restart: docker restart ecs-timeline-jaeger   (clears all traces)
//   Stop:    docker rm -f ecs-timeline-jaeger
//   UI:      http://localhost:16687


const arg = (name, fallback) => {
	const i = process.argv.indexOf(`--${name}`);
	return i !== -1 ? process.argv[i + 1] : fallback;
};

// Single positional argument: the ECS task id (also used as the trace id).
const TASK_ID = process.argv
	.slice(2)
	.find((a, i, all) => !a.startsWith('--') && !all[i - 1]?.startsWith('--'));
if (!TASK_ID) {
	console.error('Usage: node ecs-lifecycle-trace.mjs <taskId> [--flags]');
	process.exit(1);
}

const LOG_GROUP = arg('log-group', '/aws/events/cdk-playground-CODE-task-state');
const PROFILE = arg('profile', 'deployTools');
const REGION = arg('region', 'eu-west-1');
const CLUSTER = arg(
	'cluster',
	'arn:aws:ecs:eu-west-1:095768028460:cluster/deploy-CODE-cdk-playground-ecs-cdkplaygroundEcsClusterF9ADCF3E-EavNroJI4xhl',
);
const SERVICE = arg(
	'service',
	'deploy-CODE-cdk-playground-ecs-EcsService81FC6EF6-clDl09kBIYOu',
);
const OTLP = arg('otlp', 'http://localhost:4319/v1/traces');
const UI = arg('ui', 'http://localhost:16687');

function fetchEvents(startMs, endMs) {
	const events = [];
	let token;
	do {
		const args = [
			'logs',
			'filter-log-events',
			'--log-group-name',
			LOG_GROUP,
			'--start-time',
			String(startMs),
			'--end-time',
			String(endMs),
			'--profile',
			PROFILE,
			'--region',
			REGION,
			'--no-cli-pager',
			'--output',
			'json',
		];
		if (token) args.push('--next-token', token);
		const raw = execFileSync('aws', args, { maxBuffer: 1e8 });
		const page = JSON.parse(raw);
		for (const e of page.events ?? []) events.push(JSON.parse(e.message));
		token = page.nextToken;
	} while (token);
	return events;
}

const nanos = (iso) => String(Date.parse(iso) * 1_000_000);
const spanId = () => randomBytes(8).toString('hex');
const attr = (key, value) => ({ key, value: { stringValue: String(value) } });

// describe-tasks milestone timestamps, attached to the root span as events ("logs").
const MILESTONES = [
	'createdAt',
	'connectivityAt',
	'pullStartedAt',
	'pullStoppedAt',
	'startedAt',
];

function fetchMilestones(taskId) {
	try {
		const raw = execFileSync(
			'aws',
			[
				'ecs',
				'describe-tasks',
				'--cluster',
				CLUSTER,
				'--tasks',
				taskId,
				'--profile',
				PROFILE,
				'--region',
				REGION,
				'--no-cli-pager',
				'--output',
				'json',
			],
			{ maxBuffer: 1e8 },
		);
		const task = JSON.parse(raw).tasks?.[0] ?? {};
		return Object.fromEntries(
			MILESTONES.filter((k) => task[k]).map((k) => [k, task[k]]),
		);
	} catch {
		return {}; // task aged out of describe-tasks
	}
}

// Service events (task started / target registered / steady state) as span logs.
function fetchServiceEvents() {
	try {
		const raw = execFileSync(
			'aws',
			[
				'ecs',
				'describe-services',
				'--cluster',
				CLUSTER,
				'--services',
				SERVICE,
				'--profile',
				PROFILE,
				'--region',
				REGION,
				'--no-cli-pager',
				'--query',
				'services[0].events',
				'--output',
				'json',
			],
			{ maxBuffer: 1e8 },
		);
		return JSON.parse(raw) ?? [];
	} catch {
		return [];
	}
}

function buildSpans(taskId, evts, milestones, serviceEvents) {
	evts.sort(
		(a, b) =>
			Date.parse(a.detail.updatedAt) - Date.parse(b.detail.updatedAt) ||
			a.detail.version - b.detail.version,
	);
	// Collapse consecutive events into distinct lifecycle-state phases.
	const phases = [];
	for (const e of evts) {
		const state = e.detail.lastStatus;
		if (!phases.length || phases.at(-1).state !== state) {
			phases.push({
				state,
				start: e.detail.updatedAt,
				desiredStatus: e.detail.desiredStatus,
			});
		}
	}
	const lastAt = evts.at(-1).detail.updatedAt;
	phases.forEach((p, i) => {
		p.end = i < phases.length - 1 ? phases[i + 1].start : lastAt;
	});

	// Service events (already filtered to the window) as span logs; extend the
	// root span end to cover post-RUNNING ones (registration / steady state).
	let rootEndMs = Date.parse(lastAt);
	const svcLogs = serviceEvents.map((e) => ({
		name: e.message,
		timeUnixNano: nanos(e.createdAt),
	}));
	for (const e of svcLogs)
		rootEndMs = Math.max(rootEndMs, Number(e.timeUnixNano) / 1_000_000);

	const rootId = spanId();
	const root = {
		traceId: taskId,
		spanId: rootId,
		name: `ECS task ${taskId.slice(0, 8)} (${phases[0].state} → ${phases.at(-1).state})`,
		kind: 1,
		startTimeUnixNano: nanos(phases[0].start),
		endTimeUnixNano: String(rootEndMs * 1_000_000),
		attributes: [
			attr('ecs.task.id', taskId),
			attr('ecs.startedBy', evts.at(-1).detail.startedBy ?? '-'),
			attr('ecs.group', evts.at(-1).detail.group ?? '-'),
		],
		events: [
			...MILESTONES.filter((k) => milestones[k]).map((k) => ({
				name: k,
				timeUnixNano: nanos(milestones[k]),
			})),
			...svcLogs,
		],
	};

	const children = phases.map((p) => ({
		traceId: taskId,
		spanId: spanId(),
		parentSpanId: rootId,
		name: p.state,
		kind: 1,
		startTimeUnixNano: nanos(p.start),
		endTimeUnixNano: nanos(p.end),
		attributes: [
			attr('ecs.lastStatus', p.state),
			attr('ecs.desiredStatus', p.desiredStatus),
		],
	}));

	return [root, ...children];
}

const milestones = fetchMilestones(TASK_ID);
if (!milestones.createdAt) {
	console.error(
		`describe-tasks returned no createdAt for ${TASK_ID} (task may have aged out).`,
	);
	process.exit(1);
}

// Window: [createdAt, createdAt + 60s], used for both the CloudWatch Logs
// query and the service-event filter.
const startMs = Date.parse(milestones.createdAt);
const endMs = startMs + 60_000;

// EventBridge writes CWL entries with second-precision timestamps, just below
// the millisecond createdAt, so look back a few seconds to keep PROVISIONING.
const events = fetchEvents(startMs - 5_000, endMs).filter((e) =>
	e.detail?.taskArn?.endsWith(TASK_ID),
);
if (!events.length) {
	console.error(`No task-state events for ${TASK_ID} in window.`);
	process.exit(1);
}

const serviceEvents = fetchServiceEvents().filter((e) => {
	const t = Date.parse(e.createdAt);
	return t >= startMs && t <= endMs;
});

const spans = buildSpans(TASK_ID, events, milestones, serviceEvents);

const body = {
	resourceSpans: [
		{
			resource: { attributes: [attr('service.name', 'ECS Task lifecycle')] },
			scopeSpans: [{ scope: { name: 'ecs-lifecycle' }, spans }],
		},
	],
};

const res = await fetch(OTLP, {
	method: 'POST',
	headers: { 'content-type': 'application/json' },
	body: JSON.stringify(body),
});
console.log('POST', OTLP, '->', res.status, await res.text());
console.log(`\ntrace: ${UI}/trace/${TASK_ID}`);
