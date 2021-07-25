# theNJK

Personal portfolio website of Nathan J Klingensmith.

A [Vue 3](https://v3.vuejs.org/) framework was used to generate the current version of this website.
Previously, [Angular 10](https://angular.io/) was used but that framework has since been deprecated to the `graveyard/angular` branch.

## Setup

To run the website, install the required dependencies and serve it to a local port.

```
npm install
npm run serve
```

## Cleaning

This command will lint and format the codebase using [Prettier](https://prettier.io/docs/en/index.html).

```
npm run clean
```

## Deployment

After building, build artifacts will be located in the `/dist` folder.
These artifacts should be uploaded to an S3 bucket on AWS for deployment.

```
npm run build
```
