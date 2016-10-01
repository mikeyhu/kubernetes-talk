#!/usr/bin/env bash

FRONTEND_URL=$(kubectl get svc node-frontend-service -o jsonpath="http://{.status.loadBalancer.ingress[].hostname}:{.spec.ports[0].port}/")
while sleep 2;
do
  curl -w "\t\t($(date +'%T'))\n" $FRONTEND_URL
done