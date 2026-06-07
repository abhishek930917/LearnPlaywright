// ============================================================================
// 10-string-methods-reference.js
// Complete Reference of Built-in JavaScript String Methods
// ============================================================================

const demo = "  Hello, JavaScript World!  ";
const simple = "abc";

console.log("===== INSTANCE PROPERTIES =====");

// ----------------------------------------------------------------------------
// .length  (Property, not a method)
// ----------------------------------------------------------------------------
// Returns the number of UTF-16 code units in the string.
console.log("'hello'.length:", "hello".length);               // 5
console.log("''.length:", "".length);                       // 0
console.log("emoji ❤️ length:", "❤️".length);               // 2 (surrogate pair)
console.log("demo.length:", demo.length);

console.log("\n===== ACCESS METHODS =====");

// ----------------------------------------------------------------------------
// .charAt(index)
// ----------------------------------------------------------------------------
// Returns the character at the specified index. Returns "" if out of range.
console.log("demo.charAt(5):", demo.charAt(5));             // 'H' (after spaces)
console.log("demo.charAt(100):", "'" + demo.charAt(100) + "'"); // ''

// ----------------------------------------------------------------------------
// .charCodeAt(index)
// ----------------------------------------------------------------------------
// Returns the UTF-16 code unit (0-65535) at the given index.
console.log("'A'.charCodeAt(0):", "A".charCodeAt(0));       // 65
console.log("'a'.charCodeAt(0):", "a".charCodeAt(0));       // 97

// ----------------------------------------------------------------------------
// .codePointAt(index)
// ----------------------------------------------------------------------------
// Returns the Unicode code point. Handles surrogate pairs (emojis) correctly.
console.log("'A'.codePointAt(0):", "A".codePointAt(0));     // 65
console.log("emoji codePointAt:", "🎉".codePointAt(0));      // 127881

// ----------------------------------------------------------------------------
// .at(index)  (ES2022)
// ----------------------------------------------------------------------------
// Returns the character at the index. Supports negative indices.
console.log("demo.at(0):", demo.at(0));                     // ' '
console.log("demo.at(-1):", "'" + demo.at(-1) + "'");       // ' ' (last char)
console.log("demo.at(-5):", "'" + demo.at(-5) + "'");      // 'd'

console.log("\n===== SEARCH METHODS =====");

// ----------------------------------------------------------------------------
// .indexOf(searchString, fromIndex)
// ----------------------------------------------------------------------------
// Returns the index of the first occurrence, or -1 if not found.
console.log("demo.indexOf('Java'):", demo.indexOf("Java")); // 9
console.log("demo.indexOf('Python'):", demo.indexOf("Python")); // -1
console.log("demo.indexOf('l'):", demo.indexOf("l"));       // 5
console.log("demo.indexOf('l', 6):", demo.indexOf("l", 6));  // 6

// ----------------------------------------------------------------------------
// .lastIndexOf(searchString, fromIndex)
// ----------------------------------------------------------------------------
// Returns the index of the last occurrence, searching backwards.
console.log("demo.lastIndexOf('l'):", demo.lastIndexOf("l")); // 6
console.log("demo.lastIndexOf('World'):", demo.lastIndexOf("World")); // 22

// ----------------------------------------------------------------------------
// .includes(searchString, position)
// ----------------------------------------------------------------------------
// Returns true/false.
console.log("demo.includes('Java'):", demo.includes("Java")); // true
console.log("demo.includes('Python'):", demo.includes("Python")); // false
console.log("demo.includes('Hello', 10):", demo.includes("Hello", 10)); // false

// ----------------------------------------------------------------------------
// .startsWith(searchString, position)
// ----------------------------------------------------------------------------
console.log("demo.startsWith('  Hello'):", demo.startsWith("  Hello")); // true
console.log("demo.startsWith('Java', 9):", demo.startsWith("Java", 9)); // true

// ----------------------------------------------------------------------------
// .endsWith(searchString, length)
// ----------------------------------------------------------------------------
console.log("demo.endsWith('!  '):", demo.endsWith("!  ")); // true
console.log("demo.endsWith('Java', 13):", demo.endsWith("Java", 13)); // true

