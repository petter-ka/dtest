1. docker-local folder : docker-compose environment for local usage
2. services : source codes of the services

- api-backend -> nodejs web tier (web api & router)
- service-dotnet-hello-world -> dotnet worker tier (only inside the docker-compose environment can reach it)
- service-springboot-hello-world -> java springboot worker tier (only inside the docker-compose environment can reach it)

3. builds
```
cd ./api-backend
docker build -t test/api-backend:1.0.0 .
```

```
cd ./service-dotnet-hello-world
docker build -t test/service-dotnet-hello-world:1.0.0 .
```

```
cd ./service-springboot-hello-world
docker build -t test/service-springboot-hello-world:1.0.0 .
```

4. RUN

```
cd ./docker-local
docker-compose up -d
```
