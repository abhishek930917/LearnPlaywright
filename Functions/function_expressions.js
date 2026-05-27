// function_expressions.js
// Type 2: Function Expression (Anonymous & Named)

// ==========================================
// What is a Function Expression?
// ==========================================
// A function expression creates a function inside an expression.
// It is NOT hoisted, so you cannot call it before it is defined.

// --- Anonymous Function Expression ---
const multiply = function(a, b) {
    return a * b;
};

console.log(multiply(4, 5)); // 20

// --- Named Function Expression ---
const factorial = function fact(n) {
    if (n <= 1) return 1;
    return n * fact(n - 1); // The name 'fact' is available inside the function
};

console.log(factorial(5)); // 120

// ==========================================
// Function Expression is NOT Hoisted
// ==========================================
// console.log(subtract(10, 3)); // ❌ Error: Cannot access before initialization

const subtract = function(a, b) {
    return a - b;
};

console.log(subtract(10, 3)); // 7

// ==========================================
// Storing Functions in Variables
// ==========================================
const operations = {
    add: function(a, b) { return a + b; },
    multiply: function(a, b) { return a * b; },
    divide: function(a, b) { return a / b; }
};

console.log("Add:", operations.add(10, 5));       // 15
console.log("Multiply:", operations.multiply(10, 5)); // 50
console.log("Divide:", operations.divide(10, 5));   // 2

// ==========================================
// Passing as Arguments (Callbacks)
// ==========================================
function processData(data, callback) {
    const result = callback(data);
    return result;
}

const doubled = processData(10, function(num) {
    return num * 2;
});

console.log("Doubled:", doubled); // 20

// ==========================================
// Returning Functions from Functions (Closures)
// ==========================================
function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const triple = createMultiplier(3);
const double = createMultiplier(2);

console.log("Triple 4:", triple(4));   // 12
console.log("Double 5:", double(5));   // 10

// ==========================================
// Named Function Expression Benefits
// ==========================================
// The internal name is useful for recursion and debugging.

const fibonacci = function fib(n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
};

console.log("Fibonacci(7):", fibonacci(7)); // 13

// In stack traces, you'll see 'fib' instead of 'anonymous'

// ==========================================
// Function Expression vs Declaration
// ==========================================
// ❌ NOT hoisted (must define before calling)
// ✅ Can be anonymous or named
// ✅ Can be assigned to variables, objects, or passed as arguments
// ✅ Has its own 'this' binding
// ✅ Has 'arguments' object
// ✅ Can be used as a constructor (with 'new')

// ==========================================
// When to Use Function Expressions
// ==========================================
// - Callbacks and event handlers
// - Functions assigned to variables or object properties
// - Returning functions from other functions (closures)
// - When you don't need hoisting
// - IIFE patterns
