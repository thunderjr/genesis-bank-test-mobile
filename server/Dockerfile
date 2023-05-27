FROM node:18-alpine
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn
COPY . .
EXPOSE 3333
CMD yarn docker