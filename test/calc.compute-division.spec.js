'use strict';

let expect = require('chai').expect;
let compute   = require('../src/calc').compute;

describe('compute.js division', () => {

    context('integers', () => {

        it('should divide "1 / 0"', () => {
            expect(compute('1 / 0')).to.equal(Infinity);
        });

        it('should divide "-1 / 0"', () => {
            expect(compute('-1 / 0')).to.equal(-Infinity);
        });

        it('should divide "0 / 1"', () => {
            expect(compute('0 / 1')).to.equal(0);
        });

        it('should divide "1 / 1"', () => {
            expect(compute('1 / 1')).to.equal(1);
        });

        it('should divide "1/1"', () => {
            expect(compute('1/1')).to.equal(1);
        });

        it('should divide "10 / 0"', () => {
            expect(compute('10 / 0')).to.equal(Infinity);
        });

        it('should divide "-10 / 0"', () => {
            expect(compute('-10 / 0')).to.equal(-Infinity);
        });

        it('should divide "0 / 10', () => {
            expect(compute('0 / 10')).to.equal(0);
        });

        it('should divide "10 / 1', () => {
            expect(compute('10 / 1')).to.equal(10);
        });

        it('should divide "1 / 10"', () => {
            expect(compute('1 / 10')).to.be.closeTo(0.1, 0.01);
        });

        it('should divide "10 / 10"', () => {
            expect(compute('10 / 10')).to.equal(1);
        });

        it('should divide "1 / -1"', () => {
            expect(compute('1 / -1')).to.equal(-1);
        });

        it('should divide "1 / -10"', () => {
            expect(compute('1 / -10')).to.be.closeTo(-0.1, 0.01);
        });

        it('should divide "-1 / -1"', () => {
            expect(compute('-1 / -1')).to.equal(1);
        });

        it('should divide "1 / -(2 / 2)"', () => {
            expect(compute('1 / -(2 / 2)')).to.equal(-1);
        });

        it('should divide "(6 / 7)"', () => {
            expect(compute('(6 / 7)')).to.be.closeTo(0.85714285714286, 0.00000000000001);
        })

        it('should divide "100 / 1"', () => {
            expect(compute('100 / 1')).to.equal(100);
        });

        it('should divide "1 / 100"', () => {
            expect(compute('1 / 100')).to.be.closeTo(0.01, 0.001);
        });

        it('should divide "-100 / 1"', () => {
            expect(compute('-100 / 1')).to.equal(-100);
        });

        it('should divide "100 / -1"', () => {
            expect(compute('100 / -1')).to.equal(-100);
        });

        it('should divide "1 / 2 / 3 / 4 / 5"', () => {
            expect(compute('1 / 2 / 3 / 4 / 5')).to.be.closeTo(0.00833333333333, 0.00000000000001);
        });

        it('should divide "1 / 3 / 2 / 5 / 4"', () => {
            expect(compute('1 / 3 / 2 / 5 / 4')).to.be.closeTo(0.00833333333333, 0.00000000000001);
        });

        it('should divide "100000 / 100 / 20 / 1"', () => {
            expect(compute('100000 / 100 / 20 / 1')).to.equal(50);
        });
    });

    context('floats', () => {

        it('should divide "1.0 / 0.0"', () => {
            expect(compute('1.0 / 0.0')).to.equal(Infinity);
        });

        it('should divide "10.0 / 0.0"', () => {
            expect(compute('10.0 / 0.0')).to.equal(Infinity);
        });

        it('should divide "-1.0 / 0.0"', () => {
            expect(compute('-1.0 / 0.0')).to.equal(-Infinity);
        });

        it('should divide "-10.0 / 0.0"', () => {
            expect(compute('-10.0 / 0.0')).to.equal(-Infinity);
        });

        it('should divide "0.0 / 1.0"', () => {
            expect(compute('0.0 / 1.0')).to.be.closeTo(0.0, 0.01);
        });

        it('should divide "1.0 / 1.0"', () => {
            expect(compute('1.0 / 1.0')).to.be.closeTo(1.0, 0.01);
        });

        it('should divide "1.1 / 1.0"', () => {
            expect(compute('1.1 / 1.0')).to.be.closeTo(1.1, 0.01);
        });

        it('should divide "1.1/1.0"', () => {
            expect(compute('1.1/1.0')).to.be.closeTo(1.1, 0.01);
        });

        it('should divide "20.123 / 1.2"', () => {
            expect(compute('20.123 / 1.2')).to.be.closeTo(16.76916666666667, 0.00000000000001);
        });

        it('should divide "11.111 / -12.32"', () => {
            expect(compute('11.111 / -12.32')).to.be.closeTo(-0.90186688311688, 0.00000000000001);
        });

        it('should divide "1.0 / -1.0"', () => {
            expect(compute('1.0 / -1.0')).to.be.closeTo(-1.0, 0.01);
        });

        it('should divide "1.1 / -(2.2 / 2.456)"', () => {
            expect(compute('1.1 / -(2.2 / 2.456)')).to.be.closeTo(-1.22800000000001, 0.00000000000001);
        });

        it('should divide "1.1 / (0 / 4567)"', () => {
            expect(compute('1.1 / (0 / 4567)')).to.equal(Infinity);
        })

        it('should divide "-4.211 / -3.456"', () => {
            expect(compute('-4.211 / -3.456')).to.be.closeTo(1.21846064814815, 0.00000000000001);
        });

        it('should divide "102.43123 / 1.00"', () => {
            expect(compute('102.43123 / 1.00')).to.be.closeTo(102.43123, 0.000001);
        });

        it('should divide "1.00 / 102.43123"', () => {
            expect(compute('1.00 / 102.43123')).to.be.closeTo(0.00976264758316, 0.00000000000001);
        });

        it('should divide "-102.43123 / 1.00"', () => {
            expect(compute('-102.43123 / 1.00')).to.be.closeTo(-102.43123, 0.000001);
        });

        it('should divide "1.00 / -102.43123"', () => {
            expect(compute('1.00 / -102.43123')).to.be.closeTo(-0.00976264758316, 0.00000000000001);
        });

        it('should divide "1.1 / 2.3 / 5.234 / 5.567"', () => {
            expect(compute('1.1 / 2.3 / 5.234 / 5.567')).to.be.closeTo(0.01641382918588, 0.00000000000001);
        });

        it('should divide "5.567 / 1.1 / 5.234 / 2.3"', () => {
            expect(compute('5.567 / 1.1 / 5.234 / 2.3')).to.be.closeTo(0.4204041377373, 0.00000000000001);
        });

        it('should divide "89.234 / 1999999.123 / -823472.234234"', () => {
            expect(compute('89.234 / 1999999.123 / -823472.234234')).to.be.closeTo(-0.00000000005418, 0.0000000000001);
        });

    });

    context('integers + floats', () => {

        it('should divide "1 / 0.0"', () => {
            expect(compute('1 / 0.0')).to.equal(Infinity);
        });

        it('should divide "0.0 / 1"', () => {
            expect(compute('0.0 / 1')).to.closeTo(0.0, 0.01);
        });

        it('should divide "1.0 / 0"', () => {
            expect(compute('1.0 / 0')).to.equal(Infinity);
        });

        it('should divide "0 / 1.0"', () => {
            expect(compute('0 / 1.0')).to.closeTo(0.0, 0.01);
        });

        it('should divide "1 / 1.0"', () => {
            expect(compute('1 / 1.0')).to.be.closeTo(1.0, 0.01);
        });

        it('should divide "1.0 / 1"', () => {
            expect(compute('1.0 / 1')).to.be.closeTo(1.0, 0.01);
        });

        it('should divide "1/1.0"', () => {
            expect(compute('1/1.0')).to.be.closeTo(1.0, 0.01);
        });

        it('should divide "1.0/1"', () => {
            expect(compute('1.0/1')).to.be.closeTo(1.0, 0.01);
        });

        it('should divide "10 / 1.0"', () => {
            expect(compute('10 / 1.0')).to.be.closeTo(10.0, 0.01);
        });

        it('should divide "1.0 / 10"', () => {
            expect(compute('1.0 / 10')).to.be.closeTo(0.1, 0.01);
        });

        it('should divide "1 / -1.0"', () => {
            expect(compute('1 / -1.0')).to.be.closeTo(-1.0, 0.01);
        });

        it('should divide "-1.0 / 1"', () => {
            expect(compute('-1.0 / 1')).to.be.closeTo(-1.0, 0.01);
        });

        it('should divide "10.0 / 10"', () => {
            expect(compute('10.0 / 10')).to.be.closeTo(1.0, 0.01);
        });

        it('should divide "10.0 / 0"', () => {
            expect(compute('10.0 / 0')).to.equal(Infinity);
        });

        it('should divide "10 / 0.0"', () => {
            expect(compute('10 / 0.0')).to.equal(Infinity);
        });

        it('should divide "10 / 10.0"', () => {
            expect(compute('10 / 10.0')).to.be.closeTo(1.0, 0.01);
        });

        it('should divide "-1 / -1.0"', () => {
            expect(compute('-1 / -1.0')).to.be.closeTo(1.0, 0.01);
        });

        it('should divide "-1.0 / -1"', () => {
            expect(compute('-1.0 / -1')).to.be.closeTo(1.0, 0.01);
        });

        it('should divide "1.0 / -(2.0 / 2)"', () => {
            expect(compute('1.0 / -(2.0 / 2)')).to.be.closeTo(-1.0, 0.01);
        });

        it('should divide "-100 / 0.923123"', () => {
            expect(compute('-100 / 0.923123')).to.be.closeTo(-108.32792596436228, 0.00000000000001);
        });

        it('should divide "0.923123 / -100"', () => {
            expect(compute('0.923123 / -100')).to.be.closeTo(-0.00923123, 0.00000001);
        });

        it('should divide "0.131234 / 5 / 6 / 13123.123994"', () => {
            expect(compute('0.131234 / 5 / 6 / 13123.123994')).to.be.closeTo(0.00000033334034, 0.00000000000001);
        });

        it('should divide "5 / 0.131234 / 6 / 13123.123994"', () => {
            expect(compute('5 / 0.131234 / 6 / 13123.123994')).to.be.closeTo(0.00048387719608, 0.00000000000001);
        });

        it('should divide "4234 / -42343.123123 / 999999.999999"', () => {
            expect(compute('4234 / -42343.123123 / 999999.999999')).to.be.closeTo(-0.00000009999262, 0.00000000000001);
        });

        it('should divide "-42343.123123 / 4234 / 999999.999999"', () => {
            expect(compute('-42343.123123 / 4234 / 999999.999999')).to.be.closeTo(-0.00001000073763, 0.00000000000001);
        });
    });

    context('junk values', () => {

       it('should evaluate expression "4 /" to be NaN', () => {
           expect(compute('4 /')).to.be.NaN;
       });

       it('should evaluate expression "4//" to be NaN', () => {
           expect(compute('4//')).to.be.NaN;
       });

       it('should evaluate expression "/4" to be NaN', () => {
           expect(compute('/4')).to.be.NaN;
       });

       it('should evaluate "a / b / c" to be NaN', () => {
           expect(compute('a / b / c')).to.be.NaN;
       });

       it('should evaluate "5 / NaN" to be NaN', () => {
           expect(compute('5 / NaN')).to.be.NaN;
       });

       it('should evaluate "(5 / 4" to be NaN', () => {
           expect(compute('(5 / 4')).to.be.NaN;
       });

       it('should evaluate "5 / 4)" to be NaN', () => {
           expect(compute('5 / 4)')).to.be.NaN;
       });

       it('should evaluate ")5 / 4(" to be NaN', () => {
           expect(compute(')5 / 4(')).to.be.NaN;
       });
    });
});