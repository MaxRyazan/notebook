FROM node:latest

WORKDIR /app-backend

EXPOSE 8085

COPY package*.json ./

RUN npm install

COPY . ./

CMD ["node", "index.js"]