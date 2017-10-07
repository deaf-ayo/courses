const mongoose = require('mongoose');
const Campground = require('./models/campground');
const Comment = require('./models/comment');

var data = [
    {
        name: "Cloud's Rest",
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lobortis sem volutpat, tempor nisi in, vulputate nulla. Etiam vel neque vel sem suscipit ullamcorper non quis turpis. Nam sed mi tincidunt, viverra sapien nec, semper ipsum. Mauris feugiat ex metus, eget rutrum risus tincidunt vitae. Vivamus ante arcu, sodales a nulla sed, posuere luctus odio. Curabitur molestie vulputate pulvinar. Praesent ut erat nisi. Aliquam gravida ligula vitae mattis porta. Nunc vehicula sapien augue, nec eleifend arcu egestas ut. Nullam eget tristique magna. Nullam id nulla in mi vulputate rutrum. Sed condimentum odio non justo tincidunt efficitur. Nullam felis urna, condimentum sed varius a, tincidunt non ipsum. In sed dignissim orci. Mauris ac ullamcorper ipsum. Cras quis ullamcorper sem."
    },
    {
        name: "Desert Mesa",
        image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lobortis sem volutpat, tempor nisi in, vulputate nulla. Etiam vel neque vel sem suscipit ullamcorper non quis turpis. Nam sed mi tincidunt, viverra sapien nec, semper ipsum. Mauris feugiat ex metus, eget rutrum risus tincidunt vitae. Vivamus ante arcu, sodales a nulla sed, posuere luctus odio. Curabitur molestie vulputate pulvinar. Praesent ut erat nisi. Aliquam gravida ligula vitae mattis porta. Nunc vehicula sapien augue, nec eleifend arcu egestas ut. Nullam eget tristique magna. Nullam id nulla in mi vulputate rutrum. Sed condimentum odio non justo tincidunt efficitur. Nullam felis urna, condimentum sed varius a, tincidunt non ipsum. In sed dignissim orci. Mauris ac ullamcorper ipsum. Cras quis ullamcorper sem."
    },
    {
        name: "Canyon Floor",
        image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lobortis sem volutpat, tempor nisi in, vulputate nulla. Etiam vel neque vel sem suscipit ullamcorper non quis turpis. Nam sed mi tincidunt, viverra sapien nec, semper ipsum. Mauris feugiat ex metus, eget rutrum risus tincidunt vitae. Vivamus ante arcu, sodales a nulla sed, posuere luctus odio. Curabitur molestie vulputate pulvinar. Praesent ut erat nisi. Aliquam gravida ligula vitae mattis porta. Nunc vehicula sapien augue, nec eleifend arcu egestas ut. Nullam eget tristique magna. Nullam id nulla in mi vulputate rutrum. Sed condimentum odio non justo tincidunt efficitur. Nullam felis urna, condimentum sed varius a, tincidunt non ipsum. In sed dignissim orci. Mauris ac ullamcorper ipsum. Cras quis ullamcorper sem."
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