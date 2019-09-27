# Bulma Project
This is a simple pack with all needed dependencies in order to build a front end project using Bulma framework.

## Install
Download ZIP and unpack content into a new project folder.  
Run `npm install` to download all dependencies.

## Modify CSS
In order to modify styles, open `./src/mystyles.scss`, there you will find and be able to change Bulma's standard color schemes as well as work with specific variables for each element, more information on that can be found in [Bulma's Documentation](https://bulma.io/documentation/).  
Other custom CSS can be added at the bottom of the file and may use [Sass](https://sass-lang.com/guide).

## JavaScript
Create all JS files as needed inside the `./src` directory, export the functions and import them in `./src/index.js`.
As a good practice, make each file just `export default` a single function.

## Webpack
This project uses [Webpack](https://webpack.js.org/) to bundle.  
After each change in the code, it is required to run `npx webpack` to apply changes to the distribution, optionally you can run `npx webpack --watch` or `npm run watch` (as specified in `./package.json`, because "watch" is a npm safe word, "run" must be included) so webpack keeps track automatically whenever the file is saved.  

## Distribution
Files to send for distribution can be found in `./dist` folder.

## Git Ignore
After installing all dependencies, a folder called `node_modules` is created, this can get quite large and is not good to have it added to git commits, therefore a `.gitignore` file containing this folder is added to the project.  
If other people need to pull your work, all they got to do is `npm install` and all dependencies will be downloaded locally.