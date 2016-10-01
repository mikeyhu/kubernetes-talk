#!/usr/bin/env bash
watch -t -n2 'echo "== $(date)" && echo "== Deployments ==" && kubectl get deployments && echo "== Pods ==" && kubectl get pods && echo "== Services ==" && kubectl get svc'