# Step 1: Base Image
FROM node:18-alpine AS base

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy application files
COPY . .

# Step 2: Build the Application
FROM base AS builder

# Build the Next.js application
RUN npm run build

# Step 3: Production Image
FROM node:18-alpine AS production

# Set working directory
WORKDIR /app

# Copy build artifacts from the builder stage
COPY --from=builder /app ./
COPY --from=builder /app/.next ./.next

# Install only production dependencies
RUN npm ci --only=production

# Expose the port your app runs on
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]