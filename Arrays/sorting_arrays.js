/**
 * SORTING ARRAYS
 *
 * Concept: The sort() method sorts elements as strings by default.
 * For numbers or custom objects, you must provide a compare function.
 */

// =====================================================
// DEFAULT SORT (String-based)
// =====================================================

console.log("=== Default Sort (Strings) ===");

const words = ["cherry", "apple", "Banana"];
words.sort();
console.log("Sorted words:", words); // ['Banana', 'apple', 'cherry'] — case-sensitive

// Case-insensitive sort
const caseInsensitive = ["cherry", "apple", "Banana"];
caseInsensitive.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log("Case-insensitive:", caseInsensitive);


// =====================================================
// SORTING NUMBERS
// =====================================================
// ⚠️ Without a compare function, 10 comes before 2!

console.log("\n=== Sorting Numbers ===");

const nums = [10, 2, 33, 4, 55];
nums.sort();
console.log("Default sort:", nums); // [10, 2, 33, 4, 55] — wrong for numbers!

// Correct numeric sort
nums.sort((a, b) => a - b);
console.log("Ascending: ", nums);

nums.sort((a, b) => b - a);
console.log("Descending:", nums);


// =====================================================
// SORTING OBJECTS
// =====================================================

console.log("\n=== Sorting Objects ===");

const users = [
    { name: "Charlie", age: 35 },
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 }
];

// Sort by age
users.sort((a, b) => a.age - b.age);
console.log("By age:", users.map(u => u.name));

// Sort by name
users.sort((a, b) => a.name.localeCompare(b.name));
console.log("By name:", users.map(u => u.name));


// =====================================================
// reverse()
// =====================================================

console.log("\n=== reverse() ===");

const letters = ["A", "B", "C"];
letters.reverse();
console.log("Reversed:", letters); // Modifies in place!


// =====================================================
// IMMUTABLE SORTING (ES2023+)
// =====================================================

console.log("\n=== Immutable Sorting (toSorted / toReversed) ===");

const original = [3, 1, 4, 1, 5];

try {
    const sortedCopy = original.toSorted((a, b) => a - b);
    console.log("Original:", original);      // unchanged
    console.log("toSorted:", sortedCopy);      // new sorted array
} catch (e) {
    console.log("toSorted not available in this Node.js version");
}

// Fallback for older environments
const sortedFallback = [...original].sort((a, b) => a - b);
console.log("Sorted via copy:", sortedFallback);
console.log("Original intact:", original);


// =====================================================
// REAL WORLD EXAMPLE: Leaderboard
// =====================================================

console.log("\n=== Leaderboard Sort ===");

const players = [
    { name: "Player 1", score: 1500 },
    { name: "Player 2", score: 2300 },
    { name: "Player 3", score: 1800 }
];

players.sort((a, b) => b.score - a.score);
console.log("Rankings:");
players.forEach((p, i) => console.log(`  ${i + 1}. ${p.name} — ${p.score} pts`));


// =====================================================
// KEY POINTS
// =====================================================
// 1. sort() converts elements to strings by default.
// 2. Always provide a compare function for numbers: (a, b) => a - b.
// 3. sort() and reverse() modify the original array.
// 4. Use [...arr].sort() or toSorted() for immutable sorting.
// 5. localeCompare() is best for string comparison.
