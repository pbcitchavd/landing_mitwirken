# Docker
dokcer image
```
docker build -t mitwirken-api .                                       
```

dokcer container
```
docker run -name mitwirken-api-container -p 8080:8000 mitwirken-api                                        
```

# Docker-Compose
[url](https://github.com/compose-spec/compose-spec/blob/master/build.md#build-definition)

```
build:
  context: .
  dockerfile: webapp.Dockerfile
```


### Project 

```
server: pbcinvolvement
ip:
docker: docker-compose -f docker-compose_prod.yml -p mitwirken_eu_laendig up --build -d

```