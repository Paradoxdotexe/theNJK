# theNJK

Personal portfolio website of Nathan J Klingensmith.

A [Vue 3](https://v3.vuejs.org/) framework was used to generate the current version of this website.
Previously, [Angular 10](https://angular.io/) was used but that framework has since been deprecated to the `graveyard/angular` branch.

## Setup

To run the website, install the required dependencies and serve it to a local port.

```
npm install
npm run dev
```

## Cleaning

This command will lint and format the codebase using [Prettier](https://prettier.io/docs/en/index.html).

```
npm run fix
```

## Deployment

The deploy scripts build the site, sync `/dist` to its S3 bucket, and invalidate the CloudFront cache.
They require the [AWS CLI](https://aws.amazon.com/cli/) to be installed and authenticated.

```
npm run deploy          # https://thenjk.com
npm run deploy:staging  # https://staging.thenjk.com
```

To build without deploying, run `npm run build`; the artifacts will be located in the `/dist` folder.
