FROM node:10.16.3
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .
RUN npm run build
ENV SERVER_BASE_URL http://todo-server:3001/api/item
EXPOSE 3000
CMD [ "npm", "start" ]
