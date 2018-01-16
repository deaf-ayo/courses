const mongoose = require('mongoose');
const Campground = require('./models/campground');
const Comment = require('./models/comment');

var data = [
    {
        name: "Cloud's Rest",
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        description: "blah blah blah 1"
    },
    {
        name: "Desert Mesa",
        image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg",
        description: "blah blah blah 2"
    },
    {
        name: "Canyon Floor",
        image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
        description: "blah blah blah 3"
    }
]

function seedDB() {
  // remove all campgrounds
  Campground.remove({}, function(err) {
    if(err) {
      console.log(err);
    }
    console.log('removed campgrounds!');
  }); 
  // remove old comments from DB - clean up database - personal touch
  Comment.remove({}, function(err, removed){
    if(err) {
      console.log(err);
    } else {
      console.log('removed old comments');
    }
  });
  // add a few campgrounds
  data.forEach(function(seed) {
    Campground.create(seed, function(err, campground){
      if(err) {
        console.log(err);
      } else {
        console.log('added a campground');
        // create a comment
        Comment.create(
          {
            text: "This place is great, but I wish it had internet access",
            author: "Homer"
          }, function(err, comment) {
            if(err) {
              console.log(err);
            } else {
              campground.comments.push(comment);
              campground.save();
              console.log("created new comment");
            }
        });
      }
    });
  });
}

module.exports = seedDB;