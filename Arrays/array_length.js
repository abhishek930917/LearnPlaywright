/**
 * ARRAY LENGTH
 *
 * Concept: The length property tells you how many elements are in an array.
 * It is writable, so you can also use it to truncate or extend an array.
 */

// =====================================================
// GETTING ARRAY LENGTH
// =====================================================

console.log("=== Getting Array Length ===");

const fruits = ["Apple", "Banana", "Cherry"];
console.log("Fruits:", fruits);
console.log("Length:", fruits.length); // 3

const empty = [];
console.log("Empty array length:", empty.length); // 0


// =====================================================
// LENGTH WITH EMPTY SLOTS
// =====================================================

console.log("\n=== Length with Empty Slots ===");

const sparse = ["A", , "C"]; // Hole at index 1
console.log("Sparse array:", sparse);
console.log("Length:", sparse.length); // Still 3 (holes count toward length)


// =====================================================
// TRUNCATING AN ARRAY
// =====================================================

console.log("\n=== Truncating Arrays ===");

const numbers = [10, 20, 30, 40, 50, 60];
console.log("Original:", numbers, "Length:", numbers.length);

numbers.length = 4; // Truncate to first 4 elements
console.log("After truncation:", numbers, "Length:", numbers.length);

// Truncating to 0 clears the array
const toClear = ["a", "b", "c"];
toClear.length = 0;
console.log("Cleared array:", toClear);


// =====================================================
// EXTENDING AN ARRAY (CREATING EMPTY SLOTS)
// =====================================================

console.log("\n=== Extending Arrays ===");

const small = [1, 2];
small.length = 5;
console.log("Extended:", small);
console.log("Length:", small.length);


// =====================================================
// REAL WORLD EXAMPLE 1: Batch Processing
// =====================================================

console.log("\n=== Batch Processing Check ===");

const uploadQueue = ["file1.jpg", "file2.png", "file3.pdf"];

if (uploadQueue.length > 0) {
    console.log(`Processing ${uploadQueue.length} files...`);
} else {
    console.log("No files to process.");
}


// =====================================================
// REAL WORLD EXAMPLE 2: Limiting Recent Items
// =====================================================

console.log("\n=== Recent Items Limit ===");

const recentSearches = ["shoes", "watch", "phone", "laptop", "headphones", "camera", "bag"];
console.log("All searches:", recentSearches);

// Keep only the last 5 searches
if (recentSearches.length > 5) {
    recentSearches.length = 5;
}
console.log("Recent 5:   ", recentSearches);


// =====================================================
// REAL WORLD EXAMPLE 3: Validating Input Length
// =====================================================

console.log("\n=== Form Validation ===");

const requiredFields = ["username", "email", "password"];
const filledFields = ["username", "email"]; // Missing password

if (filledFields.length < requiredFields.length) {
    console.log(`Error: Only ${filledFields.length}/${requiredFields.length} fields filled.`);
}


// =====================================================
// KEY POINTS
// =====================================================
// 1. length is 1 greater than the highest index.
// 2. Holes (empty slots) still count toward length.
// 3. Reducing length truncates the array (permanent).
// 4. Increasing length adds empty slots (sparse array).
// 5. Setting length = 0 is the fastest way to clear an array.
