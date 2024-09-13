From node:14.17.5
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
copy . .
EXPOSE 3000
CMD ["node", "app.js"]
