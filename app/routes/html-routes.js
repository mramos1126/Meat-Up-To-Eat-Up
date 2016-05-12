//home: //app.get(/signup)
		//app.get(/login)
		//app.get(/questions)


		//app.get(/matches)

var path 		= 	require('path');
var passport	=	require('../login/passport.js')


// Routes
// =============================================================
module.exports = function(app){

	// Each of the below routes just handles the HTML page that the user gets sent to.
	app.get('/', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});

	app.get('/signup', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/signup.html'));
	});

	app.get('/login', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/login.html'));
	});

	app.get('/matches', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/matches.html'));
	});

	app.get('/questions', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/questions.html'));
	});
};