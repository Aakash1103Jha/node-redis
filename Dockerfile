FROM node:lts-alpine
WORKDIR /usr/app
EXPOSE 4000/tcp
EXPOSE 4001/tcp
EXPOSE 4002/tcp
COPY package*.json .
RUN npm install --legacy-peer-deps
COPY . .
