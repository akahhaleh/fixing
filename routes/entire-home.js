//var housingData = require('../housing.json');

exports.view = function(req, res){
	//console.log(housingData);
	res.render('entire-home', housingData);
};