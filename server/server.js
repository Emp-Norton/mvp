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


app.get('/matches/:current', function(req, res){
	var current = req.params.current;
	console.log('seding to helper ', current)
	helper.findMatches(current)
})

app.get('/users/:username', function(req, res){ // find specific user + render playerinfo
	console.log('serving GET request for ', req.url)
		var submittedUsername = req.params.username;
		console.log(submittedUsername)
		db.User.find({uname: submittedUsername}, function(err, data){
			if (!err){
				console.log('found', data)
				res.send(data);
			} else {
				console.log('unable to find user with steamId: ', sid);
				res.end('Not found')
			}
		})
})

app.get('/users/:steamId', function(req, res){ // find specific user + render playerinfo
	console.log('serving GET request for ', req.url)
		var sid = req.params.steamId;
		console.log('get request', typeof sid)
		db.User.find({steamId: sid}, function(err, data){
			if (!err){
				console.log('found', data)
				res.send(data);
			} else {
				console.log('unable to find user with steamId: ', sid);
				res.end('Not found')
			}
		})
})

app.get('/users', function(req, res){ // returning all users
	console.log('serving GET request for ', req.url)

	db.User.find(function(err, data){
		if (!err){
			res.send(data)
		} else {
			console.log('error' + err)
		}
	})
})

app.post('/', function(req, res){ // register a new user
	var steamId = req.body.steamid
	console.log('looking for ',typeof steamId)
	db.User.find({steamId: steamId}, function(err, data){ // finding 'current' user
		if (!err){
			if (data.length > 0){
				var foundUser = data[0];
				console.log('found', foundUser)
				res.send(foundUser);
			} else { // user not found in DB
				console.log('not in DB, getting data on: ', steamId)
				res.send('')
				// call gitAPI
					// deposit results into DB
					// call root get to re-render with new info
			}
		} else {
			console.log('error ' + err);
		}
		res.end();
	})
})

app.listen(port, function(){
	console.log('listening on ', port);
});
