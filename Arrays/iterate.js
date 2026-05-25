/**
 * ARRAY ITERATION CONCEPTS
 *
 * Concept: Iteration means going through each element in an array one by one.
 * JavaScript provides multiple ways to loop — each with strengths and trade-offs.
 */

// =====================================================
// CLASSIC for LOOP
// =====================================================

console.log("=== Classic for Loop ===");

const scores = [85, 92, 78, 96, 88];

for (let i = 0; i < scores.length; i++) {
    console.log(`Index ${i}: Score = ${scores[i]}`);
}

// When to use: You need the index, want to skip elements, or need to break early.


// =====================================================
// for...of LOOP
// =====================================================
// Iterates over VALUES. Clean and modern.

console.log("\n=== for...of Loop ===");

const fruits = ["Apple", "Banana", "Cherry"];

for (const fruit of fruits) {
    console.log(`Fruit: ${fruit}`);
}

// With index using entries()
console.log("\n--- for...of with entries() ---");
for (const [index, fruit] of fruits.entries()) {
    console.log(`${index}: ${fruit}`);
}


// =====================================================
// forEach()
// =====================================================
// Runs a callback for each element. Cannot break or return early.

console.log("\n=== forEach() ===");

const tasks = ["Email team", "Fix bug", "Deploy"];

tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
});

// ⚠️ You CANNOT use break, continue, or return to exit forEach early.
// Use for...of or a classic for loop if you need early exit.


// =====================================================
// entries(), keys(), values()
// =====================================================

console.log("\n=== Iterators: entries(), keys(), values() ===");

const letters = ["A", "B", "C"];

// entries() — [index, value] pairs
console.log("--- entries() ---");
for (const entry of letters.entries()) {
    console.log(`  entry: [${entry[0]}, "${entry[1]}"]`);
}

// keys() — just the indices
console.log("--- keys() ---");
for (const key of letters.keys()) {
    console.log(`  key: ${key}`);
}

// values() — just the values
console.log("--- values() ---");
for (const value of letters.values()) {
    console.log(`  value: ${value}`);
}


// =====================================================
// while and do...while
// =====================================================

console.log("\n=== while and do...while ===");

// while — check condition BEFORE each iteration
let i = 0;
while (i < fruits.length) {
    console.log(`while: ${fruits[i]}`);
    i++;
}

// do...while — run at least ONCE, then check condition
let j = 0;
do {
    console.log(`do...while: ${fruits[j]}`);
    j++;
} while (j < fruits.length);


// =====================================================
// BREAK AND CONTINUE
// =====================================================

console.log("\n=== break and continue ===");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// break — exit the loop immediately
console.log("--- break (stop at 5) ---");
for (const num of numbers) {
    if (num > 5) break;
    console.log(num); // 1, 2, 3, 4, 5
}

// continue — skip the current iteration
console.log("--- continue (skip even numbers) ---");
for (const num of numbers) {
    if (num % 2 === 0) continue;
    console.log(num); // 1, 3, 5, 7, 9
}


// =====================================================
// for...in (AVOID ON ARRAYS)
// =====================================================

console.log("\n=== for...in (Caution) ===");

const arr = ["A", "B", "C"];
arr.custom = "extra"; // Adding a custom enumerable property

for (const key in arr) {
    console.log(`  key ${key}: ${arr[key]}`);
}

// ⚠️ for...in iterates over ALL enumerable properties, not just array indices.
// It also includes inherited properties. Always use for...of on arrays.


// =====================================================
// REAL WORLD EXAMPLE 1: Paginated Processing
// =====================================================

console.log("\n=== Paginated Processing ===");

const allRecords = Array.from({ length: 25 }, (_, i) => `Record ${i + 1}`);
const pageSize = 10;

for (let page = 0; page < allRecords.length; page += pageSize) {
    const pageItems = allRecords.slice(page, page + pageSize);
    console.log(`Page ${page / pageSize + 1}: ${pageItems.join(", ")}`);
}


// =====================================================
// REAL WORLD EXAMPLE 2: Batch Validation with break
// =====================================================

console.log("\n=== Batch Validation ===");

const formFields = [
    { name: "username", value: "alice" },
    { name: "email", value: "" },
    { name: "password", value: "secret" }
];

let firstError = null;
for (const field of formFields) {
    if (!field.value) {
        firstError = `${field.name} is required`;
        break; // Stop checking after the first error
    }
}

if (firstError) {
    console.log(`Validation failed: ${firstError}`);
} else {
    console.log("All fields valid!");
}


// =====================================================
// REAL WORLD EXAMPLE 3: Retry Logic with do...while
// =====================================================

console.log("\n=== Retry Logic ===");

const maxAttempts = 3;
let attempt = 0;
let success = false;

const serverResponses = [false, false, true]; // Simulated server

do {
    success = serverResponses[attempt];
    attempt++;
    console.log(`Attempt ${attempt}: ${success ? "Success" : "Failed"}`);
} while (!success && attempt < maxAttempts);


// =====================================================
// ITERATION METHODS COMPARISON
// =====================================================

const comparison = [
    { method: "for", indexAccess: "Yes", breakable: "Yes", useCase: "Full control" },
    { method: "for...of", indexAccess: "Via entries()", breakable: "Yes", useCase: "Read values cleanly" },
    { method: "forEach", indexAccess: "Yes (param)", breakable: "No", useCase: "Side effects on each item" },
    { method: "while", indexAccess: "Yes", breakable: "Yes", useCase: "Unknown iteration count" },
    { method: "do...while", indexAccess: "Yes", breakable: "Yes", useCase: "At least one iteration" }
];

console.log("\n=== Iteration Methods Comparison ===");
comparison.forEach(c => {
    console.log(`  ${c.method.padEnd(12)} | Index: ${c.indexAccess.padEnd(15)} | Break: ${c.breakable.padEnd(3)} | ${c.useCase}`);
});


// =====================================================
// KEY POINTS
// =====================================================
// 1. Use for...of for the cleanest value iteration with break support.
// 2. Use classic for when you need the index, custom steps, or precise control.
// 3. Use forEach for running a function on every item — but remember you cannot break.
// 4. Avoid for...in on arrays — it includes non-index properties and inherited keys.
// 5. Use break/continue with for, while, do...while, and for...of only.
// 6. entries(), keys(), and values() return iterators — great for destructuring.
