jest.mock('@guardian/cdk/lib/constants/tracking-tag');

process.env.GITHUB_RUN_NUMBER = 'TEST';
process.env.GITHUB_SHA = 'TEST';
