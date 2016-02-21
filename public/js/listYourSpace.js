'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected! - listYourSpace.js");

	$("#entireHomeBtn").unbind().click(entireHomeClicked);
	$("#privateRoomBtn").unbind().click(privateRoomClicked);
}

function entireHomeClicked(e){
	var housingType = 'entire';
	localStorage.setItem('type', housingType);
	$("#entireHomePanel").slideToggle("slowly");

}

function privateRoomClicked(e){
	var housingType = 'private';
	localStorage.setItem('type', housingType);
	$("#privateRoomPanel").slideToggle("slowly");
}