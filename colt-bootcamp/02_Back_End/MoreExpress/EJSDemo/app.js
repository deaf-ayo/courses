var express = require("express");
var app = express();

// link to public folder and resources within
app.use(express.static("public"));
// let express use .ejs ahead of time
app.set("view engine", "ejs");

// home page
app.get("/", function(req, res) {
  res.render("home");
});

// second route
app.get("/fallinlovewith/:thing", function(req, res) {
  var thing = req.params.thing;
  res.render("love", {thingVar: thing});
});

// third route posts
app.get("/posts", function(req, res) {
  var posts = [
    {title: "Post 1", author: "Susy"},
    {title: "My adorable pet bunny", author: "Charlie"},
    {title: "Annoyed Cat", author: "Queenie"}
    ];
    res.render("posts", {posts: posts});
});

// server start

app.listen(process.env.PORT, process.env.IP, function(){
  console.log("Server has started. Let's go!");
});