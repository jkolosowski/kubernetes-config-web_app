# Project

### Version: dev1.0
  
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
