var Gun = {
        "_id": String,
        "brand": String,
        "category": String,
        "serie": String,
        "caliber": String,
        "ammos": [String]
    },
    {
        collection: 'gun'
    });

Object.defineProperty(Gun, '_id', {
    value: 'ijoiasjdf',
});

Object.defineProperty(Gun, 'brand', {
    get: function() {
        return this._brand;
    },
    set: function(value) {
        this._brand = value;
    },
    // enumerable: true,
    configurable: false
});

module.exports = Gun;
