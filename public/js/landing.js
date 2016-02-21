'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected! - landing.js");

	if(typeof userLoggedIn === 'undefined'){
		console.log("userLoggedIn is not defined yet")
    	var userLoggedIn = false;
    	localStorage.setItem('userLoggedIn', false);
    };
}