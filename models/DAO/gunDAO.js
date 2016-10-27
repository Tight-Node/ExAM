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
     * @returns {Object} res The return from mongodb find()
     */
    read(paramVal, cb) {
        console.log('reading');
        this.list();
        // if (Object.keys(paramVal).length) {
        // var query = {};
        // for (p in paramVal) {
        //     if (paramVal[p] != undefined) query[p] = paramVal[p];
        // }
        // var gunner = Gun.find(query).exec(cb);
        // return gunner;
        // }
        // return Gun.find({}).exec(cb);
        return {};
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
