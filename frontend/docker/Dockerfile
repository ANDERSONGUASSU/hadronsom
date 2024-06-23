ARG NODE_VERSION=16.14-alpine

FROM node as client-local-build

ARG APP_HOME=/app

WORKDIR ${APP_HOME}

COPY ./package*.json .

RUN npm install

EXPOSE 3000

COPY . ${APP_HOME}

CMD [ "npm", "start"]