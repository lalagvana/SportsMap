#!/usr/bin/env sh

echo "${TOKEN}" | docker login --username oauth --password-stdin cr.yandex

docker build ../ -t cr.yandex/${REGISTRY_ID}/sportsmap-backend -f ../Dockerfile

docker push cr.yandex/${REGISTRY_ID}/sportsmap