.PHONY: manifests deploy

UID:=$(shell id --user)
GID:=$(shell id --group)

dc = docker-compose
run = $(dc) run --rm -u ${UID}:${GID}

ENVIRONMENT ?= local
HELM_ARGS = oci://${REGISTRY}/amsterdam/helm-generic-application --version 1.10.1 \
	-f manifests/values.yaml \
	-f manifests/env/${ENVIRONMENT}.yaml \
	--set image.tag=${VERSION}

REGISTRY ?= localhost:5000
REPOSITORY ?= Amsterdam-App/aapp-static
VERSION ?= latest

build:
	$(dc) build

test:
	#$(run) test pytest --junitxml=junit-results.xml --cov=. --cov-report=xml /app/tests/$(APP) $(ARGS)
	echo "No tests available"

push:
	$(dc) push

manifests:
	@helm template static $(HELM_ARGS) $(ARGS)

deploy: manifests
	helm upgrade --install static $(HELM_ARGS) $(ARGS)

clean:
	$(dc) down -v --remove-orphans	