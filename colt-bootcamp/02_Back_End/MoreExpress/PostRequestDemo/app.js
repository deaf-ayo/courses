var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// move it here so other functions can access it > global scope
var friends = ["Tony", "Miranda", "Justin", "Pierre", "Lily"];


// home page route
app.get("/", function(req, res) {
  res.render("home");
});

// post route
app.post("/addfriend", function(req, res) {
  var newFriend = req.body.newfriend;
  friends.push(newFriend);
  res.redirect("/friends");
});


// friend page
app.get("/friends", function(req, res) {
  res.render("friends", {friends: friends});
});

// start server
app.listen(process.env.PORT, process.env.IP, function(){
  console.log("Server has started. Fire away!");
});