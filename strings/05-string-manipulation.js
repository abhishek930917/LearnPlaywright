// ============================================================================
// 05-string-manipulation.js
// Modifying and Transforming Strings
// ============================================================================

// ----------------------------------------------------------------------------
// 1. Changing Case
// ----------------------------------------------------------------------------
const mixed = "Hello World";

console.log("toLowerCase():", mixed.toLowerCase());      // hello world
console.log("toUpperCase():", mixed.toUpperCase());      // HELLO WORLD

// Original string is unchanged (strings are immutable)
console.log("Original:", mixed);                         // Hello World

// locale-aware versions (better for non-English)
const turkish = "İstanbul";
console.log("locale lower:", turkish.toLocaleLowerCase("tr"));

// ----------------------------------------------------------------------------
// 2. Trimming Whitespace
// ----------------------------------------------------------------------------
const padded = "   hello world   ";

console.log("trim():", "'" + padded.trim() + "'");           // 'hello world'
console.log("trimStart():", "'" + padded.trimStart() + "'");   // 'hello world   '
console.log("trimEnd():", "'" + padded.trimEnd() + "'");       // '   hello world'

// Alias methods (older names)
console.log("trimLeft():", "'" + padded.trimLeft() + "'");     // same as trimStart
console.log("trimRight():", "'" + padded.trimRight() + "'");   // same as trimEnd

// ----------------------------------------------------------------------------
// 3. Replacing Content
// ----------------------------------------------------------------------------
const text = "The quick brown fox jumps over the lazy dog";

// replace() - Replaces FIRST occurrence only
console.log("replace 'fox':", text.replace("fox", "cat"));
// The quick brown cat jumps over the lazy dog

// To replace all occurrences, use regex with global flag
console.log("replace all 'the':", text.replace(/the/gi, "a"));
// a quick brown fox jumps over a lazy dog

// Using a function for replacement
const result = "Price: 100".replace(/\d+/, (match) => match * 2);
console.log("Replace with function:", result); // Price: 200

// replaceAll() - Replaces ALL occurrences (ES2021)
const repeatText = "foo bar foo bar foo";
console.log("replaceAll 'foo':", repeatText.replaceAll("foo", "baz"));
// baz bar baz bar baz

// With regex (must have global flag)
console.log("replaceAll regex:", repeatText.replaceAll(/foo/g, "baz"));

// ----------------------------------------------------------------------------
// 4. Padding Strings
// ----------------------------------------------------------------------------

// padStart() - Pad at the beginning (ES2017)
const num = "42";
console.log("padStart(5):", num.padStart(5));           // "   42"
console.log("padStart(5, '0'):", num.padStart(5, "0"));  // "00042"
console.log("padStart(5, '*'):", num.padStart(5, "*"));  // "***42"

// padEnd() - Pad at the end (ES2017)
console.log("padEnd(5, '.'):", num.padEnd(5, "."));       // "42..."

// Practical: Formatting numbers
const formattedMonth = String(7).padStart(2, "0"); // "07"
console.log("Formatted month:", formattedMonth);

// ----------------------------------------------------------------------------
// 5. Repeating Strings
// ----------------------------------------------------------------------------

// repeat() - Repeat string N times (ES6)
console.log("'ha'.repeat(3):", "ha".repeat(3));           // hahaha
console.log("'*'.repeat(10):", "*".repeat(10));          // **********

// Building a separator line
console.log("Separator:", "-".repeat(30));

// ----------------------------------------------------------------------------
// 6. Concatenation Methods
// ----------------------------------------------------------------------------

// Using + operator (most common)
const first = "Hello";
const second = "World";
console.log("With +:", first + " " + second);             // Hello World

// Using concat() method
console.log("concat():", first.concat(" ", second, "!"));  // Hello World!

// Using template literals (recommended for complex cases)
const name = "Alice";
const greeting = `Hello, ${name}! Welcome back.`;
console.log("Template:", greeting);

// ----------------------------------------------------------------------------
// 7. Reversing a String (No built-in method, but common task)
// ----------------------------------------------------------------------------

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log("Reverse 'hello':", reverseString("hello"));   // olleh
console.log("Reverse 'racecar':", reverseString("racecar")); // racecar

// Check palindrome
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === reverseString(cleaned);
}

console.log("'A man a plan a canal Panama':", isPalindrome("A man a plan a canal Panama")); // true
console.log("'hello':", isPalindrome("hello")); // false

// ============================================================================
