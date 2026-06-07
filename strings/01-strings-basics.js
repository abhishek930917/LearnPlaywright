// ============================================================================
// 01-strings-basics.js
// String Creation, Types, and Basic Properties
// ============================================================================

// ----------------------------------------------------------------------------
// 1. Creating Strings
// ----------------------------------------------------------------------------

// Using string literals (most common)
const singleQuotes = 'Hello World';
const doubleQuotes = "Hello World";
const backticks = `Hello World`; // template literal

console.log("Single quotes:", singleQuotes);
console.log("Double quotes:", doubleQuotes);
console.log("Backticks:", backticks);

// Using String constructor (not recommended for primitives)
const constructorString = new String("Hello");
const primitiveString = String("Hello");

console.log("Type of constructor:", typeof constructorString); // object
console.log("Type of primitive:", typeof primitiveString);     // string

// ----------------------------------------------------------------------------
// 2. String Length
// ----------------------------------------------------------------------------
const message = "JavaScript";
console.log("Length:", message.length); // 10

// Empty string
console.log("Empty string length:", "".length); // 0

// ----------------------------------------------------------------------------
// 3. Escape Sequences
// ----------------------------------------------------------------------------
const withQuotes = "She said, \"Hello!\"";
const withApostrophe = 'It\'s a nice day';
const newLine = "First line\nSecond line";
const tab = "Column1\tColumn2\tColumn3";
const backslash = "Path: C:\\Users\\Admin";

console.log("Quotes:", withQuotes);
console.log("Apostrophe:", withApostrophe);
console.log("New line:");
console.log(newLine);
console.log("Tab:", tab);
console.log("Backslash:", backslash);

// Other escape sequences:
// \b - backspace
// \f - form feed
// \r - carriage return
// \uXXXX - unicode character
// \xXX - latin-1 character

const copyright = "\u00A9 2026"; // ©
const heart = "\u2764";          // ❤
console.log("Unicode:", copyright, heart);

// ----------------------------------------------------------------------------
// 4. String Immutability
// ----------------------------------------------------------------------------
// Strings in JavaScript are immutable - they cannot be changed after creation
let immutableStr = "Hello";
immutableStr[0] = "h"; // This has no effect
console.log("After 'change':", immutableStr); // Still "Hello"

// You must create a new string
immutableStr = "h" + immutableStr.slice(1);
console.log("New string:", immutableStr); // "hello"

// ----------------------------------------------------------------------------
// 5. Multiline Strings (Before Template Literals)
// ----------------------------------------------------------------------------
const multilineOld = "This is line 1\n" +
                     "This is line 2\n" +
                     "This is line 3";
console.log("Old multiline:");
console.log(multilineOld);

// With template literals (ES6+)
const multilineNew = `This is line 1
This is line 2
This is line 3`;
console.log("New multiline:");
console.log(multilineNew);

// ============================================================================
