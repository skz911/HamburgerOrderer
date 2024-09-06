# client-frontend/Dockerfile

# Use a Node.js image
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Build the app for production
RUN npm run build

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
