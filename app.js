var express = require( 'express' );
var morgan = require('morgan');
var swig = require('swig');
var app = express(); // creates an instance of an express application
var routes = require('./routes/');	//	used index.js by default

var port = 3000;
var indexView = "";

var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
swig.setDefaults({ cache: false });

app.use(express.static('public'));

app.use(morgan('combined'));

app.use('/',routes);		//	route all requests to our routing module

app.listen(port, function() {
	console.log("Twitter is running on port "+port);
}); 