FROM node:12-alpine

WORKDIR /usr/src/app

RUN apk add \
    bash \
    --repository=http://dl-cdn.alpinelinux.org/alpine/edge/main

RUN npm i -g \
        typescript@3.6.4 \
        @nestjs/cli

COPY ./ /usr/src/app

RUN npm install --silent

#COPY ./scripts/docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh

#ENTRYPOINT [ "/usr/local/bin/docker-entrypoint.sh" ]

CMD ["npm","run","start:debug"]
