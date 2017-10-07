var express       = require('express'),
app               = express(),
bodyParser        = require('body-parser'),
mongoose          = require('mongoose'),
methodOverride    = require('method-override'),
expressSanitizer  = require("express-sanitizer");

// app config
mongoose.connect('mongodb://localhost/restful_blog_app');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(expressSanitizer());

// mongoose/model config
var blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: {type: Date, default: Date.now}
});

var Blog = mongoose.model('blog', blogSchema);

// restful routes

app.get('/', function(req, res){
  res.redirect('/blogs');
});

// 01 - INDEX route
app.get('/blogs', function(req, res){
  Blog.find({}, function(err, blogs){
    if(err){
      console.log('Error');
    } else {
      res.render('index', {blogs: blogs});
    }
  });
});

// 02 - NEW route
app.get('/blogs/new', function(req, res){
  res.render('new');
});

// 03 - CREATE route
app.post('/blogs', function(req, res){
  // create blog
  console.log(req.body);
  console.log("===========")
  req.body.blog.body = req.sanitize(req.body.blog.body);
  console.log(req.body);
  Blog.create(req.body.blog, function(err, newBlog){
    if(err){
      res.render('new');
    } else {
      // then, redirect to the index
      res.redirect('/blogs');
    }
  });
});

// 04 - SHOW route
app.get('/blogs/:id', function(req, res){
  Blog.findById(req.params.id, function(err, foundBlog){
    if(err){
      res.redirect('/blogs');
    } else {
      res.render('show', {blog: foundBlog});
    }
  });
});

// 05 - EDIT route
app.get('/blogs/:id/edit', function(req, res){
  Blog.findById(req.params.id, function(err, foundBlog){
    if(err){
      res.redirect('/blogs');
    } else {
      res.render('edit', {blog: foundBlog});
    }
  });
});

// 06 - UPDATE route
app.put('/blogs/:id', function(req, res){
  req.body.blog.body = req.sanitize(req.body.blog.body);
  Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
    if(err){
      res.redirect('/blogs');
    } else {
      res.redirect('/blogs/' + req.params.id);
    }
  });
});

// 07 - DELETE route
app.delete('/blogs/:id', function(req, res){
  Blog.findByIdAndRemove(req.params.id, function(err){
    if(err){
      res.redirect('/blogs');
    } else {
      res.redirect('/blogs');
    }
  });
});

// listen server
app.listen(process.env.PORT, process.env.IP, function(){
  console.log('Server is awake and hungry! Feed me now!');
})