// ----------------------------------------------------------------------------
// .search(regexp)
// ----------------------------------------------------------------------------
// Executes a search for a match between a regular expression and this string.
console.log("demo.search(/Java/):", demo.search(/Java/)); // 9
console.log("demo.search(/[A-Z]/):", demo.search(/[A-Z]/)); // 2 (first uppercase after spaces)

console.log("\n===== EXTRACTION METHODS =====");

// ----------------------------------------------------------------------------
// .slice(start, end)
// ----------------------------------------------------------------------------
// Extracts a section and returns a new string. Supports negative indices.
console.log("demo.slice(9, 19):", "'" + demo.slice(9, 19) + "'"); // 'JavaScript'
console.log("demo.slice(-6):", "'" + demo.slice(-6) + "'");     // 'rld!  '
console.log("demo.slice(-8, -3):", "'" + demo.slice(-8, -3) + "'"); // 'World'

// ----------------------------------------------------------------------------
// .substring(start, end)
// ----------------------------------------------------------------------------
// Similar to slice, but negative values are treated as 0, and it swaps args.
console.log("demo.substring(9, 19):", "'" + demo.substring(9, 19) + "'");
console.log("demo.substring(19, 9):", "'" + demo.substring(19, 9) + "'"); // swaps
console.log("demo.substring(-5):", "'" + demo.substring(-5) + "'"); // starts at 0

// ----------------------------------------------------------------------------
// .substr(start, length)  ⚠️ Deprecated — avoid in new code
// ----------------------------------------------------------------------------
// Starts at index, extracts length characters.
console.log("demo.substr(9, 10):", "'" + demo.substr(9, 10) + "'"); // 'JavaScript'

// ----------------------------------------------------------------------------
// .split(separator, limit)
// ----------------------------------------------------------------------------
// Splits a string into an array of strings.
console.log("'a,b,c'.split(','):", "a,b,c".split(",")); // ['a','b','c']
console.log("'a,b,c'.split(',', 2):", "a,b,c".split(",", 2)); // ['a','b']
console.log("'hello'.split(''):", "hello".split("")); // ['h','e','l','l','o']

console.log("\n===== CASE METHODS =====");

// ----------------------------------------------------------------------------
// .toLowerCase()
// ----------------------------------------------------------------------------
console.log("demo.toLowerCase():", "'" + demo.toLowerCase() + "'");

// ----------------------------------------------------------------------------
// .toUpperCase()
// ----------------------------------------------------------------------------
console.log("demo.toUpperCase():", "'" + demo.toUpperCase() + "'");

// ----------------------------------------------------------------------------
// .toLocaleLowerCase(locale)
// ----------------------------------------------------------------------------
// Locale-sensitive lowercasing (e.g., Turkish 'I' → 'ı').
console.log("'İSTANBUL'.toLocaleLowerCase('tr'):", "İSTANBUL".toLocaleLowerCase("tr"));

// ----------------------------------------------------------------------------
// .toLocaleUpperCase(locale)
// ----------------------------------------------------------------------------
console.log("'istanbul'.toLocaleUpperCase('tr'):", "istanbul".toLocaleUpperCase("tr"));

console.log("\n===== WHITESPACE METHODS =====");

// ----------------------------------------------------------------------------
// .trim()
// ----------------------------------------------------------------------------
// Removes whitespace from both ends.
console.log("'" + demo.trim() + "'");

// ----------------------------------------------------------------------------
// .trimStart() / .trimLeft()
// ----------------------------------------------------------------------------
console.log("'" + demo.trimStart() + "'");

// ----------------------------------------------------------------------------
// .trimEnd() / .trimRight()
// ----------------------------------------------------------------------------
console.log("'" + demo.trimEnd() + "'");

console.log("\n===== PADDING METHODS =====");

// ----------------------------------------------------------------------------
// .padStart(targetLength, padString)
// ----------------------------------------------------------------------------
console.log("'42'.padStart(5, '0'):", "42".padStart(5, "0")); // 00042
console.log("'42'.padStart(5):", "'" + "42".padStart(5) + "'"); // '   42'

// ----------------------------------------------------------------------------
// .padEnd(targetLength, padString)
// ----------------------------------------------------------------------------
console.log("'42'.padEnd(5, '0'):", "42".padEnd(5, "0")); // 42000

console.log("\n===== REPEAT & CONCAT =====");

