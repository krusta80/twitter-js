var express = require( 'express' );
var morgan = require('morgan');
var swig = require('swig');
var app = express(); // creates an instance of an express application

var port = 3000;
var indexView = "";


var makeView = function() {
	var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
	};
	swig.renderFile(__dirname + '/views/index.html', locals, function (err, output) {
	    indexView = output;
	});
}


app.use('/hello',function (req, res, next) {
    // do your logging here
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding

    console.log(req.method, req.url, res.statusCode);
    next();
})

app.use(morgan('combined'));

app.get('/', function (req, res) {
	res.send(indexView);  
});


makeView();
app.listen(port, function() {
	console.log("Twitter is running on port "+port);
});