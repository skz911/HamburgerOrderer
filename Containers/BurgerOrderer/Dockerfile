# Base stage for building the client application
FROM node:18-alpine as build-stage

# Install necessary packages for compiling gifsicle and other tools
RUN apk add --no-cache bash curl autoconf automake libtool build-base zlib-dev libpng-dev nasm 

# Set environment variables for security and consistency
ENV NODE_ENV=production
ENV PATH=/app/node_modules/.bin:$PATH

# Set the working directory to /app
WORKDIR /app

# Copy only the package.json and package-lock.json to install dependencies first
COPY package.json package-lock.json ./

# Install all dependencies, including devDependencies
RUN npm ci

# Copy the rest of the source code to the container
COPY . .

# Build the app in production mode
RUN npm run build

# Stage for serving the application using a minimal Nginx image
FROM nginx:alpine as production-stage

# Ensure the system packages are up-to-date
RUN apk add --no-cache bash curl

# Security: Remove the default server tokens in Nginx for security reasons
RUN sed -i 's/server_tokens on;/server_tokens off;/' /etc/nginx/nginx.conf

# Copy the built files from the build stage to the Nginx web directory
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Copy a custom Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Expose the necessary port (default HTTP port)
EXPOSE 80

# Set environment variables for security and performance
ENV NGINX_ENTRYPOINT_QUIET_LOGS=1
ENV CLIENT_MAX_BODY_SIZE=16M

# Healthcheck to ensure the Nginx service is running
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s CMD curl --fail http://localhost:80 || exit 1

# Run Nginx in the foreground to keep the container running
CMD ["nginx", "-g", "daemon off;"]
