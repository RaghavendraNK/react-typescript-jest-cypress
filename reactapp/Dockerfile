# This is the base node image, which we require for running our react application 
# doing installation of packages
FROM node:14

# Set the container root directory
WORKDIR /app

# Copy the package.json to container directory, where . points to /app (which we mentioned above)
COPY package.json .

# To install dependency packages
RUN npm install

# Copy the rest of the files into working directory (i.e., /app)
COPY . .

# Publishing the application into this port, when its get started
EXPOSE 3000

# Command to run the application, we can refer the package.json 'scripts' here like below 
CMD [ "npm", "start" ]