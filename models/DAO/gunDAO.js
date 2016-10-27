'use strict';

/**
 * @file GunDAO
 */

var DBConnector = require('../../libs/DBConnector');

/**
 * Implements a data access object to deal with a gun model.
 * @author Thiago Mallon <thiagomallon@gmail.com>
 * @extends DBConnector
 */
class GunDAO extends DBConnector {

    /**
     * Constructor method from GunDAO. This constructor is calling the parent constructor.
     */
    constructor() {
        super();
        /**
         * @prop {String} dbName Stores database name to be instantiated
         */
        this.dbName = 'alongDWay';
        /**
         * @prop {String} collectionName Stores collection name
         */
        this.collectionName = 'gun';
    }

    /**
     * Creates a new doc in database
     */
    create() {}

    /**
     * Implements searching/listing of docs in mongodb database
     * @param {Object} params Params to the searching criteria
     * @param {Callback} assistent Callback func to be called
     */
    read(params, assistent) {
        let criteria = {};
        for (let param in params) {
            if (params[param] && params[param] !== '*') {
                criteria[param] = new RegExp(params[param], "i");
            }
        }
        this.list(criteria, function(err, res) {
            assistent(err, res);
        });
    }

    /**
     *
     */
    update() {}

    /**
     *
     */
    delete() {}
}

module.exports = GunDAO;
