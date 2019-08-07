FROM ubuntu:14.04.5

MAINTAINER Aldo Funes, aldo.funes@bmgtech.io

RUN mkdir /home/app

COPY . /home/app

# Do basic updates
RUN apt-get update -q && apt-get upgrade -y && apt-get clean

# Get curl in order to download curl
RUN apt-get install curl python build-essential -y \

  # Install Meteor
  && (curl https://install.meteor.com/ | sh) \

  # Build the Meteor app
  && cd /home/app \
  && meteor build --directory .. \

  # Install the version of Node.js we need.
  && cd /home/bundle \
  && bash -c 'curl "https://nodejs.org/dist/$(<.node_version.txt)/node-$(<.node_version.txt)-linux-x64.tar.gz" > /home/required-node-linux-x64.tar.gz' \
  && cd /usr/local && tar --strip-components 1 -xzf /home/required-node-linux-x64.tar.gz \
  && rm /home/required-node-linux-x64.tar.gz \

  # Build the NPM packages needed for build
  && cd /home/bundle/programs/server \
  && npm install \

  # Get rid of Meteor. We're done with it.
  && rm /usr/local/bin/meteor \
  && rm -rf ~/.meteor \

  #no longer need curl
  && apt-get --purge autoremove curl python build-essential -y

EXPOSE 80
ENV PORT 80

CMD ["node", "/home/bundle/main.js"]
