FROM node:alpine as build 

# set working directory
# this is the working folder in the container from which the app
# will be running from
WORKDIR /app


# add the node_modules folder to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# copy package.json file to /app directory for installation prep
COPY ./package.json /app/

# install dependencies
RUN yarn --silent

# copy everything to /app directory
COPY . /app

# build the app 
RUN yarn build

# STAGE 2 - build the final image using a nginx web server 
# distribution and copy the react build files
FROM --platform=linux/amd64 nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# needed this to make React Router work properly 
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

# Expose port 80 for HTTP Traffic 
EXPOSE 80

# start the nginx web server
CMD ["nginx", "-g", "daemon off;"]