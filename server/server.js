var db = require('../db/database.js');
var express = require('express');
var path = require('path');
var app = express();


app.use(express.static(path.join(__dirname, '/../client/dist')));



const hostname = '127.0.0.1';
const port = 1234;

app.get('/users/:steamId', function(req, res){
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

	db.User.find(function(err, data){
		if (!err){
			res.send(data)
		} else {
			console.log('error' + err)
		}
	})
})

app.listen(port, function(){
	console.log('listening on ', port);
});
