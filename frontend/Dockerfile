# Use Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy files
COPY package.json ./
COPY src ./src

# Install dependencies
RUN npm install

# Copy the entire frontend app (including public/index.html)
COPY . .

# Expose frontend port
EXPOSE 3000

# Start React app
CMD ["npm", "start"]
