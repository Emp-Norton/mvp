var express = require('express');

var app = express();




const hostname = '127.0.0.1';
const port = 1234;

app.get('/', function(req, res){
	res.send('hi!')
})

app.listen(port, function(){
	console.log('listening on ', port)
});