// concat_array.js
// Demonstrates the Array.prototype.concat() method in JavaScript

// ==========================================
// 1. Basic Concatenation
// ==========================================

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combined = array1.concat(array2);
console.log("Basic concatenation:", combined);
// Output: [1, 2, 3, 4, 5, 6]

// ==========================================
// 2. Concatenating Multiple Arrays
// ==========================================

const arrA = ['a', 'b'];
const arrB = ['c', 'd'];
const arrC = ['e', 'f'];

const multiple = arrA.concat(arrB, arrC);
console.log("Multiple arrays:", multiple);
// Output: ['a', 'b', 'c', 'd', 'e', 'f']

// ==========================================
// 3. Adding Individual Values
// ==========================================

const numbers = [10, 20];
const withValues = numbers.concat(30, 40, 50);
console.log("With individual values:", withValues);
// Output: [10, 20, 30, 40, 50]

// ==========================================
// 4. Mixed: Arrays and Values
// ==========================================

const fruits = ['apple', 'banana'];
const mixed = fruits.concat('cherry', ['date', 'elderberry'], 'fig');
console.log("Mixed concatenation:", mixed);
// Output: ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig']

// ==========================================
// 5. Nested Arrays (not flattened deeply)
// ==========================================

const flat = [1, 2];
const nested = flat.concat([3, [4, 5]]);
console.log("Nested array:", nested);
// Output: [1, 2, 3, [4, 5]]
// Note: Only one level is flattened. [4, 5] remains nested.

// ==========================================
// 6. Concatenation does NOT modify original
// ==========================================

const original = [1, 2];
const result = original.concat([3, 4]);

console.log("Original array:", original); // [1, 2]
console.log("New array:", result);        // [1, 2, 3, 4]

// ==========================================
// 7. Practical Example: Merging Data
// ==========================================

const activeUsers = ['Alice', 'Bob'];
const newUsers = ['Charlie', 'Diana'];
const allUsers = activeUsers.concat(newUsers);

console.log("All users:", allUsers);
// Output: ['Alice', 'Bob', 'Charlie', 'Diana']

// ==========================================
// 8. Using concat() with an empty array to copy
// ==========================================

const source = ['x', 'y', 'z'];
const copy = [].concat(source);

console.log("Copy:", copy);
// Output: ['x', 'y', 'z']
// Note: This is a shallow copy

// ==========================================
// 9. Concatenating array-like objects
// ==========================================

// concat() can be called on array-like objects
const arrayLike = { 0: 'first', 1: 'second', length: 2 };
const fromArrayLike = Array.prototype.concat.call(arrayLike, 'third');
console.log("From array-like:", fromArrayLike);
// Output: [{0: 'first', 1: 'second', length: 2}, 'third']

// ==========================================
// 10. Modern Alternative: Spread Operator [...a, ...b]
// ==========================================

// The spread syntax (...) is the modern, idiomatic way to concatenate arrays.
// It expands iterable elements into a new array literal.

const teamA = ['John', 'Jane'];
const teamB = ['Mike', 'Sara'];

const mergedSpread = [...teamA, ...teamB];
console.log("Spread merge:", mergedSpread);
// Output: ['John', 'Jane', 'Mike', 'Sara']

// --- Why prefer spread over concat()? ---

// 1. More concise and readable
const oldWay = [1, 2].concat([3, 4]).concat([5, 6]);
const newWay = [...[1, 2], ...[3, 4], ...[5, 6]];
console.log("Old way:", oldWay); // [1, 2, 3, 4, 5, 6]
console.log("New way:", newWay); // [1, 2, 3, 4, 5, 6]

// 2. Easy to insert individual values anywhere
const withMiddle = [...teamA, 'Leader', ...teamB];
console.log("With middle value:", withMiddle);
// Output: ['John', 'Jane', 'Leader', 'Mike', 'Sara']

// 3. Works with any iterable (not just arrays)
const fromString = [...'hi', ...'there'];
console.log("From strings:", fromString);
// Output: ['h', 'i', 't', 'h', 'e', 'r', 'e']

// 4. Creating a copy with added elements
const base = [10, 20];
const extended = [...base, 30, 40];
console.log("Extended copy:", extended); // [10, 20, 30, 40]
console.log("Base unchanged:", base);    // [10, 20]

// 5. Spread also only does shallow copying
const nestedOriginal = [[1], [2]];
const nestedCopy = [...nestedOriginal];
nestedCopy[0].push(99);
console.log("Original after nested change:", nestedOriginal); // [[1, 99], [2]]

// ==========================================
// 11. join() — From Array to String
// ==========================================

// join() combines all array elements into a single STRING.
// It does NOT merge arrays; it creates a text representation.

const words = ['Hello', 'world', 'from', 'JS'];

// Default separator is a comma
const defaultJoin = words.join();
console.log("Default join:", defaultJoin);
// Output: "Hello,world,from,JS"

// Common separator: space
const sentence = words.join(' ');
console.log("Space join:", sentence);
// Output: "Hello world from JS"

// Other separators
const hyphenated = words.join('-');
console.log("Hyphen join:", hyphenated);
// Output: "Hello-world-from-JS"

// Empty string = no separator
const noSeparator = ['J', 'S'].join('');
console.log("No separator:", noSeparator);
// Output: "JS"

// --- Practical Examples ---

// Building a file path
const pathParts = ['home', 'user', 'documents'];
const unixPath = '/' + pathParts.join('/');
console.log("Unix path:", unixPath);
// Output: "/home/user/documents"

// Creating a CSV line
const csvRow = ['Alice', 30, 'Engineer'].join(',');
console.log("CSV row:", csvRow);
// Output: "Alice,30,Engineer"

// join() with numbers
const nums = [10, 20, 30];
console.log("Numbers joined:", nums.join(' + '));
// Output: "10 + 20 + 30"

// Empty array returns empty string
console.log("Empty join:", [].join('-'));
// Output: ""

// --- concat() vs join() ---
// concat()  -> input: arrays/values  -> output: array  (merging)
// join()    -> input: array          -> output: string (formatting)

// ==========================================
// Summary
// ==========================================
// - concat() merges two or more arrays
// - Returns a NEW array (does not mutate originals)
// - Flattens array arguments by one level only
// - Can mix arrays and individual values
// - Spread operator [...arr1, ...arr2] is the modern alternative for merging
// - join() converts an array into a delimited string (not for merging)
