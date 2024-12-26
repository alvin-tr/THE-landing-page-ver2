FROM node:20.17.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ARG MODE   

EXPOSE 3000

RUN npm run build-${MODE}
CMD [ "npm", "run", "start" ]