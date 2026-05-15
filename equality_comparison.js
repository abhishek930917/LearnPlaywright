/**
 * JavaScript Comparison Operators: == vs ===
 * 
 * ==  (Loose Equality / Abstract Equality)
 * === (Strict Equality)
 */

// ============================================================
// BASIC DIFFERENCE
// ============================================================

// ==  : Compares values AFTER performing type coercion
// === : Compares both VALUE and TYPE (no type coercion)

// Example 1: String vs Number
let num = 5;
let str = "5";

console.log("==  (5 == '5'):", num == str);     // true  -> "5" coerced to number 5
console.log("=== (5 === '5'):", num === str);   // false -> different types (number vs string)

// Example 2: Boolean vs Number
let bool = true;
let one = 1;

console.log("==  (true == 1):", bool == one);     // true  -> true coerced to number 1
console.log("=== (true === 1):", bool === one);   // false -> different types (boolean vs number)

// Example 3: Null vs Undefined
console.log("==  (null == undefined):", null == undefined);     // true  -> both are "falsy"
console.log("=== (null === undefined):", null === undefined);     // false -> different types

// ============================================================
// TRICKY CASES WITH == (LOOSE EQUALITY)
// ============================================================

console.log("\n--- Tricky Loose Equality Cases ---");

// Empty string vs false vs 0
console.log("0 == false:", 0 == false);           // true  -> false coerced to 0
console.log("0 == '' :", 0 == "");                // true  -> empty string coerced to 0
console.log("false == '' :", false == "");        // true  -> both coerced to 0

// Arrays vs strings
console.log("[] == '' :", [] == "");              // true  -> array coerced to empty string
console.log("[] == false :", [] == false);        // true  -> [] -> "" -> 0, false -> 0
console.log("[1] == '1' :", [1] == "1");          // true  -> array coerced to string "1"

// null vs 0
console.log("null == 0:", null == 0);              // false -> null only equals undefined with ==
console.log("null == false:", null == false);     // false

// NaN (Not a Number)
console.log("NaN == NaN:", NaN == NaN);            // false -> NaN is never equal to anything, even itself!
console.log("NaN === NaN:", NaN === NaN);          // false

// ============================================================
// STRICT EQUALITY (===) IS SAFER AND MORE PREDICTABLE
// ============================================================

console.log("\n--- Strict Equality (Recommended) ---");

// Different types always return false
console.log("5 === '5':", 5 === "5");              // false
console.log("0 === false:", 0 === false);          // false
console.log("'' === false:", "" === false);        // false
console.log("null === undefined:", null === undefined); // false

// Same type and value return true
console.log("5 === 5:", 5 === 5);                  // true
console.log("'hello' === 'hello':", "hello" === "hello"); // true
console.log("true === true:", true === true);      // true

// Objects/arrays are compared by reference, not content
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
let arr3 = arr1;

console.log("\nArray/ Object comparisons:");
console.log("[1,2,3] === [1,2,3]:", arr1 === arr2); // false -> different memory references
console.log("arr1 === arr3:", arr1 === arr3);       // true  -> same reference

// ============================================================
// WHEN TO USE WHAT?
// ============================================================

// USE === (Strict Equality) WHEN:
// - You want to avoid unexpected type coercion bugs
// - You care about the type of data
// - You want predictable, readable code
// - Best practice: Use === as your DEFAULT choice

// USE == (Loose Equality) WHEN:
// - You intentionally want type coercion (rare)
// - Checking for null OR undefined: value == null
// - Legacy code or specific patterns requiring coercion

// Example: Checking for null or undefined (one of few valid == uses)
function checkValue(value) {
  if (value == null) {
    // This catches BOTH null AND undefined
    console.log("Value is null or undefined");
  }
  // Equivalent to: value === null || value === undefined
}

checkValue(null);      // "Value is null or undefined"
checkValue(undefined); // "Value is null or undefined"
checkValue(0);         // (no output - 0 is valid)

// ============================================================
// COMPARISON TABLE
// ============================================================

console.log("\n--- Quick Reference Table ---");
const comparisons = [
  ["5 == '5'", 5 == "5", "String coerced to Number"],
  ["5 === '5'", 5 === "5", "Different types"],
  ["0 == false", 0 == false, "Boolean coerced to Number"],
  ["0 === false", 0 === false, "Different types"],
  ["null == undefined", null == undefined, "Special loose equality rule"],
  ["null === undefined", null === undefined, "Different types"],
  ["'' == false", "" == false, "Both coerced to 0"],
  ["'' === false", "" === false, "Different types"],
  ["NaN == NaN", NaN == NaN, "NaN is never equal to anything"],
  ["NaN === NaN", NaN === NaN, "NaN is never equal to anything"],
];

comparisons.forEach(([expr, result, explanation]) => {
  console.log(`${expr.padEnd(20)} -> ${result.toString().padEnd(5)} | ${explanation}`);
});

// ============================================================
// BEST PRACTICE RECOMMENDATION
// ============================================================

console.log("\n=== BEST PRACTICE ===");
console.log("Always use === (Strict Equality) unless you have a specific reason to use ==.");
console.log("Using === prevents subtle bugs caused by unexpected type coercion.");
console.log("Your code will be more readable, predictable, and maintainable.");
