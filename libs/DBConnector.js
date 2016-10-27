'use strict';

var express = require('express'),
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
         * @prop {String} dbName Stores database name to be instantiated
         */
        this.dbName = 'local';
        /**
         * @prop {String} collectionName Stores collection name
         */
        this.collectionName = 'startup_log';
    }

    /**
     * @param {String} dbName Database name to be setted or recovered from DBConnector.dbs properties
     * @returns {Object} Returns a database connection instance
     */
    getConnection(assistent) {
        MongoClient.connect('mongodb://localhost/' + this.dbName, assistent);
        // MongoClient.connect('mongodb://localhost/' + this.dbName, function(err, db) {
        //     console.log("Connected successfully to server");
        //     // self.dbName = db;
        // });
        // return this.dbs.dbName;
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
    list() {
        console.log('listening');
        var result;
        var self = this;
        this.getConnection(function(err, db) {
            if (!err) {
                console.log("Connected successfully to server");
            } else {
                console.log('An error occurred');
                console.log(err);
            }
            self.result = db;
            db.collection;
            db.close();
        });
        return result;
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
