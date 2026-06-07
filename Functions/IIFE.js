// ============================================================================
// IIFE - Immediately Invoked Function Expression
// ============================================================================

// An IIFE (pronounced "iffy") is a JavaScript function that runs as soon as
// it is defined. It is a design pattern that produces a lexical scoping
// environment for variables, preventing them from polluting the global scope.

// ----------------------------------------------------------------------------
// Basic Syntax
// ----------------------------------------------------------------------------
// The function is wrapped in parentheses to make it an expression, then
// immediately invoked with another set of parentheses.

(function () {
  console.log("Basic IIFE executed!");
})();

// ----------------------------------------------------------------------------
// Named vs Anonymous IIFE
// ----------------------------------------------------------------------------
// IIFEs can be anonymous (most common) or named. A named IIFE can help with
// debugging but is not accessible outside its own scope.

(function namedIIFE() {
  console.log("Named IIFE executed!");
})();

// ----------------------------------------------------------------------------
// IIFE with Parameters
// ----------------------------------------------------------------------------
// You can pass arguments into an IIFE just like any regular function.

(function (name, year) {
  console.log(`Hello, ${name}! Year: ${year}`);
})("Alice", 2026);

// ----------------------------------------------------------------------------
// Arrow Function IIFE
// ----------------------------------------------------------------------------
// With ES6 arrow functions, IIFEs can be written more concisely.

(() => {
  console.log("Arrow function IIFE executed!");
})();

// With parameters:
((x, y) => {
  console.log(`Sum: ${x + y}`);
})(5, 10);

// ----------------------------------------------------------------------------
// Returning Values from an IIFE
// ----------------------------------------------------------------------------
// IIFEs can return values, which is useful for module patterns.

const counter = (function () {
  let count = 0; // private variable

  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count,
  };
})();

console.log(counter.getCount()); // 0
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
// console.log(counter.count); // undefined - count is private!

// ----------------------------------------------------------------------------
// Classic Use Case: Avoiding Global Scope Pollution
// ----------------------------------------------------------------------------
// Before ES6 modules, IIFEs were the standard way to encapsulate code
// and avoid leaking variables into the global namespace.

const app = (function () {
  const privateData = "secret";

  function privateMethod() {
    return "This is private";
  }

  return {
    publicMethod: function () {
      return `Public access to: ${privateMethod()}`;
    },
    getPrivateData: function () {
      return privateData; // controlled access
    },
  };
})();

console.log(app.publicMethod());
console.log(app.getPrivateData());

// ----------------------------------------------------------------------------
// Practical Example: DOM Manipulation Safety
// ----------------------------------------------------------------------------
// Protect against undefined being reassigned in older browsers.

(function (document, window, undefined) {
  // `undefined` is guaranteed to be the real undefined here
  console.log("DOM ready simulation with safe undefined");
})(document, window);

// ----------------------------------------------------------------------------
// Common Variations
// ----------------------------------------------------------------------------

// 1. Prefix operator style (uncommon but valid)
+(function () {
  console.log("Unary + IIFE");
})();

// 2. Void operator style
void (function () {
  console.log("Void IIFE");
})();

// 3. Assignment style
const result = (function () {
  return 42;
})();
console.log(`Returned value: ${result}`);

// ============================================================================
// Summary
// ============================================================================
// 1. IIFE = Immediately Invoked Function Expression
// 2. Syntax: (function() { ... })();
// 3. Executes immediately after definition
// 4. Creates a private scope (variables are not global)
// 5. Commonly used for data privacy, module patterns, and avoiding
//    global namespace pollution before ES6 modules existed.
// ============================================================================
