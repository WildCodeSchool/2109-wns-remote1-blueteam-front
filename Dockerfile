#Dockerfile Front 😊
FROM node:lts-alpine

WORKDIR /client
COPY package.json ./
RUN yarn install
COPY tsconfig.json tsconfig.json
COPY public public
COPY src src

CMD npm start