FROM node:18-alpine AS build 

WORKDIR /todoit-server 

COPY package*.json ./

RUN npm install --only=production

COPY . . 

FROM node:18-alpine AS production

WORKDIR /todoit-server 

COPY --from=build /todoit-server .

EXPOSE 3000

CMD [ "npm", "run", "serve" ]