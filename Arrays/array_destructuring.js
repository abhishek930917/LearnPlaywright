/**
 * ARRAY DESTRUCTURING
 *
 * Concept: Destructuring allows you to unpack values from arrays
 * into separate variables in a clean, readable way.
 */

// =====================================================
// BASIC DESTRUCTURING
// =====================================================

console.log("=== Basic Destructuring ===");

const colors = ["Red", "Green", "Blue"];
const [first, second, third] = colors;

console.log("First: ", first);
console.log("Second:", second);
console.log("Third: ", third);


// =====================================================
// SKIPPING ELEMENTS
// =====================================================

console.log("\n=== Skipping Elements ===");

const coords = [10, 20, 30, 40];
const [x, , z] = coords; // Skip the second element
console.log("x:", x);
console.log("z:", z);


// =====================================================
// REST PATTERN (...)
// =====================================================
// Collect remaining elements into a new array.

console.log("\n=== Rest Pattern ===");

const fruits = ["Apple", "Banana", "Cherry", "Date"];
const [f1, ...remaining] = fruits;

console.log("First:", f1);
console.log("Rest: ", remaining);


// =====================================================
// DEFAULT VALUES
// =====================================================

console.log("\n=== Default Values ===");

const settings = ["dark"];
const [theme, fontSize = "16px"] = settings;

console.log("Theme:   ", theme);
console.log("FontSize:", fontSize); // Uses default since no second element


// =====================================================
// SWAPPING VARIABLES
// =====================================================

console.log("\n=== Swapping Variables ===");

let a = 5;
let b = 10;
console.log("Before:", a, b);

[a, b] = [b, a];
console.log("After: ", a, b);


// =====================================================
// DESTRUCTURING RETURNED ARRAYS
// =====================================================

console.log("\n=== Function Returns ===");

function getMinMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
}

const [min, max] = getMinMax([3, 1, 4, 1, 5, 9]);
console.log("Min:", min);
console.log("Max:", max);


// =====================================================
// NESTED DESTRUCTURING
// =====================================================

console.log("\n=== Nested Destructuring ===");

const nested = ["A", ["B", "C"]];
const [outer, [inner1, inner2]] = nested;

console.log("Outer: ", outer);
console.log("Inner1:", inner1);
console.log("Inner2:", inner2);


// =====================================================
// REAL WORLD EXAMPLE: CSV Parsing
// =====================================================

console.log("\n=== CSV Row Parsing ===");

const csvRow = ["Alice", "25", "Engineer", "NY"];
const [name, age, job, city] = csvRow;

console.log(`${name}, aged ${age}, works as a ${job} in ${city}.`);


// =====================================================
// REAL WORLD EXAMPLE: useState-style Tuple
// =====================================================

console.log("\n=== useState-style Tuple ===");

function createState(initialValue) {
    let value = initialValue;
    function setValue(newValue) {
        value = newValue;
    }
    return [value, setValue];
}

const [count, setCount] = createState(0);
console.log("Initial count:", count);

// (In real React, setCount would trigger a re-render)


// =====================================================
// KEY POINTS
// =====================================================
// 1. Destructuring makes code cleaner than manual indexing.
// 2. Use commas to skip unwanted elements.
// 3. ...rest collects remaining elements into an array.
// 4. Default values handle cases where the array is shorter than expected.
// 5. Destructuring works great with functions that return arrays.
