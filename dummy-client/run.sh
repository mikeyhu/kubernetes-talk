#!/usr/bin/env bash

FRONTEND_URL=http://${NODE_FRONTEND_SERVICE_SERVICE_HOST}:${NODE_FRONTEND_SERVICE_SERVICE_PORT}/
while sleep 2;
do
  curl -w "\t\t($(date +'%T'))\n" $FRONTEND_URL
done