var express = require('express'),
    co = require('co'),
    format = require('util').format,
    MongoClient = require('mongodb').MongoClient;

/**
 * @file Represents a DBConnector class
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
        'use strict';
        /**
         * @prop {String} dbPort Stores db port number
         */
        this.dbPort = typeof process.env.MONGO_NODE_DRIVER_PORT !== 'undefined' ? process.env.MONGO_NODE_DRIVER_PORT : 27017;

        /**
         * @prop {String} dbHost Stores db host address
         */
        this.dbHost = typeof process.env.MONGO_NODE_DRIVER_HOST !== 'undefined' ? process.env.MONGO_NODE_DRIVER_HOST : 'localhost';

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
     * Creates the mongodb connection
     * @param {Callback} assistent Callback function to be called after connection
     * @returns {Object} Returns a database connection instance
     */
    getConnection(assistent) {
        'use strict';
        MongoClient.connect(format("mongodb://%s:%s/%s?w=1", this.dbHost, this.dbPort, this.dbName),
            assistent);
    }

    /**
     * Insert a new doc in the database
     * @param {String} dbName Database name to be setted or recovered from DBConnector.dbs properties
     * @returns {Object} Returns a database connection instance
     */
    addOne(query, assistent) {
        'use strict';
        var self = this;
        this.getConnection(function(err, db) {
            if (!err) {
                console.log("Connected successfully to mongodb server");
                db.collection(self.collectionName).insertOne(query)
                    .toArray(function(err, gun) {
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
     * Insert a new doc in the database
     * @param {String} dbName Database name to be setted or recovered from DBConnector.dbs properties
     * @returns {Object} Returns a database connection instance
     */
    addMany(query, assistent) {
        'use strict';
        co(function*() {
            // Connection URL
            var db = yield MongoClient.connect(format("mongodb://%s:%s/%s?w=1", this.dbHost, this.dbPort, this.dbName));
            console.log("Connected correctly to server");

            // MongoClient.connect(format("mongodb://%s:%s/%s?w=1", this.dbHost, this.dbPort, this.dbName),
            //     assistent);

            // Insert a single document
            var r = yield db.collection('inserts').insertOne(query, {
                w: 'majority',
                wtimeout: 10000,
                serializeFunctions: true,
                forceServerObjectId: true
            });

            assert.equal(1, r.insertedCount);
            db.close();
        }).catch(function(err) {
            console.log(err.stack);
        });
    }

    /**
     * Executes a find command in the database
     * @param {String} dbName Database name to be setted or recovered from DBConnector.dbs properties
     * @returns {Object} Returns a database connection instance
     */
    list(query, options, assistent) {
        'use strict';
        var self = this;
        this.getConnection(function(err, db) {
            if (!err) {
                console.log("Connected successfully to mongodb server");
                db.collection(self.collectionName).find(query, options)
                    .toArray(function(err, gun) {
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

    listAll(query, options, assistent) {
        'use strict';
        var self = this;
        co(function*() {
            // Connection URL
            var db = yield MongoClient.connect(format("mongodb://%s:%s/%s?w=1", self.dbHost, self.dbPort, self.dbName));
            console.log("Connected correctly to server");

            var col = db.collection(self.collectionName);

            var docs = yield col.find(query, options)
                .toArray(function(err, gun) {
                    self.result = gun;
                    assistent(err, gun);
                });
            db.close();
        }).catch(function(err) {
            // assistent(err);
        });
    }

    /**
     * Updates database docs.
     * @param {String} dbName Database name to be setted or recovered from DBConnector.dbs properties
     * @returns {Object} Returns a database connection instance
     */
    change() {
        'use strict';
    }

    /**
     * @param {String} dbName Database name to be setted or recovered from DBConnector.dbs properties
     * @returns {Object} Returns a database connection instance
     */
    remove() {
        'use strict';
    }
}

module.exports = DBConnector;
