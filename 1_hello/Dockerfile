FROM node:alpine

LABEL maintainer="Kevin \"covaloper@gmail.com\""

EXPOSE 8000

WORKDIR /opt/app-root/src

COPY hello.js .
COPY package*.json .

RUN npm install

EXPOSE 8000
CMD ["npm", "start"]