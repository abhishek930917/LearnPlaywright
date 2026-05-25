/**
 * SPREAD AND REST OPERATORS
 *
 * Concept: The ... syntax works differently depending on context.
 * SPREAD expands an array into individual elements.
 * REST collects multiple elements into an array.
 */

// =====================================================
// SPREAD — Expanding Arrays
// =====================================================

console.log("=== Spread Operator ===");

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Combine arrays
const combined = [...arr1, ...arr2];
console.log("Combined:", combined);

// Add elements during combination
const withExtras = [0, ...arr1, 99];
console.log("With extras:", withExtras);

// Copy an array (shallow copy)
const copy = [...arr1];
copy.push(4);
console.log("Original:", arr1); // Unchanged
console.log("Copy:    ", copy);


// =====================================================
// SPREAD IN FUNCTION CALLS
// =====================================================

console.log("\n=== Spread in Function Calls ===");

const numbers = [5, 2, 8, 1, 9];

console.log("Max:", Math.max(...numbers));
console.log("Min:", Math.min(...numbers));

function greet(first, second, third) {
    console.log(`Hello ${first}, ${second}, and ${third}!`);
}
const names = ["Alice", "Bob", "Charlie"];
greet(...names);


// =====================================================
// REST — Collecting Arguments
// =====================================================

console.log("\n=== Rest Parameters ===");

function sum(...values) {
    return values.reduce((acc, v) => acc + v, 0);
}

console.log("sum(1, 2, 3):", sum(1, 2, 3));
console.log("sum(10, 20): ", sum(10, 20));
console.log("sum():       ", sum());

// Rest with named parameters
function introduce(greeting, ...names) {
    console.log(`${greeting}, ${names.join(" and ")}!`);
}
introduce("Hi", "Alice", "Bob", "Charlie");


// =====================================================
// REST IN DESTRUCTURING
// =====================================================

console.log("\n=== Rest in Destructuring ===");

const [leader, ...team] = ["Captain", "Mate 1", "Mate 2", "Mate 3"];
console.log("Leader:", leader);
console.log("Team:  ", team);


// =====================================================
// REAL WORLD EXAMPLE 1: Merging Configs
// =====================================================

console.log("\n=== Merging Configs ===");

const defaults = { theme: "light", fontSize: 14 };
const userPrefs = { fontSize: 16, showSidebar: true };

// (This is object spread, shown here for context — it works similarly)
const config = { ...defaults, ...userPrefs };
console.log("Merged config:", config);

// Array example: merging permission lists
const basePerms = ["read", "write"];
const extraPerms = ["delete", "admin"];
const allPerms = [...basePerms, ...extraPerms];
console.log("Permissions:", allPerms);


// =====================================================
// REAL WORLD EXAMPLE 2: Cloning and Modifying
// =====================================================

console.log("\n=== Immutable Update ===");

const todos = ["Task A", "Task B"];
const newTodos = [...todos, "Task C"]; // Add without mutating original
console.log("Original:", todos);
console.log("New:     ", newTodos);


// =====================================================
// KEY POINTS
// =====================================================
// 1. Spread (...) expands an array into individual elements.
// 2. Rest (...) collects multiple elements into an array.
// 3. [...arr] is a quick way to make a shallow copy.
// 4. Spread is great for combining arrays and passing to functions.
// 5. Rest parameters allow functions to accept any number of arguments.
