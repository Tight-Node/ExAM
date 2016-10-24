/**
 * @file Gunes model
 */

/**
 * Represents a gun.
 * @author Thiago Mallon <thiagomallon@gmail.com>
 */
class Gunes {
    /**
     * @constructor
     */
    constructor() {
        /**
         * @prop {String} _id The default values for parties.
         */
        this._id;
        /**
         * @prop {String} brand The default values for parties.
         */
        this.brand;
        /**
         * @prop {String} serie The default values for parties.
         */
        this.serie;
        /**
         * @prop {String} caliber The default values for parties.
         */
        this.caliber;
        /**
         * @prop {String} ammos The default values for parties.
         */
        this.ammos;
    }


    /**
     * @returns {String} _id Returns the id from the object
     */
    getId() {
        return this._id;
    }

    /**
     * @param {String} value Value to set _id property
     */
    setId(value) {
        this._id = value;
    }

    /**
     * @returns {String} brand Returns the id from the object
     */
    getBrand() {
        return this.brand;
    }

    /**
     * @param {String} value Value to set brand property
     */
    setBrand(value) {
        this.brand = value;
    }
}

module.exports = Gunes;
