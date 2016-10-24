/**
 * @file Gunproto model
 */

/**
 * Represents a gun.
 * @author Thiago Mallon <thiagomallon@gmail.com>
 * @class Gunproto
 */
function Gunproto() {
    /**
     * @memberof Gunproto
     * @property {String} _id The default values for parties.
     */
    this._id;
    /**
     * @memberof Gunproto
     * @property {String} brand The default values for parties.
     */
    this.brand;
    /**
     * @memberof Gunproto
     * @property {String} serie The default values for parties.
     */
    this.serie;
    /**
     * @memberof Gunproto
     * @property {String} caliber The default values for parties.
     */
    this.caliber;
    /**
     * @memberof Gunproto
     * @property {String} ammos The default values for parties.
     */
    this.ammos;
}

/**
 * @memberof Gunproto
 * @method getId
 * @returns {String} Gunproto._id Returns the id from the object
 */
Gunproto.prototype.getId = function() {
    return this._id;
}

/**
 * @memberof Gunproto
 * @param {String} value Value to set _id property
 */
Gunproto.prototype.setId = function(value) {
    this._id = value;
}

/**
 * @memberof Gunproto
 * @returns {String} Gunproto.brand Returns the id from the object
 */
Gunproto.prototype.getBrand = function() {
    return this.brand;
}

/**
 * @memberof Gunproto
 * @param {String} value Value to set brand property
 */
Gunproto.prototype.setBrand = function(value) {
    this.brand = value;
}

module.exports = Gunproto;
