#Dockerfile Front 😊
#1ere etape
FROM node:lts AS builderFront

WORKDIR /client

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY tsconfig.json ./
COPY public public
COPY src src

RUN yarn cache clean --mirror
RUN yarn build

#2eme etape
#utiliser lts si bug avec M1
FROM nginx:alpine AS InstallerFront

COPY --from=builderFront /client/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

