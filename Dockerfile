#Dockerfile Front 😊
FROM node:lts

WORKDIR /client
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
COPY tsconfig.json ./
COPY public public
COPY src src

CMD yarn start