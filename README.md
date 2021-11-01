# Detox Demo

This is a project demonstrating E2E testing on React Native using Detox.

## Installing

After cloning the project, open a terminal and install the dependencies. Then, launch the metro server and keep the terminal open (this is needed to run the detox tests).

```sh
# install dependencies and start metro server
yarn
yarn start
```

## Running the e2e tests

Open a different terminal and run the tests (for iOS you might need to open the ios workspace in XCode and configure a Team in Signing & Capabilities menu):

```sh
# build and test for ios
detox build -c ios
detox test -c ios

# build and test for android
detox build -c android
detox test -c android
```

## Taking screenshots

Screenshots can be stored in the `artifacts` folder, by default `./artifacts` from the root of the project. This folder can be changed running the `detox` CLI commands with the param `--artifacts-location <path>`.

There are 2 ways of taking screenshots:

- Manually in your test description

  - From the whole device screen, adding a statement like `const imagePath = await device.takeScreenshot('screenshot-name');`

  - From a single element, adding a statement like `const imagePath = await element(by.id('element-id')).takeScreenshot('screenshot-name');`

- Globally at the start and end of each test, using the `--take-screenshots all`
