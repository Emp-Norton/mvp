var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rp2');

var connection = mongoose.connection;

connection.once('open', function callback(){
	console.log('connected to DB');
})


var userSchema = mongoose.Schema({
	uname: {type: String, unique: true},
	games: [{name: String, id: Number}],
	steamId: String,
	playstyle: String
})

var User = mongoose.model('User', userSchema);



module.exports.User = User;