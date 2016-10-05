var express = require('express');
var request = require('request');
var os = require('os');
var morgan = require('morgan');

var app = express();

app.use(morgan('combined'));

var serviceEndPoint = process.env.SERVICE_ENDPOINT;


app.get('/', function (req, res) {
  if (serviceEndPoint) {
    request(serviceEndPoint, function (error, response, body) {
      if (!error) {

        message = JSON.parse(body);
        message.frontend = os.hostname();
        res.send(message);
      } else {
        res.send({error: `ERROR ${error} received from ${serviceEndPoint}`});
      }
    });
  } else {
    res.send('SERVICE_ENDPOINT is not configured');
  }
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});