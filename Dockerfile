FROM node:23

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm i
