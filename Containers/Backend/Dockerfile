# backend/Dockerfile

FROM node:18

WORKDIR /app

COPY package.json ./package.json
RUN npm install

COPY . .

EXPOSE 8000

CMD ["node", "app/server.js"]
