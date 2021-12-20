FROM node:14

WORKDIR /docker-app-back

COPY ["package.json", "yarn.lock", "/docker-app-back/"]

COPY ./ /docker-app-back/

RUN yarn install

CMD ["yarn", "start"]