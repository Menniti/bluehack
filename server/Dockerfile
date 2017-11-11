FROM node:9.1.0-alpine

LABEL Author="Keuller Magalhaes <keuller.magalhaes@gmail.com>"
LABEL Author="Luiz Otavio <luiz.otavio.aquino.menniti@gmail.com>"

RUN mkdir /nefro-health

WORKDIR /nefro-health

ADD node_modules ./node_modules
ADD src .

EXPOSE 5000

ENTRYPOINT [ "node", "index.js" ]
