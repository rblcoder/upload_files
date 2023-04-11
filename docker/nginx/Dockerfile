FROM node:19-alpine as build

WORKDIR /app/frontend
COPY ./frontend/package.json ./
COPY ./frontend/package-lock.json ./
RUN npm ci --silent
COPY ./frontend/ ./
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /app/frontend/build /usr/share/nginx/html
RUN mkdir -p /app/backend/media
RUN chmod 755 /app/backend/media

CMD ["nginx", "-g", "daemon off;"]