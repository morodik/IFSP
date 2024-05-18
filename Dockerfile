FROM node:17-alpine

WORKDIR /ПП

COPY package.json /ПП

RUN npm install

COPY . .

EXPOSE 3000

VOLUME [ "/data" ]

CMD ["npm", "start"]

