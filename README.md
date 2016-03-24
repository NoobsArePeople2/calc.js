# calc.js

A simple JavaScript calculator.

## Usage

Calc implements UMD so you can load it up via CommonJS and AMD module loaders as well as the trusty `<script>` tag. For example, in Node:

    let calc = require('calc');

The `calc` object has two functions attached to it:

1. `compute`: Computes the value of the string expression passed to it.
2. `createComputer`: Returns a function that can be used to compute the string expression passed to it.

`compute` works like this:

    let value = calc.compute('1 + 2');
    console.log(value);  // 3

Compute supports the following mathematical operators with the correct [order of operations](https://en.wikipedia.org/wiki/Order_of_operations):

- +
- -
- *
- /
- %
- ()

`createComputer` works like this:

    let obj = { a: 1, b: 2 };
    let computeValue = calc.createCompute(obj, 'a + b');
    let value = computeValue();
    console.log(value); // 3

Yes, we just took a two line example and made it four lines. There is a reason for this:

    // Contiuning from the `createComputer` example above
    obj.a = 2;
    value = computeValue();
    console.log(value); // 4


## License

Licensed under the MIT license. See LICENSE.md for more details.