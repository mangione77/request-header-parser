Request Header Parser
======================

# Description

This repo contains an exercise from [FreeCodecamp](https://www.freecodecamp.org/challenges/request-header-parser-microservice) - a request header parser.  

When the user makes a request to the main endpoint, it responds with a JSON object containing the IP, language and O.S of the browser.

## Usage

Just call or enter https://gentle-taiga-82902.herokuapp.com/

### Running it locally

This project is hosted in [Heroku](https://gentle-taiga-82902.herokuapp.com/e) - however you can run it locally by:

- Git cloning this repo:
```bash
git clone https://github.com/mangione77/request-header-parser
```

- _cd_'ing into it and running:
```bash
npm install
```

- Then:
```bash
node server/index
```

#### Dependencies

```js
  "dependencies": {
    "dotenv": "^4.0.0",
    "express": "^4.16.2"
  }
```


