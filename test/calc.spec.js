'use strict';

let expect = require('chai').expect;
let calc   = require('../src/calc');

describe('calc.js', () => {

    context('addition', () => {

        context('integers', () => {

            it('should add "1 + 1"', () => {
                expect(calc('1 + 1')).to.equal(2);
            });

            it('should add "1+1"', () => {
                expect(calc('1+1')).to.equal(2);
            });

            it('should add "10 + 1', () => {
                expect(calc('10 + 1')).to.equal(11);
            });

            it('should add "1 + 10"', () => {
                expect(calc('1 + 10')).to.equal(11);
            });

            it('should add "10 + 10"', () => {
                expect(calc('10 + 10')).to.equal(20);
            });

            it('should add "1 + -1"', () => {
                expect(calc('1 + -1')).to.equal(0);
            });

            it('should add "1 + -10"', () => {
                expect(calc('1 + -10')).to.equal(-9);
            });

            it('should add "-1 + -1"', () => {
                expect(calc('-1 + -1')).to.equal(-2);
            });

            it('should add "1 + -(2 + 2)"', () => {
                expect(calc('1 + -(2 + 2)')).to.equal(-3);
            });
        });


    });

});