'use strict';

const chai = require('chai');
const expect = chai.expect;

/** @namespace describe */
/** @namespace it */

const lei = require('../src/lei');

describe('lei-generate', function() {
    it('Check inelligible input (null, undefined, not a string or number)', function() {
        expect(function() { 
            lei.generate(null); 
        }).to.throw('Expecting value of type \'string\', found: \'null\'');
        expect(function() { 
            lei.generate(undefined); 
        }).to.throw('Expecting value of type \'string\', found: \'undefined\'');
        expect(function() { 
            lei.generate([]); 
        }).to.throw('Expecting value of type \'string\', found: \'object\'');
    });

    it('Check input value format, excepted /^[0-9A-Z]{18}$/', function() {
        expect(function() {
            lei.generate('');
        }).to.throw('Exception value of format \'/^[0-9A-Z]{18}$/\', found: \'\'');
        expect(function() {
            lei.generate('0123456');
        }).to.throw('Exception value of format \'/^[0-9A-Z]{18}$/\', found: \'0123456\'');
        expect(function() {
            lei.generate('969500T3MBS4SQAMHJ4A');
        }).to.throw('Exception value of format \'/^[0-9A-Z]{18}$/\', found: \'969500T3MBS4SQAMHJ4A\'');
    });

    it('Check return with elligible value', function() {
        expect(lei.generate('969500T3M8S4SQAMHJ')).eq('969500T3M8S4SQAMHJ45');
        expect(lei.generate('969500KSV493XWY0PS')).eq('969500KSV493XWY0PS33');
        expect(lei.generate('7245005WBNJAFHBD0S')).eq('7245005WBNJAFHBD0S30');
        expect(lei.generate('724500VKKSH9QOLTFR')).eq('724500VKKSH9QOLTFR81');
        expect(lei.generate('724500884QS64MG71N')).eq('724500884QS64MG71N64');
    });
});
