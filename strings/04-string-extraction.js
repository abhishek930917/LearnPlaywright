// ============================================================================
// 04-string-extraction.js
// Extracting Substrings from Strings
// ============================================================================

const str = "JavaScript is awesome!";

// ----------------------------------------------------------------------------
// 1. slice() - Extracts a section (most flexible and recommended)
// ----------------------------------------------------------------------------
// Syntax: string.slice(startIndex, endIndex)
// endIndex is optional and exclusive

console.log("slice(0, 10):", str.slice(0, 10));       // JavaScript
console.log("slice(4, 10):", str.slice(4, 10));       // Script
console.log("slice(11):", str.slice(11));             // is awesome! (from index 11 to end)
console.log("slice():", str.slice());                  // JavaScript is awesome! (full copy)

// Negative indices count from the end
console.log("slice(-8):", str.slice(-8));              // awesome! (last 8 chars)
console.log("slice(-8, -1):", str.slice(-8, -1));     // awesome (last 8, excluding last 1)
console.log("slice(0, -9):", str.slice(0, -9));        // JavaScript is (everything except last 9)

// ----------------------------------------------------------------------------
// 2. substring() - Similar to slice but no negative indices
// ----------------------------------------------------------------------------
// Syntax: string.substring(startIndex, endIndex)
// Negative values are treated as 0

console.log("substring(0, 10):", str.substring(0, 10));   // JavaScript
console.log("substring(4, 10):", str.substring(4, 10));   // Script
console.log("substring(11):", str.substring(11));          // is awesome!

// With negative (treated as 0)
console.log("substring(-5):", str.substring(-5));         // JavaScript is awesome! (start from 0)
console.log("substring(10, 4):", str.substring(10, 4));   // Script (swaps args if start > end)

// ----------------------------------------------------------------------------
// 3. substr() - Legacy method (start + length)
// ----------------------------------------------------------------------------
// Syntax: string.substr(startIndex, length)
// ⚠️ Deprecated - avoid using in new code

console.log("substr(0, 10):", str.substr(0, 10));      // JavaScript
console.log("substr(11, 2):", str.substr(11, 2));     // is
console.log("substr(-8, 7):", str.substr(-8, 7));     // awesome

// ----------------------------------------------------------------------------
// 4. Key Differences Summary
// ----------------------------------------------------------------------------
// slice(start, end):
//   - Supports negative indices
//   - end is exclusive
//   - Most recommended
//
// substring(start, end):
//   - Negative values treated as 0
//   - Swaps arguments if start > end
//   - end is exclusive
//
// substr(start, length):
//   - Second arg is length, not end index
//   - ⚠️ Deprecated

// ----------------------------------------------------------------------------
// 5. Splitting Strings
// ----------------------------------------------------------------------------

// split() - Divide string into array by separator
const csv = "apple,banana,cherry,date";
console.log("split by comma:", csv.split(","));         // ['apple', 'banana', 'cherry', 'date']

const sentence = "The quick brown fox";
console.log("split by space:", sentence.split(" "));    // ['The', 'quick', 'brown', 'fox']

// Limit the number of splits
console.log("split limit 2:", csv.split(",", 2));        // ['apple', 'banana']

// Split into characters
console.log("split chars:", "abc".split(""));            // ['a', 'b', 'c']

// Split by regex
const messy = "a,b;c|d";
console.log("split by regex:", messy.split(/[,;|]/));   // ['a', 'b', 'c', 'd']

// Split with capture groups (includes separators)
console.log("split with capture:", "a-b-c".split(/(-)/)); // ['a', '-', 'b', '-', 'c']

// ----------------------------------------------------------------------------
// 6. Common Patterns
// ----------------------------------------------------------------------------

// Get file extension
const filename = "document.pdf";
const extension = filename.slice(filename.lastIndexOf("."));
console.log("Extension:", extension); // .pdf

// Get filename without extension
const nameWithoutExt = filename.slice(0, filename.lastIndexOf("."));
console.log("Without extension:", nameWithoutExt); // document

// Get domain from URL
const url = "https://www.example.com/path/page.html";
const domain = url.split("/")[2];
console.log("Domain:", domain); // www.example.com

// ============================================================================
