'use strict'

// document.addEventListener("DOMContentLoaded", function(event) { 
//   var app = document.getElementById('app');
//   var button = document.getElementById('btn')
	
// 	button.onclick = function() {
// 	  document.getElementById('app').innerHTML = 'Hey There';
// 	}
// });

function NoteController(noteList) {
	this._noteList = noteList;
};

NoteController.prototype.add = function(note) {
	this._noteList = note
};
