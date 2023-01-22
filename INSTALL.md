# Installation

_the project commands are made to be used along with the yarn package manager but if you want to use it with npm please replace `yarn` with `npm run` so that the scripts don't break_

## Commands

### **Server commands**

commands used to start servers for development

**start build server**

Runs the `node` server which serves the `./dist/index.js` file

_this will also run a `prestart` command which builds the ts code to the dist folder_

```
yarn start
```

**start the dev server**

Runs the `nodemon` server which serves the `./src/index.ts` file

```
yarn start:dev
```

**run the test server**

Runs the `jest` command with `--watchAll` flag and concurrently opens the browser serving the `coverage/lcov-report/` folder

_this will also run a `poststart:test` command which deletes the `coverage` folder after execution_

```
yarn start:test
```

**run the Documentation server**

Builds the `jsdoc` documentation in the `prestart:docs` and then starts a server pointing to `docs` folder

_this will also run a `poststart:docs` command which deletes the `docs` folder after execution_

```
yarn start:docs
```

**run a http server**

runs a `http-server` pointing to the mentioned folder and port

_by default will server the index file in the folder_

```
yarn start:server -p <port> <folderPath>
```

---

### **Patching and fixing commands**

commands for devs to cleanup code and its quality,etc

**fix formatting in code**

runs `prettier` to fix and apply formatting as per `.prettierrc` config file

```
yarn fix:format
```

**fix quality of code**

runs `eslint` with the `--fix` flag to try and fix the quality of code in `src` folder as per the mentioned config in `.eslintrc` file

```
yarn fix:lint
```

**fix vunerability of code**

runs `snyk fix` to try and fix any code vunerability

```
yarn fix:fortify
```

**fix vunerability of dependency**

runs `yarn audit` to try and fix any package dependency vunerabilities

```
yarn fix:audit
```

---

### **Build commands**

commands for building final outputs

**build `dist` folder only**

remove the `dist` folder before building the new one and then runs `tsc` to build the output as per configuration in `tsconfig.json` file

```
yarn build:dist
```

**build `docs` folder only**

remove the `docs` folder before building the new one and then runs `jsdoc` to build the output as per configuration in `jsdoc.json` file

```
yarn build:docs
```

**minify `dist` folder**

run `minify-all-js` for the `dist` folder

```
yarn build:minify
```

**build production output**

run the `build:docs` and `build:dist` commands and then minify the files in `dist` folders

```
yarn build
```

---

### **Check commands**

commands for verifying and checking if the code is in acceptable range

**check formatting**

check with `prettier` if the code is in the format mentioned in the `.prettierrc`

```
yarn check:format
```

**check lint**

check with `eslint` if the code is in the acceptable quality as mentioned in the `.esintrc`

```
yarn check:lint
```

**check tests**

run `jest` to check if all tests mentioned in `jest.config.js` are passing

```
yarn check:test
```

**check coverage**

run `jest` to check if all tests are passing and have coverage more than that configured in `jest.confic.js`

_also builds the `coverage` folder_

```
yarn check:coverage
```

**check vunerability**

run `snyk` to check for vunerabilities in code

```
yarn check:vunerability
```

**check license**

run `snyk` to check for license issues

```
yarn check:license
```

**check dependency vunerability**

run `yarn audit` on the dependencies to check for dependecy vunerabilities

_also run `snyk monitor` in postscript to report to snyk_

```
yarn check:audit
```

**check everything**

an easy way to run all the checks mentioned above

```
yarn check:all
```

---

### **Other commands**

these are commands that run in the background(mostly) and do not require your intervention

**create conventional commit**

**!!! IMPORTANT !!!**

**to be used instead of `git commit` as it gives you an easier way to create conventional commits**

```
yarn commit
```

**run lint on staged**

run `lint-staged` on the staged files as per `.lintstagedrc` file

_used in husky/precommit_

```
yarn lint-staged
```

**run release**

run `semantic-release` as per `.releaserc` file
_needs a CI env to run properly, even though you can try a dry run from local_

```
yarn release
```

---
