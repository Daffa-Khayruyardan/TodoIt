FROM node:18-alpine

WORKDIR /todoit-server 

COPY package*.json ./

RUN npm install 

COPY . . 

EXPOSE 3000

CMD [ "npm", "run", "serve" ]