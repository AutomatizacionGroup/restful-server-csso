FROM node:12.13.0-alpine
# - this app listens on port 3001
EXPOSE 3001
# - then it should use alpine package manager to install tini: 'apk add --update tini'
RUN apk add --update tini
# - then it should create directory /usr/src/app for app files with 'mkdir -p /usr/src/app'
RUN mkdir -p /usr/src/app
# - Node uses a "package manager", so it needs to copy in package.json file
WORKDIR /usr/src/app
COPY package.json package.json
# - then it needs to run 'npm install' to install dependencies from that file
RUN npm install && npm cache clean --force
# - to keep it clean and small, run 'npm cache clean --force' after above
# - then it needs to copy in all files from current directory
COPY . .
# - then it needs to start container with command '/sbin/tini -- node ./server/server.js'
CMD ["tini", "--", "node", "./server/server.js"]
# - in the end you should be using FROM, RUN, WORKDIR, COPY, EXPOSE, and CMD commands