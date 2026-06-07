// ============================================================================
// 03-string-searching.js
// Searching Within Strings
// ============================================================================

const sentence = "The quick brown fox jumps over the lazy dog. The fox was quick.";

// ----------------------------------------------------------------------------
// 1. indexOf() - Returns first occurrence index, or -1 if not found
// ----------------------------------------------------------------------------
console.log("indexOf('fox'):", sentence.indexOf("fox"));           // 16
console.log("indexOf('cat'):", sentence.indexOf("cat"));           // -1 (not found)
console.log("indexOf('The'):", sentence.indexOf("The"));           // 0 (first occurrence)

// Starting from a specific position
console.log("indexOf('The', 1):", sentence.indexOf("The", 1));     // 44 (second 'The')
console.log("indexOf('fox', 20):", sentence.indexOf("fox", 20));    // 48 (second 'fox')

// ----------------------------------------------------------------------------
// 2. lastIndexOf() - Returns last occurrence index
// ----------------------------------------------------------------------------
console.log("lastIndexOf('fox'):", sentence.lastIndexOf("fox"));     // 48
console.log("lastIndexOf('The'):", sentence.lastIndexOf("The"));     // 44

// Search backwards from a position
console.log("lastIndexOf('fox', 40):", sentence.lastIndexOf("fox", 40)); // 16

// ----------------------------------------------------------------------------
// 3. includes() - Returns true/false (ES6)
// ----------------------------------------------------------------------------
console.log("includes('fox'):", sentence.includes("fox"));      // true
console.log("includes('cat'):", sentence.includes("cat"));      // false
console.log("includes('fox', 20):", sentence.includes("fox", 20)); // true (second fox)
console.log("includes('fox', 50):", sentence.includes("fox", 50)); // false

// ----------------------------------------------------------------------------
// 4. startsWith() - Checks if string starts with substring (ES6)
// ----------------------------------------------------------------------------
console.log("startsWith('The'):", sentence.startsWith("The"));       // true
console.log("startsWith('quick'):", sentence.startsWith("quick"));   // false
console.log("startsWith('quick', 4):", sentence.startsWith("quick", 4)); // true

// ----------------------------------------------------------------------------
// 5. endsWith() - Checks if string ends with substring (ES6)
// ----------------------------------------------------------------------------
console.log("endsWith('dog.'):", sentence.endsWith("dog."));         // false (there's more text)

const simpleStr = "hello.js";
console.log("endsWith('.js'):", simpleStr.endsWith(".js"));          // true
console.log("endsWith('lo', 5):", simpleStr.endsWith("lo", 5));     // true (check first 5 chars)

// ----------------------------------------------------------------------------
// 6. search() - Matches against regex, returns index or -1
// ----------------------------------------------------------------------------
console.log("search(/fox/):", sentence.search(/fox/));               // 16
console.log("search(/cat/):", sentence.search(/cat/));               // -1
console.log("search(/[A-Z]/):", sentence.search(/[A-Z]/));           // 0 (first uppercase)

// ----------------------------------------------------------------------------
// 7. Practical Example: Finding All Occurrences
// ----------------------------------------------------------------------------
function findAllOccurrences(str, searchStr) {
  const indices = [];
  let pos = 0;

  while ((pos = str.indexOf(searchStr, pos)) !== -1) {
    indices.push(pos);
    pos += searchStr.length;
  }

  return indices;
}

console.log("All 'fox' positions:", findAllOccurrences(sentence, "fox")); // [16, 48]
console.log("All 'The' positions:", findAllOccurrences(sentence, "The")); // [0, 44]

// ----------------------------------------------------------------------------
// 8. Checking Empty String Behavior
// ----------------------------------------------------------------------------
console.log("indexOf(''):", "hello".indexOf(""));    // 0 (empty string found at start)
console.log("includes(''):", "hello".includes(""));  // true
console.log("startsWith(''):", "hello".startsWith("")); // true

// ============================================================================
