FROM node:18.16.0

WORKDIR /app

COPY package*.json ./

RUN ls
RUN npm install

COPY . .
RUN ls

EXPOSE 3001

CMD ["ls"]
CMD ["npm", "run", "dev"]
