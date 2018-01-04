var db = require('./database.js');


var data = [
	{
		uname: 'Bingo Jenkins',
		steamId: 76561198254047403,
		games: [
			{name: "Game #1", id: 1},
			{name: "Game #2", id: 2},
			{name: "Game #3", id: 3},
			{name: "Game #4", id: 4}
		],
		playstyle: 2
	},

	{
		uname: 'User McUserface',
		steamId: 16561198254047404,
		games: [
			{name: "Game #1", id: 1},
			{name: "Game #2", id: 2},
		],
		playstyle: 2
	},

	{
		uname: 'Rutherford B. Rutherford',
		steamId: 35571198254047403,
		games: [
			{name: "Game #12", id: 12},
			{name: "Game #14", id: 14}
		],
		playstyle: 2
	},

	{
		uname: 'Cletus McCoy',
		steamId: 92817382712298731,
		games: [
			{name: "Game #1", id: 1},
			{name: "Game #2", id: 2},
			{name: "Game #5", id: 5},
			{name: "Game #6", id: 6}
		],
		playstyle: 2
	},

	{
		uname: 'Cotswald Buckingham',
		steamId: 10392817392833456,
		games: [
			{name: "Game #1", id: 1}
		],
		playstyle: 2
	},

	{
		uname: 'Ferdinand C. Joseph',
		steamId: 12345678912345678,
		games: [
			{name: "Game #5", id: 5},
			{name: "Game #6", id: 6},
			{name: "Game #7", id: 7},
			{name: "Game #8", id: 8}
		],
		playstyle: 2
	}
]


data.forEach(entry => {
	var toSave = new db.User(entry);
	toSave.save(function(err, data){
		if (err){
			console.log(err);
		} else {
			console.log('saved ', data)
		}
	})
})