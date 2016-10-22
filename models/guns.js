var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gunSchema = new Schema({
  "_id": String,
  "brand": String,
  "model": String,
  "caliber": Number,
  "ammos": [String]
}, {
  collection: 'gun'
});

gunSchema.methods.getGuns = function(cb) {
  return this.model('gun').find().select({
    brand: 1,
    model: 1
  }).exec(cb);
};
gunSchema.methods.readAllGuns = function(cb) {
  console.log(gunSchema);
  console.log(gunSchema.model('gun').find().exec(cb));
  return gunSchema.model('gun').find().exec(cb);
};

var Gun = mongoose.model('gun', gunSchema);

module.exports = Gun;
