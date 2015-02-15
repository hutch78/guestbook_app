var express = require('express');
var config = require('./server/configure');
var mongoose = require('mongoose');
var app = express();
var cool = require('cool-ascii-faces');


//sets the default port for our server
app.set('port', process.env.PORT || 3000);
//sets the directory for views (pages)
app.set('views', __dirname + '/views');
//uses our server configuration file (required as a module)
app = config(app);



// connect mongoose
// mongoose.connect('mongodb://localhost/guestbook_yo');
mongoose.connect('mongodb://root:admin@ds041861.mongolab.com:41861/heroku_app34012187');
mongoose.connection.on('open', function(){
	console.log('mongoose connected');
});

var server = app.listen(app.get('port'), function() {
	console.log('Server Running on Heroku');
	// console.log('Server up: http://localhost:' + app.get('port'));
});

