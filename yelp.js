//get client data
var yelp = require("node-yelp");
var path=require('path');
 module.exports=function(app){


app.get('/',function(req,res){
  console.log('sjdskdnj')
  res.sendFile(path.join(__dirname + '/geocode.html'));
  console.log(req.body)
  });
app.post('/',function(req,res){
console.log('post'+req.body)


var client = yelp.createClient({
  oauth: {
    "consumer_key": "blnUGOa1xqRIq5Kvk2NIiw",
    "consumer_secret": "k-VIMJNVzfFn8yA0olc9P2Rk7Os",
    "token": "mntH_9Niv9kfvf03XW-mPDQUm2wkqiTx",
    "token_secret": "g-EzbDLsWt8bEAcTxhYFBQNqXuQ"
  },
  
  // Optional settings: 
  httpClient: {
    maxSockets: 25  // ~> Default is 10 
  }
});
 
 //get user input into here
client.search({
  terms: "food",
  location: "07726",
  categories:'italian'
}).then(function (data) {
  var businesses = data.businesses;
  var location = data.region;
  console.log(data.businesses[0].name)
   console.log(data.region)
    // ...  
});
 
 
client.business("grand-place-bruxelles-2", {
  cc: "US"
}).then(function (data) {
  // ... 
});
});
}