FROM node:8.11.1
WORKDIR /work
COPY backend .
RUN npm install
EXPOSE 4000
CMD ["node", "server.js"]
