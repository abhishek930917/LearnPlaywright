/**
 * ARRAY SEARCH CONCEPTS
 *
 * Concept: Searching arrays is one of the most common operations in JavaScript.
 * This file covers every technique to locate values, indices, and objects inside arrays.
 */

// =====================================================
// SEARCH BY VALUE — indexOf() and lastIndexOf()
// =====================================================

console.log("=== indexOf() and lastIndexOf() ===");

const fruits = ["Apple", "Banana", "Cherry", "Banana", "Date"];

// indexOf returns the FIRST match
const firstBanana = fruits.indexOf("Banana");
console.log(`First "Banana" is at index: ${firstBanana}`); // 1

// lastIndexOf returns the LAST match
const lastBanana = fruits.lastIndexOf("Banana");
console.log(`Last "Banana" is at index: ${lastBanana}`); // 3

// Not found returns -1
const grapeIndex = fruits.indexOf("Grape");
console.log(`"Grape" index: ${grapeIndex}`); // -1

// Search from a specific index
const secondBanana = fruits.indexOf("Banana", 2);
console.log(`"Banana" after index 2: ${secondBanana}`); // 3


// =====================================================
// EXISTENCE CHECK — includes()
// =====================================================

console.log("\n=== includes() ===");

const colors = ["Red", "Green", "Blue"];

console.log(`Includes "Green"?  ${colors.includes("Green")}`);  // true
console.log(`Includes "Yellow"? ${colors.includes("Yellow")}`); // false

// Great for simple permission or tag checks
const userTags = ["admin", "editor", "viewer"];
if (userTags.includes("admin")) {
    console.log("User has admin access!");
}


// =====================================================
// SEARCH WITH CALLBACK — find() and findIndex()
// =====================================================

console.log("\n=== find() and findIndex() ===");

const users = [
    { id: 1, name: "Alice", role: "admin" },
    { id: 2, name: "Bob", role: "editor" },
    { id: 3, name: "Charlie", role: "viewer" },
    { id: 4, name: "Diana", role: "admin" }
];

// find() — returns the FIRST matching element
const firstAdmin = users.find(user => user.role === "admin");
console.log("First admin:", firstAdmin);

// findIndex() — returns the INDEX of the first match
const firstAdminIndex = users.findIndex(user => user.role === "admin");
console.log(`First admin is at index: ${firstAdminIndex}`);

// findLast() — returns the LAST matching element (ES2023+)
try {
    const lastAdmin = users.findLast(user => user.role === "admin");
    console.log("Last admin:", lastAdmin);
} catch (e) {
    console.log("findLast() not available in this Node.js version");
}

// findLastIndex() — returns the INDEX of the last match (ES2023+)
try {
    const lastAdminIndex = users.findLastIndex(user => user.role === "admin");
    console.log(`Last admin is at index: ${lastAdminIndex}`);
} catch (e) {
    console.log("findLastIndex() not available in this Node.js version");
}


// =====================================================
// SEARCHING PRIMITIVE vs REFERENCE TYPES
// =====================================================

console.log("\n=== Primitive vs Reference Search ===");

const numbers = [10, 20, 30, 20];
console.log("indexOf 20:", numbers.indexOf(20)); // Works perfectly

const objArray = [{ id: 1 }, { id: 2 }];
const target = { id: 2 };
console.log("indexOf object:", objArray.indexOf(target)); // -1! Different reference

// Correct way: use find() with a condition
const found = objArray.find(obj => obj.id === 2);
console.log("Found via find():", found);


// =====================================================
// CUSTOM SEARCH FUNCTIONS
// =====================================================

console.log("\n=== Custom Search Functions ===");

const inventory = [
    { name: "Laptop", price: 999, category: "electronics" },
    { name: "Mouse", price: 25, category: "electronics" },
    { name: "Desk", price: 150, category: "furniture" }
];

// Find by multiple conditions
const affordableElectronics = inventory.find(
    item => item.category === "electronics" && item.price < 100
);
console.log("Affordable electronics:", affordableElectronics);

// Search by partial string match
const searchTerm = "lap";
const matched = inventory.find(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
);
console.log(`Search "${searchTerm}":`, matched);


// =====================================================
// REAL WORLD EXAMPLE 1: Booking System
// =====================================================

console.log("\n=== Booking System Search ===");

const flights = [
    { flight: "AI101", from: "NYC", to: "London", available: true },
    { flight: "AI102", from: "NYC", to: "Paris", available: false },
    { flight: "AI103", from: "London", to: "Delhi", available: true }
];

const destination = "London";
const flightToLondon = flights.find(f => f.to === destination && f.available);

if (flightToLondon) {
    console.log(`Book flight ${flightToLondon.flight} to ${destination}`);
} else {
    console.log(`No available flights to ${destination}`);
}


// =====================================================
// REAL WORLD EXAMPLE 2: Duplicate Detection
// =====================================================

console.log("\n=== Duplicate Detection ===");

const emails = ["a@test.com", "b@test.com", "a@test.com", "c@test.com"];

function hasDuplicates(arr) {
    return arr.some((item, index) => arr.indexOf(item) !== index);
}

console.log("Has duplicates?", hasDuplicates(emails));

// Find the first duplicate
const firstDuplicate = emails.find((email, index) => emails.indexOf(email) !== index);
console.log("First duplicate:", firstDuplicate);


// =====================================================
// REAL WORLD EXAMPLE 3: Student Record Lookup
// =====================================================

console.log("\n=== Student Record Lookup ===");

const students = [
    { roll: 101, name: "Alice", grade: "A" },
    { roll: 102, name: "Bob", grade: "B" },
    { roll: 103, name: "Charlie", grade: "A" }
];

const rollNumber = 102;
const student = students.find(s => s.roll === rollNumber);

if (student) {
    console.log(`Found: ${student.name} with grade ${student.grade}`);
} else {
    console.log(`Student with roll ${rollNumber} not found`);
}


// =====================================================
// SEARCH METHODS SUMMARY
// =====================================================

const searchSummary = [
    { method: "indexOf", returns: "First index or -1", bestFor: "Primitives" },
    { method: "lastIndexOf", returns: "Last index or -1", bestFor: "Primitives" },
    { method: "includes", returns: "Boolean", bestFor: "Quick existence check" },
    { method: "find", returns: "Element or undefined", bestFor: "Objects, complex conditions" },
    { method: "findIndex", returns: "Index or -1", bestFor: "Objects, complex conditions" },
    { method: "findLast", returns: "Element or undefined", bestFor: "Last match (ES2023+)" },
    { method: "findLastIndex", returns: "Index or -1", bestFor: "Last match index (ES2023+)" }
];

console.log("\n=== Search Methods Summary ===");
searchSummary.forEach(s => {
    console.log(`  ${s.method.padEnd(15)} → ${s.returns.padEnd(25)} | Best for: ${s.bestFor}`);
});


// =====================================================
// KEY POINTS
// =====================================================
// 1. indexOf/lastIndexOf use strict equality (===) — works for primitives only.
// 2. includes() is the cleanest way to check if a value exists.
// 3. find/findIndex accept a callback — use these for objects and complex logic.
// 4. Objects are compared by reference, not by content — always use find() for objects.
// 5. findLast/findLastIndex (ES2023+) search from the end of the array.
