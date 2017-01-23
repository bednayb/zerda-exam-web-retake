'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var validator = require('./numberify.js');
var app = express();

var con = mysql.createConnection({
  host: "localhost",
  user: "'root'",
  password: "admin",
  database: "jsretake"
});

// ***** CHECK the MYSQL Connection *****
  con.connect(function(err){
  if(err){
  console.log("Error connecting to Db", err);
  return;
  }
  console.log("Connection established");
  });
// MYSQL



app.use(bodyParser.json());
app.use(express.static('client'));

app.post('/turnomatic', function (req, res) {
  if(true){
  var data = {
    "status":"ok",
    "number":req.body.case
  };
}else{
  data ={
    "status": "error",
    "message": "server error, please find a member of staff to get your number"
  }
}
// put data to sql
  con.query('INSERT INTO cases (case_type) VALUES(?)', [req.body.case], function(err, rows) {
      if (err) throw err;
  });

  // Send back
  var responseFromTheServer = data;
  res.status(200).send(JSON.stringify(responseFromTheServer));
});




app.listen(3000);
