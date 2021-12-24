FROM node:17

WORKDIR /app

COPY package.json ./

RUN yarn

COPY ./ ./

EXPOSE 3000:3000

CMD ["yarn", "dev"]
