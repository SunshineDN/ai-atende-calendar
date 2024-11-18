FROM node:22.4.0

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install serve -g

COPY . .

RUN npm run build

EXPOSE 8000

CMD [ "npm", "run", "dev" ]