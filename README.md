# Task Manager UI (totally not ripping off windows)

### Locally
Install and build  
```
npm i
npm run build
```
Run with  
```
npm start
```

Dev with hot-reloading  
```
npm run dev
```

### With Docker
First create a new network with  
```
docker network create todo
```  
  
Build the image  
```
docker build -t todo-ui .
```  
  
Run container and connect to the network  
```
docker run -itd --network=todo -d -p 3000:3000 --name todo-ui todo-ui
```
  
Do the same for the server [here](https://github.com/JonnyLoo/todo-server/blob/master/README.md)
