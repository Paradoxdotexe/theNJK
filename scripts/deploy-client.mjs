import { execSync } from 'child_process';

const environments = {
  production: { bucket: 'thenjk.com', distributionId: 'E2MDHOUCA2ZMRY' },
  staging: { bucket: 'staging.thenjk.com', distributionId: 'E66WG2Z0WPUIZ' }
};

const envName = process.argv[2] ?? 'production';
const env = environments[envName];
if (!env) {
  console.error(`Unknown environment "${envName}". Expected one of: ${Object.keys(environments).join(', ')}.`);
  process.exit(1);
}

console.log('Building client...');
execSync('npm run build');

// cloudfront serves from the /dist origin path, not the bucket root
console.log(`Uploading files to S3 (${env.bucket}/dist)...`);
execSync(`aws s3 sync ./dist s3://${env.bucket}/dist`);

console.log('Invalidating cloudfront cache...');
execSync(`aws cloudfront create-invalidation --distribution-id ${env.distributionId} --paths "/*"`);

console.log(`Client deployed to https://${env.bucket}.`);
