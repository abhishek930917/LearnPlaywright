// ============================================================================
// 07-string-comparison.js
// Comparing Strings and Coercion
// ============================================================================

// ----------------------------------------------------------------------------
// 1. Lexicographic Comparison (Dictionary Order)
// ----------------------------------------------------------------------------
// Uses Unicode values to compare character by character

console.log("'a' < 'b':", "a" < "b");              // true (97 < 98)
console.log("'apple' < 'banana':", "apple" < "banana"); // true
console.log("'zebra' > 'apple':", "zebra" > "apple");   // true

// Uppercase vs Lowercase (uppercase comes BEFORE lowercase in Unicode)
console.log("'A' < 'a':", "A" < "a");              // true (65 < 97)
console.log("'Z' < 'a':", "Z" < "a");              // true (90 < 97)

// Be careful with case-insensitive comparisons!
console.log("'Apple' === 'apple':", "Apple" === "apple"); // false

// ----------------------------------------------------------------------------
// 2. Equality Operators
// ----------------------------------------------------------------------------
const str1 = "hello";
const str2 = "hello";
const strObj = new String("hello");

console.log("strict equal (===):", str1 === str2);      // true
console.log("loose equal (==):", str1 == str2);         // true
console.log("string vs object (===):", str1 === strObj); // false (different types)
console.log("string vs object (==):", str1 == strObj);   // true (coerced)

// ----------------------------------------------------------------------------
// 3. localeCompare() - Proper String Comparison
// ----------------------------------------------------------------------------
// Returns: negative if str1 < str2, 0 if equal, positive if str1 > str2

console.log("'a'.localeCompare('b'):", "a".localeCompare("b"));       // -1
console.log("'b'.localeCompare('a'):", "b".localeCompare("a"));       // 1
console.log("'a'.localeCompare('a'):", "a".localeCompare("a"));       // 0

// Case-insensitive comparison
console.log("'Apple'.localeCompare('apple'):", "Apple".localeCompare("apple"));

// With options for case-insensitive
console.log(
  "Case-insensitive:",
  "Apple".localeCompare("apple", undefined, { sensitivity: "base" })
); // 0 (equal)

// ----------------------------------------------------------------------------
// 4. Sorting Strings
// ----------------------------------------------------------------------------
const fruits = ["banana", "Apple", "cherry", "date"];

// Default sort (case-sensitive, Unicode order)
console.log("Default sort:", [...fruits].sort());
// ['Apple', 'banana', 'cherry', 'date']

// Case-insensitive sort
console.log(
  "Case-insensitive:",
  [...fruits].sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }))
);

// ----------------------------------------------------------------------------
// 5. String Coercion (Implicit Conversion)
// ----------------------------------------------------------------------------

// Number to string
console.log("5 + '5':", 5 + "5");           // "55" (number coerced to string)
console.log("'5' + 5:", "5" + 5);           // "55"

// String to number (subtraction forces number conversion)
console.log("'10' - '5':", "10" - "5");      // 5
console.log("'10' * '2':", "10" * "2");      // 20

// Loose equality with coercion
console.log("'5' == 5:", "5" == 5);          // true (coerced)
console.log("'5' === 5:", "5" === 5);        // false (strict, no coercion)
console.log("'' == 0:", "" == 0);            // true
console.log("'' === 0:", "" === 0);          // false

// Truthy/Falsy
console.log("Boolean(''):", Boolean(""));     // false
console.log("Boolean('0'):", Boolean("0"));    // true
console.log("Boolean('hello'):", Boolean("hello")); // true

// ----------------------------------------------------------------------------
// 6. Explicit Type Conversion
// ----------------------------------------------------------------------------

// String to Number
console.log("Number('42'):", Number("42"));         // 42
console.log("Number('3.14'):", Number("3.14"));     // 3.14
console.log("Number(''):", Number(""));             // 0
console.log("Number('abc'):", Number("abc"));       // NaN

// Alternative conversions
console.log("parseInt('42px'):", parseInt("42px"));     // 42
console.log("parseInt('101', 2):", parseInt("101", 2)); // 5 (binary)
console.log("parseFloat('3.14'):", parseFloat("3.14"));  // 3.14

// Number to String
console.log("String(42):", String(42));              // "42"
console.log("(42).toString():", (42).toString());     // "42"
console.log("(42).toString(2):", (42).toString(2));   // "101010" (binary)
console.log("(3.14159).toFixed(2):", (3.14159).toFixed(2)); // "3.14"

// toString with radix (base)
console.log("(255).toString(16):", (255).toString(16)); // "ff" (hexadecimal)

// ----------------------------------------------------------------------------
// 7. Avoiding Common Pitfalls
// ----------------------------------------------------------------------------

// NaN comparison
console.log("NaN === NaN:", NaN === NaN); // false!
console.log("isNaN('abc'):", isNaN("abc")); // true
console.log("isNaN('42'):", isNaN("42"));   // false
console.log("Number.isNaN('abc'):", Number.isNaN("abc")); // false (doesn't coerce)

// Empty string comparison
console.log("'' == false:", "" == false);    // true
console.log("'' === false:", "" === false);   // false

// ============================================================================
