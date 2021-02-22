# API Testing

This is a practice project for API Testing in NodeJS. It uses Mocha, Chai and Axios.

## The tested API

**{JSON}Placeholder** is a simple API that allows us to upload and read jokes.
You can found the documentation [here](https://sv443.net/jokeapi/v2/#info).

## Test Scenario

### GET Jokes
The goal is to certify we can read jokes, uploading a joke, and verifying then that is possible to read it.

#### Test Cases
 - POST a single type joke Correctly (OK).
 - POST a two part joke Correctly (OK).
 - POST a joke with no valid request.
 - GET a random joke.
 - GET a random joke of a specific category.

## Execution
Simple ¯\_(ツ)_/¯

    npm run test
