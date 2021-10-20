# Welcome, a fellow developer, I'm glad you are here!

Please, put the solution on GitHub and send the link back via email.
Enjoy!

# The day to day task: weather forecast

Using the free open weather map two API endpoints (the key is on the weather service)
https://openweathermap.org/api/one-call-api
https://openweathermap.org/api/geocoding-api

-   Build an application that allows you to search the weather forecast hourly or daily for a city.
-   The UI has a search box and two filter options, `hourly` and `daily`, and a table.
-   When a new city is searched, we need first to get its coordinates using `http://api.openweathermap.org/geo/1.0/direct?q={city name}&limit=1&appid={API key}` and then for the hourly mode make a call to `https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude=current,minutely,daily,alerts&appid={API key}`, and for the daily mode `https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude=current,minutely,hourly,alerts&appid={API key}` and add it to a city table.
-   When no city is found, we should reflect it.
-   The city table has a column`City Name`, and the rest are temperature columns. In the case of hourly mode, 8 columns with 3-hour step and in the case of daily mode 7 days.
-   Switching between hourly and daily modes should bring back the previous state of the table before switching.
-   The URL should be updated according to the search query and mode. That is two parameters on the URL.
-   Build the application using NgRx.
-   SOLID, DRY, shouldn't be just abbreviations for you. It should be designed to be maintainable to an extent.
-   Tests are not necessary.
-   Please use repositories formatting.

# This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Powerful, Extensible Dev Tools**

## Quick Start & Documentation

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/angular/getting-started/what-is-nx)

[Interactive Tutorial](https://nx.dev/angular/tutorial/01-create-application)

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

-   [Angular](https://angular.io)
    -   `ng add @nrwl/angular`
-   [React](https://reactjs.org)
    -   `ng add @nrwl/react`
-   Web (no framework frontends)
    -   `ng add @nrwl/web`
-   [Nest](https://nestjs.com)
    -   `ng add @nrwl/nest`
-   [Express](https://expressjs.com)
    -   `ng add @nrwl/express`
-   [Node](https://nodejs.org)
    -   `ng add @nrwl/node`

There are also many [community plugins](https://nx.dev/nx-community) you could add.

## Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@bp/mylib`.

## Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.

## ☁ Nx Cloud

### Computation Memoization in the Cloud

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.
