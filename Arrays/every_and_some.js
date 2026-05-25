/**
 * EVERY AND SOME
 *
 * Concept: every() checks if ALL elements pass a test.
 * some() checks if AT LEAST ONE element passes a test.
 * Both return a boolean and short-circuit when possible.
 */

// =====================================================
// every() — All Must Pass
// =====================================================

console.log("=== every() ===");

const passingScores = [80, 85, 90, 88];
const hasAllPassed = passingScores.every(score => score >= 60);
console.log("All passed?  ", hasAllPassed); // true

const mixedScores = [80, 55, 90, 88];
const allPassedMixed = mixedScores.every(score => score >= 60);
console.log("All passed?  ", allPassedMixed); // false

// Empty array returns true (vacuous truth)
console.log("[].every(...):", [].every(x => x > 0)); // true


// =====================================================
// some() — At Least One Passes
// =====================================================

console.log("\n=== some() ===");

const grades = [45, 55, 65, 75];
const hasPassing = grades.some(score => score >= 60);
console.log("Any passing? ", hasPassing); // true

const allFailing = [45, 55, 35, 25];
const anyPassing = allFailing.some(score => score >= 60);
console.log("Any passing? ", anyPassing); // false

// Empty array returns false
console.log("[].some(...): ", [].some(x => x > 0)); // false


// =====================================================
// COMBINING EVERY AND SOME
// =====================================================

console.log("\n=== Combining Checks ===");

const users = [
    { name: "Alice", verified: true, active: true },
    { name: "Bob", verified: true, active: false },
    { name: "Charlie", verified: false, active: true }
];

const allVerified = users.every(u => u.verified);
const anyActive = users.some(u => u.active);

console.log("All verified? ", allVerified); // false
console.log("Any active?   ", anyActive);    // true


// =====================================================
// REAL WORLD EXAMPLE 1: Form Validation
// =====================================================

console.log("\n=== Form Validation ===");

const fields = ["Alice", "alice@example.com", "25", "NYC"];
const allFilled = fields.every(field => field.trim().length > 0);

if (allFilled) {
    console.log("All fields filled. Ready to submit!");
} else {
    console.log("Please fill in all fields.");
}


// =====================================================
// REAL WORLD EXAMPLE 2: Inventory Check
// =====================================================

console.log("\n=== Inventory Check ===");

const stock = [
    { item: "Laptop", inStock: true },
    { item: "Mouse", inStock: true },
    { item: "Keyboard", inStock: false }
];

const allInStock = stock.every(p => p.inStock);
const anyAvailable = stock.some(p => p.inStock);

console.log("All items in stock? ", allInStock);
console.log("Can we ship anything?", anyAvailable);


// =====================================================
// REAL WORLD EXAMPLE 3: Permission System
// =====================================================

console.log("\n=== Permission Check ===");

const requiredPermissions = ["read", "write", "delete"];
const userPermissions = ["read", "write"];

const canPerformDelete = requiredPermissions.every(p => userPermissions.includes(p));
const canDoAnything = userPermissions.some(p => requiredPermissions.includes(p));

console.log("Can delete?   ", canPerformDelete); // false
console.log("Has any perm? ", canDoAnything);    // true


// =====================================================
// KEY POINTS
// =====================================================
// 1. every() returns true only if ALL elements pass the test.
// 2. some() returns true if ANY element passes the test.
// 3. every() on an empty array returns true.
// 4. some() on an empty array returns false.
// 5. Both short-circuit: they stop as soon as the answer is known.
