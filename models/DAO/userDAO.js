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
     * @param {Object} params Params to the searching query
     * @param {Object} options Object of options to be applied to the query
     * @param {Callback} assistent Callback func to be called
     */
    create(params, options, assistent) {
        'use strict';
        var query = this.caseInsensitiveParam(params);
        this.list(query, options, function(err, res) {
            assistent(err, res);
        });
    }

    /**
     * Implements searching/listing of docs in mongodb database
     * @param {Object} params Params to the searching query
     * @param {Object} options Object of options to be applied to the query
     * @param {Callback} assistent Callback func to be called
     */
    read(params, options, assistent) {
        'use strict';
        var query = this.caseInsensitiveParam(params);
        this.list(query, options, function(err, res) {
            assistent(err, res);
        });
    }

    /**
     * Update docs in database
     * @param {Object} params Params to the searching query
     * @param {Object} options Object of options to be applied to the query
     * @param {Callback} assistent Callback func to be called
     */
    update(params, options, assistent) {
        'use strict';
        var query = this.caseInsensitiveParam(params);
        this.list(query, options, function(err, res) {
            assistent(err, res);
        });
    }

    /**
     * Implements searching/listing of docs in mongodb database
     * @param {Object} params Params to the searching query
     * @param {Object} options Object of options to be applied to the query
     * @param {Callback} assistent Callback func to be called
     */
    delete(params, options, assistent) {
        'use strict';
        var query = this.caseInsensitiveParam(params);
        this.remove(query, options, function(err, res) {
            assistent(err, res);
        });
    }

    /**
     * Method applies case-insensitive to the param's object values. It will not
     * to be applied to the _id element.
     * @param {Object} params Object to be scaped
     * @returns {Object} query Scaped object
     */
    caseInsensitiveParam(params) {
        var query = {};
        for (let param in params) {
            if (params[param] && params[param] !== '*') {
                (param === '_id') ?
                query[param] = params[param]:
                    query[param] = new RegExp(params[param], "i");
            }
        }
        return query;
    }
}

module.exports = UserDAO;
