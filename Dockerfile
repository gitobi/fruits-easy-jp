FROM node:12.20.0-alpine

RUN apk update && \
    apk add git util-linux

WORKDIR /app
