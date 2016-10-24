/**
 * @file Gun model
 */

/**
 * @author Thiago Mallon <thiagomallon@gmail.com>
 * @class Gun
 */
var Gun = {};

Object.defineProperty(Gun, '__id', {
    value: 'this is gun std class',
    writable: true,
    enumerable: false,
    configurable: false
});

Object.defineProperty(Gun, 'brand', {
    get: function() {
        console.log('getting brand property');
        return this._brand;
    },
    set: function(value) {
        console.log('setting brand property');
        this._brand = value;
    },
    enumerable: true,
    configurable: false
});

Object.defineProperty(Gun, '_id', {
    get: function() {
        console.log('getting _id property');
        return this.__id;
    },
    set: function(value) {
        console.log('setting _id property');
        this.__id = value;
    },
    enumerable: true,
    configurable: false
});

module.exports = Gun;
