var express = require("express");
var app = express();

// "/" => "Hi there!"
app.get("/", function(req, res){
  res.send("Hi there!");
});

// "/bye" => "Goodbye!"
app.get("/bye", function(req, res){
  res.send("Goodbye!");
});

// "/cat" => "MEOW!"
app.get("/cat", function(req, res){
  console.log("Someone made a request to /cat!");
  res.send("MEOW!");
});

// route params

app.get("/r/:subredditName", function(req, res) {
  console.log(req.params.subredditName);
  var subreddit = req.params.subredditName;
  res.send("Welcome to the " + subreddit.toUpperCase() + " subreddit!");
});

app.get("/r/:subredditName/comments/:id/:title", function(req, res) {
  console.log(req.params);
  res.send("Yo, this is the comments page!");
});

// Tell Express to listen for requests (start server)

app.listen(process.env.PORT, process.env.IP, function(){
  console.log("Server has started!");
});