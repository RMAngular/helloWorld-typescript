This is the second demo in a series on how to refactor your AngularJS 1.x application to apply concepts and technologies that will be at the core of AngularJS 2.x. The first demo (https://github.com/briebugconsulting/helloWorld) refactored John Papa's Hot Towel project so that it was broken into smaller components (since Angular 2 will not have controllers and applications will use a component-based design). This second demo takes that refactored helloWorld application and implements it in TypeScript instead of JavaScript.

The Angular 2.0 code base is being written entirely in TypeScript. Though you will be able to use JavaScript, Dart, CoffeeScript, etc to build Angular 2 applications, there are good reasons why you should learn and use TypeScript, not the least of which is that you'll be able to read and understand the Angular 2 source code and use that as a basis for creating your Angular 2 app. This demo will be presented alongside a slide deck that talks about the features and benefits of TypeScript, why you should consider using it, and how to get started with it.

## Installation

1. Install [Node.js](http://nodejs.org)
 - on OSX use [homebrew](http://brew.sh) `brew install node`
 - on Windows use [chocolatey](https://chocolatey.org/) `choco install nodejs`

2. Install these NPM packages globally

    ```bash
    npm install -g bower gulp nodemon typescript tsd
    ```

3. Install project dependencies (execute from project's root folder)

    ```bash
    npm install
    bower install
    ```

4. Run application (execute from project's root folder)

    ```bash
    gulp serve-dev
    ```
