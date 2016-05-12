
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path'); //decodes and breaksup url 


var app = express(); // Tells node that we are creating an "express" server
var port = process.env.PORT||7000;

// ==============================================================================
// This lets us serve content from the 'public' folder 
// ==============================================================================
// var staticContentFolder = __dirname + '/public';

// app.use(express.static(staticContentFolder));     // set the static files location /public/img will be /img for users
//replaces a bunch of get methods for css 
//can use this if i dont need a post request

// BodyParser makes it easy for our server to interpret data sent to it.
// The code below is pretty standard.

//middleware: stuff between 
//required format for server to read respose
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// require('./app/routing/api-routes.js')(app); 
 require('./app/routes/html-routes.js')(app);

app.listen(port, function(){
    console.log("App listening on PORT: " + port);
});