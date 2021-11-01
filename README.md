# Detox Demo

This is a project demonstrating E2E testing on React Native using Detox.

```sh
# build and test for ios
yarn
detox build -c ios
detox test -c ios

# build and test for android
yarn
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
