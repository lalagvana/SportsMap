#!/usr/bin/env sh

echo "${OAUTH}" | docker login --username oauth --password-stdin cr.yandex

docker build ./SFASUI -t cr.yandex/${REGISTRY_ID}/sportsmap:v${VERSION}

docker push cr.yandex/${REGISTRY_ID}/sportsmap:v${VERSION}