// ========================================
// 1. Basic Callback - Synchronous
// ========================================

function greet(name, callback) {
  const message = `Hello, ${name}!`;
  callback(message);
}

function printMessage(msg) {
  console.log(msg);
}

greet("Alice", printMessage);

// Inline anonymous callback
greet("Bob", function (msg) {
  console.log(msg.toUpperCase());
});

// Arrow function callback
greet("Charlie", (msg) => console.log(msg.toLowerCase()));

// ========================================
// 2. Callback with Array Methods
// ========================================

const numbers = [1, 2, 3, 4, 5];

// forEach
numbers.forEach(function (num) {
  console.log(num * 2);
});

// map
const doubled = numbers.map((num) => num * 2);
console.log("Doubled:", doubled);

// filter
const evens = numbers.filter((num) => num % 2 === 0);
console.log("Evens:", evens);

// reduce
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum:", sum);

// sort
const fruits = ["banana", "apple", "cherry"];
fruits.sort((a, b) => a.localeCompare(b));
console.log("Sorted:", fruits);
