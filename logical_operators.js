/**
 * JavaScript Logical Operators
 * 
 * &&  (Logical AND)
 * ||  (Logical OR)
 * !   (Logical NOT)
 * ??  (Nullish Coalescing Operator)
 */

// ============================================================
// TRUTHY AND FALSY VALUES (Foundation for Logical Operators)
// ============================================================

console.log("=== TRUTHY & FALSY VALUES ===\n");

// Falsy values in JavaScript (only 6 of them)
const falsyValues = [false, 0, "", null, undefined, NaN];
console.log("Falsy values (only 6 in JS):");
falsyValues.forEach(v => console.log(`  ${JSON.stringify(v)} -> Boolean: ${Boolean(v)}`));

// Everything else is truthy
console.log("\nTruthy examples:");
const truthyExamples = [true, 1, "hello", [], {}, -5, Infinity, "0", "false"];
truthyExamples.forEach(v => console.log(`  ${JSON.stringify(v)} -> Boolean: ${Boolean(v)}`));

// ============================================================
// 1. LOGICAL AND (&&)
// ============================================================

console.log("\n=== LOGICAL AND (&&) ===\n");

// Rules:
// - Returns FIRST falsy value it encounters
// - If all are truthy, returns the LAST truthy value
// - Stops at first falsy (short-circuit)

console.log("true && true:", true && true);           // true
console.log("true && false:", true && false);         // false
console.log("false && true:", false && true);         // false (stops at false)
console.log("false && false:", false && false);       // false

// With non-boolean values:
console.log("\n--- && with non-booleans (returns values, not true/false) ---");
console.log("5 && 'hello':", 5 && "hello");             // "hello" (both truthy, returns last)
console.log("0 && 'hello':", 0 && "hello");             // 0 (first falsy, short-circuits)
console.log("'hello' && null:", "hello" && null);       // null (second is falsy)
console.log("1 && 2 && 3:", 1 && 2 && 3);              // 3 (all truthy, returns last)
console.log("1 && 0 && 3:", 1 && 0 && 3);              // 0 (stops at 0)

// Practical use: Conditional execution
console.log("\n--- Practical && usage ---");
let user = { name: "Alice", isActive: true };
user.isActive && console.log("User is active!");       // Runs because isActive is truthy

// ============================================================
// 2. LOGICAL OR (||)
// ============================================================

console.log("\n=== LOGICAL OR (||) ===\n");

// Rules:
// - Returns FIRST truthy value it encounters
// - If all are falsy, returns the LAST falsy value
// - Stops at first truthy (short-circuit)

console.log("true || true:", true || true);             // true
console.log("true || false:", true || false);         // true (stops at true)
console.log("false || true:", false || true);           // true
console.log("false || false:", false || false);         // false

// With non-boolean values:
console.log("\n--- || with non-booleans (returns values, not true/false) ---");
console.log("5 || 'hello':", 5 || "hello");             // 5 (first truthy)
console.log("0 || 'hello':", 0 || "hello");             // "hello" (0 is falsy, checks next)
console.log("'' || 'default':", "" || "default");      // "default" (empty string is falsy)
console.log("null || 0 || false:", null || 0 || false); // false (all falsy, returns last)
console.log("null || undefined || 'fallback':", null || undefined || "fallback"); // "fallback"

// Practical use: Default values (old way before ??)
console.log("\n--- Practical || usage (default values) ---");
let username = "";
let displayName = username || "Guest";                 // "" is falsy, so "Guest" is used
console.log("Display name:", displayName);               // "Guest"

let count = 0;
let total = count || 10;                               // 0 is falsy! Returns 10 (BUG!)
console.log("Total:", total);                           // 10 (probably not what you wanted)

// ============================================================
// 3. LOGICAL NOT (!)
// ============================================================

console.log("\n=== LOGICAL NOT (!) ===\n");

// Rules:
// - Converts operand to boolean, then inverts it
// - Always returns true or false (boolean)

console.log("!true:", !true);                           // false
console.log("!false:", !false);                         // true
console.log("!0:", !0);                                 // true
console.log("!'hello':", !"hello");                     // false
console.log("!null:", !null);                           // true
console.log("![]:", ![]);                               // false (arrays are truthy)

// Double NOT (!!) - converts to boolean explicitly
console.log("\n--- Double NOT (!!) - Boolean conversion ---");
console.log("!!'hello':", !!"hello");                   // true
console.log("!!0:", !!0);                               // false
console.log("!!'':", !!"");                             // false
console.log("!!'false':", !!"false");                   // true (non-empty string is truthy!)

