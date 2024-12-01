# Use the official Node.js image
FROM node:14

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend files
COPY . .

# Expose the port on which the frontend will run
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]
