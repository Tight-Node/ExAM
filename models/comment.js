var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
  text: String,
  article: {
    type: String,
    ref: "Article"
  },
  author: {
    type: String,
    ref: "User"
  }
});
mongoose.model('Comment', CommentSchema);
