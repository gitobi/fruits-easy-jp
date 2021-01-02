FROM node:10.23.0-alpine

RUN apk update && \
    apk add git util-linux

WORKDIR /app
