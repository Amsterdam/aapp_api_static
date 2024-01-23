# Introduction 
This service runs on the root of the fqdn en provides information about the Amsterdam App in a static index.html which is served by nginx.
It is also the endpoint where the S-AKS health check goes to so if this service isn't running, all other deployed services acn not be deployed because of a failing health check unless the health check url is defined otherwise in de service Helm chart.


# Build and Test
Build: make build
Test: make test

