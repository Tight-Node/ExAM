'use strict';

class DAO {
    constructor() {
            if (this.constructor === DAO) {
                // Error Type 1. DAO class can not be constructed.
                throw new TypeError("Can not construct abstract class.");
            }
            //else (called from child)
            // Check if all instance methods are implemented.
            if (this.create === DAO.prototype.create) {
                // Error Type 4. Child has not implemented this abstract method.
                throw new TypeError("Please implement abstract method foo.");
            }
        }
        // An abstract method.
    create() {
        // Error Type 6. The child has implemented this method but also called `super.create()`.
        throw new TypeError("Do not call abstract method create from child.");
    }
    static create() {
        if (this === DAO) {
            // Error Type 2. DAO methods can not be called directly.
            throw new TypeError("Can not call static abstract method create.");
        } else if (this.create === DAO.create) {
            // Error Type 3. The child has not implemented this method.
            throw new TypeError("Please implement static abstract method create.");
        } else {
            // Error Type 5. The child has implemented this method but also called `super.create()`.
            throw new TypeError("Do not call static abstract method create from child.");
        }
    }
}
