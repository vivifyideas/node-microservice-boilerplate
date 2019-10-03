FROM node:8-alpine

WORKDIR /app
COPY . .
RUN yarn && yarn run build

EXPOSE 3000

CMD ["yarn", "server:prod"]