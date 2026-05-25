/**
 * ITERATING ARRAYS
 *
 * Concept: Looping over arrays is one of the most common operations.
 * JavaScript offers several ways, each with its own best use case.
 */

// =====================================================
// FOR LOOP (Classic)
// =====================================================

console.log("=== for loop ===");

const scores = [85, 92, 78, 96, 88];

for (let i = 0; i < scores.length; i++) {
    console.log(`Score ${i + 1}: ${scores[i]}`);
}


// =====================================================
// forEach()
// =====================================================
// Executes a callback for each element. Cannot break early.

console.log("\n=== forEach() ===");

const fruits = ["Apple", "Banana", "Cherry"];

fruits.forEach((fruit, index) => {
    console.log(`${index + 1}. ${fruit}`);
});


// =====================================================
// for...of Loop
// =====================================================
// Iterates over values. Clean and readable.

console.log("\n=== for...of ===");

for (const fruit of fruits) {
    console.log(`Fruit: ${fruit}`);
}

// With index using entries()
console.log("\n--- with entries() ---");
for (const [index, fruit] of fruits.entries()) {
    console.log(`${index}: ${fruit}`);
}


// =====================================================
// for...in Loop (Not Recommended for Arrays)
// =====================================================
// Iterates over all enumerable properties, including custom ones.

console.log("\n=== for...in (caution) ===");
const arr = ["A", "B"];
arr.custom = "extra"; // Adding a custom property

for (const key in arr) {
    console.log(`Key ${key}: ${arr[key]}`);
}
// ⚠️ Avoid for...in on arrays — use for...of or forEach instead.


// =====================================================
// while and do...while
// =====================================================

console.log("\n=== while loop ===");

let i = 0;
while (i < fruits.length) {
    console.log(`Index ${i}: ${fruits[i]}`);
    i++;
}


// =====================================================
// REAL WORLD EXAMPLE 1: Processing Orders
// =====================================================

console.log("\n=== Processing Orders ===");

const orders = ["#1001", "#1002", "#1003"];

orders.forEach(order => {
    console.log(`Processing ${order}... done.`);
});


// =====================================================
// REAL WORLD EXAMPLE 2: Attendance Check
// =====================================================

console.log("\n=== Attendance Check ===");

const students = ["Alice", "Bob", "Charlie"];

for (const [num, student] of students.entries()) {
    console.log(`Roll ${num + 1}: ${student} — Present`);
}


// =====================================================
// REAL WORLD EXAMPLE 3: Searching with break
// =====================================================

console.log("\n=== Searching with break ===");

const tasks = ["pending", "pending", "done", "pending"];

let firstDoneIndex = -1;
for (let i = 0; i < tasks.length; i++) {
    if (tasks[i] === "done") {
        firstDoneIndex = i;
        break; // Exit early — only for, while, do...while support break
    }
}
console.log(`First completed task is at index: ${firstDoneIndex}`);


// =====================================================
// KEY POINTS
// =====================================================
// 1. for — most flexible; supports break/continue and index access.
// 2. forEach — concise for running a function on every item.
// 3. for...of — clean syntax for values; use entries() for index+value.
// 4. for...in — avoid on arrays; it iterates over all enumerable keys.
// 5. Only for, while, and do...while support break/continue.
