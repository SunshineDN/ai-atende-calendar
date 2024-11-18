FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install serve -g

COPY . .

RUN npm run build

EXPOSE 8000

CMD [ "npm", "run", "dev" ]