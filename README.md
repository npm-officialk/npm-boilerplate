# NPM template

This is a pre-configured template repository to help you quickly get started with developing npm/yarn packages

[![Documentation site](https://img.shields.io/static/v1?style=for-the-badge&label=%20&message=documentation&color=blue&logo=readthedocs&logoColor=white)](https://npm.officialk.dev/package)
[![Coverage info site](https://img.shields.io/static/v1?style=for-the-badge&label=%20&message=coverage&color=red&logo=jest&logoColor=white)](https://test.officialk.dev/package)

**NPM**

[![NPM version](https://img.shields.io/npm/v/@officialk/template-npm-package?style=for-the-badge)](https://npmjs.org/package/@officialk/template-npm-package)
![NPM size](https://img.shields.io/bundlephobia/min/@officialk/template-npm-package?style=for-the-badge)
![NPM vunerabilities](https://img.shields.io/snyk/vulnerabilities/npm/@officialk/template-npm-package?style=for-the-badge)

**GitHub**

[![GitHub License](https://img.shields.io/github/license/officialk/template-npm-package?style=for-the-badge)](https://github.com/officialk/template-npm-package/README.md)
[![GitHub issues](https://img.shields.io/github/issues/officialk/codelays?style=for-the-badge)](https://github.com/officialk/npm-template/issues/)
[![GitHub PRs](https://img.shields.io/github/issues-pr/officialk/codelays?style=for-the-badge)](https://github.com/officialk/npm-template/pulls/)
[![GitHub Milestones](https://img.shields.io/github/milestones/all/officialk/codelays?style=for-the-badge)](https://github.com/officialk/npm-template/milestones/)
![GitHub Sponsors](https://img.shields.io/github/sponsors/officialk?style=for-the-badge)

## Installation

the project was built and tested using the yarn package manager.
so to set up the project please run the following

```cmd
yarn setup
```

this will ask you a bunch of questions that will help you setup up your project quickly

## Usage

Refer to [INSTALL](./INSTALL.md)

## Tools

this section explains the various files, tools and folders in the template.

### yarn

[`documentation`](https://yarnpkg.com/getting-started)

used to run and manage the dependencies and workings of the template

### typescript

[`documentation`](https://www.typescriptlang.org/docs/)

used for developing consistent JS code with typescript types and rules, configured with `tsconfig.json` that generate the output in `./dist` folder and then minified using `minify-all-js` module.

### nodemon

[`documentation`](https://github.com/remy/nodemon#nodemon)

used to watch js/ts files and run the given command for ease of development, configured in `nodemon.json`.

### prettier

[`documentation`](https://prettier.io/docs/en/configuration.html)

used for code formatting to maintain consistency across commits, configured with `.prettierrc` and uses the `.prettierignore` to ignore formatting files and folders.

### eslint

[`documentation`](https://eslint.org/docs/latest/use/configure/)

used for maintaining code quality, configured with `.eslintrc` and uses the `.eslintignore` to ignore files and folders.

### jest

[`documentation`](https://jestjs.io/docs/configuration)

used for code coverage and testing that is configured with `./jest.config.js` the coverage data is generated into `./coverage` folder.

### jsdoc + betterdocs

[`jsdoc documentation`](https://jsdoc.app/about-getting-started.html)
[`betterdocs documentation`](https://www.npmjs.com/package/better-docs?activeTab=readme)

used to generate documentation that is already written in the code using the jsdoc module cofigured with `jsdoc.json` the output is generated in `./docs` folder.

### snyk

[`documentation`](https://www.npmjs.com/package/snyk)

used to check vunerabilities in package dependencies and code configured in `.snyk`

### Others

#### http-server

[`documentation`](https://www.npmjs.com/package/http-server)

used to serve the static html files in `documentation`, `coverage`,`QA`, etc

#### lint-staged

[`documentation`](https://www.npmjs.com/package/lint-staged)

used to format and check code quality of the staged files, configured in `.lintstagedrc`

#### commitizen

[`documentation`](https://www.npmjs.com/package/commitizen)

helps create conventional commits, configured in `.czrc`

#### commitlint

[`documentation`](https://www.npmjs.com/package/commitlint)

used to lint the created commit, configured with `.commitlintrc`

#### husky

[`documentation`](https://www.npmjs.com/package/husky)

used to add git hooks to let the dev check commit validity before pushing

#### semantic-release

[`documentation`](https://www.npmjs.com/package/semantic-release)

used to create releases with the help of conventional commits

#### github-label-sync

[`documentation`](https://www.npmjs.com/package/github-label-sync)

used to create better integrated labels in the github repository, configured in `.github/labels.json`

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Some files to refer

-   [CONTRIBUTING](.github/CONTRIBUTING.md)
-   [CODE_OF_CONDUCT](.github/CODE_OF_CONDUCT.md)

Please make sure to update tests as appropriate.

## License

[LICENSE](./LICENSE)
