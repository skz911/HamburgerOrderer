# Dockerfile for client service
FROM node:18 as build-stage

WORKDIR /app

# Copy only the package.json first to leverage Docker's caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install 

# Copy the rest of the source code
COPY . .

# Build the app
RUN npm run build

# Serve the app using nginx
FROM nginx:alpine as production-stage

# Copy the build output to nginx
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
