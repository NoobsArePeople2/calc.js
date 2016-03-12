'use strict';

let compute = require('../src/calc').compute;
let createComputer = require('../src/calc').createComputer;

console.log(compute('(5 + 4)'));
console.log(compute('5 + 4)'));
console.log(compute('(5 + 4'));
console.log(compute('((5) + 4)'));
console.log(compute('((5) + 4'));

// var obj = {
//     a: 1,
//     b: 2,
//     c: 3
// };

// obj.compute = createComputer(obj, 'a + b + c');

// console.log(obj.compute());

// obj.b = 10;
// console.log(obj.compute());