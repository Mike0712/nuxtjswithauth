FROM node:lts-alpine

RUN apk add --no-cache bash

USER root
RUN npm install -g create-nuxt-app

USER node
EXPOSE 3000