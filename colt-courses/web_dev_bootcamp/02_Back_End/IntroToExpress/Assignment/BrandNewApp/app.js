var express = require("express");
var app = express();

// first route - home page
app.get("/", function(req, res) {
  res.send("Hi there, welcome to my assignment!");
});

// second route - /speak/
app.get("/speak/:animal", function(req, res) {
  var sounds = {
    pig: "Oink",
    cow: "Moo",
    dog: "Woof Woof"
  }
  var animal = req.params.animal.toLowerCase();
  var sound = sounds[animal];
  res.send("The " + animal + " says '" + sound + "!'");
});

// third route - /repeat/
app.get("/repeat/:message/:num", function(req, res) {
  var message = req.params.message;
  var num = Number(req.params.num);
  var result = "";
  for(var i = 0; i < num; i++) {
    result += message + " ";
  }
  res.send(result);
});

// if not the above routes then
app.get("*", function(req, res) {
  res.send("Sorry, page not found...what are you doing with your life? LOL");
});

// start server
app.listen(process.env.PORT, process.env.IP, function() {
  console.log("Server has started!");
});