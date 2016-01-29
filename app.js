var express = require( 'express' );
var app = express(); // creates an instance of an express application

var port = 3000;


app.get('/', function (req, res) {
  res.send('Hello World!');
});







app.listen(port, function() {
	console.log("Twitter is running on port "+port);
});