var db = require('../db/database');


var checkForGameMatches = function(current, players){
	var gameMatches = [];
	var selectedPlayerGames = current[0].games.sort(function(a, b){
		return a.id - b.id});

	players.forEach(player => {
		var numberOfSharedGames = 0;
		var playerGames = player.games.sort(function(a, b){
		return a.id - b.id});
		selectedPlayerGames.forEach(game =>{
			playerGames.forEach(pgame => {
				if (game.id == pgame.id){
				console.log(current[0].uname +' shared '+ game.name + " with " + player.uname)
				numberOfSharedGames++;
				if (numberOfSharedGames >= 3 || 
					selectedPlayerGames.length <= 3 && 
					numberOfSharedGames > 0 && 
					playerGames.length <= 3){
					if (player.uname !== current[0].uname &&
						gameMatches.indexOf(player) == -1
						){
						gameMatches.push(player);
					}
				}
			}
			})
		})
	})
console.log(gameMatches)
	return gameMatches;
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
				checkForGameMatches(currentPlayer, playerData)
				res.send(styleMatches)

			  } else {
				  console.log('failed because of ', err);
			  }
		  });

	  }
	})

	
	
}


module.exports.findMatches = findMatches;