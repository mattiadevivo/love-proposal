FROM node:20-slim

RUN apt update  && apt install -y --no-install-recommends \
    apt-transport-https ca-certificates curl less lsof \
    git openssh-client procps \
    python3 build-essential \ 
    sudo
RUN npm install -g pnpm@9.x.x

WORKDIR /app


ARG USERNAME=node

# Create the user
RUN echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME

USER $USERNAME