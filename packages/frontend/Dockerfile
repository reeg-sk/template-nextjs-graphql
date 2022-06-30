FROM alpine:latest

RUN apk update && apk upgrade
RUN apk add npm

COPY package.json .
RUN npm install 
COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]