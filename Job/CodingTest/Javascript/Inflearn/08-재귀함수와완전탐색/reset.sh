#!/bin/bash

# 스크립트 사용법
if [ $# -ne 2 ]; then
  echo "Usage: $0 <service> <tag>"
  echo "Example: $0 vpc latest"
  exit 1
fi

SERVICE=$1
TAG=$2

SRC_REGISTRY="cr.undercloud.io"
DEST_REGISTRY="cr.k9etool.io"
IMAGE_PATH="kic/console"

SRC_IMAGE="${SRC_REGISTRY}/${IMAGE_PATH}/${SERVICE}:${TAG}"
DEST_IMAGE="${DEST_REGISTRY}/${IMAGE_PATH}/${SERVICE}:${TAG}"

echo "Pulling from ${SRC_IMAGE}..."
docker pull "${SRC_IMAGE}" || { echo "❌ Failed to pull source image"; exit 1; }

echo "Tagging image to ${DEST_IMAGE}..."
docker tag "${SRC_IMAGE}" "${DEST_IMAGE}" || { echo "❌ Failed to tag image"; exit 1; }

echo "Pushing to ${DEST_IMAGE}..."
docker push "${DEST_IMAGE}" || { echo "❌ Failed to push image"; exit 1; }

echo "🧹 Cleaning up local images..."
docker rmi "${SRC_IMAGE}" || echo "⚠️ Failed to remove ${SRC_IMAGE}"
docker rmi "${DEST_IMAGE}" || echo "⚠️ Failed to remove ${DEST_IMAGE}"

echo "✅ Image successfully transferred from ${SRC_IMAGE} to ${DEST_IMAGE}"
~