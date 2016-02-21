exports.view = function(req, res){

	var city = req.query.city;
	var numOfBeds = req.query.bed;
	var numOfBaths = req.query.bath;
	var numOfOccupants  = req.query.occupants;
	//console.log("We logged: city= "+city+" #beds= "+numOfBeds+" #baths= "+numOfBaths+" #occupants= "+numOfOccupants);

	res.render('sign-up', {city, numOfBeds, numOfBaths, numOfOccupants});
};