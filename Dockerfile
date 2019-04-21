FROM node:11-alpine

# setup working directory
RUN mkdir /transform-numbers-app
WORKDIR /transform-numbers-app

# setup environment path
ENV PATH /transform-numbers-app/node_modules/.bin:$PATH

# copy app source code
COPY . /transform-numbers-app

EXPOSE 3000

# install dependencies
RUN npm install
RUN npm install react-scripts@2.1.8 -g

CMD ["npm", "start"]