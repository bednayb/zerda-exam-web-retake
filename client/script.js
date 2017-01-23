"use strict";

var button = document.querySelector('button');
var admin = document.querySelector('#AdminOptions');
var tech = document.querySelector('#TechOptions');
var hoodie = document.querySelector('#HoodieOptions');
var select = document.querySelector('#select');
var ul = document.querySelector('#result');

button.addEventListener('click', function () {
  console.log(select.value);
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:3000/turnomatic');
  xhr.setRequestHeader('Content-Type', 'application/json');
  var DataFromTheClient = {
      "case":select.value
  };
  xhr.onreadystatechange = function () {
    if(xhr.readyState === XMLHttpRequest.DONE) {
      var li = document.createElement('li');
      li.innerText = xhr.responseText;
      ul.appendChild(li);
    }
  };
    xhr.send(JSON.stringify(DataFromTheClient));

})
