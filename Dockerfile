FROM node:10.5-alpine
	
# set working directory
RUN mkdir app
WORKDIR app
	
# Override the base log level (info).
ENV NPM_CONFIG_LOGLEVEL warn
	
# Install and configure `serve`.
RUN npm install -g serve
# install and cache app dependencies
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install
	
# Copy all local files into the image.
COPY . .
	
# Build for production.
RUN npm run build --production
	
EXPOSE 5000
CMD serve -s build
