import {
	CreateTrafficMirrorSessionCommand,
	DescribeInstancesCommand,
	EC2Client,
} from '@aws-sdk/client-ec2';
import type { EventBridgeEvent } from 'aws-lambda';

type ASGInstanceLaunchDetail = {
	EC2InstanceId: string;
	AutoScalingGroupName: string;
};

type ASGInstanceLaunchEvent = EventBridgeEvent<
	'EC2 Instance Launch Successful',
	ASGInstanceLaunchDetail
>;

const ec2 = new EC2Client();

export const handler = async (event: ASGInstanceLaunchEvent): Promise<void> => {
	const instanceId = event.detail.EC2InstanceId;
	const targetId = process.env.TARGET_ID;
	const filterId = process.env.FILTER_ID;

	if (!targetId || !filterId) {
		throw new Error(
			'TARGET_ID and FILTER_ID environment variables must be set',
		);
	}

	console.log(`Processing launch event for instance: ${instanceId}`);

	// Fetch instance details to get primary ENI ID
	const describeRes = await ec2.send(
		new DescribeInstancesCommand({ InstanceIds: [instanceId] }),
	);
	const instance = describeRes.Reservations?.[0]?.Instances?.[0];
	const primaryEniId = instance?.NetworkInterfaces?.[0]?.NetworkInterfaceId;

	if (!primaryEniId) {
		throw new Error(`Unable to find primary ENI for instance: ${instanceId}`);
	}

	// Attach Traffic Mirror Session (ASG instance ENI -> mirroring target)
	const sessionRes = await ec2.send(
		new CreateTrafficMirrorSessionCommand({
			NetworkInterfaceId: primaryEniId,
			TrafficMirrorTargetId: targetId,
			TrafficMirrorFilterId: filterId,
			SessionNumber: 1,
			Description: `Auto-attached traffic mirror for instance ${instanceId}`,
		}),
	);

	console.log(
		`Successfully created session: ${sessionRes.TrafficMirrorSession?.TrafficMirrorSessionId}`,
	);
};
