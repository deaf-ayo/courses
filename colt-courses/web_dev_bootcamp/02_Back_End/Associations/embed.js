var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");


// 2 Database models below - user and post

// POST - title, content
var postSchema = new mongoose.Schema({
  title: String,
  content: String
});

var Post = mongoose.model("Post", postSchema);

// USER - email, name
var userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [postSchema]
});

var User = mongoose.model("User", userSchema);

/*
// start test -------------------

// create a new user
var newUser = new User({
    email: "hermione@hogwarts.edu",
    name: "Hermione Granger"
});
// push post to [postSchema] array
newUser.posts.push({
    title: "How to brew polyjuice potion",
    content: "Just kidding.  Go to potions class to learn it!"
});

// save to DB
newUser.save(function(err, user){
  if(err){
      console.log(err);
  } else {
      console.log(user);
  }
});

// create a new post
var newPost = new Post({
    title: "Reflections on Apples",
    content: "They are delicious"
});
/*
// save to DB
newPost.save(function(err, post){
    if(err){
        console.log(err);
    } else {
        console.log(post);
    }
});
*/

// end test ------------------- 

User.findOne({name: "Hermione Granger"}, function(err, user){
  if(err){
      // console.log(err);
  } else {
      user.posts.push({
          title: "3 Things I really hate",
          content: "Voldemort.  Voldemort. Voldemort"
      });
      user.save(function(err, user){
          if(err){
              console.log(err);
          } else {
              console.log(user);
          }
      });
  }
});