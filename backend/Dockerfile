FROM node:latest

WORKDIR /app-backend

EXPOSE 5000

COPY package*.json ./

RUN npm install

COPY . ./

CMD ["node", "index.js"]