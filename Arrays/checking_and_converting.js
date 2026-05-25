/**
 * CHECKING AND CONVERTING ARRAYS
 *
 * Concept: Learn how to verify if something is an array and how to
 * convert between arrays and other data types.
 */

// =====================================================
// Array.isArray()
// =====================================================
// The most reliable way to check if a value is an array.

console.log("=== Array.isArray() ===");

console.log("[] is array?     ", Array.isArray([]));          // true
console.log("[1,2] is array?  ", Array.isArray([1, 2]));      // true
console.log("'hi' is array?    ", Array.isArray("hi"));         // false
console.log("{} is array?      ", Array.isArray({}));           // false
console.log("null is array?    ", Array.isArray(null));         // false
console.log("undefined is array?", Array.isArray(undefined));   // false

// ⚠️ typeof [] returns "object" — that's why Array.isArray() exists
console.log("typeof []:", typeof []);


// =====================================================
// CONVERTING TO ARRAYS
// =====================================================

console.log("\n=== Converting to Arrays ===");

// Array.from() — from iterables and array-like objects
const fromString = Array.from("Hello");
console.log("From string:", fromString);

const fromSet = Array.from(new Set([1, 2, 2, 3]));
console.log("From Set:   ", fromSet);

// Array.of() — creates array from arguments
const ofNumbers = Array.of(1, 2, 3);
console.log("Array.of:   ", ofNumbers);

// Spread syntax
const fromArgs = [..."ABC"];
console.log("From spread:", fromArgs);


// =====================================================
// CONVERTING ARRAYS TO STRINGS
// =====================================================

console.log("\n=== Array to String ===");

const fruits = ["Apple", "Banana", "Cherry"];

console.log("toString():", fruits.toString());
console.log("join():    ", fruits.join());
console.log("join('-'): ", fruits.join(" - "));
console.log("join(''):  ", fruits.join(""));


// =====================================================
// CONVERTING TO OTHER FORMS
// =====================================================

console.log("\n=== Converting Values ===");

const nums = [1, 2, 3];

// Array to object with index keys
const toObject = { ...nums };
console.log("Spread to object:", toObject);

// Array entries to Map
const map = new Map(nums.entries());
console.log("Entries Map:", map);

// From NodeList-like object (browser example)
// const elements = Array.from(document.querySelectorAll('div'));


// =====================================================
// REAL WORLD EXAMPLE: Input Validation
// =====================================================

console.log("\n=== Input Validation ===");

function processItems(items) {
    if (!Array.isArray(items)) {
        console.log("Error: Expected an array, got", typeof items);
        return;
    }
    console.log(`Processing ${items.length} items...`);
}

processItems(["a", "b", "c"]);
processItems("not an array");


// =====================================================
// REAL WORLD EXAMPLE: CSV Generation
// =====================================================

console.log("\n=== CSV Generation ===");

const headers = ["Name", "Age", "City"];
const row1 = ["Alice", 30, "NYC"];
const row2 = ["Bob", 25, "LA"];

console.log(headers.join(","));
console.log(row1.join(","));
console.log(row2.join(","));


// =====================================================
// REAL WORLD EXAMPLE: Unique Tags
// =====================================================

console.log("\n=== Unique Tags ===");

const blogPosts = [
    { title: "JS Basics", tags: ["js", "beginner"] },
    { title: "Arrays", tags: ["js", "arrays"] },
    { title: "Loops", tags: ["js", "loops", "beginner"] }
];

const allTags = blogPosts.flatMap(post => post.tags);
const uniqueTags = Array.from(new Set(allTags));
console.log("All tags:   ", allTags);
console.log("Unique tags:", uniqueTags);


// =====================================================
// KEY POINTS
// =====================================================
// 1. Array.isArray() is the only reliable array check.
// 2. Array.from() converts iterables and array-like objects to arrays.
// 3. Array.of() is a safe alternative to new Array() for single values.
// 4. join() converts arrays to strings with a custom separator.
// 5. Spread syntax is a quick way to convert strings, Sets, and Maps to arrays.
