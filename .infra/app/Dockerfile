# OS
FROM node:12-slim

# Owner
LABEL key="Developers <dev@rmit.com.br>"

# Timezone
RUN ln -snf "/usr/share/zoneinfo/${TZ}" "/etc/localtime"
RUN echo "${TZ}" > "/etc/timezone"
RUN dpkg-reconfigure -f noninteractive tzdata

# workdir
WORKDIR /root/workspace

COPY ./ /root/workspace

# Start Application
ENTRYPOINT ["bin/sh" , "root/workspace/bin/start.sh"]