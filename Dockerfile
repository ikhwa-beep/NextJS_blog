from node:19.5.0-alpine as builder

WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . . 
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]

