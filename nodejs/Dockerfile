FROM mhart/alpine-node:6.7.0

WORKDIR /src
ADD . .

RUN npm install

EXPOSE 3000
CMD ["node", "index.js"]