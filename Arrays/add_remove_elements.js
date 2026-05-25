/**
 * ADDING AND REMOVING ELEMENTS
 *
 * Concept: JavaScript provides methods to add and remove elements
 * from either end of an array.
 */

// =====================================================
// ADDING ELEMENTS
// =====================================================

console.log("=== Adding Elements ===");

// push() — Add to the END
const tasks = ["Wake up", "Exercise"];
tasks.push("Eat breakfast");
tasks.push("Read", "Code"); // Can add multiple at once
console.log("After push:", tasks);

// unshift() — Add to the BEGINNING
const queue = ["Person 3", "Person 4"];
queue.unshift("Person 2");
queue.unshift("Person 1", "Person 0"); // Can add multiple at once
console.log("After unshift:", queue);


// =====================================================
// REMOVING ELEMENTS
// =====================================================

console.log("\n=== Removing Elements ===");

// pop() — Remove from the END
const stack = ["Plate 1", "Plate 2", "Plate 3"];
const last = stack.pop();
console.log("Removed (pop):", last);
console.log("After pop:", stack);

// shift() — Remove from the BEGINNING
const line = ["Alice", "Bob", "Charlie"];
const first = line.shift();
console.log("Removed (shift):", first);
console.log("After shift:", line);


// =====================================================
// COMBINING OPERATIONS
// =====================================================

console.log("\n=== Combining Add/Remove ===");

// Using push and pop together = Stack behavior (LIFO)
const browserHistory = ["home.html"];
browserHistory.push("about.html");
browserHistory.push("contact.html");
console.log("Visited:", browserHistory);

const backPage = browserHistory.pop();
console.log("Going back to:", backPage);
console.log("History now:", browserHistory);

// Using push and shift together = Queue behavior (FIFO)
const printQueue = ["Document A"];
printQueue.push("Document B");
printQueue.push("Document C");
console.log("Print queue:", printQueue);

const nextPrint = printQueue.shift();
console.log("Printing:", nextPrint);
console.log("Queue now:", printQueue);


// =====================================================
// REAL WORLD EXAMPLE 1: Cart Actions
// =====================================================

console.log("\n=== Shopping Cart Actions ===");

const cart = ["Milk", "Bread"];
cart.push("Eggs");     // Add to cart
cart.push("Cheese");   // Add more
console.log("Cart:", cart);

cart.pop();            // Remove last added item
console.log("After removing last:", cart);


// =====================================================
// REAL WORLD EXAMPLE 2: Task Management
// =====================================================

console.log("\n=== Task Management ===");

const todoList = ["Buy groceries", "Walk the dog"];
todoList.unshift("Urgent: Pay bills"); // Add urgent task to top
console.log("Tasks:", todoList);

todoList.shift(); // Complete the urgent task
console.log("After completion:", todoList);


// =====================================================
// KEY POINTS
// =====================================================
// 1. push() adds to the end; pop() removes from the end.
// 2. unshift() adds to the beginning; shift() removes from the beginning.
// 3. All four methods modify the original array.
// 4. push/unshift can accept multiple arguments.
// 5. pop() and shift() return the removed element (undefined if empty).
// 6. shift/unshift are slower on large arrays because all indices must shift.
