'use strict';

/**
 * @file Gunes model
 */

/**
 * Represents a gun.
 * @author Thiago Mallon <thiagomallon@gmail.com>
 */
class Gunes {
    /**
     * Initializes the object
     * @param {String} _id Sets the _id property value
     * @param {String} brand Sets the brand property value
     * @param {String} serie Sets the serie property value
     * @param {String} caliber Sets the caliber property value
     * @param {String} ammos Sets the ammos property value
     */
    constructor(_id, brand, serie, caliber, ammos) {
        /**
         * Property stores the object _id
         * @prop {String} _id The default values for parties.
         */
        this._id = _id;
        /**
         * Property stores the object brand
         * @prop {String} brand The default values for parties.
         */
        this.brand = brand;
        /**
         * Property stores the object brand
         * @prop {String} serie The default values for parties.
         */
        this.serie = serie;
        /**
         * Property stores the object serie
         * @prop {String} caliber The default values for parties.
         */
        this.caliber = caliber;
        /**
         * Property stores the object ammos
         * @prop {String} ammos The default values for parties.
         */
        this.ammos = ammos;
    }

    /**
     * Returns the object _id property
     * @returns {String} _id Returns the id from the object
     */
    getId() {
        return this._id;
    }

    /**
     * Sets the object _id property value
     * @param {String} value Value to set _id property
     */
    setId(value) {
        this._id = value;
    }

    /**
     * Returns the object brand property
     * @returns {String} brand Returns the id from the object
     */
    getBrand() {
        return this.brand;
    }

    /**
     * Sets the object brand property
     * @param {String} value Value to set brand property
     */
    setBrand(value) {
        this.brand = value;
    }
}

module.exports = Gunes;
