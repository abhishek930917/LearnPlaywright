/**
 * FINDING ELEMENTS
 *
 * Concept: JavaScript provides several ways to search for values in an array,
 * from simple index lookups to callback-based searches.
 */

// =====================================================
// indexOf() and lastIndexOf()
// =====================================================
// Returns the first/last index of a value, or -1 if not found.

console.log("=== indexOf / lastIndexOf ===");

const fruits = ["Apple", "Banana", "Cherry", "Banana", "Date"];

console.log("indexOf Banana:", fruits.indexOf("Banana"));       // 1
console.log("lastIndexOf Banana:", fruits.lastIndexOf("Banana")); // 3
console.log("indexOf Grape:", fruits.indexOf("Grape"));         // -1

// Starting search from a specific index
console.log("indexOf Banana from 2:", fruits.indexOf("Banana", 2)); // 3


// =====================================================
// includes()
// =====================================================
// Returns true/false — great for simple existence checks.

console.log("\n=== includes() ===");

console.log("Includes Cherry? ", fruits.includes("Cherry"));   // true
console.log("Includes Grape?  ", fruits.includes("Grape"));    // false

// Can also start from an index
console.log("Includes Banana after index 2?", fruits.includes("Banana", 2)); // true


// =====================================================
// find() and findIndex()
// =====================================================
// Uses a callback function — powerful for complex conditions.

console.log("\n=== find / findIndex ===");

const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 35 }
];

const user = users.find(u => u.name === "Bob");
console.log("Found user:", user);

const userIndex = users.findIndex(u => u.age > 30);
console.log("First user older than 30 is at index:", userIndex);

// findLast() and findLastIndex() (ES2023+)
try {
    const lastMatch = users.findLast(u => u.age > 25);
    console.log("Last user older than 25:", lastMatch);
} catch (e) {
    console.log("findLast not available in this Node.js version");
}


// =====================================================
// REAL WORLD EXAMPLE 1: Product Search
// =====================================================

console.log("\n=== Product Search ===");

const products = [
    { sku: "A001", name: "Laptop", price: 999 },
    { sku: "A002", name: "Mouse", price: 25 },
    { sku: "A003", name: "Keyboard", price: 75 }
];

const skuToFind = "A002";
const foundProduct = products.find(p => p.sku === skuToFind);

if (foundProduct) {
    console.log(`Found: ${foundProduct.name} at $${foundProduct.price}`);
} else {
    console.log("Product not found.");
}


// =====================================================
// REAL WORLD EXAMPLE 2: Role Verification
// =====================================================

console.log("\n=== Role Verification ===");

const roles = ["viewer", "editor", "admin"];

function canEdit(userRoles) {
    return userRoles.includes("editor") || userRoles.includes("admin");
}

console.log("Can editor edit?", canEdit(["viewer", "editor"])); // true
console.log("Can viewer edit?", canEdit(["viewer"]));           // false


// =====================================================
// KEY POINTS
// =====================================================
// 1. indexOf/lastIndexOf — simple value search, returns index or -1.
// 2. includes() — simple existence check, returns boolean.
// 3. find() — returns the first matching element (callback-based).
// 4. findIndex() — returns the index of the first match.
// 5. Use === for comparisons; objects are matched by reference unless using find().
