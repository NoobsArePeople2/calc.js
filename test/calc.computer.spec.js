'use strict';

let expect         = require('chai').expect;
let createComputer = require('../src/calc').createComputer;

describe('createComputer', () => {

   it('should return a function', () => {

       let compute = createComputer({ a: 1, b: 1 }, 'a + b');
       expect(typeof compute).to.equal('function');

   });

   it('should compute a + b', () => {

       let compute = createComputer({ a: 1, b: 1 }, 'a + b');
       expect(compute()).to.equal(2);

   });

   it('should compute a + b after a change to a', () => {

       let obj = { a: 1, b: 1 };
       let compute = createComputer(obj, 'a + b');
       expect(compute()).to.equal(2);

       obj.a = 2;
       expect(compute()).to.equal(3);

   });

   it('should compute a + b after a change to b', () => {

       let obj = { a: 1, b: 1 };
       let compute = createComputer(obj, 'a + b');
       expect(compute()).to.equal(2);

       obj.b = 2;
       expect(compute()).to.equal(3);

   });

   it('should compute a + b after a change to a and b', () => {

       let obj = { a: 1, b: 1 };
       let compute = createComputer(obj, 'a + b');
       expect(compute()).to.equal(2);

       obj.a = 2;
       obj.b = 2;
       expect(compute()).to.equal(4);

   });

});