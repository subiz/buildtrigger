# before run test you have to get gcp credential
### have access to cloud function
make sure the local has all the environment variables on cloud function (GCP_KEY)
### dont have access to cloud function
1. create key for service account `buildtrigger`,
2. base64 encode the private key using javascript `btoa()` function
```btoa("-----BEGIN PRIVATE KEY-----\nMII123456\n-----END PRIVATE KEY------")```
3. export GCP_KEY=base64keyoutput
