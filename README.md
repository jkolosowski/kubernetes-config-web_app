# DevOps project

Simple web app with Kubernetes configuration - final project for University course called Cloud Technologies.

### App description

Simple CRUD operations on songs - create, read, update and delete song.
- Create - button on left side of home page of app (you can provide title, artist, album and release date of song)
- Read - if there are songs added, on home page songs are displayed in tiles
- Update - each tile consist edit button - simple click extends view to edit particular song
- Delete - each tile have X button on right upper corner, after pressing it the song will be deleted

There is also like functionality, every song can be loved by simply pressing love icon (bordered heart with white inside - unliked, red heart - liked)

### How to run

There are two versions of app - Development and Production ones.

#### Dev version:
Firstly, you need to specify Your path to Persistent Volume -> go to *development* directory
-> open *pv-local.yml* file -> `spec` -> `hostPath` -> `path` -> type Your path in `' '`
(for dev and prod versions the location should be different)

Secondly, create development namespace in terminal:
`kubectl create namespace dev`

In *development* directory simply type commands in terminal:
1. `kubectl apply -f pv-local.yml -n dev`
2. `kubectl apply -f mymongo-pvc.yml -n dev`
3. `kubectl apply -f mymongo-clusterip.yml -n dev`
4. `kubectl apply -f mymongo-configMap.yml -n dev`
5. `kubectl apply -f mymongo-deployment.yml -n dev`
6. `kubectl apply -f myredis-clusterip.yml -n dev`
7. `kubectl apply -f myredis-deployment.yml -n dev`
8. `kubectl apply -f mybackend-clusterip.yml -n dev`
9. `kubectl apply -f mybackend-deployment.yml -n dev`
10. `kubectl apply -f myfrontend-clusterip.yml -n dev`
11. `kubectl apply -f myfrontend-deployment.yml -n dev`
12. `kubectl apply -f mybackend-ingress-service.yml -n dev`
13. `kubectl apply -f myfrontend-ingress-service.yml -n dev`

After this you can open the browser and see the app on address:
`dev.127-0-0-1.sslip.io`

You can also see restAPI created:
- for songs: `dev.127-0-0-1.sslip.io/api/songs`
- for hearts: `dev.127-0-0-1.sslip.io/api/hearts`

#### Prod version:
Firstly, you need to specify Your path to Persistent Volume -> go to *production* directory
-> open *pv-local.yml* file -> `spec` -> `hostPath` -> `path` -> type Your path in `' '`
(for dev and prod versions the location should be different)

Secondly, create production namespace in terminal:
`kubectl create namespace prod`

In *production* directory simply type commands in terminal:
1. `kubectl apply -f pv-local.yml -n prod`
2. `kubectl apply -f mymongo-pvc.yml -n prod`
3. `kubectl apply -f mymongo-clusterip.yml -n prod`
4. `kubectl apply -f mymongo-configMap.yml -n prod`
5. `kubectl apply -f mymongo-deployment.yml -n prod`
6. `kubectl apply -f myredis-clusterip.yml -n prod`
7. `kubectl apply -f myredis-deployment.yml -n prod`
8. `kubectl apply -f mybackend-clusterip.yml -n prod`
9. `kubectl apply -f mybackend-deployment.yml -n prod`
10. `kubectl apply -f myfrontend-clusterip.yml -n prod`
11. `kubectl apply -f myfrontend-deployment.yml -n prod`
12. `kubectl apply -f mybackend-ingress-service.yml -n prod`
13. `kubectl apply -f myfrontend-ingress-service.yml -n prod`

After this you can open the browser and see the app on address:
`prod.127-0-0-1.sslip.io`

You can also see restAPI created:
- for songs: `prod.127-0-0-1.sslip.io/api/songs`
- for hearts: `prod.127-0-0-1.sslip.io/api/hearts`

### Technologies

- React
- Redux
- Bulma.io
- React Router
- Express
- MongoDB
- Redis
- Express
- Docker
- kubernetes

### Functionality

Two versions of the app are downloaded from my Docker Hub repositories:
- dev:
  - kolosowski/devops-project-backend:dev1.0
  - kolosowski/devops-project-frontend:dev1.0
- prod:
  - kolosowski/devops-project-backend:prod1.0
  - kolosowski/devops-project-frontend:prod1.0
  
<br>MongoDB database ensures data persistence. </br>
Capacity available - 20Mi, but for the app - 10Mi.
<br>Frontend and also backend provides two replicas for each - certainty of scalability
and also once having multiple instances of an Application running, we would be able 
to do Rolling updates without downtime.</br>
App is available from Ingress for each version (you can run dev and prod version simultaneously)

### Development | Production
In repository there are created branches, which reflect versions of the app.
<br>__Latest version__: 1.0</br>

