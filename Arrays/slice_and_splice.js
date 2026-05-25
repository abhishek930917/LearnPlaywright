/**
 * SLICE AND SPLICE
 *
 * Concept: slice() extracts a portion without modifying the original.
 * splice() changes the contents by removing, replacing, or adding elements.
 */

// =====================================================
// SLICE — Extract a Section
// =====================================================
// Syntax: array.slice(start, end)
// Returns a NEW array from start up to (but not including) end.

console.log("=== Array.slice() ===");

const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig"];

const citrus = fruits.slice(2, 5);
console.log("fruits.slice(2, 5):", citrus);       // ['Cherry', 'Date', 'Elderberry']
console.log("Original unchanged:", fruits);

// Negative indices count from the end
const lastTwo = fruits.slice(-2);
console.log("Last two:", lastTwo);                  // ['Elderberry', 'Fig']

// Copy entire array
const copy = fruits.slice();
console.log("Full copy:", copy);


// =====================================================
// SPLICE — Modify in Place
// =====================================================
// Syntax: array.splice(start, deleteCount, item1, item2, ...)
// Returns an array of deleted elements.

console.log("\n=== Array.splice() ===");

// Removing elements
const months = ["Jan", "Feb", "Mar", "Apr", "May"];
const removed = months.splice(2, 2); // Start at index 2, remove 2 items
console.log("Removed:", removed);      // ['Mar', 'Apr']
console.log("Remaining:", months);     // ['Jan', 'Feb', 'May']

// Replacing elements
const colors = ["Red", "Green", "Blue", "Yellow"];
colors.splice(1, 2, "Purple", "Orange");
console.log("After replace:", colors); // ['Red', 'Purple', 'Orange', 'Yellow']

// Inserting without removing
const nums = [1, 2, 5, 6];
nums.splice(2, 0, 3, 4); // Insert 3 and 4 at index 2, remove 0
console.log("After insert:", nums);   // [1, 2, 3, 4, 5, 6]


// =====================================================
// REAL WORLD EXAMPLE 1: Playlist Management
// =====================================================

console.log("\n=== Playlist Management ===");

const playlist = ["Song A", "Song B", "Song C", "Song D", "Song E"];

// Extract favorites without changing the playlist
const favorites = playlist.slice(1, 4);
console.log("Favorites:", favorites);
console.log("Playlist still:", playlist);

// Remove a song from the playlist
const removedSongs = playlist.splice(2, 1); // Remove "Song C"
console.log("Removed song:", removedSongs[0]);
console.log("Updated playlist:", playlist);


// =====================================================
// REAL WORLD EXAMPLE 2: Editing a Todo List
// =====================================================

console.log("\n=== Editing a Todo List ===");

const todos = ["Email team", "Meeting at 2pm", "Fix bug #42", "Update docs", "Deploy"];

// Move the urgent bug fix to the top by removing and re-inserting
const [urgent] = todos.splice(2, 1); // Remove "Fix bug #42"
todos.splice(0, 0, urgent);          // Insert at the beginning
console.log("Prioritized:", todos);


// =====================================================
// KEY POINTS
// =====================================================
// 1. slice() does NOT modify the original array; splice() DOES.
// 2. slice(start, end) — end is exclusive.
// 3. splice(start, deleteCount, ...items) — very flexible.
// 4. Use slice() to copy arrays or extract sections safely.
// 5. Use splice() for precise insertion, deletion, or replacement.
