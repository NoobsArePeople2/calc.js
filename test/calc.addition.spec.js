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

});