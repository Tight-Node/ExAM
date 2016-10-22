var mongoose = require('mongoose'),
  Schema = mongoose.Schema
accountSchema = new Schema({
    username: String,
    password: String
  }),
  User = mongoose.model('user', accountSchema);

module.exports = User;
