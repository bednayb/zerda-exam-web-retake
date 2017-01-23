"use strict";

var button = document.querySelector('button');
var admin = document.querySelector('#AdminOptions');
var tech = document.querySelector('#TechOptions');
var hoodie = document.querySelector('#HoodieOptions');



button.addEventListener('click', function () {
  var xhr = new XMLHttpRequest();
  console.log(tech.value);
  xhr.open('POST', 'http://localhost:3000/turnomatic');
  xhr.setRequestHeader('Content-Type', 'application/json');
  var DataFromTheClient = {
      "case": "hoodie"
  };
    xhr.send(JSON.stringify(DataFromTheClient));


// xhr.onreadystatechange = function () {
//     if(xhr.readyState === XMLHttpRequest.DONE) {
//       var li = document.createElement('li');
//       li.innerText = xhr.responseText;
//       ul.appendChild(li);
//     }
//   }
})
