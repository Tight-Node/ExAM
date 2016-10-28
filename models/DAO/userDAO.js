/**
 * @file Represents a UserDAO DAO class
 */

var DBConnector = require('../../libs/DBConnector');

/**
 * Implements a data access object to deal with a user model.
 * @author Thiago Mallon <thiagomallon@gmail.com>
 * @extends DBConnector
 */
class UserDAO extends DBConnector {

    /**
     * Constructor method from UserDAO. This constructor is calling the parent constructor.
     */
    constructor() {
        'use strict';
        super();
        /**
         * @prop {String} dbName Stores database name to be instantiated
         */
        this.dbName = 'alongDWay';
        /**
         * @prop {String} collectionName Stores collection name
         */
        this.collectionName = 'users';
    }

    /**
     * Creates a new doc in database
     */
    create() {
        'use strict';
        var query = {};
        for (let param in params) {
            if (params[param] && params[param] !== '*') {
                query[param] = new RegExp(params[param], "i");
            }
        }
        this.list(query, function(err, res) {
            assistent(err, res);
        });
    }

    /**
     * Implements searching/listing of docs in mongodb database
     * @param {Object} params Params to the searching query
     * @param {Callback} assistent Callback func to be called
     */
    read(params, assistent) {
        'use strict';
        var query = {};
        for (let param in params) {
            if (params[param] && params[param] !== '*') {
                query[param] = new RegExp(params[param], "i");
            }
        }
        // this.list(query, {}, function(err, res) {
        this.listAll(query, {}, function(err, res) {
            assistent(err, res);
        });
    }

    /**
     * Update docs in database
     */
    update() {
        'use strict';
        var query = {};
        for (let param in params) {
            if (params[param] && params[param] !== '*') {
                query[param] = new RegExp(params[param], "i");
            }
        }
        this.list(query, function(err, res) {
            assistent(err, res);
        });
    }

    /**
     * Delete docs in database
     */
    delete() {
        'use strict';
        var query = {};
        for (let param in params) {
            if (params[param] && params[param] !== '*') {
                query[param] = new RegExp(params[param], "i");
            }
        }
        this.list(query, function(err, res) {
            assistent(err, res);
        });
    }
}

module.exports = UserDAO;