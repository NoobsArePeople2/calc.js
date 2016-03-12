'use strict';

let createComputer = require('../src/calc').createComputer;

var obj = {
    a: 1,
    b: 2,
    c: 3
};

obj.compute = createComputer(obj, 'a + b + c');

console.log(obj.compute());

obj.b = 10;
console.log(obj.compute());