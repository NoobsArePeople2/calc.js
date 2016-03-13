'use strict';

let expect = require('chai').expect;
let compute   = require('../src/calc').compute;

describe('compute.js addition', () => {

    context('integers', () => {

        it('should add "1 + 1"', () => {
            expect(compute('1 + 1')).to.equal(2);
        });

        it('should add "1+1"', () => {
            expect(compute('1+1')).to.equal(2);
        });

        it('should add "10 + 1', () => {
            expect(compute('10 + 1')).to.equal(11);
        });

        it('should add "1 + 10"', () => {
            expect(compute('1 + 10')).to.equal(11);
        });

        it('should add "10 + 10"', () => {
            expect(compute('10 + 10')).to.equal(20);
        });

        it('should add "1 + -1"', () => {
            expect(compute('1 + -1')).to.equal(0);
        });

        it('should add "1 + -10"', () => {
            expect(compute('1 + -10')).to.equal(-9);
        });

        it('should add "-1 + -1"', () => {
            expect(compute('-1 + -1')).to.equal(-2);
        });

        it('should add "1 + -(2 + 2)"', () => {
            expect(compute('1 + -(2 + 2)')).to.equal(-3);
        });

        it('should add "(6 + 7)"', () => {
            expect(compute('(6 + 7)')).to.equal(13);
        })

        it('should add "100 + 1"', () => {
            expect(compute('100 + 1')).to.equal(101);
        });

        it('should add "1 + 100"', () => {
            expect(compute('1 + 100')).to.equal(101);
        });

        it('should add "-100 + 1"', () => {
            expect(compute('-100 + 1')).to.equal(-99);
        });

        it('should add "100 + -1"', () => {
            expect(compute('100 + -1')).to.equal(99);
        });

        it('should add "1 + 2 + 3 + 4 + 5"', () => {
            expect(compute('1 + 2 + 3 + 4 + 5')).to.equal(15);
        });

        it('should add "1 + 3 + 2 + 5 + 4"', () => {
            expect(compute('1 + 3 + 2 + 5 + 4')).to.equal(15);
        });

        it('should add "100000 + 100 + 20 + 1"', () => {
            expect(compute('100000 + 100 + 20 + 1')).to.equal(100121);
        });
    });

    context('floats', () => {

        it('should add "1.0 + 1.0"', () => {
            expect(compute('1.0 + 1.0')).to.be.closeTo(2.0, 0.01);
        });

        it('should add "1.1 + 1.0"', () => {
            expect(compute('1.1 + 1.0')).to.be.closeTo(2.1, 0.01);
        });

        it('should add "1.1+1.0"', () => {
            expect(compute('1.1+1.0')).to.be.closeTo(2.1, 0.01);
        });

        it('should add "20.123 + 1.2"', () => {
            expect(compute('20.123 + 1.2')).to.be.closeTo(21.323, 0.0001);
        });

        it('should add "11.111 + -12.32"', () => {
            expect(compute('11.111 + -12.32')).to.be.closeTo(-1.209, 0.0001);
        });

        it('should add "1.0 + -1.0"', () => {
            expect(compute('1.0 + -1.0')).to.be.closeTo(0.0, 0.01);
        });

        it('should add "1.1 + -(2.2 + 2.456)"', () => {
            expect(compute('1.1 + -(2.2 + 2.456)')).to.be.closeTo(-3.556, 0.0001);
        });

        it('should add "-4.211 + -3.456"', () => {
            expect(compute('-4.211 + -3.455')).to.be.closeTo(-7.666, 0.0001);
        });

        it('should add "102.43123 + 1.00"', () => {
            expect(compute('102.43123 + 1.00')).to.be.closeTo(103.43123, 0.000001);
        });

        it('should add "1.00 + 102.43123"', () => {
            expect(compute('1.00 + 102.43123')).to.be.closeTo(103.43123, 0.000001);
        });

        it('should add "-102.43123 + 1.00"', () => {
            expect(compute('-102.43123 + 1.00')).to.be.closeTo(-101.43123, 0.000001);
        });

        it('should add "1.00 + -102.43123"', () => {
            expect(compute('1.00 + -102.43123')).to.be.closeTo(-101.43123, 0.000001);
        });

        it('should add "1.1 + 2.3 + 5.234 + 5.567"', () => {
            expect(compute('1.1 + 2.3 + 5.234 + 5.567')).to.be.closeTo(14.201, 0.0001);
        });

        it('should add "5.567 + 1.1 + 5.234 + 2.3"', () => {
            expect(compute('5.567 + 1.1 + 5.234 + 2.3')).to.be.closeTo(14.201, 0.0001);
        });

        it('should add "89.234 + 1999999.123 + -823472.234234"', () => {
            expect(compute('89.234 + 1999999.123 + -823472.234234')).to.be.closeTo(1176616.122766, 0.0000001);
        });

    });

    context('integers + floats', () => {

        it('should add "1 + 1.0"', () => {
            expect(compute('1 + 1.0')).to.be.closeTo(2.0, 0.01);
        });

        it('should add "1.0 + 1"', () => {
            expect(compute('1.0 + 1')).to.be.closeTo(2.0, 0.01);
        });

        it('should add "1+1.0"', () => {
            expect(compute('1+1.0')).to.be.closeTo(2.0, 0.01);
        });

        it('should add "1.0+1"', () => {
            expect(compute('1.0+1')).to.be.closeTo(2.0, 0.01);
        });

        it('should add "10 + 1.0"', () => {
            expect(compute('10 + 1.0')).to.be.closeTo(11.0, 0.01);
        });

        it('should add "1.0 + 10"', () => {
            expect(compute('1.0 + 10')).to.be.closeTo(11.0, 0.01);
        });

        it('should add "1 + -1.0"', () => {
            expect(compute('1 + -1.0')).to.be.closeTo(0.0, 0.01);
        });

        it('should add "-1.0 + 1"', () => {
            expect(compute('-1.0 + 1')).to.be.closeTo(0.0, 0.01);
        });

        it('should add "10.0 + 10"', () => {
            expect(compute('10.0 + 10')).to.be.closeTo(20.0, 0.01);
        });

        it('should add "10 + 10.0"', () => {
            expect(compute('10 + 10.0')).to.be.closeTo(20.0, 0.01);
        });

        it('should add "-1 + -1.0"', () => {
            expect(compute('-1 + -1.0')).to.be.closeTo(-2.0, 0.01);
        });

        it('should add "-1.0 + -1"', () => {
            expect(compute('-1.0 + -1')).to.be.closeTo(-2.0, 0.01);
        });

        it('should add "1.0 + -(2.0 + 2)"', () => {
            expect(compute('1.0 + -(2.0 + 2)')).to.be.closeTo(-3.0, 0.01);
        });

        it('should add "-100 + 0.923123"', () => {
            expect(compute('-100 + 0.923123')).to.be.closeTo(-99.076877, 0.0000001);
        });

        it('should add "0.923123 + -100"', () => {
            expect(compute('0.923123 + -100')).to.be.closeTo(-99.076877, 0.0000001);
        });

        it('should add "0.131234 + 5 + 6 + 13123.123994"', () => {
            expect(compute('0.131234 + 5 + 6 + 13123.123994')).to.be.closeTo(13134.255228, 0.0000001);
        });

        it('should add "5 + 0.131234 + 6 + 13123.123994"', () => {
            expect(compute('5 + 0.131234 + 6 + 13123.123994')).to.be.closeTo(13134.255228, 0.0000001);
        });

        it('should add "4234 + -42343.123123 + 999999.999999"', () => {
            expect(compute('4234 + -42343.123123 + 999999.999999')).to.be.closeTo(961890.876876, 0.0000001);
        });

        it('should add "-42343.123123 + 4234 + 999999.999999"', () => {
            expect(compute('-42343.123123 + 4234 + 999999.999999')).to.be.closeTo(961890.876876, 0.0000001);
        });
    });

    context('junk values', () => {

       it('should evaluate expression "4 +" to be NaN', () => {
           expect(compute('4 +')).to.be.NaN;
       });

       it('should evaluate expression "4++" to be NaN', () => {
           expect(compute('4++')).to.be.NaN;
       });

       it('should evaluate expression "+4" to be NaN', () => {
           expect(compute('+4')).to.be.NaN;
       });

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

       it('should evaluate "a + b + c" to be NaN', () => {
           expect(compute('a + b + c')).to.be.NaN;
       });

       it('should evaluate "5 + NaN" to be NaN', () => {
           expect(compute('5 + NaN')).to.be.NaN;
       });

       it('should evaluate "(5 + 4 to be NaN', () => {
           expect(compute('(5 + 4')).to.be.NaN;
       });

       it('should evaluate "5 + 4) to be NaN', () => {
           expect(compute('5 + 4)')).to.be.NaN;
       });

       it('should evaluate ")5 + 4(" to be NaN', () => {
           expect(compute(')5 + 4(')).to.be.NaN;
       });
    });
});