'use strict'

document.addEventListener("DOMContentLoaded", function(event) { 
  var app = document.getElementById('app');
  var button = document.getElementById('btn')
	
	button.onclick = function() {
	  document.getElementById('app').innerHTML = 'Hey There';
	}
});


