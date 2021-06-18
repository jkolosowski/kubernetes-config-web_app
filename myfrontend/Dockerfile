FROM node:alpine AS builder
WORKDIR /opt/myfrontend
COPY ./package.json ./
RUN npm install
COPY . .
RUN ["npm", "run", "build"]

FROM nginx:alpine
COPY --from=builder /opt/myfrontend/build /usr/share/nginx/html
EXPOSE 80