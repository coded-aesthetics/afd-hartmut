var express = require('express')
var fs = require('fs')
var app = express()

app.get('/', function (req, res) {
var data = {
    "text": "It's 80 degrees right now.",
    "attachments": [
      {
        "text":"Partly cloudy today and tomorrow"
      }
    ]
  }
  res.json(data);
});

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
 
var server = app.listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", server_port " + port )
});
