# OS
FROM node:20

# Enviroment
ARG BUILD_NODE_ENV
ENV NODE_ENV=${BUILD_NODE_ENV}

# Owner
LABEL key="Developers <dev@rmit.com.br>"
# USER node
# Workdir
WORKDIR /root/workspace

# Install Dependencies
RUN \
  apt-get update && \
  apt-get install curl -y

ENV NODE_OPTIONS=--max-old-space-size=12192

COPY package.json /root/workspace/
RUN npm install --silent
# Build the application
COPY . /root/workspace/
COPY ./.infra/environment.env /root/workspace/.env
RUN npm run build

COPY ./bin/start.sh /root/workspace/bin/start.sh

# Start Application
ENTRYPOINT ["/bin/sh", "/root/workspace/bin/start.sh" ]
