'use strict';

let expect         = require('chai').expect;
let createComputer = require('../src/calc').createComputer;

describe('createComputer', () => {

    context('general', () => {

        it('should return a function', () => {

            let compute = createComputer({ a: 1, b: 1 }, 'a + b');
            expect(typeof compute).to.equal('function');

        });

        it('should compute "a"', () => {

            let compute = createComputer({a: 1}, 'a');
            expect(compute()).to.equal(1);

        });
    });

    context('addition', () => {

        it('should compute a + b', () => {

            let compute = createComputer({ a: 1, b: 1 }, 'a + b');
            expect(compute()).to.equal(2);

        });

        it('should compute a + b after a change to a', () => {

            let obj = { a: 1, b: 1 };
            let compute = createComputer(obj, 'a + b');

            obj.a = 2;
            expect(compute()).to.equal(3);

        });

        it('should compute a + b after a change to b', () => {

            let obj = { a: 1, b: 1 };
            let compute = createComputer(obj, 'a + b');

            obj.b = 2;
            expect(compute()).to.equal(3);

        });

        it('should compute a + b after a change to a and b', () => {

            let obj = { a: 1, b: 1 };
            let compute = createComputer(obj, 'a + b');

            obj.a = 2;
            obj.b = 2;
            expect(compute()).to.equal(4);

        });
    });

    context('subtraction', () => {

        it('should compute a - b', () => {

            let compute = createComputer({ a: 1, b: 1 }, 'a - b');
            expect(compute()).to.equal(0);

        });

        it('should compute a - b after a change to a', () => {

            let obj = { a: 1, b: 1 };
            let compute = createComputer(obj, 'a - b');

            obj.a = 2;
            expect(compute()).to.equal(1);

        });

        it('should compute a - b after a change to b', () => {

            let obj = { a: 1, b: 1 };
            let compute = createComputer(obj, 'a - b');

            obj.b = 2;
            expect(compute()).to.equal(-1);

        });

        it('should compute a - b after a change to a and b', () => {

            let obj = { a: 1, b: 1 };
            let compute = createComputer(obj, 'a - b');

            obj.a = 3;
            obj.b = 2;
            expect(compute()).to.equal(1);

        });

    });

    context('multiplication', () => {

        it('should compute a * b', () => {

            let compute = createComputer({ a: 2, b: 3 }, 'a * b');
            expect(compute()).to.equal(6);

        });

        it('should compute a * b after a change to a', () => {

            let obj = { a: 2, b: 3 };
            let compute = createComputer(obj, 'a * b');

            obj.a = 1;
            expect(compute()).to.equal(3);

        });

        it('should compute a * b after a change to b', () => {

            let obj = { a: 2, b: 3 };
            let compute = createComputer(obj, 'a * b');

            obj.b = 2;
            expect(compute()).to.equal(4);

        });

        it('should compute a * b after a change to a and b', () => {

            let obj = { a: 2, b: 3 };
            let compute = createComputer(obj, 'a * b');

            obj.a = 1;
            obj.b = 5;
            expect(compute()).to.equal(5);

        });

    });

    context('division', () => {

        it('should compute a / b', () => {

            let compute = createComputer({ a: 6, b: 3 }, 'a / b');
            expect(compute()).to.equal(2);

        });

        it('should compute a / b after a change to a', () => {

            let obj = { a: 6, b: 3 };
            let compute = createComputer(obj, 'a / b');

            obj.a = 9;
            expect(compute()).to.equal(3);

        });

        it('should compute a / b after a change to b', () => {

            let obj = { a: 6, b: 3 };
            let compute = createComputer(obj, 'a / b');

            obj.b = 2;
            expect(compute()).to.equal(3);

        });

        it('should compute a / b after a change to a and b', () => {

            let obj = { a: 6, b: 3 };
            let compute = createComputer(obj, 'a / b');

            obj.a = 10;
            obj.b = 5;
            expect(compute()).to.equal(2);

        });

    });

    context('modulo', () => {

        it('should compute a % b', () => {

            let compute = createComputer({ a: 6, b: 3 }, 'a % b');
            expect(compute()).to.equal(0);

        });

        it('should compute a % b after a change to a', () => {

            let obj = { a: 6, b: 3 };
            let compute = createComputer(obj, 'a % b');

            obj.a = 8;
            expect(compute()).to.equal(2);

        });

        it('should compute a % b after a change to b', () => {

            let obj = { a: 6, b: 3 };
            let compute = createComputer(obj, 'a % b');

            obj.b = 5;
            expect(compute()).to.equal(1);

        });

        it('should compute a % b after a change to a and b', () => {

            let obj = { a: 6, b: 3 };
            let compute = createComputer(obj, 'a % b');

            obj.a = 11;
            obj.b = 5;
            expect(compute()).to.equal(1);

        });

    });

});