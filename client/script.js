"use strict";

var button = document.querySelector('button');

button.addEventListener('click', function () {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:3000/turnomatic');
  xhr.setRequestHeader('Content-Type', 'application/json');
  var DataFromTheClient = {
      "case": "hoodie"
  };
    xhr.send(JSON.stringify(DataFromTheClient));
})
