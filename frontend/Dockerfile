# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first (to use Docker cache)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire frontend app (including public/index.html)
COPY . .

# Expose frontend port
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]
