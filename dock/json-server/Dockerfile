FROM node:lts-alpine

RUN apk add --no-cache bash

USER root
RUN npm install

USER node
#CMD [ "npm", "start" ]
EXPOSE 3004