FROM node:10.15.1-alpine

RUN apk update && \
    apk add git util-linux

WORKDIR /app
