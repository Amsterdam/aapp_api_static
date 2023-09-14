# helm-application
Contact deployment with helm

# Check manifests
helm template aapp-static ./manifests/chart  -f ./manifests/values.yaml -f ./manifests/env/dev.yaml
