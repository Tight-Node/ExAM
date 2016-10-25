'use strict';

/**
 * @file GunDAO
 */

var DAO = require('./DAO');

/**
 * Represents a gun.
 * @author Thiago Mallon <thiagomallon@gmail.com>
 */
class GunDAO extends DAO {
    constructor() {
        super();
    }
    create() {}
    read() {}
    update() {}
    delete() {}
}

module.exports = GunDAO;
