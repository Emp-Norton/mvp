var db = require('../db/database');


var checkForGameMatches = function(current, players){
	var gameMatches = [];
}


var checkForStyleMatches = function(current, players){
	var styleMatches = [];
	players.forEach(player =>{
		if (player.playstyle === current.playstyle){
			styleMatches.push(player)
		}
	})
	console.log(styleMatches);
}

var findMatches = function(current){

	var players = db.User.find(function(err, data){
		if (!err){
			var playerData = data;
			var currentPlayer = current;



		} else {
			console.log('failed because of ', err);
		}
	});
	
}


module.exports.findMatches = findMatches;