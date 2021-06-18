# Projekt

### Wersja: prod1.0

Namespace - `prod`

In production directory:
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

