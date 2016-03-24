'use strict';

let expect  = require('chai').expect;
let compute = require('../src/calc').compute;

describe('compute multiplication', () => {

    context('integers', () => {

        it('should multiply "1 * 0"', () => {
            expect(compute('1 * 0')).to.equal(0);
        });

        it('should multiply "0 * 1"', () => {
            expect(compute('0 * 1')).to.equal(0);
        });

        it('should multiply "1 * 1"', () => {
            expect(compute('1 * 1')).to.equal(1);
        });

        it('should multiply "1*1"', () => {
            expect(compute('1*1')).to.equal(1);
        });

        it('should multiply "10 * 0"', () => {
            expect(compute('10 * 0')).to.equal(0);
        });

        it('should multiply "0 * 10', () => {
            expect(compute('0 * 10')).to.equal(0);
        });

        it('should multiply "10 * 1', () => {
            expect(compute('10 * 1')).to.equal(10);
        });

        it('should multiply "1 * 10"', () => {
            expect(compute('1 * 10')).to.equal(10);
        });

        it('should multiply "10 * 10"', () => {
            expect(compute('10 * 10')).to.equal(100);
        });

        it('should multiply "1 * -1"', () => {
            expect(compute('1 * -1')).to.equal(-1);
        });

        it('should multiply "1 * -10"', () => {
            expect(compute('1 * -10')).to.equal(-10);
        });

        it('should multiply "-1 * -1"', () => {
            expect(compute('-1 * -1')).to.equal(1);
        });

        it('should multiply "1 * -(2 * 2)"', () => {
            expect(compute('1 * -(2 * 2)')).to.equal(-4);
        });

        it('should multiply "(6 * 7)"', () => {
            expect(compute('(6 * 7)')).to.equal(42);
        })

        it('should multiply "100 * 1"', () => {
            expect(compute('100 * 1')).to.equal(100);
        });

        it('should multiply "1 * 100"', () => {
            expect(compute('1 * 100')).to.equal(100);
        });

        it('should multiply "-100 * 1"', () => {
            expect(compute('-100 * 1')).to.equal(-100);
        });

        it('should multiply "100 * -1"', () => {
            expect(compute('100 * -1')).to.equal(-100);
        });

        it('should multiply "1 * 2 * 3 * 4 * 5"', () => {
            expect(compute('1 * 2 * 3 * 4 * 5')).to.equal(120);
        });

        it('should multiply "1 * 3 * 2 * 5 * 4"', () => {
            expect(compute('1 * 3 * 2 * 5 * 4')).to.equal(120);
        });

        it('should multiply "100000 * 100 * 20 * 1"', () => {
            expect(compute('100000 * 100 * 20 * 1')).to.equal(200000000);
        });
    });

    context('floats', () => {

        it('should multiply "1.0 * 0.0"', () => {
            expect(compute('1.0 * 0.0')).to.be.closeTo(0.0, 0.01);
        });

        it('should multiply "0.0 * 1.0"', () => {
            expect(compute('0.0 * 1.0')).to.be.closeTo(0.0, 0.01);
        });

        it('should multiply "1.0 * 1.0"', () => {
            expect(compute('1.0 * 1.0')).to.be.closeTo(1.0, 0.01);
        });

        it('should multiply "1.1 * 1.0"', () => {
            expect(compute('1.1 * 1.0')).to.be.closeTo(1.1, 0.01);
        });

        it('should multiply "1.1*1.0"', () => {
            expect(compute('1.1*1.0')).to.be.closeTo(1.1, 0.01);
        });

        it('should multiply "20.123 * 1.2"', () => {
            expect(compute('20.123 * 1.2')).to.be.closeTo(24.1476, 0.0001);
        });

        it('should multiply "11.111 * -12.32"', () => {
            expect(compute('11.111 * -12.32')).to.be.closeTo(-136.88752, 0.0001);
        });

        it('should multiply "1.0 * -1.0"', () => {
            expect(compute('1.0 * -1.0')).to.be.closeTo(-1.0, 0.01);
        });

        it('should multiply "1.1 * -(2.2 * 2.456)"', () => {
            expect(compute('1.1 * -(2.2 * 2.456)')).to.be.closeTo(-5.94352, 0.0001);
        });

        it('should multiply "-4.211 * -3.456"', () => {
            expect(compute('-4.211 * -3.455')).to.be.closeTo(14.549005, 0.0001);
        });

        it('should multiply "102.43123 * 1.00"', () => {
            expect(compute('102.43123 * 1.00')).to.be.closeTo(102.43123, 0.000001);
        });

        it('should multiply "1.00 * 102.43123"', () => {
            expect(compute('1.00 * 102.43123')).to.be.closeTo(102.43123, 0.000001);
        });

        it('should multiply "-102.43123 * 1.00"', () => {
            expect(compute('-102.43123 * 1.00')).to.be.closeTo(-102.43123, 0.000001);
        });

        it('should multiply "1.00 * -102.43123"', () => {
            expect(compute('1.00 * -102.43123')).to.be.closeTo(-102.43123, 0.000001);
        });

        it('should multiply "1.1 * 2.3 * 5.234 * 5.567"', () => {
            expect(compute('1.1 * 2.3 * 5.234 * 5.567')).to.be.closeTo(73.71832534, 0.0001);
        });

        it('should multiply "5.567 * 1.1 * 5.234 * 2.3"', () => {
            expect(compute('5.567 * 1.1 * 5.234 * 2.3')).to.be.closeTo(73.71832534, 0.0001);
        });

        it('should multiply "89.234 * 1999999.123 * -823472.234234"', () => {
            expect(compute('89.234 * 1999999.123 * -823472.234234')).to.be.closeTo(-146963378255803.888368564988, 0.0000000000001);
        });

    });

    context('integers + floats', () => {

        it('should multiply "1 * 0.0"', () => {
            expect(compute('1 * 0.0')).to.closeTo(0.0, 0.01);
        });

        it('should multiply "0.0 * 1"', () => {
            expect(compute('0.0 * 1')).to.closeTo(0.0, 0.01);
        });

        it('should multiply "1.0 * 0"', () => {
            expect(compute('1.0 * 0')).to.closeTo(0.0, 0.01);
        });

        it('should multiply "0 * 1.0"', () => {
            expect(compute('0 * 1.0')).to.closeTo(0.0, 0.01);
        });

        it('should multiply "1 * 1.0"', () => {
            expect(compute('1 * 1.0')).to.be.closeTo(1.0, 0.01);
        });

        it('should multiply "1.0 * 1"', () => {
            expect(compute('1.0 * 1')).to.be.closeTo(1.0, 0.01);
        });

        it('should multiply "1*1.0"', () => {
            expect(compute('1*1.0')).to.be.closeTo(1.0, 0.01);
        });

        it('should multiply "1.0*1"', () => {
            expect(compute('1.0*1')).to.be.closeTo(1.0, 0.01);
        });

        it('should multiply "10 * 1.0"', () => {
            expect(compute('10 * 1.0')).to.be.closeTo(10.0, 0.01);
        });

        it('should multiply "1.0 * 10"', () => {
            expect(compute('1.0 * 10')).to.be.closeTo(10.0, 0.01);
        });

        it('should multiply "1 * -1.0"', () => {
            expect(compute('1 * -1.0')).to.be.closeTo(-1.0, 0.01);
        });

        it('should multiply "-1.0 * 1"', () => {
            expect(compute('-1.0 * 1')).to.be.closeTo(-1.0, 0.01);
        });

        it('should multiply "10.0 * 10"', () => {
            expect(compute('10.0 * 10')).to.be.closeTo(100.0, 0.01);
        });

        it('should multiply "10 * 10.0"', () => {
            expect(compute('10 * 10.0')).to.be.closeTo(100.0, 0.01);
        });

        it('should multiply "-1 * -1.0"', () => {
            expect(compute('-1 * -1.0')).to.be.closeTo(1.0, 0.01);
        });

        it('should multiply "-1.0 * -1"', () => {
            expect(compute('-1.0 * -1')).to.be.closeTo(1.0, 0.01);
        });

        it('should multiply "1.0 * -(2.0 * 2)"', () => {
            expect(compute('1.0 * -(2.0 * 2)')).to.be.closeTo(-4.0, 0.01);
        });

        it('should multiply "-100 * 0.923123"', () => {
            expect(compute('-100 * 0.923123')).to.be.closeTo(-92.3123, 0.00001);
        });

        it('should multiply "0.923123 * -100"', () => {
            expect(compute('0.923123 * -100')).to.be.closeTo(-92.3123, 0.00001);
        });

        it('should multiply "0.131234 * 5 * 6 * 13123.123994"', () => {
            expect(compute('0.131234 * 5 * 6 * 13123.123994')).to.be.closeTo(51666.00162685788, 0.00000000001);
        });

        it('should multiply "5 * 0.131234 * 6 * 13123.123994"', () => {
            expect(compute('5 * 0.131234 * 6 * 13123.123994')).to.be.closeTo(51666.00162685788, 0.00000000001);
        });

        it('should multiply "4234 * -42343.123123 * 999999.999999"', () => {
            expect(compute('4234 * -42343.123123 * 999999.999999')).to.be.closeTo(-179280783302602.719216697218, 0.0000000000001);
        });

        it('should multiply "-42343.123123 * 4234 * 999999.999999"', () => {
            expect(compute('-42343.123123 * 4234 * 999999.999999')).to.be.closeTo(-179280783302602.719216697218, 0.0000000000001);
        });
    });

    context('order of operations', () => {

        it('should multiply "1 * 2 * (3 * 4)"', () => {
            expect(compute('1 * 2 * (3 * 4)')).to.equal(24);
        });

        it('should multiply "(1) * (2) * (3 * 4)"', () => {
            expect(compute('1 * 2 * (3 * 4)')).to.equal(24);
        });

        it('should compute "((1 * 2) * (3 * 4))"', () => {
            expect(compute('((1 * 2) * (3 * 4))')).to.equal(24);
        });

        it('should compute "(1 * 2) * (3 * 4)"', () => {
            expect(compute('(1 * 2) * (3 * 4)')).to.equal(24);
        });

        it('should compute "1 * (2 * (3 * 4))"', () => {
            expect(compute('1 * (2 * (3 * 4))')).to.equal(24);
        });

        it('should compute "1 * (2 * 3) * 4"', () => {
            expect(compute('1 * (2 * 3) * 4')).to.equal(24);
        });
    });

    context('junk values', () => {

        it('should evaluate expression "4 *" to be NaN', () => {
            expect(compute('4 *')).to.be.NaN;
        });

        it('should evaluate expression "4**" to be NaN', () => {
            expect(compute('4**')).to.be.NaN;
        });

        it('should evaluate expression "*4" to be NaN', () => {
            expect(compute('*4')).to.be.NaN;
        });

        it('should evaluate "a * b * c" to be NaN', () => {
            expect(compute('a * b * c')).to.be.NaN;
        });

        it('should evaluate "5 * NaN" to be NaN', () => {
            expect(compute('5 * NaN')).to.be.NaN;
        });

        it('should evaluate "(5 * 4" to be NaN', () => {
            expect(compute('(5 * 4')).to.be.NaN;
        });

        it('should evaluate "5 * 4)" to be NaN', () => {
            expect(compute('5 * 4)')).to.be.NaN;
        });

        it('should evaluate ")5 * 4(" to be NaN', () => {
            expect(compute(')5 * 4(')).to.be.NaN;
        });
    });
});