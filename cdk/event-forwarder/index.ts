import {
	AutoScalingClient,
	DescribeAutoScalingGroupsCommand,
} from '@aws-sdk/client-auto-scaling';
import { fromIni } from '@aws-sdk/credential-providers';
import type { AwsCredentialIdentityProvider } from '@smithy/types';
import { getConfig } from './config';
import type {
	AutoscalingEvent,
	CloudformationEvent,
	HydratedEvent,
} from './types';

interface AwsClientConfig {
	region: string;
	credentials?: AwsCredentialIdentityProvider;
}

export async function main(event: CloudformationEvent | AutoscalingEvent) {
	const { stage } = getConfig();

	try {
		const hydrated: HydratedEvent = {
			...event,
			cloudformationStackName: await getCloudformationStackName(event, stage),
		};
		console.log(JSON.stringify(hydrated));
	} catch (err) {
		if (err instanceof Error) {
			console.error(err.message);
		}
		console.log(JSON.stringify(event));
	}
}

async function getCloudformationStackName(
	event: CloudformationEvent | AutoscalingEvent,
	stage: string,
) {
	switch (event.source) {
		case 'aws.autoscaling': {
			return await getCloudformationStackNameForAsg(
				event as AutoscalingEvent,
				stage,
			);
		}
		case 'aws.cloudformation': {
			return getCloudformationStackNameForStack(event as CloudformationEvent);
		}
		default: {
			throw new Error('Unrecognised event source');
		}
	}
}

async function getCloudformationStackNameForAsg(
	event: AutoscalingEvent,
	stage: string,
): Promise<string> {
	const awsConfig: AwsClientConfig = {
		region: 'eu-west-1',
		...(stage === 'DEV' && {
			credentials: fromIni({ profile: 'developerPlayground' }),
		}),
	};

	const { AutoScalingGroupName } = event.detail;

	const client = new AutoScalingClient(awsConfig);
	const command = new DescribeAutoScalingGroupsCommand({
		AutoScalingGroupNames: [AutoScalingGroupName],
	});
	const { AutoScalingGroups = [] } = await client.send(command);

	if (AutoScalingGroups.length !== 1) {
		throw new Error('Unable to locate unique autoscaling group');
	}

	const [cfnStackName] = AutoScalingGroups.flatMap((_) => _.Tags ?? [])
		.filter((_) => _.Key === 'aws:cloudformation:stack-name')
		.map((_) => _.Value);

	if (!cfnStackName) {
		throw new Error(
			'Unable to locate unique tag: aws:cloudformation:stack-name',
		);
	}

	return cfnStackName;
}

async function getCloudformationStackNameForStack(
	event: CloudformationEvent,
): Promise<string> {
	const stackId = event.detail['stack-id'];
	const [, stackName] = stackId.split('/');

	if (!stackName) {
		throw new Error(`Unable to parse stack-id: ${stackId}`);
	}

	return Promise.resolve(stackName);
}
