// ============================================================================
// 02-string-access.js
// Accessing Characters in Strings
// ============================================================================

const str = "JavaScript";

// ----------------------------------------------------------------------------
// 1. charAt() - Returns character at specified index
// ----------------------------------------------------------------------------
console.log("charAt(0):", str.charAt(0));      // J
console.log("charAt(4):", str.charAt(4));      // S
console.log("charAt(100):", str.charAt(100));  // "" (empty string for out of range)

// ----------------------------------------------------------------------------
// 2. Bracket Notation [] - Modern way to access characters
// ----------------------------------------------------------------------------
console.log("str[0]:", str[0]);     // J
console.log("str[4]:", str[4]);     // S
console.log("str[-1]:", str[-1]);   // undefined (negative index not supported like Python)
console.log("str[100]:", str[100]); // undefined

// Bracket notation is read-only for strings (because strings are immutable)
// str[0] = "j"; // This does nothing!

// ----------------------------------------------------------------------------
// 3. charCodeAt() - Returns UTF-16 code unit at index
// ----------------------------------------------------------------------------
console.log("charCodeAt(0):", str.charCodeAt(0)); // 74 (J)
console.log("charCodeAt(1):", str.charCodeAt(1)); // 97 (a)

// ----------------------------------------------------------------------------
// 4. codePointAt() - Returns Unicode code point (handles emojis and surrogates)
// ----------------------------------------------------------------------------
const emoji = "🎉";
console.log("charCodeAt emoji:", emoji.charCodeAt(0)); // 55358 (high surrogate)
console.log("codePointAt emoji:", emoji.codePointAt(0)); // 127881 (actual code point)

// ----------------------------------------------------------------------------
// 5. at() - ES2022 method (supports negative indices)
// ----------------------------------------------------------------------------
console.log("at(0):", str.at(0));    // J
console.log("at(-1):", str.at(-1));  // t (last character!)
console.log("at(-2):", str.at(-2));  // p (second from last)

// Compare with bracket notation (doesn't support negative)
console.log("str[-1]:", str[-1]);    // undefined

// ----------------------------------------------------------------------------
// 6. Accessing First and Last Characters (Patterns)
// ----------------------------------------------------------------------------
const word = "Hello";

// First character
console.log("First:", word[0]);           // H
console.log("First:", word.charAt(0));     // H
console.log("First:", word.at(0));         // H

// Last character
console.log("Last:", word[word.length - 1]); // o
console.log("Last:", word.at(-1));            // o
console.log("Last:", word.slice(-1));         // o

// ============================================================================
