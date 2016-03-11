'use strict';

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
            return subtract(b, a);

        case '*':
            return multiply(a, b);

        case '/':
            return divide(b, a);

        case '%':
            return modulo(b, a);

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
function readExpression(exp) {

    exp = exp.replace(/\s/g, '');
    var len = exp.length;
    var i = 0;
    var stack = [];
    var postfix = [];

    while (i < len) {

        var token = exp[i];
        if (isOperator(token)) {

            while (stack.length > 0 && isOperator(stack[stack.length - 1])) {
                if (compareOperators(token, stack[stack.length - 1]) <= 0) {
                    // While we have something on the stack and the token has less precendence
                    postfix.push(stack.pop());
                }
            }
            stack.push(token);

        } else if (token === '(') {

            stack.push(token);

        } else if (token === ')') {

            while (stack.length > 0 && !isOpenParen(stack[stack.length - 1])) {
                postfix.push(stack.pop());
            }
            stack.pop(); // Get rid of the open paren.

        } else {

            // Operand
            postfix.push(token);

        }

        i += 1;
    }

    while (stack.length > 0) {
        postfix.push(stack.pop());
    }

    return postfix;
}

/**
 * Evaluates the postfix order produced by <code>readExpression()</code>.
 * @function
 *
 * @param {Array} postfix Expression in postfix order.
 * @return {Number|NaN} The result of evaluating the expression or <code>NaN</code> if something goes wrong.
 */
function evaluatePostfix(postfix) {

    var stack = [];
    var len = postfix.length;
    var i = 0;
    while (i < len) {

        var token = postfix[i];
        if (!isOperator(token)) {
            // Operand
            stack.push(token);
        } else {
            var a = parseFloat(stack.pop());
            var b = parseFloat(stack.pop());
            stack.push(binaryOp(a, b, token));
        }

        i += 1;
    }

    return stack[0];
}

/**
 * Evaluate a mathematical expression.
 * @function
 *
 * @param {String} exp The expression to evaluate.
 * @return {Number|NaN} The result of evaluating the expression or <code>NaN</code> if something goes wrong.
 */
function evaluateExpression(exp) {
    return evaluatePostfix(readExpression(exp));
}

/**
 * Writing console.log all the time is _______.
 */
function log(msg) {
    console.log(msg);
}

// log(evaluateExpression('3 + 4'));
// log(evaluateExpression('3 + 4 + 5'));
// log(evaluateExpression('3 + 4 / 4'));

// log(evaluateExpression('3 * 4 / 4'));
// log(readExpression('3 * 4 / 4'));

// log(evaluateExpression('3 * 4'));
// log(readExpression('3 * 4'));

// log(evaluateExpression('2 / 4'));
// log(evaluateExpression('2 - 4'));

log(evaluateExpression('2 / (1 + 1)'));
log(readExpression('2 / (1 + 1)'));

log(evaluateExpression('2 / (2 + 2)'));
log(evaluateExpression('1 / (1 + 2)'));