var mongoose = require('mongoose'),
  DBConn = require('../libs/DBConnector'),
  connection = new DBConn().getConnection('alongDWay'),
  Schema = mongoose.Schema;

var gunSchema = new Schema({
  "_id": String,
  "brand": String,
  "category": String,
  "serie": String,
  "caliber": String,
  "ammos": [String]
}, {
  collection: 'gun'
});

var Gun = connection.model('gun', gunSchema);

module.exports = Gun;
