// ============================================================================
// 12-string-concatenation.js
// All Ways to Concatenate (Join) Strings in JavaScript
// ============================================================================

// Concatenation = joining two or more strings into one.

const firstName = "John";
const lastName = "Doe";
const age = 30;

// ----------------------------------------------------------------------------
// 1. PLUS (+) OPERATOR  -- Most Common
// ----------------------------------------------------------------------------
// The simplest way to join strings.

const fullName = firstName + " " + lastName;
console.log("Using + :", fullName); // John Doe

// With multiple parts
const sentence = "My name is " + fullName + " and I am " + age + " years old.";
console.log("Multiple + :", sentence);

// ----------------------------------------------------------------------------
// 2. PLUS-EQUALS (+=) OPERATOR  -- Building Strings Step by Step
// ----------------------------------------------------------------------------
// Used when you need to build a string across multiple lines/conditions.

let message = "Hello";
message += ", ";
message += firstName;
message += "!";
console.log("Using += :", message); // Hello, John!

// Building a list dynamically
let list = "Items: ";
list += "Apple";
list += ", Banana";
list += ", Cherry";
console.log("Built list:", list);

// ----------------------------------------------------------------------------
// 3. PLUS WITH IMPLICIT COERCION  -- Watch Out!
// ----------------------------------------------------------------------------
// The + operator converts numbers to strings when mixed.

console.log("5 + 5:", 5 + 5);           // 10 (number addition)
console.log("5 + '5':", 5 + "5");       // "55" (coerced to string!)
console.log("'5' + 5:", "5" + 5);       // "55"
console.log("'5' + '5':", "5" + "5");   // "55"

// Booleans and objects also get coerced
console.log("'Result: ' + true:", "Result: " + true);       // "Result: true"
console.log("'Array: ' + [1,2]:", "Array: " + [1, 2]);       // "Array: 1,2"
console.log("'Object: ' + {}:", "Object: " + {});            // "Object: [object Object]"

// null and undefined
console.log("'Value: ' + null:", "Value: " + null);         // "Value: null"
console.log("'Value: ' + undefined:", "Value: " + undefined); // "Value: undefined"

// ----------------------------------------------------------------------------
// 4. CONCAT() METHOD
// ----------------------------------------------------------------------------
// String.prototype.concat() joins two or more strings.

const usingConcat = firstName.concat(" ", lastName);
console.log("concat():", usingConcat); // John Doe

// Multiple arguments
const multiConcat = firstName.concat(" ", lastName, " is ", String(age), " years old.");
console.log("Multi concat():", multiConcat);

// Chaining concat (returns new string each time)
const chained = "".concat("A", "B", "C").concat("-", "D", "E");
console.log("Chained concat():", chained); // ABC-DE

// ----------------------------------------------------------------------------
// 5. ARRAY JOIN() METHOD  -- Joining Array of Strings
// ----------------------------------------------------------------------------
// Useful when you have an array of strings to combine.

const parts = ["Hello", "world", "from", "JavaScript"];
console.log("join(' '):", parts.join(" "));   // Hello world from JavaScript
console.log("join('-'):", parts.join("-"));   // Hello-world-from-JavaScript
console.log("join(''):", parts.join(""));      // HelloworldfromJavaScript
console.log("join():", parts.join());          // Hello,world,from,JavaScript (default comma)

// Building strings in loops efficiently
const words = ["The", "quick", "brown", "fox"];
let built = "";
for (let i = 0; i < words.length; i++) {
  built += words[i];
  if (i < words.length - 1) built += " ";
}
console.log("Loop built:", built); // The quick brown fox

// Better: collect in array, join at end (faster for many concatenations)
const collected = [];
for (const word of words) {
  collected.push(word);
}
console.log("Array join:", collected.join(" ")); // The quick brown fox

// ----------------------------------------------------------------------------
// 6. TEMPLATE LITERALS (Backticks)  -- Recommended for Complex Strings
// ----------------------------------------------------------------------------
// Use ${expression} to embed variables and expressions.

const templateGreeting = `Hello, my name is ${firstName} ${lastName} and I am ${age} years old.`;
console.log("Template literal:", templateGreeting);

