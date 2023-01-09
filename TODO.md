# Project and repo setup

Heya👋, Now that you have created this repo from the template,

Here is a 📋list of things to quikly get you started 🚀.

Lets develop your next big npm package ❤️

## Things to keep handy

### Github Token

-   Sign in to your github account
-   Click on your account logo > Settings > Developer settings > Personal access tokens > Tokens (classic)
-   Click on Generate new token > Generate new token (classic)

permissions needed

-   repo
-   workflow
-   packages(if publishing to Github packages)

used for

-   setup the github repo
-   sets the github secret
-   push changes to the repo

### NPM Token

-   Sign in to your npm account
-   Click on your account logo > Access Tokens
-   Click on Generate New Token > Classic token (classic)

permissions needed

-   Automation

used for

-   publish npm packages

### Snyk Token

-   Sign in to your snyk account
-   Click on your account logo > Account settings
-   Click on Auth Token(click to show) and copy

permissions needed - N/A

used for

-   code vunerability testing
-   package dependancy vunerability testing
-   License testing

## Setup the repo and project

-   [ ] Go to the Settings tab of this repository
    -   [ ] click on Actions > General
    -   [ ] go to Workflow permissions and ensure the permission is set on Read and write permissions
-   [ ] Go to the Actions tab of this repository
-   [ ] click on the first setup action
-   [ ] click on 'Run workflow'
-   [ ] fill in the needed details properly
-   [ ] let the workflow complete and you are all set🥳

`if the workflow fails at any point, please check if you have the proper permissions enabled and after waiting a while re-run jobs > only failed ones`
if the issue still persists please [create an bug/question issue in the template repository](https://github.com/officialk/npm-template/issues/new/choose)

# ❗️❗️❗️❗️ IMPORTANT ❗️❗️❗️❗️

1. The template is setup with open source development in mind
   which means that the repository may need to be public for some features to properly work

2. Currently, the semantic release fails if any protecctions are set on the branches.

# Finally

Thank you a ton for using this template to make your next big npm package

❤️ 🧡 💛 💚 💙 💜 🖤 🤍 🤎
