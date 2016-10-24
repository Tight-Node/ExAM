var mongoose = require('mongoose'),
  DBConn = require('../libs/DBConnector'),
  connection = new DBConn().getConnection('users'),
  Schema = mongoose.Schema;

var personSchema = new Schema({
  "name": {
    "first": String,
    "last": String
  },
  "email": String,
  "age": Number,
  "skils": [String],
  "created": Date,
  "logins": [{
    "at": Date,
    "minutes": Number
  }, {
    "at": Date,
    "minutes": Number
  }, {
    "at": Date,
    "minutes": Number
  }]
}, {
  collection: 'person'
});

var Person = mongoose.model('person', personSchema);

module.exports = Person;
