# Use an official Node.js runtime as a base image
FROM Node:20

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the .env file to the working directory
COPY .env ./

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the application files to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 6700

# Define the command to run your application
CMD ["npm", "run", "start"]
