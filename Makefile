.PHONY: manifests deploy

UID:=$(shell id --user)
GID:=$(shell id --group)

dc = docker-compose
run = $(dc) run --rm -u ${UID}:${GID}

ENVIRONMENT ?= local
HELM_ARGS = oci://${REGISTRY}/amsterdam/helm-generic-application --version 1.12.1 \
	-f manifests/values.yaml \
	-f manifests/env/${ENVIRONMENT}.yaml \
	--set image.tag=${VERSION}

REGISTRY ?= localhost:5000
REPOSITORY ?= Amsterdam-App/aapp-static
VERSION ?= latest

build:
	$(dc) build

test:
	echo "No tests available"

push:
	$(dc) push

# Moved to aapp_infra_deployments
manifests:
	@helm template static $(HELM_ARGS) $(ARGS)

# Moved to aapp_infra_deployments
deploy: manifests
	helm upgrade --install static $(HELM_ARGS) $(ARGS)

clean:
	$(dc) down -v --remove-orphans	