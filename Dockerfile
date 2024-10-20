# Use Node.js image to build the React app
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./

# Install the dependencies
RUN npm install

# Copy the source code into the container
COPY . .

# Build the React app
RUN npm run build

# Use an nginx image to serve the React app
FROM nginx:alpine

# Copy the built React app to the nginx folder
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
