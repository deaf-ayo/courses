// got an error
// SyntaxError: Block-scoped declarations (let, const, function, class) not yet supported outside strict mode
"use strict"
// above fixed it

const mongoose = require('mongoose');

let commentSchema = mongoose.Schema({
  text: String,
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    username: String
  }
});

module.exports = mongoose.model("Comment", commentSchema);