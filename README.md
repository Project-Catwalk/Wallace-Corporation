# FECproject

{
  "name": "wallace-corporation",
  "version": "1.0.0",
  "description": "",
  "main": "webpack.config.js",
  "scripts": {
    "build": "webpack -w",
    "start": "nodemon server/server.js",
    "test": "jest",
    "test-watch": "jest --watch",
    "test-coverage": "jest --coverage --colors"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/FEC-Dream-Team/Wallace-Corporation.git"
  },
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/FEC-Dream-Team/Wallace-Corporation/issues"
  },
  "homepage": "https://github.com/FEC-Dream-Team/Wallace-Corporation#readme",
  "dependencies": {
    "axios": "^0.21.1",
    "express": "^4.15.0",
    "nodemon": "^2.0.4",
    "react": "^17.0.1",
    "react-dom": "^17.0.1"
  },
  "devDependencies": {
    "@babel/cli": "^7.13.0",
    "@babel/core": "^7.13.1",
    "@babel/polyfill": "^7.12.2",
    "@babel/preset-env": "^7.13.5",
    "@babel/preset-react": "^7.12.13",
    "babel-jest": "^26.3.0",
    "babel-loader": "^8.2.2",
    "css-loader": "^5.0.2",
    "eslint": "^7.20.0",
    "eslint-config-airbnb": "^18.2.1",
    "eslint-plugin-import": "^2.22.1",
    "eslint-plugin-jsx-a11y": "^6.4.1",
    "eslint-plugin-react": "^7.22.0",
    "eslint-plugin-react-hooks": "^4.2.0",
    "jest": "^26.4.2",
    "style-loader": "^2.0.0",
    "webpack": "^5.24.1",
    "webpack-cli": "^4.5.0",
    "webpack-dev-server": "^3.11.0"
  }
}

jest.config.js

module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: ['client/src/**/*.{js,jsx,mjs}'],

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'json', 'jsx'],

  // The paths to modules that run some code to configure or set up the testing environment before each test
  setupFiles: ['<rootDir>/enzyme.config.js'],

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',

  // The glob patterns Jest uses to detect test files
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ['\\\\node_modules\\\\'],

  // This option sets the URL for the jsdom environment. It is reflected in properties such as location.href
  testURL: 'http://localhost',

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: ['<rootDir>/node_modules/'],

  // Indicates whether each individual test should be reported during the run
  verbose: false,
};

webpack.config.js

const path = require('path');

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/public');

module.exports = {
  mode: 'development',
  entry: `${SRC_DIR}/index.js`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devtool: 'inline-source-map',
};