'use strict';

var express = require('express'),
    format = require('util').format,
    MongoClient = require('mongodb').MongoClient;

/**
 * @file Gun model
 */

/**
 * Deal with database (only mongodb) connections
 * @author Thiago Mallon <thiagomallon@gmail.com>
 */
class DBConnector {

    /**
     * Constructor method from DBConnector class. Creates and initializes properties.
     */
    constructor() {
        /**
         * @prop {String} dbPort Stores db port number
         */
        this.dbPort = process.env['MONGO_NODE_DRIVER_PORT'] != null ? process.env['MONGO_NODE_DRIVER_PORT'] : 27017;

        /**
         * @prop {String} dbHost Stores db host address
         */
        this.dbHost = process.env['MONGO_NODE_DRIVER_HOST'] != null ? process.env['MONGO_NODE_DRIVER_HOST'] : 'localhost';

        /**
         * @prop {String} dbName Stores database name to be instantiated
         */
        this.dbName = 'local';

        /**
         * @prop {String} collectionName Stores collection name
         */
        this.collectionName = 'startup_log';
    }

    /**
     * @param {Callback} assistent Callback function to be called after connection
     * @returns {Object} Returns a database connection instance
     */
    getConnection(assistent) {
        MongoClient.connect(format("mongodb://%s:%s/%s?w=1", this.dbHost, this.dbPort, this.dbName),
            assistent);
    }

    /**
     * @param {String} dbName Database name to be setted or recovered from DBConnector.dbs properties
     * @returns {Object} Returns a database connection instance
     */
    insert() {}

    /**
     * @param {String} dbName Database name to be setted or recovered from DBConnector.dbs properties
     * @returns {Object} Returns a database connection instance
     */
    list(assistent) {
        var self = this;
        this.getConnection(function(err, db) {
            if (!err) {
                console.log("Connected successfully to server");
                var collection = db.collection(self.collectionName);
                collection.find({}).toArray(function(err, gun) {
                    self.result = gun;
                    assistent(err, gun);
                });
            } else {
                console.log('An error occurred');
                assistent(err);
            }
            db.close();
        });
    }

    /**
     * @param {String} dbName Database name to be setted or recovered from DBConnector.dbs properties
     * @returns {Object} Returns a database connection instance
     */
    change() {}

    /**
     * @param {String} dbName Database name to be setted or recovered from DBConnector.dbs properties
     * @returns {Object} Returns a database connection instance
     */
    remove() {}
}

module.exports = DBConnector;
