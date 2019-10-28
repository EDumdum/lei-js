'use strict';

var iso7064 = require('iso-7064');

var lei = {
    /**
     * Check requirements.  
     * Returns if the LEI check digits are valid.
     *
     * Requirements:
     * - rawValue must be not `Null`
     * - rawValue must be of type `String`
     * - rawValue must respect format `^[0-9A-Z]{20}$`
     * 
     * @param {*} rawValue 
     */
    isValid: function(rawValue) {
        var value = stringifyInput(rawValue);

        if (!value.match(FORMAT_ISVALID)) {
            throw new Error('Exception value of format \'' + FORMAT_ISVALID + '\', found: \'' + value + '\'');
        }
        
        return iso7064.computeWithoutCheck(value) === 1;
    },

    /**
     * Check requirements.  
     * Returns the LEI check digit appended to the value.
     * 
     * Requirements:
     * - rawValue must be not `Null`
     * - rawValue must be of type `String`
     * - rawValue must respest format `^[0-9A-Z]{18}$`
     * 
     * @param {*} rawValue 
     */
    generate: function(rawValue) {
        var value = stringifyInput(rawValue);

        if (!value.match(FORMAT_GENERATE)) {
            throw new Error('Exception value of format \'' + FORMAT_GENERATE + '\', found: \'' + value + '\'');
        }

        return value + ('0' + (98 - iso7064.computeWithoutCheck(value + '00'))).slice(-2);
    }
};

const FORMAT_ISVALID = /^[0-9A-Z]{18}[0-9]{2}$/;
const FORMAT_GENERATE = /^[0-9A-Z]{18}$/;

function stringifyInput(rawValue) {
    if (rawValue !== null && rawValue !== undefined) {
        switch(typeof rawValue) {
        case 'string':
            return rawValue.toUpperCase();
        default:
            throw new Error('Expecting value of type \'string\', found: \'' + (typeof rawValue) + '\'');
        }
    }

    throw new Error('Expecting value of type \'string\', found: \'' + rawValue + '\'');
}

module.exports = lei;
