'use strict';

let expect = require('chai').expect;
let compute   = require('../src/calc').compute;

describe('compute.js modulo', () => {

    context('integers', () => {

        it('should mod "1 % 0"', () => {
            expect(compute('1 % 0')).to.be.NaN;
        });

        it('should mod "-1 % 0"', () => {
            expect(compute('-1 % 0')).to.be.NaN;
        });

        it('should mod "0 % 1"', () => {
            expect(compute('0 % 1')).to.equal(0);
        });

        it('should mod "1 % 1"', () => {
            expect(compute('1 % 1')).to.equal(0);
        });

        it('should mod "1%1"', () => {
            expect(compute('1%1')).to.equal(0);
        });

        it('should mod "10 % 0"', () => {
            expect(compute('10 % 0')).to.be.NaN;
        });

        it('should mod "-10 % 0"', () => {
            expect(compute('-10 % 0')).to.be.NaN;
        });

        it('should mod "0 % 10', () => {
            expect(compute('0 % 10')).to.equal(0);
        });

        it('should mod "10 % 1', () => {
            expect(compute('10 % 1')).to.equal(0);
        });

        it('should mod "1 % 10"', () => {
            expect(compute('1 % 10')).to.equal(1);
        });

        it('should mod "10 % 10"', () => {
            expect(compute('10 % 10')).to.equal(0);
        });

        it('should mod "1 % -1"', () => {
            expect(compute('1 % -1')).to.equal(0);
        });

        it('should mod "1 % -10"', () => {
            expect(compute('1 % -10')).to.equal(1);
        });

        it('should mod "-1 % -1"', () => {
            expect(compute('-1 % -1')).to.equal(0);
        });

        it('should mod "1 % -(2 % 2)"', () => {
            expect(compute('1 % -(2 % 2)')).to.be.NaN;
        });

        it('should mod "(6 % 7)"', () => {
            expect(compute('(6 % 7)')).to.equal(6);
        })

        it('should mod "100 % 1"', () => {
            expect(compute('100 % 1')).to.equal(0);
        });

        it('should mod "1 % 100"', () => {
            expect(compute('1 % 100')).to.equal(1);
        });

        it('should mod "-100 % 1"', () => {
            expect(compute('-100 % 1')).to.equal(0);
        });

        it('should mod "100 % -1"', () => {
            expect(compute('100 % -1')).to.equal(0);
        });

        it('should mod "1 % 2 % 3 % 4 % 5"', () => {
            expect(compute('1 % 2 % 3 % 4 % 5')).to.equal(1);
        });

        it('should mod "1 % 3 % 2 % 5 % 4"', () => {
            expect(compute('1 % 3 % 2 % 5 % 4')).to.equal(1);
        });

        it('should mod "100000 % 100 % 20 % 1"', () => {
            expect(compute('100000 % 100 % 20 % 1')).to.equal(0);
        });
    });

    context('floats', () => {

        it('should mod "1.0 % 0.0"', () => {
            expect(compute('1.0 % 0.0')).to.be.NaN;
        });

        it('should mod "10.0 % 0.0"', () => {
            expect(compute('10.0 % 0.0')).to.be.NaN;
        });

        it('should mod "-1.0 % 0.0"', () => {
            expect(compute('-1.0 % 0.0')).to.be.NaN;
        });

        it('should mod "-10.0 % 0.0"', () => {
            expect(compute('-10.0 % 0.0')).to.be.NaN;
        });

        it('should mod "0.0 % 1.0"', () => {
            expect(compute('0.0 % 1.0')).to.equal(0);
        });

        it('should mod "1.0 % 1.0"', () => {
            expect(compute('1.0 % 1.0')).to.equal(0);
        });

        it('should mod "1.1 % 1.0"', () => {
            expect(compute('1.1 % 1.0')).to.be.closeTo(0.1, 0.01);
        });

        it('should mod "1.1%1.0"', () => {
            expect(compute('1.1%1.0')).to.be.closeTo(0.1, 0.01);
        });

        it('should mod "20.123 % 1.2"', () => {
            expect(compute('20.123 % 1.2')).to.be.closeTo(0.923, 0.001);
        });

        it('should mod "11.111 % -12.32"', () => {
            expect(compute('11.111 % -12.32')).to.be.closeTo(11.111, 0.001);
        });

        it('should mod "1.0 % -1.0"', () => {
            expect(compute('1.0 % -1.0')).to.equal(0);
        });

        it('should mod "1.1 % -(2.2 % 2.456)"', () => {
            expect(compute('1.1 % -(2.2 % 2.456)')).to.be.closeTo(1.1, 0.01);
        });

        it('should mod "1.1 % (0 % 4567)"', () => {
            expect(compute('1.1 % (0 % 4567)')).to.be.NaN;
        })

        it('should mod "-4.211 % -3.456"', () => {
            expect(compute('-4.211 % -3.456')).to.be.closeTo(-0.7550000000000003, 0.00000000000001);
        });

        it('should mod "102.43123 % 1.00"', () => {
            expect(compute('102.43123 % 1.00')).to.be.closeTo(0.43122999999999934, 0.00000000000001);
        });

        it('should mod "1.00 % 102.43123"', () => {
            expect(compute('1.00 % 102.43123')).to.equal(1);
        });

        it('should mod "-102.43123 % 1.00"', () => {
            expect(compute('-102.43123 % 1.00')).to.be.closeTo(-0.43122999999999934, 0.00000000000001);
        });

        it('should mod "1.00 % -102.43123"', () => {
            expect(compute('1.00 % -102.43123')).to.equal(1);
        });

        it('should mod "1.1 % 2.3 % 5.234 % 5.567"', () => {
            expect(compute('1.1 % 2.3 % 5.234 % 5.567')).to.be.closeTo(1.1, 0.01);
        });

        it('should mod "5.567 % 1.1 % 5.234 % 2.3"', () => {
            expect(compute('5.567 % 1.1 % 5.234 % 2.3')).to.be.closeTo(0.06699999999999973, 0.00000000000001);
        });

        it('should mod "89.234 % 1999999.123 % -823472.234234"', () => {
            expect(compute('89.234 % 1999999.123 % -823472.234234')).to.be.closeTo(89.234, 0.0001);
        });

    });

    context('integers + floats', () => {

        it('should mod "1 % 0.0"', () => {
            expect(compute('1 % 0.0')).to.be.NaN;
        });

        it('should mod "0.0 % 1"', () => {
            expect(compute('0.0 % 1')).to.equal(0);
        });

        it('should mod "1.0 % 0"', () => {
            expect(compute('1.0 % 0')).to.be.NaN;
        });

        it('should mod "0 % 1.0"', () => {
            expect(compute('0 % 1.0')).to.equal(0);
        });

        it('should mod "1 % 1.0"', () => {
            expect(compute('1 % 1.0')).to.equal(0);
        });

        it('should mod "1.0 % 1"', () => {
            expect(compute('1.0 % 1')).to.equal(0);
        });

        it('should mod "1%1.0"', () => {
            expect(compute('1%1.0')).to.equal(0);
        });

        it('should mod "1.0%1"', () => {
            expect(compute('1.0%1')).to.equal(0);
        });

        it('should mod "10 % 1.0"', () => {
            expect(compute('10 % 1.0')).to.equal(0);
        });

        it('should mod "1.0 % 10"', () => {
            expect(compute('1.0 % 10')).to.equal(1);
        });

        it('should mod "1 % -1.0"', () => {
            expect(compute('1 % -1.0')).to.equal(0);
        });

        it('should mod "-1.0 % 1"', () => {
            expect(compute('-1.0 % 1')).to.equal(0);
        });

        it('should mod "10.0 % 10"', () => {
            expect(compute('10.0 % 10')).to.equal(0);
        });

        it('should mod "10.0 % 0"', () => {
            expect(compute('10.0 % 0')).to.be.NaN;
        });

        it('should mod "10 % 0.0"', () => {
            expect(compute('10 % 0.0')).to.be.NaN;
        });

        it('should mod "10 % 10.0"', () => {
            expect(compute('10 % 10.0')).to.equal(0);
        });

        it('should mod "-1 % -1.0"', () => {
            expect(compute('-1 % -1.0')).to.equal(0);
        });

        it('should mod "-1.0 % -1"', () => {
            expect(compute('-1.0 % -1')).to.equal(0);
        });

        it('should mod "1.0 % -(2.0 % 2)"', () => {
            expect(compute('1.0 % -(2.0 % 2)')).to.be.NaN;
        });

        it('should mod "-100 % 0.923123"', () => {
            expect(compute('-100 % 0.923123')).to.be.closeTo(-0.3027159999999971, 0.00000000000001);
        });

        it('should mod "0.923123 % -100"', () => {
            expect(compute('0.923123 % -100')).to.be.closeTo(0.923123, 0.00000001);
        });

        it('should mod "0.131234 % 5 % 6 % 13123.123994"', () => {
            expect(compute('0.131234 % 5 % 6 % 13123.123994')).to.be.closeTo(0.131234, 0.000001);
        });

        it('should mod "5 % 0.131234 % 6 % 13123.123994"', () => {
            expect(compute('5 % 0.131234 % 6 % 13123.123994')).to.be.closeTo(0.013108000000000397, 0.00000000000001);
        });

        it('should mod "4234 % -42343.123123 % 999999.999999"', () => {
            expect(compute('4234 % -42343.123123 % 999999.999999')).to.equal(4234);
        });

        it('should mod "-42343.123123 % 4234 % 999999.999999"', () => {
            expect(compute('-42343.123123 % 4234 % 999999.999999')).to.be.closeTo(-3.1231229999975767, 0.00000000000001);
        });
    });

    context('junk values', () => {

       it('should evaluate expression "4 %" to be NaN', () => {
           expect(compute('4 %')).to.be.NaN;
       });

       it('should evaluate expression "4%%" to be NaN', () => {
           expect(compute('4%%')).to.be.NaN;
       });

       it('should evaluate expression "/4" to be NaN', () => {
           expect(compute('%4')).to.be.NaN;
       });

       it('should evaluate "a % b % c" to be NaN', () => {
           expect(compute('a % b % c')).to.be.NaN;
       });

       it('should evaluate "5 % NaN" to be NaN', () => {
           expect(compute('5 % NaN')).to.be.NaN;
       });

       it('should evaluate "(5 % 4" to be NaN', () => {
           expect(compute('(5 % 4')).to.be.NaN;
       });

       it('should evaluate "5 % 4)" to be NaN', () => {
           expect(compute('5 % 4)')).to.be.NaN;
       });

       it('should evaluate ")5 % 4(" to be NaN', () => {
           expect(compute(')5 % 4(')).to.be.NaN;
       });
    });
});