FROM node:19-alpine

COPY package.json /myapp/
COPY app.js /myapp/

WORKDIR /myapp

RUN npm install

CMD ["node", "app.js"]
