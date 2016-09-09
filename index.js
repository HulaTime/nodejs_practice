'use strict'

var noteController = new NoteController();

noteController.add('Favourite Drink: Seltzer');

window.setTimeout(function(){
	document.getElementById('app').innerHTML = noteController._noteList;
}, 3000);
