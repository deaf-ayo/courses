const express     = require("express"),
    app           = express(),
    bodyParser    = require("body-parser"),
    mongoose      = require("mongoose"),
    Campground    = require('./models/campground'),
    seedDB        = require('./seeds');
    
mongoose.connect("mongodb://localhost/yelp_camp_v3", {useMongoClient: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
seedDB();

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
  Campground.findById(req.params.id).populate('comments').exec(function(err, foundCampground){
    if(err){
      console.log(err);
    } else {
      console.log(foundCampground);
      // render show template with that campground
      res.render("show", {campground: foundCampground});
    }
  });
});

// server listen
app.listen(process.env.PORT, process.env.IP, function(){
console.log("Server has started!");
});