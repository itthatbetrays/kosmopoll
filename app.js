var express 	= require('express');
var bodyParser 	= require('body-parser');

var routes   = require('./routes');
var question = require('./routes/question');
var answer	 = require('./routes/answer');
var vote	 = require('./routes/vote');

var path 	= require('path');
var db	 	= require('./models');
var app 	= express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');								// Set templating engine to EJS
app.use(express.static(path.join(__dirname, 'public'))); 	// Make public folder accessible for index file
app.use(bodyParser()); // Needed for server to parse body requests to json (POST/PUT/DELETE)


// Define views
app.get('/', routes.index); 	// Welcome!

// Define question controllers
app.get(	'/q'		, question.findAll);
app.get(	'/q/:id'	, question.findById);
app.post(	'/q'		, question.create);
app.delete(	'/q/:id' 	, question.destroy);

// Define answers controllers
app.get(	'/q/:question_id/a'		, answer.findAll);
app.post(	'/q/:question_id/a'		, answer.create);
app.delete(	'/q/:question_id/a/:id' , answer.destroy);

// Define vote controllers
app.get(	'/q/:question_id/v'				, vote.findAll);
app.post(	'/q/:question_id/a/:answer_id/v', vote.create);

// Set up database and start server
db
	.sequelize
	.sync()
	.complete(function(err) {
		if (err) {
			throw err
		} else {
			var server = app.listen(4000, function() {
				console.log('Listening on port %d', server.address().port);
			})
		}
	})