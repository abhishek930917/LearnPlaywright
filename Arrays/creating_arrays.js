/**
 * CREATING ARRAYS
 *
 * Concept: Arrays are ordered lists of values. They can hold any data type
 * and are one of the most commonly used data structures in JavaScript.
 */

// =====================================================
// METHOD 1: Array Literal (Most Common)
// =====================================================
// Using square brackets [] — this is the preferred way.

console.log("=== Creating Arrays with Literals ===");

const fruits = ["Apple", "Banana", "Cherry"];
console.log("Fruits:", fruits);

const mixed = [42, "hello", true, null, { key: "value" }, [1, 2]];
console.log("Mixed array:", mixed);

const empty = [];
console.log("Empty array:", empty);


// =====================================================
// METHOD 2: Array Constructor
// =====================================================
// Using new Array(). Caution: single number creates empty slots.

console.log("\n=== Creating Arrays with Constructor ===");

const colors = new Array("Red", "Green", "Blue");
console.log("Colors:", colors);

// ⚠️ Single number argument creates an array with that many empty slots
const tricky = new Array(3);
console.log("Array(3):", tricky);        // [empty × 3]
console.log("Length:", tricky.length);   // 3


// =====================================================
// METHOD 3: Array.of()
// =====================================================
// Creates an array from arguments — avoids the single-number trap.

console.log("\n=== Array.of() ===");

const nums = Array.of(3);
console.log("Array.of(3):", nums);       // [3]

const scores = Array.of(10, 20, 30);
console.log("Array.of(10,20,30):", scores);


// =====================================================
// METHOD 4: Array.from()
// =====================================================
// Creates an array from an iterable or array-like object.

console.log("\n=== Array.from() ===");

// From a string (iterable)
const letters = Array.from("Hello");
console.log("From string:", letters);    // ['H','e','l','l','o']

// From a Set
const unique = Array.from(new Set([1, 2, 2, 3]));
console.log("From Set:", unique);        // [1, 2, 3]

// From array-like object
function showArgs() {
    const argsArray = Array.from(arguments);
    console.log("Arguments as array:", argsArray);
}
showArgs("a", "b", "c");

// With a mapping function
const doubled = Array.from([1, 2, 3], x => x * 2);
console.log("Doubled:", doubled);        // [2, 4, 6]


// =====================================================
// REAL WORLD EXAMPLE: Setting Up a Store Inventory
// =====================================================

console.log("\n=== Store Inventory Setup ===");

const inventory = ["Laptop", "Mouse", "Keyboard", "Monitor"];
const prices = Array.of(999, 25, 75, 300);
const skuNumbers = Array.from({ length: 4 }, (_, i) => `SKU-${1000 + i}`);

console.log("Products:", inventory);
console.log("Prices:  $", prices);
console.log("SKUs:    ", skuNumbers);


// =====================================================
// KEY POINTS
// =====================================================
// 1. Use [] (array literals) — they are concise and readable.
// 2. Avoid new Array(n) unless you intentionally want empty slots.
// 3. Array.of() is safe when passing a single number.
// 4. Array.from() is powerful for converting iterables and mapping.
