FROM alpine:latest

RUN apk update && apk upgrade
RUN apk add npm

COPY package.json .
RUN npm install 
COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]