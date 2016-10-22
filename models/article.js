var mongoose = require("mongoose");
var Schema   = mongoose.Schema;

var ArticleSchema = new Schema({
    title: String,
    slug: String,
    content: String,
    author: {
        type: String,
        ref: "User"
    }
});
mongoose.model('Article', ArticleSchema);
