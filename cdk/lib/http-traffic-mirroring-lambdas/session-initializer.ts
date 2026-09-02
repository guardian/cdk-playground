import {
	AutoScalingClient,
	DescribeAutoScalingGroupsCommand,
} from '@aws-sdk/client-auto-scaling';
import {
	CreateTrafficMirrorSessionCommand,
	DescribeInstancesCommand,
	EC2Client,
} from '@aws-sdk/client-ec2';
import type {
	CloudFormationCustomResourceEvent,
	CloudFormationCustomResourceResponse,
} from 'aws-lambda';

type ResourceProperties = {
	AsgName: string;
	TargetId: string;
	FilterId: string;
};

const ec2 = new EC2Client();
const asgClient = new AutoScalingClient();

export const handler = async (
	event: CloudFormationCustomResourceEvent,
): Promise<Partial<CloudFormationCustomResourceResponse>> => {
	console.log('Event:', JSON.stringify(event));

	if (event.RequestType === 'Delete') {
		return { PhysicalResourceId: event.PhysicalResourceId };
	}

	const { AsgName, TargetId, FilterId } =
		event.ResourceProperties as unknown as ResourceProperties;

	const asgRes = await asgClient.send(
		new DescribeAutoScalingGroupsCommand({
			AutoScalingGroupNames: [AsgName],
		}),
	);

	const asgGroup = asgRes.AutoScalingGroups?.[0];
	if (!asgGroup) {
		throw new Error(`ASG not found: ${AsgName}`);
	}

	const instanceIds = (asgGroup.Instances ?? [])
		.filter((i) => i.LifecycleState === 'InService' && i.InstanceId)
		.map((i) => i.InstanceId as string);

	console.log(
		`Found ${instanceIds.length} in-service instances: ${instanceIds.join(', ')}`,
	);

	for (const instanceId of instanceIds) {
		const describeRes = await ec2.send(
			new DescribeInstancesCommand({ InstanceIds: [instanceId] }),
		);
		const instance = describeRes.Reservations?.[0]?.Instances?.[0];
		const primaryEniId = instance?.NetworkInterfaces?.[0]?.NetworkInterfaceId;

		if (!primaryEniId) {
			console.warn(
				`Unable to find primary ENI for instance: ${instanceId}, skipping`,
			);
			continue;
		}

		try {
			const sessionRes = await ec2.send(
				new CreateTrafficMirrorSessionCommand({
					NetworkInterfaceId: primaryEniId,
					TrafficMirrorTargetId: TargetId,
					TrafficMirrorFilterId: FilterId,
					SessionNumber: 1,
					Description: `Auto-attached traffic mirror for instance ${instanceId}`,
				}),
			);
			console.log(
				`Created session: ${sessionRes.TrafficMirrorSession?.TrafficMirrorSessionId} for instance ${instanceId}`,
			);
		} catch (err) {
			// Session may already exist if this custom resource is being updated
			if (
				(err as { Code?: string }).Code === 'TrafficMirrorSessionAlreadyExists'
			) {
				console.log(
					`Session already exists for instance ${instanceId}, skipping`,
				);
			} else {
				throw err;
			}
		}
	}

	return { PhysicalResourceId: 'traffic-mirror-session-initializer' };
};
