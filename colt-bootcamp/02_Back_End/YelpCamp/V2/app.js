var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp", {useMongoClient: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// schema set-up
var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

/*Campground.create({
  name: "Salmon Creek",
  image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg",
  description: "A campsite with a salmon-filled creek. Perfect for fishing."
}, function(err, campground){
  if(err){
    console.log(err);
  } else {
    console.log("New Campground Added: ");
    console.log(campground);
  }
});*/

// global variables

// home route - landing page
app.get("/", function(req, res){
  res.render("landing");
});

// campgrounds GET route
// INDEX - show all campgrounds
app.get("/campgrounds", function(req, res){
  // get all campgrounds from DB
  Campground.find({}, function(err, allCampgrounds){
    if(err){
      console.log(err);
    } else {
      res.render("index", {campgrounds: allCampgrounds});
    }
  });
});

// campgrounds POST route
// CREATE - add new campground to DB
app.post("/campgrounds", function(req, res){
  // get data from form
  var name = req.body.name;
  var image = req.body.image;
  var desc = req.body.description;
  var newCampground = {name: name, image: image, description: desc};
  // create a new campground and save to DB
  Campground.create(newCampground, function(err, newlyCreated){
    if(err) {
      console.log(err);
    } else {
      // redirect back to campgrounds page
      res.redirect("/campgrounds");
    }
  });
});

// create new campgrounds route
// NEW - show form to create new campground
app.get("/campgrounds/new", function(req, res){
  res.render("new");
});

// SHOW - shows more info about one campground
app.get("/campgrounds/:id", function(req, res) {
  // find the campground with provided ID
  Campground.findById(req.params.id, function(err, foundCampground){
    if(err){
      console.log(err);
    } else {
      // render show template with that campground
      res.render("show", {campground: foundCampground});
    }
  });
});

// server listen
app.listen(process.env.PORT, process.env.IP, function(){
console.log("Server has started!");
});