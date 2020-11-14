# Project Title

Beginning Webpack using Babel

## Getting Started

Webpack take modules(our own programms, extern App)
and generate statics assets represent thoses modules.
(prog1, prog 2) => assets for js
(images 1 ...) => assets for png
(css ...) => assets for js

Babel is a compiler that new feature of Javascript
(ES6, ES7) and bring them down to ES5

### Prerequisites

Basic knoledge of JavaScript & NPM

### Installing

- Install node.js
- Create a standart package.json (npm init -y)
- configure package.json
  Exemple
  "scripts": {
  "start": "webpack --watch",
  }

- Add dependencies like
  babel, webpack , webpack-cli
  npm install

## Deployment

configure the webpack.config.js to set the /dist
and /src

## Built With

npm start or npm run build

## Authors

- **Alain Kamgue**
  https://github.com/alain-kaal

## Acknowledgments

- Maximilian Schwarzmüller (Academind)
  https://academind.com/learn/webpack/webpack-2-the-basics/
  https://www.youtube.com/c/Academind/featured
