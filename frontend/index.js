var express = require('express');
var request = require('request');
var app = express();

var serviceEndPoint = process.env.SERVICE_ENDPOINT;


app.get('/', function (req, res) {
  if (serviceEndPoint) {
    request(serviceEndPoint, function (error, response, body) {
      if (!error) {
        res.send(`${body} received from ${serviceEndPoint}`);
      } else {
        res.send(`ERROR ${error} received from ${serviceEndPoint}`);
      }
    });
  } else {
    res.send('SERVICE_ENDPOINT is not configured');
  }
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});