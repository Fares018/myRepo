FROM node:alpine
COPY . /app
WORKDIR /app
CMD node express_server.js