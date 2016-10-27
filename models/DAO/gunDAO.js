'use strict';

/**
 * @file GunDAO
 */

var DBConnector = require('../../libs/DBConnector');

/**
 * Implements a data access object to deal with a gun model.
 * @author Thiago Mallon <thiagomallon@gmail.com>
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
        // console.log(this.dbName);
        this.dbName = 'alongDWay';
        /**
         * @prop {String} collectionName Stores collection name
         */
        this.collectionName = 'gun';
    }

    /**
     * Creates a new gun in database
     */
    create() {}

    /**
     * Sets the object ammos property
     * @param {String} value Value to set ammos property
     * @param {Object} cb Value to set ammos property
     */
    read(paramVal, assistent) {
        this.list(function(err, res) {
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
