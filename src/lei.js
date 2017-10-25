'use strict';

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
    isValid(rawValue) {
        var value = stringifyInput(rawValue);

        if (!value.match(FORMAT_ISVALID)) {
            throw new Error('Exception value of format \'' + FORMAT_ISVALID + '\', found: \'' + value + '\'');
        }
        
        return mod97(value) === 1;
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
    generate(rawValue) {
        var value = stringifyInput(rawValue);

        if (!value.match(FORMAT_GENERATE)) {
            throw new Error('Exception value of format \'' + FORMAT_GENERATE + '\', found: \'' + value + '\'');
        }

        return value + ('0' + (98 - mod97(value + '00'))).slice(-2);
    },

    /**
     * Does NOT check requirements.  
     * Returns the module 97 remainder.
     * Note: 
     *   `getMod97(value) === 1` is equivalent to `isValid(value)`. 
     *   You may want to use this method instead of `isValid` if you ensure argument 
     *   requirements on your side.
     * 
     * Requirements
     * - rawValue must be not `Null`
     * - rawValue must be of type `String`
     * 
     * @param {*} rawValue 
     */
    getMod97(rawValue) {
        return mod97(rawValue);
    }
};

const CHARCODE_A = 'A'.charCodeAt(0);
const CHARCODE_0 = '0'.charCodeAt(0);

const FORMAT_ISVALID = /^[0-9A-Z]{18}[0-9]{2}$/;
const FORMAT_GENERATE = /^[0-9A-Z]{18}$/;

function mod97(value) {
    var buffer = 0;
    var charCode;

    for (var i = 0; i < value.length; ++i) {
        charCode = value.charCodeAt(i);

        buffer = charCode + (charCode >= CHARCODE_A ? buffer * 100 - CHARCODE_A + 10 : buffer * 10 - CHARCODE_0);
        
        if (buffer > 1000000) {
            buffer %= 97;
        }
    }

    return buffer % 97;
}

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
