FROM node:18-alpine

WORKDIR /todoit-client

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build 

RUN npm install -g serve

EXPOSE 5000

CMD ["serve", "-s", "dist", "-l", "5000"]