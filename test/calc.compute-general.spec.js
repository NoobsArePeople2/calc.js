'use strict';

let expect  = require('chai').expect;
let compute = require('../src/calc').compute;

describe('compute general', () => {

    context('arithmetic', () => {

        it('should evaluate "1 + 2 - 3 + 4"', () => {
            expect(compute('1 + 2 - 3 + 4')).to.equal(4);
        });

        it('should evaluate "1 + 2 - 3 / 4 * 5"', () => {
            expect(compute('1 + 2 - 3 / 4 * 5')).to.be.closeTo(-0.75, 0.01);
        });

        it('should evaluate "1 + 2 - 3 * 4"', () => {
            expect(compute('1 + 2 - 3 * 4')).to.equal(-9);
        });

        it('should evaluate "1 - 2 + 3 * 4"', () => {
            expect(compute('1 - 2 + 3 * 4')).to.equal(11);
        });

        it('should evaluate "1 + 2 + 3 / 4"', () => {
            expect(compute('1 + 2 + 3 / 4')).to.be.closeTo(3.75, 0.01);
        });

        it('should evaluate "1 - 2 - 3 / 4"', () => {
            expect(compute('1 - 2 - 3 / 4')).to.equal(-1.75);
        });

        it('should evaluate "(1 + 2 - 3) / (4 * 5)"', () => {
            expect(compute('(1 + 2 - 3) / (4 * 5)"')).to.equal(0);
        });

        it('should evaluate "1 - (2 + 3) + 1"', () => {
            expect(compute('1 - (2 + 3) + 1')).to.equal(-3);
        });

        it('should evaluate "-1 + 3 + (6 - 0)"', () => {
            expect(compute('-1 + 3 + (6 - 0)')).to.equal(8);
        });

        it('should evaluate "-1 - 5 - (10 + 1)"', () => {
            expect(compute('-1 - 5 - (10 + -1)')).to.equal(-15);
        });

        it('should evaluate "(6 + 4) - 10"', () => {
            expect(compute('(6 + 4) - 10')).to.equal(0);
        });

        it('should evaluate "5 * (1 + 1) - -2"', () => {
            expect(compute('5 * (1 + 1) - -2')).to.equal(12);
        });

        it('should evaluate "(10 - 5) / 5"', () => {
            expect(compute('(10 - 5) / 5')).to.equal(1);
        });

        it('should evaluate "(1 + 2) * (3 + 4)"', () => {
            expect(compute('(1 + 2) * (3 + 4)')).to.equal(21);
        });

        it('should evaluate "9 / (2 + 3 + 4)"', () => {
            expect(compute('9 / (2 + 3 + 4)')).to.equal(1);
        });

        it('should evaluate "(1 + 2 + 3) / 0"', () => {
            expect(compute('(1 + 2 + 3) / 0')).to.equal(+Infinity);
        });

    });

    context('junk values', () => {

        it('should evaluate expression "NaN" to be NaN', () => {
            expect(compute('NaN')).to.be.NaN;
        });

        it('should evaluate NaN to be NaN', () => {
            expect(compute(NaN)).to.be.NaN;
        });

        it('should evaluate "undefined" to be NaN', () => {
            expect(compute('undefined')).to.be.NaN;
        });

        it('should evaluate undefined to be NaN', () => {
            expect(compute(undefined)).to.be.NaN;
        });

        it('should evaluate "null" to be NaN', () => {
            expect(compute('null')).to.be.NaN;
        });

        it('should evaluate null to be NaN', () => {
            expect(compute(null)).to.be.NaN;
        });

        it('should evaluate {} to be NaN', () => {
            expect(compute({})).to.be.NaN;
        });

        it('should evaluate [] to be NaN', () => {
            expect(compute([])).to.be.NaN;
        });

        it('should evaluate +Infinity to be NaN', () => {
            expect(compute(+Infinity)).to.be.NaN;
        });

        it('should evaluate -Infinity to be NaN', () => {
            expect(compute(-Infinity)).to.be.NaN;
        });
    });
});