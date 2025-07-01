# SocialHumourFe

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.15.

## Development server

### Local Development

To start a local development server that is only accessible from your machine, run:

```bash
npm run start:local
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

### Network Access

To make the application accessible from other devices on your network, run:

```bash
npm run start
```

This will start the server with the host set to `0.0.0.0`, allowing connections from any IP address on your network. To access the application from another device:

1. Find your computer's IP address on the network (e.g., 192.168.1.100)
2. On the other device, open a browser and navigate to `http://YOUR_IP_ADDRESS:4200/` (e.g., http://192.168.1.100:4200/)

### Public Access

If you need to access the application from different domains or through a reverse proxy, use:

```bash
npm run start:public
```

This disables the host check, which can be useful in certain deployment scenarios.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
