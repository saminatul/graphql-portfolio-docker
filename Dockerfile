# Use the official Node.js 18.16.0 image as a base
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (if exists)
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy all remaining files from the host to the working directory in the container
COPY . .

# Expose port 4000 for the application
EXPOSE 4000

# Command to run the application
CMD ["node", "src/server.js"]
