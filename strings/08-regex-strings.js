// ============================================================================
// 08-regex-strings.js
// Regular Expressions with Strings
// ============================================================================

// ----------------------------------------------------------------------------
// 1. Creating Regular Expressions
// ----------------------------------------------------------------------------

// Literal syntax (preferred for static patterns)
const regexLiteral = /abc/;

// Constructor syntax (useful for dynamic patterns)
const regexConstructor = new RegExp("abc");

// With flags
const regexGlobal = /abc/g;
const regexCaseInsensitive = /abc/i;
const regexMulti = /abc/gi; // multiple flags

// ----------------------------------------------------------------------------
// 2. Flags (Modifiers)
// ----------------------------------------------------------------------------
// g - global: find all matches (not just first)
// i - ignoreCase: case-insensitive matching
// m - multiline: ^ and $ match start/end of lines
// s - dotAll: dot (.) matches newlines too
// u - unicode: treat pattern as Unicode
// y - sticky: matches only from lastIndex

const text = "The quick brown Fox jumps over the lazy fox.";

// Without flag: finds only first match
console.log("Without flags:", text.match(/fox/)); // ['fox', index: 16, ...]

// With 'i' flag: case-insensitive
console.log("With 'i':", text.match(/fox/i)); // ['Fox', index: 16, ...]

// With 'g' and 'i': all matches, case-insensitive
console.log("With 'gi':", text.match(/fox/gi)); // ['Fox', 'fox']

// ----------------------------------------------------------------------------
// 3. match() - Find Matches
// ----------------------------------------------------------------------------

const phoneText = "Call me at 555-1234 or 555-5678";

// Without global flag: returns match object with groups
console.log("match without g:", "555-1234".match(/(\d{3})-(\d{4})/));
// ['555-1234', '555', '1234', index: 0, ...]

// With global flag: returns array of matches only
console.log("match with g:", phoneText.match(/\d{3}-\d{4}/g));
// ['555-1234', '555-5678']

// ----------------------------------------------------------------------------
// 4. matchAll() - Returns Iterator with All Match Details (ES2020)
// ----------------------------------------------------------------------------

const matches = "555-1234 and 555-5678".matchAll(/(\d{3})-(\d{4})/g);
for (const match of matches) {
  console.log("Full match:", match[0]);
  console.log("Area:", match[1]);
  console.log("Number:", match[2]);
}

// ----------------------------------------------------------------------------
// 5. test() - Check if Pattern Exists (returns boolean)
// ----------------------------------------------------------------------------

console.log(/fox/.test(text));       // true
console.log(/cat/.test(text));       // false
console.log(/\d+/.test("abc123"));   // true

// ----------------------------------------------------------------------------
// 6. Common Regex Patterns
// ----------------------------------------------------------------------------

// Email validation (simplified)
const email = "user@example.com";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log("Email valid:", emailRegex.test(email)); // true

// Phone number (US format)
const phone = "(555) 123-4567";
const phoneRegex = /^\(\d{3}\)\s?\d{3}-\d{4}$/;
console.log("Phone valid:", phoneRegex.test(phone)); // true

// URL
const url = "https://www.example.com";
const urlRegex = /^https?:\/\/.+/;
console.log("URL valid:", urlRegex.test(url)); // true

// Strong password (8+ chars, uppercase, lowercase, number)
const password = "Hello1!";
const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
console.log("Strong password:", strongRegex.test(password)); // false (only 7 chars)

// ----------------------------------------------------------------------------
// 7. Replace with Regex
// ----------------------------------------------------------------------------

const messy = "foo bar foo bar foo";

// Replace all occurrences (need global flag)
console.log(messy.replace(/foo/g, "baz")); // baz bar baz bar baz

// Replace with captured groups
const date = "2026-06-07";
const usDate = date.replace(/(\d{4})-(\d{2})-(\d{2})/, "$2/$3/$1");
console.log("US date format:", usDate); // 06/07/2026

// Replace with function
const scores = "Scores: 80, 90, 75";
const curved = scores.replace(/\d+/g, (match) => Math.min(100, parseInt(match) + 5));
console.log("Curved scores:", curved); // Scores: 85, 95, 80

// ----------------------------------------------------------------------------
// 8. split() with Regex
// ----------------------------------------------------------------------------

const data = "apple, banana; cherry|date";
console.log(data.split(/[,;|]\s*/)); // ['apple', 'banana', 'cherry', 'date']

// ----------------------------------------------------------------------------
// 9. Searching with Regex
// ----------------------------------------------------------------------------

console.log("search(/fox/):", text.search(/fox/));       // 16 (first lowercase)
console.log("search(/Fox/):", text.search(/Fox/));       // 16
console.log("search(/cat/):", text.search(/cat/));       // -1 (not found)

// ----------------------------------------------------------------------------
// 10. exec() - Iterative Matching (regex maintains lastIndex)
// ----------------------------------------------------------------------------

const pattern = /\d+/g;
const str = "1, 2, 3, 4, 5";
let match;

console.log("Using exec():");
while ((match = pattern.exec(str)) !== null) {
  console.log(`Found ${match[0]} at index ${match.index}`);
}

// ============================================================================
