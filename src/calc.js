'use strict';

(function (root, factory) {

    // UMD
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.calc = factory();
    }

}(this, function() {

/**
 * Operators supported by the calculator.
 * Keys are supported operators.
 * Values list the operator precendence.
 * A higher precendence value corresponds with higher operator precendence.
 *
 * @private
 * @property {Object} OPERATORS    List of all supported operators
 * @property {Array}  OPERATORS.+  Addition operator.
 * @property {Array}  OPERATORS.-  Subtraction operator.
 * @property {Array}  OPERATORS.*  Multiplication operator.
 * @property {Array}  OPERATORS./  Division operator.
 * @property {Array}  OPERATORS.%  Modulo operator.
 */
var OPERATORS = {

    '+': [ 0  ],
    '-': [ 0  ],
    '*': [ 5  ],
    '/': [ 5  ],
    '%': [ 5  ]

};

/**
 * Unary operaters supported by the calculator.
 * Keys are supported operators.
 * Values list the operator precendence.
 * A higher precendence value corresponds with higher operator precendence.
 *
 * @private
 * @property {Object} UNARY_OPERATORS    List of all supported operators
 * @property {Array}  UNARY_OPERATORS.!  Unary minus operator.
 */
var UNARY_OPERATORS = {

    '!': [ 0 ]   // Unary minus

};

/**
 * Check if a token is an operator.
 * @function
 *
 * Valid operators:
 *    - +
 *    - -
 *    - *
 *    - /
 *    - %
 *
 * @param {String} token The string to test.
 * @return {Boolean} <code>true</code> if the token is an operator, <code>false</code> if not.
 */
function isOperator(token) {
    return token.length === 1 && OPERATORS[token] !== undefined;
}

/**
 * Check if a token is a unary operator.
 * @function
 *
 * Valid operators:
 *    - !
 *
 * @param {String} token The string to test.
 * @return {Boolean} <code>true</code> if the token is an operator, <code>false</code> if not.
 */
function isUnaryOperator(token) {
    return token.length === 1 && UNARY_OPERATORS[token] !== undefined;
}

/**
 * Check if the token is the unary negative operator.
 * E.g., <code>-4</code> as opposed to <code>3 - 4</code>.
 *
 * @param {String} token The token to check.
 * @param {Array} stack The current stack of tokens.
 * @return {Boolean} <code>true</code> if <code>token</code> is unary negative, <code>false</code> otherwise.
 */
function isUnaryNegative(token, stack) {
    // The token is the minus sign "m" AND the first token on the stack OR the previous token is an operator.
    return token === '-' && (stack.length === 0 || isOperator(stack[stack.length - 1]));
}

/**
 * Compare operator precedence.
 * @function
 *
 * @param {String} a First operator to compare.
 * @param {String} b Second operator to compare.
 * @return {Number} A negative number if <code>b</code> has greater precendence than <code>a</code>,
 *                  a positive number if <code>a</code> has greater precendence than <code>b</code>,
 *                  and 0 if <code>a</code> and <code>b</code> have the same precendence.
 */
function compareOperators(a, b) {
    return OPERATORS[a][0] - OPERATORS[b][0];
}

/**
 * Helper to check if a token is an open parenthesis ('(');
 * @function
 *
 * @param {String} token The token to test.
 * @return {Boolean} <code>true</code> if <code>token</code> is an open paren, <code>false</code> otherwise.
 */
function isOpenParen(token) {
    return token === '(';
}

/**
 * Helper to check if a token is an close parenthesis (')');
 * @function
 *
 * @param {String} token The token to test.
 * @return {Boolean} <code>true</code> if <code>token</code> is an close paren, <code>false</code> otherwise.
 */
function isCloseParen(token) {
    return token === ')';
}

/**
 * Helper to check if a token is a parenthesis ('(' or ')');
 * @function
 *
 * @param {String} token The token to test.
 * @return {Boolean} <code>true</code> if <code>token</code> is a paren, <code>false</code> otherwise.
 */
function isParen(token) {
    return token === '(' || token === ')';
}

/**
 * Add two values.
 * @function
 *
 * @param {Number} a The first number.
 * @param {Number} b The second number.
 * @return {Number} Result of <code>a + b</code>.
 */
function add(a, b) {
    return a + b;
}

/**
 * Subtract one value from another.
 * @function
 *
 * Wikipedia is fun!
 * @param {Number} a The minuend (number subtracted _from_).
 * @param {Number} b The subtrahend (number being subtracted).
 * @return {Number} Result of <code>a - b</code>.
 */
function subtract(a, b) {
    return a - b;
}

/**
 * Multiply two values.
 * @function
 *
 * @param {Number} a The first number.
 * @param {Number} b The second number.
 * @return {Number} Result of <code>a * b</code>.
 */
function multiply(a, b) {
    return a * b;
}

/**
 * Divide one number by another.
 * @function
 *
 * @param {Number} a The dividend (or numerator).
 * @param {Number} b The divisor (or denominator).
 * @return {Number} Result of <code>a / b</code>.
 */
function divide(a, b) {
    return a / b;
}

/**
 * Modulo one number by another.
 * @function
 *
 * @param {Number} a The dividend (??? not sure of the modular math name).
 * @param {Number} b The divisor (??? not sure of the modular math name).
 * @return {Number} Result of <code>a % b</code>.
 */
function modulo(a, b) {
    return a % b;
}

/**
 * Returns the result of a binary operation.
 * @function
 *
 * @param {Number} a First value for the operation.
 * @param {Number} b Second value for the operation.
 * @param {String} op The string corresponding with the operation to perform.
 * @return {Number|NaN} The result of the operation or <code>NaN</code> if something goes awry.
 */
function binaryOp(a, b, op) {

    switch (op) {

        case '+':
            return add(a, b);

        case '-':
            return subtract(a, b);

        case '*':
            return multiply(a, b);

        case '/':
            return divide(a, b);

        case '%':
            return modulo(a, b);

    }

    return NaN;
}

function unaryOp(a, op) {

    if (op === '!') {
        // Unary minus
        return 0 - a;
    }

    return NaN;
}

/**
 * Read an infix mathmatical expression.
 * @function
 *
 * @param {String} exp The expression.
 * @return {Array} Returns an array in postfix format.
 */
function readExpression(expression) {

    var exp = expression.replace(/\s/g, '');
    var len = exp.length;
    var i = 0;
    var stack = [];
    var postfix = [];

    while (i < len) {

        var token = exp[i];

        if (isOperator(token)) {

            if (isUnaryNegative(token, stack)) {

                stack.push('!');

            } else {

                while (stack.length > 0 && isOperator(stack[stack.length - 1])) {
                    if (compareOperators(token, stack[stack.length - 1]) <= 0) {
                        // While we have something on the stack and the token has less precendence
                        postfix.push(stack.pop());
                    }
                }
                stack.push(token);

            }

        } else if (token === '(') {

            stack.push(token);

        } else if (token === ')') {

            while (stack.length > 0 && !isOpenParen(stack[stack.length - 1])) {
                postfix.push(stack.pop());
            }
            stack.pop(); // Get rid of the open paren.

        } else {

            // Read operands longer than a single character
            var start = i;
            while (i + 1 < len && !isOperator(exp[i + 1]) && !isParen(exp[i + 1])) {
                i += 1;
            }
            var end = i + 1;

            postfix.push(exp.slice(start, end));

            // Handle unary operators
            if (stack.length > 0 && isUnaryOperator(stack[stack.length - 1])) {
                postfix.push(stack.pop());
            }
        }

        i += 1;
    }

    while (stack.length > 0) {
        postfix.push(stack.pop());
    }

    return postfix;
}

/**
 * Helper function for popping values off a stack.
 * @function
 *
 * This is used for the default popping behavior when evaluating string expressions.
 *
 * @param {Stack} stack An object with a <code>pop()</code> method. E.g., <code>Array</code>.
 * @return {Number|NaN} A <code>Number</code> or <code>NaN</code> if the popped value cannot be converted.
 */
function popper(stack) {
    return +stack.pop();
}

/**
 * Helper function for popping values off a stack.
 * @function
 *
 * Used by the <code>createComputer()</code> function to pop values of a stack
 * and reference the computer object's keys.
 *
 * @param {Object} obj The object whose keys we use in the computed expression.
 * @return {Function} A function used to pop values off a stack. Returned function signature:
 *                    <code>function({Stack}):Number|NaN</code>.
 */
function computerPopper(obj) {
    return function(stack) {
        var tmp = stack.pop();
        return obj[tmp] ? +obj[tmp] : tmp;
    };
}

/**
 * Evaluates the postfix order produced by <code>readExpression()</code>.
 * @function
 *
 * @param {Array} postfix Expression in postfix order.
 * @return {Number|NaN} The result of evaluating the expression or <code>NaN</code> if something goes wrong.
 */
function evaluatePostfix(postfix, popFunc) {

    var pop = (typeof popFunc === 'function') ? popFunc : popper;

    var stack = [];
    var len = postfix.length;
    var i = 0;
    while (i < len) {

        var token = postfix[i];

        if (isUnaryOperator(token)) {
            // var a = +stack.pop();
            var a = pop(stack);
            stack.push(unaryOp(a, token));

        } else if (!isOperator(token)) {
            // Operand
            stack.push(token);
        } else {
            var a = pop(stack);
            var b = pop(stack);
            // var a = +stack.pop();
            // var b = +stack.pop();
            stack.push(binaryOp(b, a, token));
        }

        i += 1;
    }

    return stack[0];
}

/**
 * Create a computer function.
 * @function
 *
 * This function returns a function that will compute values on
 * an object by reading the object's keys from a supplied expression.
 *
 * An example:
 * var obj = { a: 1, b: 2 };
 * var computer = createComputer(obj, 'a + b');
 * computer(); // 3
 *
 * obj.a = 2;
 * computer(); // 4
 *
 *
 * @param {Object} obj Object that holds the keys used in the mathematical expression
 *                     defined by <code>expression</code>.
 * @param {String} expression Mathematical expression used to compute values stored in <code>obj</code>.
 * @return {Function} A function that will compute the provided expression based on the current
 *                    values of the provided object.
 *                    Returned function signature: <code>function():Number|NaN</code>.
 */
function createComputer(obj, expression) {
    var postfix = readExpression(expression);
    return function () {
        return evaluatePostfix(postfix, computerPopper(obj));
    };
}


/**
 * Evaluate a mathematical expression.
 * @function
 *
 * @param {String} exp The expression to evaluate.
 * @return {Number|NaN} The result of evaluating the expression or <code>NaN</code> if something goes wrong.
 */
function compute(exp) {
    return evaluatePostfix(readExpression(exp));
}

/**
 * Writing console.log all the time is _______.
 */
function log(msg) {
    console.log(msg);
}

return {
    compute:        compute,
    createComputer: createComputer
};

}));