/*
This is a little helper to run a lambda locally.

It purposefully does only one thing to keep it simple.
 */

import type { CloudformationEvent } from './types';
import { main } from './index';

export const sampleCloudformationEvent: CloudformationEvent = {
	version: '0',
	id: 'unknown',
	'detail-type': 'CloudFormation Resource Status Change',
	source: 'aws.cloudformation',
	account: '000000000000',
	time: '2024-08-24T11:38:34Z',
	region: 'eu-west-1',
	resources: [
		'arn:aws:cloudformation:eu-west-1:000000000000:stack/playground-CODE-basic-asg-rolling-update/000000-000000',
	],
	detail: {
		'stack-id':
			'arn:aws:cloudformation:eu-west-1:000000000000:stack/playground-CODE-basic-asg-rolling-update/000000-000000',
		'logical-resource-id': 'AutoScalingGroupBasicASG123',
		'physical-resource-id':
			'playground-CODE-basic-asg-rolling-update-AutoScalingGroupBasicASG123-ABC',
		'resource-type': 'AWS::AutoScaling::AutoScalingGroup',
		'status-details': {
			status: 'UPDATE_IN_PROGRESS',
			'detailed-status': '',
			'status-reason':
				'New instance(s) added to autoscaling group - Waiting on 5 resource signal(s) with a timeout of PT5M.',
		},
	},
};

void main(sampleCloudformationEvent);
