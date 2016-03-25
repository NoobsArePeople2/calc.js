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

`compute` supports the following mathematical operators with the correct [order of operations](https://en.wikipedia.org/wiki/Order_of_operations):

- +
- -
- *
- /
- %
- ()

`createComputer` works like this:

    let obj = { a: 1, b: 2 };
    let computeValue = calc.createComputer(obj, 'a + b');
    let value = computeValue();
    console.log(value); // 3

Yes, we just took a two line example and made it four lines. There is a reason for this:

    // Continuing from the `createComputer` example above
    obj.a = 2;
    value = computeValue();
    console.log(value); // 4

`createComputer` supports all the same operators as `compute`.

## Development

Development requires Node and npm. Once you have those installed grab all the development dependencies with:

    npm install

Once you've completed that there are three simple commands:

1. `npm test`: run all the tests.
2. `npm run lint`: lint the source code and test code.
3. `npm run doc`: build the jsdoc documentation.

## Contributing

If you want to contribute to calc.js you must:

1. Write code.
2. Lint your code. Repeat step 1 as needed.
3. Document your code.
4. Write tests for your code that your code passes.
5. [Submit a pull request](https://github.com/NoobsArePeople2/calc.js/compare).

## License

Licensed under the MIT license. See LICENSE.md for more details.