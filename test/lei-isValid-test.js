'use strict';

const chai = require('chai');
const expect = chai.expect;

/** @namespace describe */
/** @namespace it */

const lei = require('../src/lei');

describe('lei-isValid', function() {
    it('Check inelligible input (null, undefined, not a string or number)', function() {
        expect(function() { 
            lei.isValid(null); 
        }).to.throw('Expecting value of type \'string\', found: \'null\'');
        expect(function() { 
            lei.isValid(undefined); 
        }).to.throw('Expecting value of type \'string\', found: \'undefined\'');
        expect(function() { 
            lei.isValid([]); 
        }).to.throw('Expecting value of type \'string\', found: \'object\'');
    });

    it('Check input value format, excepted /^[0-9A-Z]{18}[0-9]{2}$/', function() {
        expect(function() {
            lei.isValid('');
        }).to.throw('Exception value of format \'/^[0-9A-Z]{18}[0-9]{2}$/\', found: \'\'');
        expect(function() {
            lei.isValid('0123456');
        }).to.throw('Exception value of format \'/^[0-9A-Z]{18}[0-9]{2}$/\', found: \'0123456\'');
        expect(function() {
            lei.isValid('969500T3MBS4SQAMHJ4A');
        }).to.throw('Exception value of format \'/^[0-9A-Z]{18}[0-9]{2}$/\', found: \'969500T3MBS4SQAMHJ4A\'');
        expect(function() {
            lei.isValid('969500T3MBS4SQAMHJ455');
        }).to.throw('Exception value of format \'/^[0-9A-Z]{18}[0-9]{2}$/\', found: \'969500T3MBS4SQAMHJ455\'');
    });
    
    it('Check return with elligible value', function() {
        expect(lei.isValid('969500T3MBS4SQAMHJ45')).eq(false);
        expect(lei.isValid('469500KSV493XWY0PS33')).eq(false);
        expect(lei.isValid('7245005WBNJAF0BD0S30')).eq(false);
        expect(lei.isValid('7245O0VKKSH9QOLTFR81')).eq(false);
        expect(lei.isValid('724500884QS64MG71N60')).eq(false);

        expect(lei.isValid('969500T3M8S4SQAMHJ45')).eq(true);
        expect(lei.isValid('969500KSV493XWY0PS33')).eq(true);
        expect(lei.isValid('7245005WBNJAFHBD0S30')).eq(true);
        expect(lei.isValid('724500VKKSH9QOLTFR81')).eq(true);
        expect(lei.isValid('724500884QS64MG71N64')).eq(true);
    });
});
