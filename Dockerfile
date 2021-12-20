FROM node:14

WORKDIR /docker-app-back

ENV DATABASE_URL=mongodb+srv://juan:clave255@mintic.h73sp.mongodb.net/CICLO4?retryWrites=true&w=majority

COPY ["package.json", "yarn.lock", "/docker-app-back/"]

COPY ./ /docker-app-back/

RUN yarn install

CMD ["yarn", "start"]