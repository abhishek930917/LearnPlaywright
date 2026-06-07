// ============================================================================
// 13-string-join.js
// Array.join() Method: The Complete Guide for String Operations
// ============================================================================

// join() is technically an Array method, but it is CRITICAL for string work.
// It creates a string by joining all elements of an array with a separator.

// ----------------------------------------------------------------------------
// 1. BASIC SYNTAX
// ----------------------------------------------------------------------------
// array.join(separator)
//   separator (optional): string to insert between elements. Default = ","
//   Returns: a single string

const fruits = ["apple", "banana", "cherry"];

console.log("fruits.join():", fruits.join());           // apple,banana,cherry (default comma)
console.log("fruits.join(', '):", fruits.join(", "));   // apple, banana, cherry
console.log("fruits.join(' | '):", fruits.join(" | "));   // apple | banana | cherry
console.log("fruits.join(''):", fruits.join(""));        // applebananacherry
console.log("fruits.join('-'):", fruits.join("-"));      // apple-banana-cherry

// ----------------------------------------------------------------------------
// 2. SEPARATOR OPTIONS
// ----------------------------------------------------------------------------

const words = ["The", "quick", "brown", "fox"];

// Space separator (creating a sentence)
console.log("Sentence:", words.join(" ")); // The quick brown fox

// Newline separator
console.log("Newlines:\n" + words.join("\n"));

// Tab separator (for table-like output)
console.log("Tab separated:", words.join("\t"));

// HTML separator
const htmlItems = ["Item 1", "Item 2", "Item 3"];
const htmlList = "<li>" + htmlItems.join("</li><li>") + "</li>";
console.log("HTML:\n<li>" + htmlItems.join("</li>\n<li>") + "</li>");

// ----------------------------------------------------------------------------
// 3. EMPTY ARRAY BEHAVIOR
// ----------------------------------------------------------------------------

console.log("[].join(','):", "" + [].join(","));             // "" (empty string)
console.log("[].join():", "" + [].join());                   // "" (empty string)
console.log("[].join('x'):", "" + [].join("x"));               // "" (empty string)

// ----------------------------------------------------------------------------
// 4. SINGLE ELEMENT ARRAY
// ----------------------------------------------------------------------------

console.log("['hello'].join('-'):", ["hello"].join("-"));     // hello (no separator added)

// ----------------------------------------------------------------------------
// 5. ARRAY WITH EMPTY OR UNDEFINED VALUES
// ----------------------------------------------------------------------------

const sparse = ["a", , "c"]; // hole in the middle
console.log("Sparse join:", sparse.join("-"));                // a--c (empty string for hole)

const withEmpty = ["a", "", "c"];
console.log("With empty string:", withEmpty.join("-"));         // a--c

const withNull = ["a", null, "c"];
console.log("With null:", withNull.join("-"));                  // a--c (null becomes "")

const withUndefined = ["a", undefined, "c"];
console.log("With undefined:", withUndefined.join("-"));        // a--c (undefined becomes "")

// ----------------------------------------------------------------------------
// 6. NUMBERS AND BOOLEANS ARE CONVERTED TO STRINGS
// ----------------------------------------------------------------------------

const mixed = [1, true, null, undefined, "text", 3.14];
console.log("Mixed types:", mixed.join(", ")); // 1, true, , , text, 3.14

// ----------------------------------------------------------------------------
// 7. SPLIT AND JOIN PATTERN (The Classic String Reverse)
// ----------------------------------------------------------------------------

const original = "hello";
const reversed = original.split("").reverse().join("");
console.log("Reverse 'hello':", reversed); // olleh

// How it works:
// Step 1: "hello".split("")  -> ['h','e','l','l','o']
// Step 2: .reverse()          -> ['o','l','l','e','h']
// Step 3: .join("")           -> "olleh"

// Replace all occurrences of a character (split-join trick)
const withHyphens = "2026-06-07";
const withSlashes = withHyphens.split("-").join("/");
console.log("Replace - with /:", withSlashes); // 2026/06/07

// Count characters
const charCount = "hello world".split("o").length - 1;
console.log("Count 'o' in 'hello world':", charCount); // 2

// ----------------------------------------------------------------------------
// 8. BUILDING STRINGS EFFICIENTLY WITH JOIN (Performance)
// ----------------------------------------------------------------------------

// PROBLEM: Repeated += is slow for large strings
// Each += creates a NEW string object in memory

let slowResult = "";
for (let i = 0; i < 5; i++) {
  slowResult += "Item " + i + ", ";
}
console.log("Slow += result:", slowResult);

// SOLUTION: Use array + join (much faster for many items)
const buffer = [];
for (let i = 0; i < 5; i++) {
  buffer.push("Item " + i);
}
const fastResult = buffer.join(", ");
console.log("Fast join result:", fastResult);

// Why is it faster?
// - Arrays are designed for adding/removing items efficiently
// - join() allocates the final string once
// - += allocates a new string on EVERY iteration

// ----------------------------------------------------------------------------
// 9. CONDITIONAL STRING BUILDING
// ----------------------------------------------------------------------------

