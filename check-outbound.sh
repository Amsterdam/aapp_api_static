#!/bin/bash

printf ">> https://firebase.google.com\n\nResponse: \n"
curl -I https://firebase.google.com | egrep -i '^HTTP*' 

printf ">> https://www.googleapis.com\n\nResponse: \n"
curl -I https://www.googleapis.com | egrep -i '^HTTP*' 

printf ">> https://securetoken.google.com\n\nResponse: \n"
curl -I https://securetoken.google.com | egrep -i '^HTTP*' 

printf ">> https://session.firebase.google.com\n\nResponse: \n"
curl -I https://session.firebase.google.com | egrep -i '^HTTP*' 

printf ">> https://identitytoolkit.googleapis.com\n\nResponse: \n"
curl -I https://identitytoolkit.googleapis.com | egrep -i '^HTTP*' 

printf ">> https://firebaseappcheck.googleapis.com\n\nResponse: \n"
curl -I https://firebaseappcheck.googleapis.com | egrep -i '^HTTP*' 

printf ">> https://googleapis.dev\n\nResponse: \n"
curl -I https://googleapis.dev | egrep -i '^HTTP*' 

printf ">> https://console.firebase.google.com\n\nResponse: \n"
curl -I https://console.firebase.google.com | egrep -i '^HTTP*' 

printf ">> https://fcm.googleapis.com\n\nResponse: \n"
curl -I https://fcm.googleapis.com | egrep -i '^HTTP*' 

printf ">> https://iid.googleapis.com\n\nResponse: \n"
curl -I https://iid.googleapis.com | egrep -i '^HTTP*' 

printf ">> https://firebase.googleapis.com\n\nResponse: \n"
curl -I https://firebase.googleapis.com | egrep -i '^HTTP*' 

printf ">> https://wachttijdenamsterdam.nl\n\nResponse: \n"
curl -I https://wachttijdenamsterdam.nl | egrep -i '^HTTP*' 

printf ">> https://www.amsterdam.nl\n\nResponse: \n"
curl -I https://www.amsterdam.nl | egrep -i '^HTTP*' 

printf ">> https://api.data.amsterdam.nl\n\nResponse: \n"
curl -I https://api.data.amsterdam.nl | egrep -i '^HTTP*' 

printf ">> https://www.amsterdam.nl\n\nResponse: \n"
curl -I https://www.amsterdam.nl | egrep -i '^HTTP*' 