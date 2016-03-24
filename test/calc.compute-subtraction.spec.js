'use strict';

let expect  = require('chai').expect;
let compute = require('../src/calc').compute;

describe('compute subtraction', () => {

    context('integers', () => {

        it('should subtract "1 - 0"', () => {
            expect(compute('1 - 0')).to.equal(1);
        });

        it('should subtract "0 - 1"', () => {
            expect(compute('0 - 1')).to.equal(-1);
        });

        it('should subtract "1 - 1"', () => {
            expect(compute('1 - 1')).to.equal(0);
        });

        it('should subtract "1-1"', () => {
            expect(compute('1-1')).to.equal(0);
        });

        it('should subtract "10 - 1', () => {
            expect(compute('10 - 1')).to.equal(9);
        });

        it('should subtract "1 - 10"', () => {
            expect(compute('1 - 10')).to.equal(-9);
        });

        it('should subtract "10 - 10"', () => {
            expect(compute('10 - 10')).to.equal(0);
        });

        it('should subtract "1 - -1"', () => {
            expect(compute('1 - -1')).to.equal(2);
        });

        it('should subtract "1 - -10"', () => {
            expect(compute('1 - -10')).to.equal(11);
        });

        it('should subtract "-1 - -1"', () => {
            expect(compute('-1 - -1')).to.equal(0);
        });

        it('should subtract "1 - -(2 - 2)"', () => {
            expect(compute('1 - -(2 - 2)')).to.equal(1);
        });

        it('should subtract "1 - -(2 - 5)"', () => {
            expect(compute('1 - -(2 - 5)')).to.equal(-2);
        });

        it('should subtract "(6 - 7)"', () => {
            expect(compute('(6 - 7)')).to.equal(-1);
        })

        it('should subtract "100 - 1"', () => {
            expect(compute('100 - 1')).to.equal(99);
        });

        it('should subtract "1 - 100"', () => {
            expect(compute('1 - 100')).to.equal(-99);
        });

        it('should subtract "-100 - 1"', () => {
            expect(compute('-100 - 1')).to.equal(-101);
        });

        it('should subtract "100 - -1"', () => {
            expect(compute('100 - -1')).to.equal(101);
        });

        it('should subtract "1 - 2 - 3 - 4 - 5"', () => {
            expect(compute('1 - 2 - 3 - 4 - 5')).to.equal(-13);
        });

        it('should subtract "1 - 3 - 2 - 5 - 4"', () => {
            expect(compute('1 - 3 - 2 - 5 - 4')).to.equal(-13);
        });

        it('should subtract "100000 - 100 - 20 - 1"', () => {
            expect(compute('100000 - 100 - 20 - 1')).to.equal(99879);
        });
    });

    context('floats', () => {

        it('should subtract "1.0 - 0.0"', () => {
            expect(compute('1.0 - 0.0')).to.be.closeTo(1.0, 0.01);
        });

        it('should subtract "0.0 - 1.0"', () => {
            expect(compute('0.0 - 1.0')).to.be.closeTo(-1.0, 0.01);
        });

        it('should subtract "1.0 - 1.0"', () => {
            expect(compute('1.0 - 1.0')).to.be.closeTo(0.0, 0.01);
        });

        it('should subtract "1.1 - 1.0"', () => {
            expect(compute('1.1 - 1.0')).to.be.closeTo(0.1, 0.01);
        });

        it('should subtract "1.1-1.0"', () => {
            expect(compute('1.1-1.0')).to.be.closeTo(0.1, 0.01);
        });

        it('should subtract "20.123 - 1.2"', () => {
            expect(compute('20.123 - 1.2')).to.be.closeTo(18.923, 0.0001);
        });

        it('should subtract "11.111 - -12.32"', () => {
            expect(compute('11.111 - -12.32')).to.be.closeTo(23.431, 0.0001);
        });

        it('should subtract "1.0 - -1.0"', () => {
            expect(compute('1.0 - -1.0')).to.be.closeTo(2.0, 0.01);
        });

        it('should subtract "1.1 - -(2.2 - 2.456)"', () => {
            expect(compute('1.1 - -(2.2 - 2.456)')).to.be.closeTo(0.844, 0.0001);
        });

        it('should subtract "-4.211 - -3.456"', () => {
            expect(compute('-4.211 - -3.456')).to.be.closeTo(-0.755, 0.0001);
        });

        it('should subtract "102.43123 - 1.00"', () => {
            expect(compute('102.43123 - 1.00')).to.be.closeTo(101.43123, 0.000001);
        });

        it('should subtract "1.00 - 102.43123"', () => {
            expect(compute('1.00 - 102.43123')).to.be.closeTo(-101.43123, 0.000001);
        });

        it('should subtract "-102.43123 - 1.00"', () => {
            expect(compute('-102.43123 - 1.00')).to.be.closeTo(-103.43123, 0.000001);
        });

        it('should subtract "1.00 - -102.43123"', () => {
            expect(compute('1.00 - -102.43123')).to.be.closeTo(103.43123, 0.000001);
        });

        it('should subtract "1.1 - 2.3 - 5.234 - 5.567"', () => {
            expect(compute('1.1 - 2.3 - 5.234 - 5.567')).to.be.closeTo(-12.001, 0.0001);
        });

        it('should subtract "5.567 - 1.1 - 5.234 - 2.3"', () => {
            expect(compute('5.567 - 1.1 - 5.234 - 2.3')).to.be.closeTo(-3.067, 0.0001);
        });

        it('should subtract "89.234 - 1999999.123 - -823472.234234"', () => {
            expect(compute('89.234 - 1999999.123 - -823472.234234')).to.be.closeTo(-1176437.654766, 0.0000001);
        });

    });

    context('integers + floats', () => {

        it('should subtract "1 - 0.0"', () => {
            expect(compute('1 - 0.0')).to.be.closeTo(1.0, 0.01);
        });

        it('should subtract "0 - 1.0"', () => {
            expect(compute('0 - 1.0')).to.be.closeTo(-1.0, 0.01);
        });

        it('should subtract "1 - 1.0"', () => {
            expect(compute('1 - 1.0')).to.be.closeTo(0.0, 0.01);
        });

        it('should subtract "1.0 - 1"', () => {
            expect(compute('1.0 - 1')).to.be.closeTo(0.0, 0.01);
        });

        it('should subtract "1-1.0"', () => {
            expect(compute('1-1.0')).to.be.closeTo(0.0, 0.01);
        });

        it('should subtract "1.0-1"', () => {
            expect(compute('1.0-1')).to.be.closeTo(0.0, 0.01);
        });

        it('should subtract "10 - 1.0"', () => {
            expect(compute('10 - 1.0')).to.be.closeTo(9.0, 0.01);
        });

        it('should subtract "1.0 - 10"', () => {
            expect(compute('1.0 - 10')).to.be.closeTo(-9.0, 0.01);
        });

        it('should subtract "1 - -1.0"', () => {
            expect(compute('1 - -1.0')).to.be.closeTo(2.0, 0.01);
        });

        it('should subtract "-1.0 - 1"', () => {
            expect(compute('-1.0 - 1')).to.be.closeTo(-2.0, 0.01);
        });

        it('should subtract "10.0 - 10"', () => {
            expect(compute('10.0 - 10')).to.be.closeTo(0.0, 0.01);
        });

        it('should subtract "10 - 10.0"', () => {
            expect(compute('10 - 10.0')).to.be.closeTo(0.0, 0.01);
        });

        it('should subtract "-1 - -1.0"', () => {
            expect(compute('-1 - -1.0')).to.be.closeTo(0.0, 0.01);
        });

        it('should subtract "-1.0 - -1"', () => {
            expect(compute('-1.0 - -1')).to.be.closeTo(0.0, 0.01);
        });

        it('should subtract "1.0 - -(2.0 - 2)"', () => {
            expect(compute('1.0 - -(2.0 - 2)')).to.be.closeTo(1.0, 0.01);
        });

        it('should subtract "-100 - 0.923123"', () => {
            expect(compute('-100 - 0.923123')).to.be.closeTo(-100.923123, 0.0000001);
        });

        it('should subtract "0.923123 - -100"', () => {
            expect(compute('0.923123 - -100')).to.be.closeTo(100.923123, 0.0000001);
        });

        it('should subtract "0.131234 - 5 - 6 - 13123.123994"', () => {
            expect(compute('0.131234 - 5 - 6 - 13123.123994')).to.be.closeTo(-13133.99276, 0.0000001);
        });

        it('should subtract "5 - 0.131234 - 6 - 13123.123994"', () => {
            expect(compute('5 - 0.131234 - 6 - 13123.123994')).to.be.closeTo(-13124.255228, 0.0000001);
        });

        it('should subtract "4234 - -42343.123123 - 999999.999999"', () => {
            expect(compute('4234 - -42343.123123 - 999999.999999')).to.be.closeTo(-953422.876876, 0.0000001);
        });

        it('should subtract "-42343.123123 - 4234 - 999999.999999"', () => {
            expect(compute('-42343.123123 - 4234 - 999999.999999')).to.be.closeTo(-1046577.123122, 0.0000001);
        });
    });

    context('order of operations', () => {

        it('should subtract "1 - 2 - (3 - 4)"', () => {
            expect(compute('1 - 2 - (3 - 4)')).to.equal(0);
        });

        it('should subtract "(1) - (2) - (3 - 4)"', () => {
            expect(compute('(1) - (2) - (3 - 4)')).to.equal(0);
        });

        it('should subtract "((1 - 2) - (3 - 4))"', () => {
            expect(compute('((1 - 2) - (3 - 4))')).to.equal(0);
        });

        it('should subtract "(1 - 2 - 3) - 4"', () => {
            expect(compute('(1 - 2 - 3) - 4')).to.equal(-8);
        });

        it('should subtract "(1 - 2) - 3 - 4"', () => {
            expect(compute('(1 - 2) - 3 - 4')).to.equal(-8);
        });

        it('should subtract "1 - (2 - 3 - 4)"', () => {
            expect(compute('1 - (2 - 3 - 4)')).to.equal(6);
        });

        it('should subtract "1 - (2 - (3 - 4))"', () => {
            expect(compute('1 - (2 - (3 - 4))')).to.equal(-2);
        });
    });

    context('junk values', () => {

        it('should evaluate expression "4 -" to be NaN', () => {
            expect(compute('4 -')).to.be.NaN;
        });

        it('should evaluate expression "4--" to be NaN', () => {
            expect(compute('4--')).to.be.NaN;
        });

        it('should evaluate expression "+4" to be NaN', () => {
            expect(compute('+4')).to.be.NaN;
        });

        it('should evaluate "a - b - c" to be NaN', () => {
            expect(compute('a - b - c')).to.be.NaN;
        });

        it('should evaluate "5 - NaN" to be NaN', () => {
            expect(compute('5 - NaN')).to.be.NaN;
        });

        it('should evaluate "(5 - 4" to be NaN', () => {
            expect(compute('(5 - 4')).to.be.NaN;
        });

        it('should evaluate "5 - 4)" to be NaN', () => {
            expect(compute('5 - 4)')).to.be.NaN;
        });

        it('should evaluate ")5 - 4(" to be NaN', () => {
            expect(compute(')5 - 4(')).to.be.NaN;
        });
    });
});