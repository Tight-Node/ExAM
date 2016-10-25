'use strict';

class GunDAO extends DAO {
    static create() {
        // Calls Abstract.create();
        super.create();
    }
    create() {
        // Calls Abstract.prototype.create();
        super.create();
    }
}

module.export = GunDAO;
