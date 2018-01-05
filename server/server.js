var db = require('../db/database.js');
var express = require('express');
var path = require('path');
var helper = require('../helpers/behavior')
var parser = require('body-parser');

var app = express();


app.use(parser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '/../client/dist')));



const hostname = '127.0.0.1';
const port = 1234;

app.get('/users/:steamId', function(req, res){
	console.log('serving GET request for ', req.url)
	db.User.find(function(err, data){
		if (!err){
			var sid = req.params.steamId;
			db.User.find({steamId: sid}, function(err, data){
				if (!err){
					console.log(data)
					res.send(data);
				} else {
					console.log('unable to find user with steamId: ', sid);
					res.end('Not found')
				}
			})
		} else {
			console.log('error ' + err);
		}
	})
})

app.get('/users', function(req, res){
	console.log('serving GET request for ', req.url)

	db.User.find(function(err, data){
		if (!err){
			res.send(data)
		} else {
			console.log('error' + err)
		}
	})
})

app.post('/', function(req, res){
	var user = req.body.username // find the name being submitted and pass it in to makeMatches
	var steamId = req.body.steamid
	console.log(user, steamId)
	//helper.findMatches(steamId);
})

app.listen(port, function(){
	console.log('listening on ', port);
});
