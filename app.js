var express = require( 'express' );
var morgan = require('morgan');
var app = express(); // creates an instance of an express application

var port = 3000;



app.use('/hello',function (req, res, next) {
    // do your logging here
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding

    console.log(req.method, req.url, res.statusCode);
    next();
})

app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});







app.listen(port, function() {
	console.log("Twitter is running on port "+port);
});