var express = require('express'),
  mongoose = require('mongoose');

function DBConnector() {
  this.dbs = {};
}

DBConnector.prototype.checkConnection = function(dbName) {
  return (this.dbs.dbName) ? this.dbs.dbName : this.dbs.dbName = null;
}

DBConnector.prototype.getConnection = function(dbName) {
  if (!this.checkConnection(dbName)) {
    var uristring =
      process.env.MONGOLAB_URI ||
      process.env.MONGOHQ_URL ||
      'mongodb://localhost/' + dbName;
    this.dbs.dbName = mongoose.createConnection(uristring, function(err, res) {
      (err) ? console.log('MongoDB connection error: ' + uristring + ' - ' + err):
        console.log('MongoDB connection succeed: ' + uristring);
    });
  }
  return this.dbs.dbName;
}

module.exports = DBConnector;