// ----------------------------------------------------------------------------
// .repeat(count)
// ----------------------------------------------------------------------------
console.log("'ha'.repeat(3):", "ha".repeat(3)); // hahaha

// ----------------------------------------------------------------------------
// .concat(str1, str2, ...)
// ----------------------------------------------------------------------------
console.log("'Hello'.concat(' ', 'World'):", "Hello".concat(" ", "World")); // Hello World

console.log("\n===== REPLACE METHODS =====");

// ----------------------------------------------------------------------------
// .replace(pattern, replacement)
// ----------------------------------------------------------------------------
// Replaces the FIRST match only (unless using global regex).
console.log("demo.replace('World', 'Universe'):", "'" + demo.replace("World", "Universe") + "'");
console.log("'foo foo'.replace(/foo/, 'bar'):", "foo foo".replace(/foo/, "bar")); // bar foo
console.log("'foo foo'.replace(/foo/g, 'bar'):", "foo foo".replace(/foo/g, "bar")); // bar bar

// Replacement patterns:
// $$ - inserts "$"
// $& - inserts matched substring
// $` - inserts portion before match
// $' - inserts portion after match
// $n - inserts nth capturing group
console.log("'2026-06-07'.replace(/-/g, '/'):", "2026-06-07".replace(/-/g, "/"));

// ----------------------------------------------------------------------------
// .replaceAll(pattern, replacement)  (ES2021)
// ----------------------------------------------------------------------------
// Replaces ALL matches without needing the global flag.
console.log("'foo foo'.replaceAll('foo', 'bar'):", "foo foo".replaceAll("foo", "bar"));
console.log("'foo foo'.replaceAll(/foo/g, 'bar'):", "foo foo".replaceAll(/foo/g, "bar"));

console.log("\n===== MATCH METHODS =====");

// ----------------------------------------------------------------------------
// .match(regexp)
// ----------------------------------------------------------------------------
// Returns match information. Without global flag: array with details.
// With global flag: array of all matches (no capture groups info).
const matchDemo = "Price: $100, Tax: $20";
console.log("match without g:", "Price: $100".match(/\$(\d+)/));
// ['$100', '100', index: 7, input: 'Price: $100', groups: undefined]
console.log("match with g:", matchDemo.match(/\$\d+/g)); // ['$100', '$20']

// ----------------------------------------------------------------------------
// .matchAll(regexp)  (ES2020)
// ----------------------------------------------------------------------------
// Returns an iterator of all matches, including capture groups.
const matchAllResult = matchDemo.matchAll(/\$(\d+)/g);
for (const m of matchAllResult) {
  console.log("matchAll entry:", m[0], "- group:", m[1]);
}

console.log("\n===== REGEX TEST =====");

// ----------------------------------------------------------------------------
// .match(regexp) can be used with regex; .test() is on the RegExp object
// ----------------------------------------------------------------------------
console.log(/Java/.test(demo)); // true

console.log("\n===== LOCALE COMPARISON =====");

// ----------------------------------------------------------------------------
// .localeCompare(compareString, locales, options)
// ----------------------------------------------------------------------------
// Returns -1, 0, or 1 (like strcmp). Use for sorting strings properly.
console.log("'a'.localeCompare('b'):", "a".localeCompare("b"));       // -1
console.log("'b'.localeCompare('a'):", "b".localeCompare("a"));       // 1
console.log("'a'.localeCompare('a'):", "a".localeCompare("a"));       // 0

console.log("\n===== NORMALIZATION =====");

// ----------------------------------------------------------------------------
// .normalize(form)
// ----------------------------------------------------------------------------
// Unicode normalization. Important when comparing strings with accents.
const composed = "café";       // é as single character
const decomposed = "café";     // e + combining acute accent
console.log("composed === decomposed:", composed === decomposed); // false!
console.log("composed.normalize() === decomposed.normalize():", composed.normalize() === decomposed.normalize()); // true

console.log("\n===== CONVERSION METHODS =====");

// ----------------------------------------------------------------------------
// .toString()
// ----------------------------------------------------------------------------
// Returns the string value. On string primitives, it returns itself.
console.log("simple.toString():", simple.toString());

// ----------------------------------------------------------------------------
// .valueOf()
// ----------------------------------------------------------------------------
// Returns the primitive value of the string object.
const strObj = new String("hello");
console.log("strObj.valueOf():", strObj.valueOf());
console.log("typeof strObj:", typeof strObj);          // object
console.log("typeof strObj.valueOf():", typeof strObj.valueOf()); // string