// Can include any expression
const price = 19.99;
const tax = 0.08;
const receipt = `Subtotal: $${price}
Tax (8%): $${(price * tax).toFixed(2)}
Total: $${(price * (1 + tax)).toFixed(2)}`;
console.log("Template with math:");
console.log(receipt);

// Multi-line without escaping
const address = `${firstName} ${lastName}
123 Main St
New York, NY 10001`;
console.log("Multi-line template:");
console.log(address);

// ----------------------------------------------------------------------------
// 7. STRING BUILDER PATTERN  -- Performance in Heavy Loops
// ----------------------------------------------------------------------------
// In some browsers, repeated += in large loops is slow.
// Using an array as a buffer and joining at the end is faster.

function buildLargeString(items) {
  const buffer = [];
  for (const item of items) {
    buffer.push(item);
  }
  return buffer.join("");
}

const letters = ["a", "b", "c", "d", "e"];
console.log("String builder:", buildLargeString(letters)); // abcde

// With separator
function buildWithSeparator(items, separator) {
  return items.join(separator);
}

console.log("CSV:", buildWithSeparator(["apple", "banana", "cherry"], ","));

// ----------------------------------------------------------------------------
// 8. TOSTRING() FOR EXPLICIT CONVERSION
// ----------------------------------------------------------------------------
// When you want to ensure a value is a string before concatenating.

const num = 42;
const bool = false;

console.log("num.toString():", num.toString());   // "42"
console.log("bool.toString():", bool.toString()); // "false"
console.log("String(num):", String(num));         // "42"

// ----------------------------------------------------------------------------
// 9. COMMON PITFALLS
// ----------------------------------------------------------------------------

// Pitfall 1: Number addition vs string concatenation
const result1 = 1 + 2 + "3";     // First 1+2=3, then 3+"3"="33"
const result2 = "1" + 2 + 3;     // "1"+2="12", then "12"+3="123"
console.log("1 + 2 + '3':", result1); // "33"
console.log("'1' + 2 + 3:", result2); // "123"

// Pitfall 2: undefined variables
let missing;
console.log("'Value: ' + missing:", "Value: " + missing); // "Value: undefined"

// Pitfall 3: Forgetting spaces
const badSpace = "Hello" + "World"; // HelloWorld
const goodSpace = "Hello" + " " + "World"; // Hello World
console.log("No space:", badSpace);
console.log("With space:", goodSpace);

// ----------------------------------------------------------------------------
// 10. COMPARISON: Which Method to Use?
// ----------------------------------------------------------------------------

// Simple joining of 2-3 strings:
const simple = "Hello " + name + "!";

// Multiple variables and expressions:
const modern = `Hello ${firstName}, you have ${age * 12} months of experience.`;

// Building from an array:
const fromArray = ["a", "b", "c"].join("-");

// Appending in a loop (few iterations):
let appended = "";
appended += "Step 1";
appended += ", Step 2";

// Appending in a loop (many iterations - 1000+):
const buffer = [];
for (let i = 0; i < 5; i++) {
  buffer.push(`Item ${i}`);
}
const final = buffer.join(", ");
console.log("Buffer join:", final); // Item 0, Item 1, Item 2, Item 3, Item 4

// ----------------------------------------------------------------------------
// 11. EDGE CASES
// ----------------------------------------------------------------------------

// Concatenating with empty string
console.log("'' + 'hello':", "" + "hello"); // hello
console.log("'hello' + '':", "hello" + ""); // hello

// Concatenating empty values
console.log("'A' + '' + 'B':", "A" + "" + "B"); // AB

// Symbols throw TypeError when coerced
// console.log("'Symbol: ' + Symbol()"); // TypeError!
console.log("Symbol to string:", "Symbol: " + Symbol("desc").toString());

// BigInt needs explicit conversion
const big = 9007199254740991n;
console.log("BigInt:", big.toString() + " is a big number");

// ============================================================================
// CHEAT SHEET
// ============================================================================
// Method                       Syntax                      Best For
// ---------------------------------------------------------------------------
// + operator                   str1 + str2                 Simple joining
// += operator                  str += more                 Building step by step
// concat()                     str1.concat(str2)           Multiple args chaining
// join()                       arr.join(sep)               Array of strings
// Template literal              `text ${var}`              Complex, multi-line
// String builder (array)       [].push() + .join()         Heavy loop performance
// ============================================================================
