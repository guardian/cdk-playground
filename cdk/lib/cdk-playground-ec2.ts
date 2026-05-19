import { AccessScope } from '@guardian/cdk/lib/constants';
import { GuStack, type GuStackProps } from '@guardian/cdk/lib/constructs/core';
import { GuLoadBalancedAppExperimental } from '@guardian/cdk/lib/experimental/patterns/gu-load-balanced-app';
import type { App } from 'aws-cdk-lib';
import type { CfnResource } from 'aws-cdk-lib';
import { CfnInclude } from 'aws-cdk-lib/cloudformation-include';

interface CdkPlaygroundEc2Props extends Omit<GuStackProps, 'stack' | 'stage'> {
	/**
	 * Which image to run.
	 * This should be the image digest (e.g. 'sha256:abc123') to ensure immutable deployments.
	 *
	 * @see https://docs.docker.com/dhi/core-concepts/digests
	 */
	imageIdentifier: string;
}

export class CdkPlaygroundEc2 extends GuStack {
	constructor(scope: App, id: string, props: CdkPlaygroundEc2Props) {
		super(scope, id, {
			...props,
			stack: 'deploy',
			stage: 'CODE',
			env: { region: 'eu-west-1' },
		});
		const yamlStack = new CfnInclude(this, 'Template', {
			templateFile: '../ec2-app.yaml',
		});
		const { imageIdentifier } = props;

		const ec2AppDomainName = 'cdk-playground.code.dev-gutools.co.uk';

		const ec2App = 'cdk-playground';

		const ecsPattern = new GuLoadBalancedAppExperimental(this, {
			applicationPort: 9000,
			app: ec2App,
			access: { scope: AccessScope.PUBLIC },
			certificateProps: {
				domainName: ec2AppDomainName,
			},
			monitoringConfiguration: { noMonitoring: true },
			ecsProps: {
				cpu: 1024,
				imageIdentifier,
				memoryLimitMiB: 2048,
				repositoryName: 'guardian/cdk-playground',
				scaling: { minimumTasks: 1, maximumTasks: 10 },
			},
		});

		const newListenerAsCfn = ecsPattern.listener.node
			.defaultChild as CfnResource;

		const dnsRecord = yamlStack.getResource('DNS');
		dnsRecord.addPropertyOverride('ResourceRecords', [
			ecsPattern.loadBalancer.loadBalancerDnsName,
		]);

		// We need the old listener to update first so that the ECS target group can be linked to the new listener (a target
		// group can't be associated with 2 load balancers at once).
		newListenerAsCfn.addDependency(yamlStack.getResource('Listener'));
		// And we need the new listener to be ready (i.e. to be routing traffic to the ECS target group) before we update DNS
		// and start sending traffic to it.
		dnsRecord.addDependency(newListenerAsCfn);
	}
}
