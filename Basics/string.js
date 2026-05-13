// ============================================================
// JavaScript Strings: Single Quotes vs Double Quotes vs Backticks
// ============================================================

console.log("=== 1. CREATING STRINGS ===\n");

// Single quotes
const single = 'Hello, World!';

// Double quotes
const double = "Hello, World!";

// Backticks (Template Literals - ES6)
const backtick = `Hello, World!`;

console.log("Single quotes:", single);
console.log("Double quotes:", double);
console.log("Backticks:", backtick);

// All produce the exact same string value
console.log("Single == Double:", single == double);     // true
console.log("Single === Double:", single === double);   // true

// ============================================================
console.log("\n=== 2. WHEN TO USE SINGLE vs DOUBLE QUOTES ===\n");

// Use single quotes when string contains double quotes
const htmlSingle = '<div class="container">Content</div>';
console.log("HTML with single quotes:", htmlSingle);

// Use double quotes when string contains single quotes (apostrophes)
const sentenceDouble = "It's a beautiful day!";
console.log("Apostrophe with double quotes:", sentenceDouble);

// Without mixing: you MUST escape the inner quotes
const escapedSingle = 'It\'s a beautiful day!';
const escapedDouble = "<div class=\"container\">Content</div>";
console.log("Escaped single:", escapedSingle);
console.log("Escaped double:", escapedDouble);

// ============================================================
console.log("\n=== 3. TEMPLATE LITERALS (BACKTICKS) ===\n");

const name = "Alice";
const age = 30;

// Variable interpolation
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log("Interpolation:", greeting);

// Expressions inside ${}
const sum = `10 + 20 = ${10 + 20}`;
console.log("Expression:", sum);

// Multi-line strings (preserves line breaks)
const poem = `Roses are red,
Violets are blue,
JavaScript is awesome,
And so are you.`;
console.log("Multi-line:\n", poem);

// ============================================================
console.log("\n=== 4. ESCAPE SEQUENCES ===\n");

console.log("Newline:", "Line 1\nLine 2");
console.log("Tab:", "Col1\tCol2\tCol3");
console.log("Backslash:", "C:\\Users\\Admin");
console.log("Quote inside same quotes:", "She said \"Hello\"");
console.log("Unicode:", "\u0048\u0065\u006C\u006C\u006F"); // "Hello"

// ============================================================
console.log("\n=== 5. COMMON STRING METHODS ===\n");

const text = "  Hello, JavaScript World!  ";

console.log("Original:", `"${text}"`);
console.log("length:", text.length);                       // 28
console.log("toUpperCase():", text.toUpperCase());         // "  HELLO, JAVASCRIPT WORLD!  "
console.log("toLowerCase():", text.toLowerCase());         // "  hello, javascript world!  "
console.log("trim():", `"${text.trim()}"`);                // "Hello, JavaScript World!"
console.log("includes('Java'):", text.includes("Java"));   // true
console.log("indexOf('World'):", text.indexOf("World"));   // 21
console.log("slice(2, 7):", text.slice(2, 7));             // "Hello"
console.log("replace('World', 'JS'):", text.replace("World", "JS"));
console.log("split(','):", text.trim().split(","));        // ["Hello", " JavaScript World!"]

// ============================================================
console.log("\n=== 6. STRING IMMUTABILITY ===\n");

let str = "hello";
str[0] = "H";          // This does NOT work
console.log("After str[0] = 'H':", str); // Still "hello"

// You must reassign the variable
str = "Hello";
console.log("After reassignment:", str); // "Hello"

// ============================================================
console.log("\n=== 7. WHICH QUOTE STYLE TO USE IN PROJECTS? ===\n");

const recommendation = `
┌──────────────────────────────────────────────────────────────┐
│                    PROJECT RECOMMENDATION                    │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  ✅ PREFERRED: Use SINGLE QUOTES (') as default             │
│                                                              │
│  Why?                                                        │
│  1. JSON uses double quotes, so using single quotes in JS    │
│     visually distinguishes JavaScript code from JSON data.   │
│  2. HTML attributes use double quotes, so single quotes      │
│     avoid unnecessary escaping in HTML strings.              │
│  3. Most popular style guides (Airbnb, StandardJS, Google)   │
│     recommend single quotes by default.                      │
│                                                              │
│  Example:                                                    │
│    const msg = 'Hello World';                                │
│    const html = '<div class="active">Hello</div>';          │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  ✅ USE DOUBLE QUOTES (") when:                             │
│     - String contains many apostrophes/single quotes         │
│     - Team/project convention requires it                    │
│                                                              │
│  Example:                                                    │
│    const msg = "It's a nice day!";                           │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  ✅ ALWAYS USE BACKTICKS (\`) for:                           │
│     - String interpolation with \${variable}                  │
│     - Multi-line strings                                     │
│     - Tagged template literals                               │
│                                                              │
│  Example:                                                    │
│    const name = 'Bob';                                       │
│    const msg = \`Hello, \${name}!\`;                          │
│                                                              │
└──────────────────────────────────────────────────────────────┘
`;

console.log(recommendation);

// ============================================================
console.log("=== 8. QUICK SUMMARY ===\n");

const summary = `
┌──────────────────┬──────────────────────────────────────────┐
│ Quote Type       │ When to Use                              │
├──────────────────┼──────────────────────────────────────────┤
│ Single (')       │ Default choice for all strings           │
│ Double (")       │ Strings with apostrophes / team rule     │
│ Backtick (\`)    │ Interpolation, multi-line, expressions   │
└──────────────────┴──────────────────────────────────────────┘

RULE OF THUMB:
  - Default to single quotes
  - Use double quotes only to avoid escaping apostrophes
  - Use backticks whenever you need \${interpolation} or newlines
`;

console.log(summary);
