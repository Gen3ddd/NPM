1) Create folfer locally
2) Open this created folder in VSCode
3) Open Terminal and run the following code there: nmp install --save-dev jest
4) Create .js file with some function that you want to test
5) Write implementation of that function and make an export of it
6) Create .test.js file where make import of your function
7) Read documentation for Jest framework at: https://jestjs.io/
8) Edit your package.json file and make: "test": "jest" or add {
  "scripts": {
    "test": "jest"
  }
}
9) Write your first simple test and run in via terminal: npm run test

---------------------Coverage--------------------------
1) We are measuring branches coverage, function calls and coverage of  all lines
2) Need to install plugin babel-plugin-istanbul from https://www.npmjs.com/
3) Write tests and run them via terminal: npx jest --coverage