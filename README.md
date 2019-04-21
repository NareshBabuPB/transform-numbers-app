# Number To Words Convertor - React Application

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

User Interface for the [transform-numbers REST API](https://github.com/NareshBabuPB/transform-numbers-api).

## To run the project:

1. In the project directory, run:
```
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

2. Deploy the app in docker container:

Helpful to quickly test the application without installing Node.js

```
docker run -d --mount src="$(pwd)",target=/src,type=bind -w /src -p 3000:3000 node:11-alpine npm start
```

## To execute test cases:

```
npm test
```

## To build Docker image:

```
docker build -t transform-numbers-app .
```
