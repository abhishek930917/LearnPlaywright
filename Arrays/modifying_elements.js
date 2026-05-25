/**
 * MODIFYING ELEMENTS
 *
 * Concept: Arrays in JavaScript are mutable — you can change, add,
 * or remove elements after the array is created.
 */

// =====================================================
// UPDATING ELEMENTS BY INDEX
// =====================================================

console.log("=== Updating by Index ===");

const tasks = ["Wake up", "Exercise", "Eat breakfast", "Read"];
console.log("Before:", tasks);

tasks[2] = "Eat a healthy breakfast"; // Update index 2
tasks[0] = "Wake up early";           // Update index 0

console.log("After: ", tasks);


// =====================================================
// ADDING ELEMENTS BY INDEX
// =====================================================

console.log("\n=== Adding by Index ===");

const scores = [85, 92, 78];
scores[3] = 96; // Adds a new element at index 3
console.log("After adding at [3]:", scores);

// ⚠️ Adding with a gap creates empty slots
scores[10] = 100;
console.log("After adding at [10]:", scores);
console.log("Length is now:", scores.length); // 11


// =====================================================
// REPLACING MULTIPLE ELEMENTS WITH fill()
// =====================================================

console.log("\n=== Array.fill() ===");

const filled = new Array(5).fill(0);
console.log("Filled with 0:", filled);

const partial = ["A", "B", "C", "D", "E"];
partial.fill("X", 1, 4); // Fill "X" from index 1 up to (but not including) 4
console.log("Partial fill:", partial); // ['A', 'X', 'X', 'X', 'E']


// =====================================================
// REAL WORLD EXAMPLE 1: Updating a Shopping Cart
// =====================================================

console.log("\n=== Shopping Cart Update ===");

const cart = [
    { item: "Milk", quantity: 1 },
    { item: "Bread", quantity: 2 },
    { item: "Eggs", quantity: 12 }
];

console.log("Before update:", cart);

// Customer wants 2 milks instead of 1
cart[0].quantity = 2;
console.log("After update: ", cart);


// =====================================================
// REAL WORLD EXAMPLE 2: Grade Adjustment
// =====================================================

console.log("\n=== Grade Adjustment ===");

const grades = [72, 85, 68, 90, 55];
console.log("Original grades:", grades);

// Teacher applies a +5 bonus to the lowest grade
let lowestIndex = 0;
for (let i = 1; i < grades.length; i++) {
    if (grades[i] < grades[lowestIndex]) {
        lowestIndex = i;
    }
}
grades[lowestIndex] += 5;
console.log("After bonus:", grades);


// =====================================================
// REAL WORLD EXAMPLE 3: Seating Plan
// =====================================================

console.log("\n=== Seating Plan ===");

const seats = ["Alice", "Bob", "Charlie", "Diana"];
console.log("Original:", seats);

// Charlie canceled, Eve is taking his place
seats[2] = "Eve";
console.log("Updated: ", seats);


// =====================================================
// KEY POINTS
// =====================================================
// 1. Use array[index] = value to change an existing element.
// 2. Setting an index beyond current length grows the array and creates empty slots.
// 3. fill() is useful for initializing or resetting ranges of values.
// 4. Arrays can hold objects — mutating nested objects affects the original.
