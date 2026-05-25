/**
 * ACCESSING ELEMENTS
 *
 * Concept: Array elements are accessed using zero-based index numbers.
 * The first element is at index 0, the second at 1, and so on.
 */

// =====================================================
// BASIC INDEXING
// =====================================================

console.log("=== Basic Indexing ===");

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

console.log("First day (index 0): ", days[0]);
console.log("Second day (index 1):", days[1]);
console.log("Last day (index 6):  ", days[6]);


// =====================================================
// ACCESSING LAST ELEMENT DYNAMICALLY
// =====================================================

console.log("\n=== Dynamic Last Element Access ===");

const scores = [85, 92, 78, 96, 88];

// Using length - 1
const lastScore = scores[scores.length - 1];
console.log("Last score:", lastScore);

// Using at() — supports negative indices (ES2022+)
console.log("Last score with at(-1):", scores.at(-1));
console.log("Second to last with at(-2):", scores.at(-2));


// =====================================================
// ACCESSING ELEMENTS OUT OF BOUNDS
// =====================================================

console.log("\n=== Out of Bounds Access ===");

console.log("Index 10:", scores[10]);     // undefined
console.log("Index -1: ", scores[-1]);    // undefined (unless using at())


// =====================================================
// REAL WORLD EXAMPLE 1: ATM PIN Digit Access
// =====================================================

console.log("\n=== ATM PIN Verification ===");

const pin = [4, 9, 1, 7];
const enteredDigit = pin[1]; // accessing second digit
console.log(`Verifying second digit: ${enteredDigit}`);

if (enteredDigit === 9) {
    console.log("Second digit verified!");
}


// =====================================================
// REAL WORLD EXAMPLE 2: Playlist Song Selection
// =====================================================

console.log("\n=== Playlist Song Selection ===");

const playlist = [
    "Bohemian Rhapsody",
    "Hotel California",
    "Stairway to Heaven",
    "Sweet Child O' Mine",
    "Imagine"
];

const currentSong = playlist[2];
const nextSong = playlist[3];
const previousSong = playlist[1];

console.log(`Now playing:    ${currentSong}`);
console.log(`Next up:        ${nextSong}`);
console.log(`Previously:     ${previousSong}`);


// =====================================================
// REAL WORLD EXAMPLE 3: Calendar Day Lookup
// =====================================================

console.log("\n=== Calendar Day Lookup ===");

const todayIndex = 3; // Wednesday
const today = days[todayIndex];
console.log(`Today is ${today}`);

// What day was yesterday?
const yesterday = days[todayIndex - 1];
console.log(`Yesterday was ${yesterday}`);


// =====================================================
// KEY POINTS
// =====================================================
// 1. Array indices start at 0, not 1.
// 2. Accessing an out-of-bounds index returns undefined.
// 3. Use array.length - 1 to get the last element.
// 4. array.at(-1) is a modern way to get the last element.
// 5. Negative indices with bracket notation do not work like in Python.
