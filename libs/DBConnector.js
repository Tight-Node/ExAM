var express = require('express'),
    MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

function DBConnector() {
    this.dbs = {};
}

DBConnector.prototype.checkConnection = function(dbName) {
    return (this.dbs.dbName) ? this.dbs.dbName : this.dbs.dbName = null;
}

DBConnector.prototype.getConnection = function(dbName) {
    if (!this.checkConnection(dbName)) {
        // 'mongodb://localhost/' + dbName;
        var url = 'mongodb://localhost:27017/' + dbName;
        MongoClient.connect(url, function(err, db) {
            assert.equal(null, err);
            console.log("Connected successfully to server");
            db.close();
        });
    }
    return this.dbs.dbName;
}

module.exports = DBConnector;
