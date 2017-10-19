'use strict';

const chai = require('chai');
const expect = chai.expect;

/** @namespace describe */
/** @namespace it */

const lei = require('../src/lei');

describe('lei-getMod97', function() {
    it('Check return with elligible value', function() {
        expect(lei.getMod97('969500T3M8S4SQAMHJ')).eq(50);
        expect(lei.getMod97('969500KSV493XWY0PS')).eq(54);
        expect(lei.getMod97('7245005WBNJAFHBD0S')).eq(55);
        expect(lei.getMod97('724500VKKSH9QOLTFR')).eq(38);
        expect(lei.getMod97('724500884QS64MG71N')).eq(76);
        expect(lei.getMod97('724500884QS64MG71N64')).eq(1);
    });
});
