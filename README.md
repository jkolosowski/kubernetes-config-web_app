# Project

### Version: prod1.0

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