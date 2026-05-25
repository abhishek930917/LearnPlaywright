/**
 * MULTIDIMENSIONAL ARRAYS
 *
 * Concept: Arrays can contain other arrays, creating matrices or grids.
 * These are commonly used for tables, boards, grids, and nested data.
 */

// =====================================================
// CREATING 2D ARRAYS
// =====================================================

console.log("=== Creating 2D Arrays ===");

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Matrix:");
matrix.forEach(row => console.log(" ", row));


// =====================================================
// ACCESSING ELEMENTS
// =====================================================

console.log("\n=== Accessing Elements ===");

console.log("Element at [0][1]:", matrix[0][1]); // 2
console.log("Element at [2][2]:", matrix[2][2]); // 9
console.log("Entire row 1:     ", matrix[1]);    // [4, 5, 6]


// =====================================================
// MODIFYING ELEMENTS
// =====================================================

console.log("\n=== Modifying Elements ===");

const grid = [
    ["A", "B", "C"],
    ["D", "E", "F"],
    ["G", "H", "I"]
];

grid[1][1] = "X"; // Change center
console.log("After change:");
grid.forEach(row => console.log(" ", row));


// =====================================================
// DYNAMIC CREATION
// =====================================================

console.log("\n=== Dynamic Creation ===");

function createMatrix(rows, cols, initialValue = 0) {
    return Array.from({ length: rows }, () => Array(cols).fill(initialValue));
}

const board = createMatrix(3, 3, "_");
console.log("Empty board:");
board.forEach(row => console.log(" ", row));


// =====================================================
// ITERATING MULTIDIMENSIONAL ARRAYS
// =====================================================

console.log("\n=== Iterating ===");

const scores = [
    [85, 90, 78],
    [92, 88, 84],
    [70, 75, 80]
];

// Nested loops
for (let i = 0; i < scores.length; i++) {
    for (let j = 0; j < scores[i].length; j++) {
        console.log(`scores[${i}][${j}] = ${scores[i][j]}`);
    }
}

// Using forEach
console.log("\n--- Using forEach ---");
scores.forEach((row, i) => {
    row.forEach((score, j) => {
        console.log(`Student ${i + 1}, Subject ${j + 1}: ${score}`);
    });
});


// =====================================================
// FLATTENING
// =====================================================

console.log("\n=== Flattening ===");

const nested = [[1, 2], [3, 4], [5, 6]];
const flat = nested.flat();
console.log("Flattened:", flat);

// Sum all elements in a 2D array
const total = nested.flat().reduce((sum, n) => sum + n, 0);
console.log("Total sum:", total);


// =====================================================
// REAL WORLD EXAMPLE: Tic-Tac-Toe Board
// =====================================================

console.log("\n=== Tic-Tac-Toe Board ===");

const ticTacToe = [
    ["X", "O", "X"],
    ["O", "X", "O"],
    [" ", " ", "X"]
];

console.log("Board state:");
ticTacToe.forEach(row => console.log(" ", row.join(" | ")));

// Check if center is occupied
if (ticTacToe[1][1] !== " ") {
    console.log("Center is taken by:", ticTacToe[1][1]);
}


// =====================================================
// REAL WORLD EXAMPLE: Seating Chart
// =====================================================

console.log("\n=== Seating Chart ===");

const seating = [
    ["Alice", "Bob", "Charlie"],
    ["Diana", "Eve", "Frank"],
    ["Grace", "Heidi", "Ivan"]
];

console.log("Who is in row 2, seat 1?", seating[1][0]); // Diana

// Find someone's seat
let found = false;
for (let r = 0; r < seating.length && !found; r++) {
    for (let s = 0; s < seating[r].length; s++) {
        if (seating[r][s] === "Eve") {
            console.log(`Eve is at row ${r + 1}, seat ${s + 1}`);
            found = true;
            break;
        }
    }
}


// =====================================================
// KEY POINTS
// =====================================================
// 1. Access nested elements with multiple brackets: arr[row][col].
// 2. Use Array.from() or loops to create matrices dynamically.
// 3. flat() is useful for turning nested arrays into a single list.
// 4. Nested for loops or nested forEach are common for traversal.
// 5. Be careful when filling 2D arrays — each row should be a separate array.
