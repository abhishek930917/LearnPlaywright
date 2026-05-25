/**
 * TRANSFORMING ARRAYS
 *
 * Concept: JavaScript has powerful methods to transform arrays into
 * new arrays or single values: map, filter, reduce, flat, and flatMap.
 */

// =====================================================
// map() — Transform Each Element
// =====================================================
// Returns a NEW array with the callback applied to each element.

console.log("=== map() ===");

const prices = [10, 20, 30];
const withTax = prices.map(p => p * 1.1);
console.log("Original:", prices);
console.log("With tax:", withTax);

const names = ["alice", "bob", "charlie"];
const capitalized = names.map(n => n.charAt(0).toUpperCase() + n.slice(1));
console.log("Capitalized:", capitalized);


// =====================================================
// filter() — Keep What Passes the Test
// =====================================================
// Returns a NEW array with elements where callback returns true.

console.log("\n=== filter() ===");

const scores = [55, 70, 82, 45, 91, 60];
const passing = scores.filter(s => s >= 60);
console.log("All scores:", scores);
console.log("Passing:  ", passing);

const users = [
    { name: "Alice", active: true },
    { name: "Bob", active: false },
    { name: "Charlie", active: true }
];
const activeUsers = users.filter(u => u.active);
console.log("Active users:", activeUsers.map(u => u.name));


// =====================================================
// reduce() — Reduce to a Single Value
// =====================================================
// Syntax: array.reduce((accumulator, current) => ..., initialValue)

console.log("\n=== reduce() ===");

const nums = [1, 2, 3, 4, 5];
const sum = nums.reduce((acc, n) => acc + n, 0);
console.log("Sum:", sum); // 15

const product = nums.reduce((acc, n) => acc * n, 1);
console.log("Product:", product); // 120

// Finding max
const max = nums.reduce((acc, n) => (n > acc ? n : acc), nums[0]);
console.log("Max:", max);

// Building an object
const people = ["Alice", "Bob", "Alice", "Charlie"];
const nameCount = people.reduce((acc, name) => {
    acc[name] = (acc[name] || 0) + 1;
    return acc;
}, {});
console.log("Name counts:", nameCount);


// =====================================================
// flat() — Flatten Nested Arrays
// =====================================================

console.log("\n=== flat() ===");

const nested = [1, [2, 3], [4, [5, 6]]];
console.log("Nested:", nested);
console.log("flat(1):", nested.flat(1));
console.log("flat(2):", nested.flat(2));
console.log("flat(Infinity):", [1, [2, [3, [4]]]].flat(Infinity));


// =====================================================
// flatMap() — Map then Flatten by 1 Level
// =====================================================

console.log("\n=== flatMap() ===");

const sentences = ["Hello world", "Good morning"];
const words = sentences.flatMap(s => s.split(" "));
console.log("Words:", words);


// =====================================================
// REAL WORLD EXAMPLE: E-Commerce Cart Summary
// =====================================================

console.log("\n=== E-Commerce Cart Summary ===");

const cart = [
    { name: "Shirt", price: 25, qty: 2 },
    { name: "Pants", price: 40, qty: 1 },
    { name: "Socks", price: 5, qty: 3 }
];

const totals = cart.map(item => item.price * item.qty);
console.log("Line totals:", totals);

const grandTotal = totals.reduce((sum, t) => sum + t, 0);
console.log("Grand total: $", grandTotal);

const expensiveItems = cart.filter(item => item.price > 10);
console.log("Expensive items:", expensiveItems.map(i => i.name));


// =====================================================
// KEY POINTS
// =====================================================
// 1. map() transforms every element into a new array.
// 2. filter() keeps only elements matching a condition.
// 3. reduce() aggregates everything into a single value.
// 4. flat() removes nesting; flatMap() maps then flattens one level.
// 5. None of these methods mutate the original array.
