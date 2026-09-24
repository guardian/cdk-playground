import { GuInfraStackExperimental } from '@guardian/cdk/lib/experimental/constructs/ecr-stack';
import { App } from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';

describe('The cdk-playground ECR stack', () => {
	it('creates an ECR repository and repository-scoped GitHub Actions role', () => {
		const app = new App({ outdir: '/tmp/cdk.out' });
		const stack = new GuInfraStackExperimental(app, 'CdkPlaygroundInfra-CODE', {
			app: 'cdk-playground',
			stack: 'deploy',
			stage: 'CODE',
			cloudFormationStackName: 'deploy-CODE-cdk-playground-infra',
			githubSlug: 'guardian@164318/cdk-playground@361767568',
			riffRaffProjectName: 'devx::cdk-playground',
			env: { region: 'eu-west-1' },
		});
		const template = Template.fromStack(stack);

		template.hasResourceProperties('AWS::ECR::Repository', {
			ImageScanningConfiguration: { ScanOnPush: true },
			ImageTagMutability: 'MUTABLE',
			RepositoryName: 'guardian/cdk-playground/cdk-playground',
			RepositoryPolicyText: {
				Statement: [
					{
						Action: [
							'ecr:BatchCheckLayerAvailability',
							'ecr:BatchGetImage',
							'ecr:GetDownloadUrlForLayer',
						],
						Condition: {
							StringEquals: { 'aws:PrincipalOrgID': 'o-733s9vnx22' },
						},
						Effect: 'Allow',
						Principal: { AWS: '*' },
						Sid: 'AllowOrganisationPull',
					},
				],
			},
		});
		template.hasResource('AWS::ECR::Repository', {
			DeletionPolicy: 'Retain',
			UpdateReplacePolicy: 'Retain',
		});

		template.hasResourceProperties('AWS::IAM::Role', {
			AssumeRolePolicyDocument: {
				Statement: [
					Match.objectLike({
						Action: 'sts:AssumeRoleWithWebIdentity',
						Condition: {
							StringLike: {
								'token.actions.githubusercontent.com:sub':
									'repo:guardian@164318/cdk-playground@361767568:*',
							},
						},
						Effect: 'Allow',
					}),
				],
			},
		});

		template.hasResourceProperties('AWS::IAM::Policy', {
			PolicyDocument: {
				Statement: Match.arrayWith([
					{
						Action: 'ecr:GetAuthorizationToken',
						Effect: 'Allow',
						Resource: '*',
					},
					{
						Action: [
							'ecr:BatchCheckLayerAvailability',
							'ecr:BatchGetImage',
							'ecr:GetDownloadUrlForLayer',
						],
						Effect: 'Allow',
						Resource: 'arn:aws:ecr:*:*:repository/*',
					},
				]),
			},
		});
		template.hasResourceProperties('AWS::IAM::Policy', {
			PolicyDocument: {
				Statement: Match.arrayWith([
					Match.objectLike({
						Action: Match.arrayWith([
							'ecr:GetDownloadUrlForLayer',
							'ecr:PutImage',
						]),
						Effect: 'Allow',
						Resource: {
							'Fn::GetAtt': [
								Match.stringLikeRegexp('PageRunnerRepository'),
								'Arn',
							],
						},
					}),
				]),
			},
		});

		expect(template.toJSON()).toMatchSnapshot();
	});
});
