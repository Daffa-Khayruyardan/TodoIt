FROM node:latest

WORKDIR /todoit-server 

COPY package*.json ./

RUN npm install 

COPY . . 

ENV PORT=3000

EXPOSE 3000

CMD [ "npm", "run", "serve" ]