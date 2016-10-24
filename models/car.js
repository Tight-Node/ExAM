function Car() {}

/* adding new data property */
Object.defineProperty(Car.prototype, "_brand", {
    value: 'Ferrari'
});

/* adding accessor property */
Object.defineProperty(Car.prototype, "brand", {
    get: function() {
        return this._brand;
    },
    set: function(value) {
        this._brand = value;
    },
});

module.exports = Car;
