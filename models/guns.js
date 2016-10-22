var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gunSchema = new Schema({
  "brand": String,
  "serie": String,
  "caliber": String,
  "ammos": [String]
});

var Gun = mongoose.model('gun', gunSchema);

module.exports = Gun;