function buildAddress(parts) {
  // Filter out empty/null values, then join
  const validParts = parts.filter((part) => part && part.trim() !== "");
  return validParts.join(", ");
}

const address = buildAddress(["123 Main St", "Apt 4", "", "New York", null, "NY", "10001"]);
console.log("Address:", address); // 123 Main St, Apt 4, New York, NY, 10001

// ----------------------------------------------------------------------------
// 10. CREATING REPEAT-LIKE BEHAVIOR
// ----------------------------------------------------------------------------

function repeatWithJoin(char, times) {
  return Array(times + 1).join(char); // Creates array of empty slots, joins with char
}

console.log("Repeat '-':", repeatWithJoin("-", 20)); // --------------------
console.log("Repeat '*':", repeatWithJoin("*", 10)); // **********

// Modern alternative: .repeat() (ES6)
console.log("Using .repeat():", "-".repeat(20));

// ----------------------------------------------------------------------------
// 11. MULTI-LINE STRING CONSTRUCTION
// ----------------------------------------------------------------------------

const lines = [
  "function greet(name) {",
  "  return 'Hello, ' + name;",
  "}",
];

const codeBlock = lines.join("\n");
console.log("Code block:\n" + codeBlock);

// With indentation
const indented = lines.map((line) => "  " + line).join("\n");
console.log("Indented:\n" + indented);

// ----------------------------------------------------------------------------
// 12. CSV AND DATA FORMATTING
// ----------------------------------------------------------------------------

const headers = ["Name", "Age", "City"];
const row1 = ["Alice", "30", "New York"];
const row2 = ["Bob", "25", "Los Angeles"];

const csvContent = [
  headers.join(","),
  row1.join(","),
  row2.join(","),
].join("\n");

console.log("CSV output:\n" + csvContent);

// Handling commas in data (needs quotes)
const trickyData = ["Alice", "CEO, Founder", "New York"];
const safeRow = trickyData.map((cell) => {
  if (cell.includes(",")) return '"' + cell + '"';
  return cell;
}).join(",");
console.log("Safe CSV row:", safeRow); // Alice,"CEO, Founder",New York

// ----------------------------------------------------------------------------
// 13. TEMPLATE-LIKE BEHAVIOR WITH JOIN
// ----------------------------------------------------------------------------

function htmlTag(tagName, children) {
  return "<" + tagName + ">" + children.join("") + "</" + tagName + ">";
}

const listItems = ["<li>Apple</li>", "<li>Banana</li>", "<li>Cherry</li>"];
console.log("HTML list:", htmlTag("ul", listItems));
// <ul><li>Apple</li><li>Banana</li><li>Cherry</li></ul>

// ----------------------------------------------------------------------------
// 14. JOIN VS CONCAT: A COMPARISON
// ----------------------------------------------------------------------------

const arr = ["A", "B", "C"];

// Using join
const joined = arr.join("");
console.log("join():", joined); // ABC

// Using concat (manual)
const concatted = "A".concat("B", "C");
console.log("concat():", concatted); // ABC

// Using +
const plussed = "A" + "B" + "C";
console.log("+ operator:", plussed); // ABC

// For many items, join is cleaner:
const manyItems = ["H", "e", "l", "l", "o"];
console.log("Many join():", manyItems.join("")); // Hello
console.log("Many + :", manyItems[0] + manyItems[1] + manyItems[2] + manyItems[3] + manyItems[4]); // ugly!

// ----------------------------------------------------------------------------
// 15. NESTED JOIN
// ----------------------------------------------------------------------------

const table = [
  ["Name", "Score"],
  ["Alice", "95"],
  ["Bob", "87"],
];

const tableString = table.map((row) => row.join("\t")).join("\n");
console.log("Table:\n" + tableString);

// ----------------------------------------------------------------------------
// 16. JOIN WITH DIFFERENT LAST SEPARATOR (Oxford Comma Style)
// ----------------------------------------------------------------------------

function oxfordJoin(items, separator = ", ", lastSeparator = " and ") {
  if (items.length === 0) return "";
  if (items.length === 1) return items[0];
  if (items.length === 2) return items.join(lastSeparator.trim());
  const allButLast = items.slice(0, -1).join(separator);
  return allButLast + lastSeparator + items[items.length - 1];
}

console.log("Oxford 1:", oxfordJoin(["apple"])); // apple
console.log("Oxford 2:", oxfordJoin(["apple", "banana"])); // apple and banana
console.log("Oxford 3:", oxfordJoin(["apple", "banana", "cherry"])); // apple, banana and cherry
console.log("Oxford many:", oxfordJoin(["a", "b", "c", "d"])); // a, b, c and d

// ============================================================================
// QUICK REFERENCE
// ============================================================================
// array.join()          -> "a,b,c" (default comma)
// array.join("")        -> "abc" (no separator)
// array.join(" ")       -> "a b c" (space)
// array.join("\n")      -> multi-line string
// array.join("</li><li>") -> HTML generation
//
// BEST PRACTICES:
// - Use join() when building strings from arrays or loops
// - Use split().join() to replace all occurrences of a substring
// - Filter out empty/null values before joining if needed
// - For 1000+ iterations, array.push() + join() is faster than +=
// ============================================================================
