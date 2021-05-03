Docker in Details: https://www.docker.com/sites/default/files/d8/2019-09/docker-cheat-sheet.pdf
Basic Docker Commands:

1.  To build the docker image as a container, run the below command in the root folder where Dockerfile exist.
    => docker build .
2.  To run the docker image
    => docker run -p <port>:<exposed_port_specified_in_docker_file> <id>
3.  To list all running containers
    => docker ps
4.  To start docker container
    => docker start <id>
5.  To stop docker container
    => docker stop <id>
6.  To list all the process and containers
    => docker ps -a
7.  To run containers in "Interactive mode"
    => docker run -it <id>
8.  To list all the help commands/options
    => docker --help
    => docker image --help, => docker ps --help and so on for specific option help

- Attached or Detached mode.

9.  use -d to run in detached mode, "docker run -p 3000:3000 -d <id>
10. use attach to run in attached mode, "docker attach <id>
11. To log errors or messages use "logs"
    => docker logs -f <id>
12. Entering into the interactive mode
    => for run command will be, "docker run -it <id>
    => for start command will be, "docker start -a -i <id>

- Removing and renaming images and containers

13. To remove containers which are stopped
    => docker rm <id1> <id2> .... <idn>
14. To list all the images
    => docker images
15. To remove images
    => docker rmi <img_id1> <img_id2> ... <img_idn>
16. To remove all unused images
    => docker image prune
    => docker image prune -a
17. Removing the stopped containers automatically
    => docker run -p <port>:<exposed_port> -d --rm <id>
18. To see the details of the image
    => docker image inspect <img_id>

- Copying files to and from the containers

19. Copy file to container
    => docker cp <from_path> <c_id>:/<to_path>
20. Copy file from container to local
    => docker cp <c_id>:<from_path> <to_path>

- Naming the image and container

21. Assigning the name to the container
    => docker run -p <port>:<exposed_port> --name <name> <c_id>
22. Assign a tag/name to the image, format always should be <name>:<tag> to maintain standards, ex: node:14
    => docker build -t <name>:<tag>
23. To rename image
    => docker tag <old_name>:<old_tag> <new_name>:<new_tag>  
    DockerHub:
24. We can get available docker images from the https://hub.docker.com/
25. To pull the docker image
    => docker pull <img_name>:<tag_name>
26. To push the custom docker image  
     26.1 Sign-In, using "docker login" command then enter username and password
    26.2 Create a repository by providing <name>:<tag>
    26.3 click create
    26.4 docker push <img_name>:<tag_name>
    26.5 docker logout
    For more details: https://docs.docker.com/engine/reference/commandline/docker/
