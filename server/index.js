'use strict'

/******************* INIT DEPENDENCIES *********************/

// Main server dependencies
let express = require('express');
let path = require('path');
let bodyparser = require('body-parser');
let request = require('request');
require('dotenv').config();

/******************* INIT MIDDLEWARE ***********************/

let app = express();
app.use(express.static(__dirname + '/../client/public'));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyparser.json());

/********************* INIT ROUTES *************************/

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../client/public/index.html'));
});

let options = {
  url: 'http://127.0.0.1:8000/play',
  body: {'message': 'okay'},
  json: true,
  method: 'GET'
}

// request(options, (err, response, body) => {
//   if (err) {
//     throw err;
//   }

//   console.log('body: ');

//   console.log(body);
// });

/********************* INIT SERVER *************************/

let port = process.env.PORT || 3000;
let server = app.listen(port, () => {
  console.log('Listening on port', port);
});