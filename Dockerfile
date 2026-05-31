# FROM node:20.20.0
# WORKDIR /app
# COPY ./package*.json ./
# RUN npm install
# COPY . .
# EXPOSE 5000
# CMD [ "npm","start" ]



FROM node:24-alpine
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 5600
CMD [ "npm","run","dev" ]