// ============================================================
// 4. NULLISH COALESCING (??) - ES2020
// ============================================================

console.log("\n=== NULLISH COALESCING (??) ===\n");

// Rules:
// - Returns the right-hand side ONLY if left is null or undefined
// - Only two "nullish" values: null and undefined
// - Does NOT treat 0, '', or false as nullish (unlike ||)

console.log("null ?? 'default':", null ?? "default");           // "default"
console.log("undefined ?? 'default':", undefined ?? "default"); // "default"
console.log("0 ?? 'default':", 0 ?? "default");                 // 0 (0 is not nullish!)
console.log("'' ?? 'default':", "" ?? "default");               // "" (empty string not nullish)
console.log("false ?? 'default':", false ?? "default");         // false (not nullish)

// Practical use: Safe default values (fixes the || bug with 0 and '')
console.log("\n--- Practical ?? usage (safe defaults) ---");
let pageCount = 0;
let pages = pageCount ?? 10;                         // 0 is valid! Returns 0
console.log("Pages:", pages);                         // 0 (correct!)

let userInput = "";
let message = userInput ?? "No input";               // "" is valid! Returns ""
console.log("Message:", message);                     // "" (correct!)

// ============================================================
// 5. SHORT-CIRCUIT EVALUATION
// ============================================================

console.log("\n=== SHORT-CIRCUIT EVALUATION ===\n");

// && stops at first falsy, || stops at first truthy
// This is powerful for conditional execution

function expensiveOperation() {
  console.log("  [Expensive operation executed]");
  return "result";
}

console.log("false && expensiveOperation():");
false && expensiveOperation();                        // Function NOT called! Short-circuited

console.log("true && expensiveOperation():");
true && expensiveOperation();                         // Function called

console.log("\ntrue || expensiveOperation():");
true || expensiveOperation();                         // Function NOT called! Short-circuited

console.log("false || expensiveOperation():");
false || expensiveOperation();                        // Function called

// ============================================================
// 6. COMBINING LOGICAL OPERATORS
// ============================================================

console.log("\n=== COMBINING OPERATORS ===\n");

// Complex conditions
let age = 25;
let hasLicense = true;
let isBanned = false;

let canDrive = age >= 18 && hasLicense && !isBanned;
console.log(`Can drive (age=${age}, license=${hasLicense}, banned=${isBanned}):`, canDrive); // true

// Chaining defaults (?? is often better than || for this)
let config = {
  timeout: 0,
  retries: undefined,
  name: ""
};

let timeout = config.timeout ?? 5000;           // 0 (preserved)
let retries = config.retries ?? 3;              // 3 (undefined -> default)
let name = config.name || "Unnamed";            // "Unnamed" (|| sees '' as falsy)

console.log("\nConfig defaults:");
console.log("  timeout:", timeout);              // 0
console.log("  retries:", retries);              // 3
console.log("  name:", name);                    // "Unnamed"

// ============================================================
// 7. LOGICAL ASSIGNMENT OPERATORS (ES2021)
// ============================================================

console.log("\n=== LOGICAL ASSIGNMENT OPERATORS ===\n");

// ||= assigns if current value is falsy
let a = 0;
a ||= 10;                                        // a is 0 (falsy), so assigns 10
console.log("a ||= 10 (a was 0):", a);            // 10

// &&= assigns if current value is truthy
let b = 5;
b &&= 20;                                        // b is 5 (truthy), so assigns 20
console.log("b &&= 20 (b was 5):", b);            // 20

// ??= assigns if current value is null/undefined
let c = null;
c ??= 100;                                       // c is null, so assigns 100
console.log("c ??= 100 (c was null):", c);        // 100

let d = 0;
d ??= 50;                                        // d is 0 (not nullish), stays 0
console.log("d ??= 50 (d was 0):", d);             // 0

// ============================================================
// QUICK REFERENCE TABLE
// ============================================================

console.log("\n=== QUICK REFERENCE ===\n");
console.log("Operator | Description                     | Returns");
console.log("---------|----------------------------------|-----------------------------");
console.log("&&       | AND                             | First falsy, or last truthy");
console.log("||       | OR                              | First truthy, or last falsy");
console.log("!        | NOT                             | Boolean opposite");
console.log("??       | Nullish Coalescing              | Right side if left is null/undefined");
console.log("&&=      | AND assignment                  | Assigns if current is truthy");
console.log("||=      | OR assignment                   | Assigns if current is falsy");
console.log("??=      | Nullish assignment              | Assigns if current is null/undefined");
