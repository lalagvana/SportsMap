#!/usr/bin/env sh

echo "${OAUTH}" | docker login --username oauth --password-stdin cr.yandex

docker build ../ -t cr.yandex/${REGISTRY_ID}/sportsmap:v${VERSION} -f ../Dockerfile

docker push cr.yandex/${REGISTRY_ID}/sportsmap:v${VERSION}