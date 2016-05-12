// *********************************************************************************
// CHARACTER.JS - THIS FILE CREATES A MODELED OF INDIVIDUAL CHARACTERS IN DB
// *********************************************************************************

// Dependency

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize"); 
// sequelize (lowercase) references my connection to the DB. You could name it something else, but I was just following their convention.
var sequelize = require("../config/connection.js"); 
//


// Creates a "Character" model that matches up with DB
//makes the table if it doesnt already exisit

//sequeilize translates for other languages

var Person = sequelize.define("foodMeet", {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	first_Name: {
		type: Sequelize.STRING,
	},
	last_Name: {
		type: Sequelize.STRING,
	},
	age: {
		type: Sequelize.STRING,
	},
	email: {
		type: Sequelize.INTEGER,
	},
	gender: {
		type: Sequelize.INTEGER,
	},
	food: {
		type: Sequelize.INTEGER,
	},
	location: {
		type: Sequelize.INTEGER,
	},
});

// Syncs with DB
//connects with it to the other values
Person.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Person;