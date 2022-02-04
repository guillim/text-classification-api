<p align="center">
  <a href="https://cloud.google.com/natural-language/docs" target="blank"><img src="https://www.springml.com/wp-content/uploads/2018/08/image3-1-1024x354.png" width="320" alt="Nest Logo" /></a>
</p>


  <p align="center">A backend in <a href="http://nodejs.org" target="_blank">Node.js</a> using the  <a href="https://github.com/nestjs/nest">NestJS</a> framework for simple, efficient and scalable server-side call to google natural language API</p>
    <p align="center"></p>

## Description
Once you have deployed to Google AutoML you model, you have only one option to use it : a manual
```sh
curl -X POST \
  -H "Authorization: Bearer $(gcloud auth application-default print-access-token)" \
  -H "Content-Type: application/json" \
  https://automl.googleapis.com/v1/projects/blabalbal/locations/us-central1/models/balbabla:predict \
  -d @request.json
```

Which is a bit short for letting others use you model in a safe way. This repo will fix this by enabeling you to have a service account credentials easy to use, and protected by an api key you will define in the environment variables.

## Installation

```bash
$ npm install
```

## Configuration
- create and download your service account credential [here](https://console.cloud.google.com/iam-admin/serviceaccounts) and save them as `credentials_google.json`
- create your `.env` file (see example [here](./.env-example)) 
- I think you also need to enable API services [here](https://console.cloud.google.com/apis/)
## Running the app

```bash
# watch mode (:dev is optional)
$ npm run start:dev

# production mode
$ npm run start:prod
```

Then go to [localhost:3000](http://localhost:3000/) to make sure it works.  
Then use Postman or equivalent to send your query following this format :
```bash
curl -X POST 'http://localhost:3000??apikey=789wwwwwwwwwwwwwwwwwc3' \
--header 'Content-Type: application/json' \
--data-raw '{ "keyword" : "baby" }'
```
and you shall get this result :
```json
[
  {"result":[
    {"label":"Maman","score":0.9997223019599915},
    {"label":"Quotidien","score":0.8091112971305847},
    {"label":"Sante de maman","score":0.21270699799060822},
    {"label":"Garde d enfants","score":0.0847746729850769},
    {"label":"Baby Blues","score":0.05502203479409218}]
  }
]  
```

## Author 
[guillim](https://guillim.github.io)

## License

[MIT licensed](LICENSE).
