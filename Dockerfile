FROM node:14.15.3-alpine

RUN apk update && \
    apk add git util-linux

WORKDIR /app
