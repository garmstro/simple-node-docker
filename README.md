# Simple Node Docker
A simple project using Express and Docker, illustrating the use of layers in the Docker container to cache the stages of the build process efficiently.

To build the Dockerfile use:

```
docker build -t simple-node-docker .
```

To run the Docker image in a container use:

```
docker run --name hello-world-app -d --rm -p 80:3000 simple-node-docker
```

To run tests inside the Docker container use:

```
docker run --name hello-world-app-tests --rm simple-node-docker npm run test
```
