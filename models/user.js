/**
 * @file Represents a User model class
 */

/**
 * Represents a user model.
 * @author Thiago Mallon <thiagomallon@gmail.com>
 */
class User {

    /**
     * Initializes the object
     * @param {String} _id Sets the _id property value
     * @param {String} name Sets the fist and last name property value
     * @param {String} email Sets the email property value
     * @param {String} age Sets the age property value
     * @param {String[]} skills Sets the skills property value
     * @param {String} created Sets the created property value
     * @param {String[]} logins Sets the logins property value
     */
    constructor(_id, fistName, lastName, email, age, skills, created, logins) {
        'use strict';
        super();

        /**
         * Property stores the object _id
         * @prop {String} _id The default values for parties.
         */
        this._id = _id;

        /**
         * Property stores the object name
         * @prop {string} name The default values for parties.
         */
        this.name = {
            'first': null,
            'last': null
        };

        /**
         * Property stores the object name.first
         * @prop {string} name.first The default values for parties.
         */
        this.name.first = firstName;

        /**
         * Property stores the object name.last
         * @prop {string} name.last The default values for parties.
         */
        this.name.last = lastName;

        /**
         * Property stores the object nameLast
         * @prop {String} nameLast The default values for nameLast.
         */
        this.nameLast = nameLast;

        /**
         * Property stores the object email
         * @prop {String} email The default values for parties.
         */
        this.email = email;

        /**
         * Property stores the object age
         * @prop {String} age The default values for aget.
         */
        this.age = age;

        /**
         * Property stores the object skills
         * @prop {String[]} skills The default values for skillst.
         */
        this.skills = skills;

        /**
         * Property stores the object created
         * @prop {String[]} created The default values for createdt.
         */
        this.created = created;

        /**
         * Property stores the object logins
         * @prop {String[]} logins The default values for loginst.
         */
        this.logins = logins;
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
     * Returns the object name.first property
     * @returns {String} name.first Returns the id from the object
     */
    getFirstName() {
        'use strict';
        return this.name.first;
    }

    /**
     * Sets the object name.first property value
     * @param {String} value Value to set name.first property
     */
    setFirstName(value) {
        'use strict';
        this.name.first = value;
    }

    /**
     * Returns the object name.last property
     * @returns {String} name.last Returns the id from the object
     */
    getLastName() {
        'use strict';
        return this.name.last;
    }

    /**
     * Sets the object name.last property value
     * @param {String} value Value to set nameLast property
     */
    setLastName(value) {
        'use strict';
        this.name.last = value;
    }

    /**
     * Returns the object email property
     * @returns {String} email Returns the id from the object
     */
    getEmail() {
        'use strict';
        return this.email;
    }

    /**
     * Sets the object email property value
     * @param {String} value Value to set email property
     */
    setEmail(value) {
        'use strict';
        this.email = value;
    }

    /**
     * Returns the object age property
     * @returns {String} age Returns the id from the object
     */
    getAge() {
        'use strict';
        return this.age;
    }

    /**
     * Sets the object age property value
     * @param {String} value Value to set age property
     */
    setAge(value) {
        'use strict';
        this.age = value;
    }

    /**
     * Returns the object skills property
     * @returns {String[]} skills Returns the id from the object
     */
    getSkills() {
        'use strict';
        return this.skills;
    }

    /**
     * Sets the object skills property value
     * @param {String[]} value Value to set skills property
     */
    setSkills(value) {
        'use strict';
        this.skills = value;
    }

    /**
     * Returns the object created property
     * @returns {String} created Returns the id from the object
     */
    getCreated() {
        'use strict';
        return this.created;
    }

    /**
     * Sets the object created property value
     * @param {String} value Value to set created property
     */
    setCreated(value) {
        'use strict';
        this.created = value;
    }

    /**
     * Returns the object logins property
     * @returns {String[]} logins Returns the id from the object
     */
    getLogins() {
        'use strict';
        return this.logins;
    }

    /**
     * Sets the object logins property value
     * @param {String[]} value Value to set logins property
     */
    setLogins(value) {
        'use strict';
        this.logins = value;
    }
}

module.exports = User;
