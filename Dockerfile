FROM node:16-alpine

WORKDIR /home/app

COPY package*.json .

RUN yarn install

COPY . .
