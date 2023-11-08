<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# MODE DEVLOMENT

1. clone repository
2. run
```
yarn isntall 
```
3. Nest CLI - `required`
```
 npm i -g @nestjs/cli
```
4. run database
```
docker-compose up -d
```
5. restart db with seed (type: POST)
```
http://localhost:3000/api/v2/seed 
```