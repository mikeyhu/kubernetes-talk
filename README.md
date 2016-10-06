# Kubernetes Talk Demonstrations

Demonstrations from my talk on Kubernetes.

## Demo 1

```
cd backend
# build the backend app
go build

# run the backend app locally
./backend


# build linux executable
env GOOS=linux go build

# build and push to docker hub
docker build . -t mikeyhu/k8s-backend:0.1.0
docker push mikeyhu/k8s-backend:0.1.0

# create backend in Kubernetes cluster
cd ..
kubectl create -f config/backend-deploy.yml

# execute sh in a running pod
kubectl exec -it POD_NAME sh

# port forwrd to a running pod
kubectl port-forward POD_NAME 9090

# delete a pod
kubectl delete pod POD_NAME

# scale a replica set
kubectl scale deployment go-backend-deployment --replicas=3

```

## Demo 2

```
# create service pointing to backend pods
kubectl create -f config/backend-service.yml

# show service is load balanced over pods
kubectl describe service go-backend-service

# rescale the replica sets 
kubectl scale deployment go-backend-deployment --replicas=2

# the service now points to just the running pods
kubectl describe service go-backend-service

# build and push frontend
cd frontend
docker build . -t mikeyhu/k8s-frontend:0.1.0
docker push mikeyhu/k8s-frontend:0.1.0


# deploy frontend-deploy and frontend-service files
kubectl create -f config/frontend-deploy.yml -f config/frontend-service.yml

kubectl describe service node-frontend-service
```


## Demo 3

```
cd backend

# ERROR - this builds an Mac executable and puts it in a linux cluster
go build
docker build . -t mikeyhu/k8s-backend:0.2.0
docker push mikeyhu/k8s-backend:0.2.0

kubectl replace -f config/backend-deploy.yml
# see some errors and crash backoff

# undo rollout
kubectl rollout undo deployment go-backend-deployment

# build linux exutable and deploy
env GOOS=linux go build
docker build . -t mikeyhu/k8s-backend:0.2.1
docker push mikeyhu/k8s-backend:0.2.1

kubectl replace -f config/backend-deploy.yml
```

## Other commands

```
# display information about running deployments, pods and services
./display-kubectl.sh

# find the frontend service and then poll it
./poll-frontend.sh
```