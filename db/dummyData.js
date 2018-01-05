var db = require('./database.js');


var data = [
	{
		uname: 'Bingo Jenkins',
		steamId: '76561198254047403',
		games: [
			{name: "Starfox", id: '1'},
			{name: "Bomberman", id: '2'},
			{name: "Brak Sector", id: '3'},
			{name: "Grand Theft Auto", id: '4'},
			{name: "Day of Infamy", id: '5'},
			{name: "Aardwolf", id: '6'},
		],
		playstyle: '2'
	},

	{
		uname: 'User McUserface',
		steamId: '16561198254047404',
		games: [
			{name: "Starfox", id: '1'},
			{name: "Bomberman", id: '2'},
			{name: "The Legend of Zelda", id: '12'},
			{name: "Alto's Adventure", id: '13'}
		],
		playstyle: '2'
	},

	{
		uname: 'Rutherford B. Rutherford',
		steamId: '35571198254047403',
		games: [
			{name: "Starfox", id: '1'},
			{name: "Bomberman", id: '2'},
			{name: "The Legend of Zelda", id: '12'},
			{name: "Super Mario Bros.", id: '14'}
		],
		playstyle: 1
	},

	{
		uname: 'Cletus McCoy',
		steamId: '92817382712298731',
		games: [
			{name: "Starfox", id: '1'},
			{name: "Bomberman", id: '2'},
			{name: "Day of Infamy", id: '5'},
			{name: "Aardwolf", id: '6'}
		],
		playstyle: '2'
	},

	{
		uname: 'Cotswald Buckingham',
		steamId: '10392817392833456',
		games: [
			{name: "Starfox", id: '1'}
		],
		playstyle: '2'
	},

	{
		uname: 'Ferdinand C. Joseph',
		steamId: '12345678912345678',
		games: [
			{name: "Day of Infamy", id: '5'},
			{name: "Aardwolf", id: '6'},
			{name: "Guitar Hero", id: '7'},
			{name: "Company of Heroes", id: '8'}
		],
		playstyle: '2'
	},

	{
		uname: 'Ty A. Shu',
		steamId: '12345678912345555',
		games: [
			{name: "The Legend of Zelda", id: '12'},
			{name: "Super Mario Bros.", id: '14'},
			{name: "Starfox", id: '1'},
			{name: "Bomberman", id: '2'}
		],
		playstyle: '4'
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