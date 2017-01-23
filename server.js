'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var validator = require('./numberify.js');
var app = express();

app.use(bodyParser.json());
app.use(express.static('client'));

app.post('/turnomatic', function (req, res) {
  var data = req.body.case;

  // Send back
  var responseFromTheServer = data;
  res.status(200).send(JSON.stringify(responseFromTheServer));
});




app.listen(3000);
