var express = require( 'express' );
var morgan = require('morgan');
var swig = require('swig');
var tweets = require('./tweetBank')
var app = express(); // creates an instance of an express application

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

app.use('/hello',function (req, res, next) {
    // do your logging here
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding

    console.log(req.method, req.url, res.statusCode);
    next();
})

app.use(morgan('combined'));

app.get('/', function (req, res) {
	res.render('index',locals);  
});


app.listen(port, function() {
	console.log("Twitter is running on port "+port);
}); 