console.log("\n===== ITERATION =====");

// ----------------------------------------------------------------------------
// String is iterable: for...of, spread, Array.from()
// ----------------------------------------------------------------------------
console.log("[...'abc']:", [..."abc"]); // ['a','b','c']
console.log("Array.from('abc'):", Array.from("abc")); // ['a','b','c']

for (const char of "Hi") {
  console.log("char:", char);
}

console.log("\n===== CONSTRUCTOR / STATIC METHODS =====");

// ----------------------------------------------------------------------------
// String.fromCharCode(code1, code2, ...)
// ----------------------------------------------------------------------------
// Creates a string from UTF-16 code units.
console.log("String.fromCharCode(65, 66, 67):", String.fromCharCode(65, 66, 67)); // ABC

// ----------------------------------------------------------------------------
// String.fromCodePoint(code1, code2, ...)  (ES6)
// ----------------------------------------------------------------------------
// Creates a string from Unicode code points (handles emojis).
console.log("String.fromCodePoint(127881):", String.fromCodePoint(127881)); // 🎉
console.log("String.fromCodePoint(0x1F600):", String.fromCodePoint(0x1F600)); // 😀

// ----------------------------------------------------------------------------
// String.raw`template`
// ----------------------------------------------------------------------------
// Returns the raw string form of a template literal (ignores escapes).
console.log("String.raw`C:\\\\Users\\\\Admin`:", String.raw`C:\Users\Admin`);

console.log("\n===== WELL-KNOWN SYMBOLS =====");

// ----------------------------------------------------------------------------
// String.prototype[Symbol.iterator]
// ----------------------------------------------------------------------------
// Makes strings iterable. This is why for...of works on strings.
const iterator = "AB"[Symbol.iterator]();
console.log("iterator.next():", iterator.next()); // { value: 'A', done: false }
console.log("iterator.next():", iterator.next()); // { value: 'B', done: false }
console.log("iterator.next():", iterator.next()); // { value: undefined, done: true }

console.log("\n===== CHAINING NOTE =====");
// Because strings are immutable, all these methods return NEW strings.
// You can chain them:
const result = "  HELLO WORLD  "
  .trim()
  .toLowerCase()
  .replace("world", "javascript")
  .split(" ")
  .join("-");
console.log("Chained result:", result); // hello-javascript

// ============================================================================
// QUICK CHEAT SHEET
// ============================================================================
// .length              -> number of characters
// .charAt(i)           -> character at index
// .charCodeAt(i)       -> UTF-16 code
// .codePointAt(i)      -> Unicode code point
// .at(i)               -> character at index (supports negatives)
// .indexOf(s)          -> first index of substring
// .lastIndexOf(s)      -> last index of substring
// .includes(s)         -> true/false
// .startsWith(s)       -> true/false
// .endsWith(s)         -> true/false
// .search(r)           -> regex match index
// .slice(a, b)         -> extract substring
// .substring(a, b)     -> extract substring (no negatives)
// .substr(a, len)      -> extract (deprecated)
// .split(sep, limit)   -> array of strings
// .toLowerCase()       -> lowercase
// .toUpperCase()       -> uppercase
// .toLocaleLowerCase() -> locale-aware lowercase
// .toLocaleUpperCase() -> locale-aware uppercase
// .trim()              -> remove both-end whitespace
// .trimStart()         -> remove leading whitespace
// .trimEnd()           -> remove trailing whitespace
// .padStart(n, s)      -> pad from start
// .padEnd(n, s)        -> pad from end
// .repeat(n)           -> repeat string
// .concat(s1, s2)      -> join strings
// .replace(p, r)       -> replace first match
// .replaceAll(p, r)    -> replace all matches
// .match(r)            -> regex match
// .matchAll(r)         -> all regex matches (iterator)
// .localeCompare(s)    -> compare for sorting
// .normalize()          -> Unicode normalize
// .toString()          -> primitive string
// .valueOf()           -> primitive value
// String.fromCharCode  -> create from UTF-16 codes
// String.fromCodePoint -> create from code points (ES6)
// String.raw           -> raw template literal
// ============================================================================
