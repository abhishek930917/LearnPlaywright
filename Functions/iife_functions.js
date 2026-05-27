// iife_functions.js
// Type 4: Immediately Invoked Function Expression (IIFE)

// ==========================================
// What is an IIFE?
// ==========================================
// An IIFE is a function that runs as soon as it is defined.
// IIFE = Immediately Invoked Function Expression

// --- Basic Syntax ---
(function() {
    console.log("I run immediately!");
})();

// --- With Parameters ---
(function(name) {
    console.log(`Hello, ${name}!`);
})("World");

// ==========================================
// Why Use IIFE?
// ==========================================
// 1. Create a private scope (avoid polluting global scope)
// 2. Encapsulate variables and logic
// 3. Run initialization code once

// ==========================================
// 1. Private Scope / Encapsulation
// ==========================================

const counter = (function() {
    let count = 0; // This variable is private!

    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
})();

console.log(counter.getCount());  // 0
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
// console.log(counter.count);    // undefined (private!)

// ==========================================
// 2. Avoid Global Scope Pollution
// ==========================================

// Without IIFE, tempVar would leak into global scope
(function() {
    const tempVar = "I'm temporary";
    console.log(tempVar);
})();

// console.log(tempVar); // ❌ ReferenceError: tempVar is not defined

// ==========================================
// 3. IIFE with Arrow Function
// ==========================================

(() => {
    console.log("Arrow IIFE executed!");
})();

// With parameters
const result = ((a, b) => a + b)(10, 20);
console.log("Arrow IIFE result:", result); // 30

// ==========================================
// 4. Module Pattern (Classic JavaScript)
// ==========================================

const calculator = (function() {
    // Private variables
    let history = [];

    // Private function
    function log(operation, result) {
        history.push(`${operation} = ${result}`);
    }

    // Public API
    return {
        add(a, b) {
            const result = a + b;
            log(`${a} + ${b}`, result);
            return result;
        },
        subtract(a, b) {
            const result = a - b;
            log(`${a} - ${b}`, result);
            return result;
        },
        getHistory() {
            return [...history];
        }
    };
})();

console.log(calculator.add(5, 3));      // 8
console.log(calculator.subtract(10, 4)); // 6
console.log(calculator.getHistory());
// ["5 + 3 = 8", "10 - 4 = 6"]

// ==========================================
// 5. IIFE with async (async IIFE)
// ==========================================

(async function() {
    // Simulating async operation
    const promise = new Promise(resolve => setTimeout(() => resolve("Done!"), 50));
    const msg = await promise;
    console.log("Async IIFE:", msg);
})();

// ==========================================
// 6. Named IIFE (for recursion inside)
// ==========================================

(function countdown(n) {
    console.log(n);
    if (n > 0) countdown(n - 1);
})(5);
// Output: 5, 4, 3, 2, 1, 0

// ==========================================
// Syntax Variations
// ==========================================

// Parentheses around function
(function() { console.log("Style 1"); })();

// Parentheses around entire expression
(function() { console.log("Style 2"); }());

// Unary operators (less common today)
+function() { console.log("Style 3"); }();

// ==========================================
// When to Use IIFE
// ==========================================
// ✅ When you need a private scope
// ✅ To avoid global variable pollution
// ✅ Module pattern before ES6 modules
// ✅ One-time initialization code
// ✅ Creating closures with private state

// ==========================================
// Modern Alternative: ES6 Modules
// ==========================================
// Today, ES6 modules provide built-in encapsulation,
// so IIFE is less common, but still useful in some cases.
