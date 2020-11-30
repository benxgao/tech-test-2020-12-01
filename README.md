# First AML Front End Technical Test

Xingbin Ben Gao - 01/12/2020

Time: 9am - 11am

## Plan

- Complete task 1 in well written code;
- Leave potential solutions for the future;

## Technical Solution

- Technical stack - React, Redux-saga
- Repository template - Based on [personal side project](https://github.com/benxgao/practice-react-saga)

## Potential solution in real world

- development/production environment config


## Get started in development mode

```bash
# Commandline window 1:
docker pull firstaml/horse-test:latest
docker run -p 3016:3016 firstaml/horse-test:latest

# Commandline window 2:
cd [repo folder]
yarn
yarn start

# Launch application in browser
http://localhost:8080
```

## Testing

```bash
# Run unit test
yarn test

# Run unit test with coverage report
yarn test --coverage

# Run unit test with hot refreshing
yarn test --watch
```

