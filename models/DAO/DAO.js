'use strict';

class DAO {
    constructor() {
            if (this.constructor === DAO) {
                // Error Type 1. DAO class can not be constructed.
                throw new TypeError("Can not instantiate abstract class.");
            }
            // Check if all instance methods are implemented.
            if (this.create === DAO.prototype.create) {
                // Error Type 4. Child has not implemented this abstract method.
                throw new TypeError("Please implement abstract method create.");
            }
            if (this.read === DAO.prototype.read) {
                // Error Type 4. Child has not implemented this abstract method.
                throw new TypeError("Please implement abstract method read.");
            }
            if (this.update === DAO.prototype.update) {
                // Error Type 4. Child has not implemented this abstract method.
                throw new TypeError("Please implement abstract method update.");
            }
            if (this.delete === DAO.prototype.delete) {
                // Error Type 4. Child has not implemented this abstract method.
                throw new TypeError("Please implement abstract method delete.");
            }
        }
        // An abstract method.
    create(obj) {
        // Error Type 6. The child has implemented this method but also called `super.create()`.
        throw new TypeError("Do not call abstract method create from child.");
    }
    read() {
        // Error Type 6. The child has implemented this method but also called `super.create()`.
        throw new TypeError("Do not call abstract method read from child.");
    }
    update() {
        // Error Type 6. The child has implemented this method but also called `super.create()`.
        throw new TypeError("Do not call abstract method update from child.");
    }
    delete() {
        // Error Type 6. The child has implemented this method but also called `super.create()`.
        throw new TypeError("Do not call abstract method delete from child.");
    }

}

module.exports = DAO;
