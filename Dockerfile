FROM node:14.16.1-alpine

RUN apk update && \
    apk add git \
    util-linux \
    autoconf \
    make \
    gcc \
    g++ \
    automake \
    libtool \
    pkgconf \
    nasm \
    python3

WORKDIR /app
