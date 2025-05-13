# node-cli-starter

## Scripts and their explanation

All scripts can be found inside the package.json file under the "scripts"
attribute.

- `yarn bundle` -> Bundles the whole code into a single javascript file which
  will be stored inside the dist folder. For prod deployments you typically just
  copy this file somewhere and then run something like `node --enable-source-maps
./index.js`.
- `yarn clean` -> Removes bundled files by deleting the dist folder. Normally
  there is no need to invoke this manually.
- `yarn compile` -> Runs the typescript compiler against the typescript
  codebase. Displays any errors if they occur.
- `yarn compile:watch` -> Runs the typescript compiler every time you make
  changes to a file. It is good to open this in another terminal while
  developing to spot typescript issues.
- `yarn dev` -> This should be used for running the code while developing. It
  watches all changes you make to your typescript codebase and automatically
  rebuilds the project. It does also watch all changes made to the built project
  and restarts the code whenever changes are detected. This enables a quick
  feedback loop. You can pass args via `-- --args`, e.g `yarn dev -- --hello World`.
- `yarn debug` -> Starts the app in debugging mode. Waits for a debugger to
  attach. See Debugging below for more info.
  - If you want to restart the debugging process every time you change the code,
    you can use something like `nodemon --watch src --watch test --ext ts,json
--exec 'yarn debug'` or when debugging tests with `nodemon --watch src --watch
test --ext ts,json --exec 'yarn debug:test'`
- `yarn debug:test` -> Starts the test run in debugging mode. Waits for a
  debugger to attach. See Debugging below for more info.
- `yarn format` -> Formats the code using prettier.
- `yarn format:check` -> Checks for formatting errors using prettier. This is
  typically only invoked by the CI/CD pipeline.
- `yarn lint` -> Lints the code using eslint. Fixes problems that are
  auto-fixable and reports the rest of them to you.
- `yarn lint:check` -> Checks for linting errors using eslint. This is typically
  only invoked by the CI/CD pipeline.
- `yarn start` -> Runs the code. This only works if the code was bundled before ;).
- `yarn test` -> Tests your codebase. Basic tests are created for both major
  common approaches of putting tests beside the source code as well as putting
  tests in a separate folder.
  - You can inspect the code coverage in depth by running `npx http-server
./coverage/lcov-report` and then browsing http://localhost:8080.

## Debugging

An enourmous amount of people default to `console log debugging` since
understanding the setup for debugging typescript can be somewhat awful and
painful. This repo provides a debug config and guide ready to use for
[vscode](git@github.com:microsoft/vscode.git) and for vim using
[vimspector](https://github.com/puremourning/vimspector). Both use the mostly
DAP compliant debugger
[vscode-js-debug](https://github.com/microsoft/vscode-js-debug).

### Debugging Code

There are somewhat "different" ways of starting the debugger. Once is by
starting the app and waiting for a debugger to connect and the other one is
starting the app initiated by the debugger. I made the experience that the
former works on any given code base, no matter the amount of transipilation or
bundling steps and custom steups while the latter does fail in extremely
customized scenarios. Therefore here only the first one is covered with
examples.

- Run `yarn debug` in another terminal
- Open src/index.ts `vim ./src/index.ts` (or code ./src/index.ts) in another terminal.
- Set breakpoint somewhere in the file at the console log (F9 is the default mapping).
- Start by pressing F5
- Press F5 again, should see the console.log output
- Done🎉

### Debugging Tests

- Run `yarn debug:test` in another terminal
- Open src/index.ts `vim ./src/hello.test.ts` in another terminal.
- Set breakpoint in the line of the console log in the test file.
- Start by pressing F5 (then skip the jest internal file once with F5)
- Check the terminal where you ran `yarn debug:test`, it should not display the console log yet.
- Press F5 again, should see the console.log output there now.
- Done🎉
