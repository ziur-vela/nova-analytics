FROM node:22-alpine
WORKDIR /app
COPY . .
RUN npm install --legacy-peer-deps
ENV DATABASE_URL=postgresql://nova:nova@postgres:5432/nova
ENV SKIP_DB_CHECK=true
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
