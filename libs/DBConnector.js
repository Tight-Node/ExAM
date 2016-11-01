var express = require('express'),
    co = require('co'),
    format = require('util').format,
    mongodb = require('mongodb'),
    MongoClient = mongodb.MongoClient;

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
     * Method implements database connection
     */
    getConnection() {
        // Connection URL
        return MongoClient.connect(format("mongodb://%s:%s/%s?w=1", this.dbHost, this.dbPort, this.dbName));
    }

    /**
     * Method implements database connection close.
     * @param {Object} dbConn Mongodb client instance object
     */
    closeConnection(dbConn) {
        dbConn.close();
    }

    /**
     * Insert a new doc in the database
     * @param {String} dbName Database name to be setted or recovered from DBConnector.dbs properties
     * @returns {Object} Returns a database connection instance
     */
    insert(query, assistent) {
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
     * @param {Object} query Query to be executed
     * @param {Object} options Options to be applied to the query
     * @param {Callback} assistent Callback function retrieve data
     */
    change(query, options, assistent) {
        'use strict';
        var self = this;
        co(function*() {
            // Connection URL
            var db = yield MongoClient.connect(format("mongodb://%s:%s/%s?w=1", self.dbHost, self.dbPort, self.dbName));
            console.log("Connected correctly t2o server");

            /* not assynchronous _id conversion */
            query = self.convertObjectId(query);

            var docs = yield db.collection(self.collectionName)
                .remove(query, options, function(err, result) {
                    assistent(err, result);
                });
            assistent(null, query);
            db.close();
        }).catch(function(err) {
            // assistent(err);
        });
    }

    /**
     * Remove a doc from database
     * @param {Object} query Query to be executed
     * @param {Object} options Options to be applied to the query
     * @param {Callback} assistent Callback function retrieve data
     */
    remove(query, options, assistent) {
        'use strict';
        var self = this;
        co(function*() {
            // Connection URL
            var db = yield MongoClient.connect(format("mongodb://%s:%s/%s?w=1", self.dbHost, self.dbPort, self.dbName));

            /* not assynchronous _id conversion */
            query = self.convertObjectId(query);

            var docs = yield db.collection(self.collectionName)
                .remove(query, options, function(err, result) {
                    assistent(err, result);
                });
            assistent(null, query);
            db.close();
        }).catch(function(err) {
            // assistent(err);
        });
    }

    /**
     * Insert a new doc in the database
     * @param {Object} query Query to be executed
     * @param {Object} options Options to be applied to the query
     * @param {Callback} assistent Callback function retrieve data
     */
    list(query, options, assistent) {
        'use strict';
        var self = this;
        co(function*() {
            /* get the database connection instance */
            var db = yield self.getConnection();

            var docs = yield db.collection(self.collectionName)
                .find(query, options)
                .toArray(function(err, gun) {
                    self.result = gun;
                    assistent(err, gun);
                });
            /* close the dabase connection */
            self.closeConnection(db);
        }).catch(function(err) {
            // assistent(err);
        });
    }

    /**
     * @param {Object} query Object with the query params
     * @returns query Returns query object with _id element converted to the mongodb ObjectId
     */
    convertObjectId(query) {
        (!query.hasOwnProperty('_id')) ? null:
            query._id = new mongodb.ObjectID(query._id);
        return query;
    }
}

module.exports = DBConnector;
