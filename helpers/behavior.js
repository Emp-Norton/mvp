var db = require('../db/database');


var checkForGameMatches = function(current, players){
	var gameMatches = [];
}


var checkForStyleMatches = function(current, players){
	var current = current[0];
	var styleMatches = [];
	players.forEach(player =>{
		if (player.playstyle == current.playstyle){
			styleMatches.push(player)
		}
	})
	return styleMatches;
}

var findMatches = function(current, res){

	db.User.find({uname: current}, function(err, data){
		if (!err){
			var currentPlayer = data;
			var players = db.User.find(function(err, data){
			if (!err){
				var playerData = data;
				var styleMatches = checkForStyleMatches(currentPlayer, playerData);
				res.send(styleMatches)

			  } else {
				  console.log('failed because of ', err);
			  }
		  });

	  }
	})

	
	
}


module.exports.findMatches = findMatches;