var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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

personSchema.methods.getEmails = function(cb) {
  return this.model('person').find().select({
    name: 1,
    email: 1
  }).exec(cb);
};

personSchema.methods.readAll = function(cb) {
  return this.model('person').find().exec(cb);
};

var Person = mongoose.model('person', personSchema);

module.exports = Person;
