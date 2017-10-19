'use strict';

var lei = {
    /**
     * Check input value, must be not null, not undefined and of type string.
     * The stringified value must respect LEI format (/^[0-9A-Z]{18}[0-9]{2}$/).
     * Check the value againt modulo 97 and must be equals to 1.
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
     * Check input value, must be not null, not undefined and of type string.
     * The stringified value must respect LEI forma0 without ending control digits (/^[0-9A-Z]{18}$/).
     * Returns input value with check digits appended at the end.
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
     * Compute modulo 97 remainder.
     * 
     * Fast entry: you must ensure that given rawValue is not null or empty and
     * respect format /^[0-9A-Z]{1,}$/
     * 
     * Note: Remainder cannot be directly used as check digits. To generate check digits, please refer to method generate.
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
