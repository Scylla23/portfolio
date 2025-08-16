# Stage 1 - Build stage
FROM node:18-alpine AS build

WORKDIR /app

# copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# COPY rest of the source code
COPY . . 

# Convert TS -> JS
RUN npm run build

# Stage 2: Serve the application using Nginx
FROM nginx:stable-alpine

# COPY the build files from build stage the nginx 
COPY --from=build /app/dist /usr/share/nginx/html

# copy custom nginx config file
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

# start nginx when the container launches
CMD [ "nginx", "-g", "daemon off;" ]

