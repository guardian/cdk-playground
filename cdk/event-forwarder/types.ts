import type { EventBridgeEvent } from 'aws-lambda';

export type CloudformationEvent = EventBridgeEvent<
	string,
	{
		'stack-id': string;
		'logical-resource-id': string;
		'physical-resource-id': string;
		'resource-type': string;
		'status-details': {
			status: string;
			'detailed-status': string;
			'status-reason': string;
			[additional: string]: string;
		};
	}
>;

export type AutoscalingEvent = EventBridgeEvent<
	string,
	{
		StatusCode: string;
		AutoScalingGroupName: string;
		ActivityId: string;
		Details: Record<string, unknown>;
		RequestId: string;
		EndTime: string;
		EC2InstanceId: string;
		StartTime: string;
		Cause: string;
	}
>;

export type HydratedEvent = (CloudformationEvent | AutoscalingEvent) & {
	cloudformationStackName: string;
};
