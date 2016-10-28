/**
 * @file Represents a Gun model class
 */

/**
 * Represents a gun.
 * @author Thiago Mallon <thiagomallon@gmail.com>
 */
class Gun {
    /**
     * Initializes the object
     * @param {String} _id Sets the _id property value
     * @param {String} brand Sets the brand property value
     * @param {String} serie Sets the serie property value
     * @param {String} caliber Sets the caliber property value
     * @param {String} ammos Sets the ammos property value
     */
    constructor(_id, brand, serie, caliber, ammos) {
        'use strict';
        super();
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
        'use strict';
        return this._id;
    }

    /**
     * Sets the object _id property value
     * @param {String} value Value to set _id property
     */
    setId(value) {
        'use strict';
        this._id = value;
    }

    /**
     * Returns the object brand property
     * @returns {String} brand Returns the id from the object
     */
    getBrand() {
        'use strict';
        return this.brand;
    }

    /**
     * Sets the object brand property
     * @param {String} value Value to set brand property
     */
    setBrand(value) {
        'use strict';
        this.brand = value;
    }

    /**
     * Returns the object serie property
     * @returns {String} serie Returns the id from the object
     */
    getSerie() {
        'use strict';
        return this.serie;
    }

    /**
     * Sets the object serie property
     * @param {String} value Value to set serie property
     */
    setSerie(value) {
        'use strict';
        this.serie = value;
    }

    /**
     * Returns the object caliber property
     * @returns {String} caliber Returns the id from the object
     */
    getCaliber() {
        'use strict';
        return this.caliber;
    }

    /**
     * Sets the object caliber property
     * @param {String} value Value to set caliber property
     */
    setCaliber(value) {
        'use strict';
        this.caliber = value;
    }

    /**
     * Returns the object ammos property
     * @returns {String} ammos Returns the id from the object
     */
    getAmmos() {
        'use strict';
        return this.ammos;
    }

    /**
     * Sets the object ammos property
     * @param {String} value Value to set ammos property
     */
    setAmmos(value) {
        'use strict';
        this.ammos = value;
    }
}

module.exports = Gun;
