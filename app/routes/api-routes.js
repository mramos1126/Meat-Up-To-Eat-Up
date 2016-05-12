// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Person 	= require("../model/person.js"); // Pulls out the Character Model

// Routes
// =============================================================
module.exports = function(app){

	// Search for Specific Character (or all characters) then provides JSON
	app.get('/submit', function(req, res){

		// If the user provides a specific character in the URL...
		if(req.params.characters){

			// Then display the JSON for ONLY that character.
			// (Note how we're using the ORM here to run our searches)

			//go through character name and find req.params.character then bring the json object
			Character.findAll({
				where: {
					routeName: req.params.characters
				}
			}).then(function(result){
				res.json(result);
			})
		}

		// Otherwise...
		else{
			// Otherwise display the data for all of the characters. 
			// (Note how we're using Sequelize here to run our searches)
				Character.findAll({})
					.then(function(result){
						res.json(result);
				})
			};

	});

//login aurthentication
app.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });


	app.post('/signup', function(req, res){

		// Take the request...
		var person = req.body;

		// Create a routeName 
		var routeName = person.name.replace(/\s+/g, '').toLowerCase();

		// Then add the character to the database using sequelize
		Person.create({
			first_name: person.first_name,
			last_name: person.last_name,
			age: person.age,
			email: person.email,
			gender:person.gender,
			food:person.food,
			location:person.location
		});
		
	})
}
}