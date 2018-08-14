FROM node:8.10.0

WORKDIR /app
COPY package.json /app

RUN npm install
RUN npm install -g @angular/cli@1.7.1

COPY . /app


EXPOSE 4200
CMD ng serve --host 0.0.0.0
