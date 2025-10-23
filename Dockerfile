# Dockerfile
FROM node:20-alpine
WORKDIR /app
 
# Install only what's needed to run
COPY package*.json ./
RUN npm ci --omit=dev
 
# Copy source
COPY . .
 
ENV NODE_ENV=production
EXPOSE 3000
USER node
CMD ["node", "index.js"]
