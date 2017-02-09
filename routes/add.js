var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	var newfriend = {"name": req.query.name,"description": req.query.description,"imageURL": "http://lorempixel.com/400/400/people"};
	console.log(newfriend);
	data.friends.push(newfriend);
	res.render();
 }