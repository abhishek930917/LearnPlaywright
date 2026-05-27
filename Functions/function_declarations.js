// function_declarations.js
// Type 1: Function Declaration (Named Function)

// ==========================================
// What is a Function Declaration?
// ==========================================
// A function declaration defines a named function using the 'function' keyword.
// It is HOISTED, meaning you can call it BEFORE it is defined in the code.

// --- Basic Syntax ---
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Alice")); // "Hello, Alice!"

// ==========================================
// Hoisting: Call Before Definition
// ==========================================
// Because of hoisting, this works perfectly:

console.log("Hoisted result:", addNumbers(5, 10)); // 15

function addNumbers(a, b) {
    return a + b;
}

// ==========================================
// Characteristics of Function Declarations
// ==========================================

// 1. MUST have a name
function sayHello() {
    return "Hello!";
}

// 2. Creates a variable in the current scope with the function name
console.log(typeof sayHello); // "function"

// 3. Has its own 'this' context (depends on how it's called)
const person = {
    name: "Bob",
    greet: function greetFunction() {
        return `Hi, I'm ${this.name}`;
    }
};
console.log(person.greet()); // "Hi, I'm Bob"

// ==========================================
// Default Parameters
// ==========================================
function greetWithDefault(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

console.log(greetWithDefault());              // "Hello, Guest!"
console.log(greetWithDefault("Charlie"));     // "Hello, Charlie!"
console.log(greetWithDefault("Dana", "Hi"));  // "Hi, Dana!"

// ==========================================
// Rest Parameters
// ==========================================
function sumAll(...numbers) {
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    return total;
}

console.log("Sum of 1,2,3:", sumAll(1, 2, 3));       // 6
console.log("Sum of 10,20:", sumAll(10, 20));         // 30
console.log("Sum of nothing:", sumAll());             // 0

// ==========================================
// Return Statement
// ==========================================
// Functions can return a value. Without 'return', they return 'undefined'.

function noReturn() {
    console.log("I don't return anything explicitly");
}

const result = noReturn(); // logs the message
console.log("Result:", result); // undefined

// ==========================================
// Function Declaration vs Others
// ==========================================
// ✅ Hoisted (can be called before definition)
// ✅ Must have a name
// ✅ Has its own 'this' binding
// ✅ Has 'arguments' object
// ✅ Can be used as a constructor (with 'new')

// ==========================================
// When to Use Function Declarations
// ==========================================
// - Main/top-level functions in your code
// - When you need hoisting
// - When readability of the function name is important
// - When you need 'this' to be dynamic
// - Constructor functions (though classes are preferred now)
