FROM node:14.15.4
WORKDIR /table
ENV PATH /table/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@4.0.2 -g --silent
COPY . ./
CMD ["npm", "start"]
