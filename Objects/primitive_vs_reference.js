// ============================================================
// Primitive Types vs Reference Types in JavaScript
// ============================================================

/*
  PRIMITIVE TYPES (Value Types):
  - Stored directly in the variable's memory location (stack).
  - When you assign or pass them, a COPY of the value is made.
  - Immutable: the value itself cannot be changed; reassigning creates a new value.
  - 7 types: string, number, bigint, boolean, undefined, symbol, null

  REFERENCE TYPES:
  - The variable stores a REFERENCE (memory address/pointer) to where the data lives (heap).
  - When you assign or pass them, you copy the REFERENCE, not the data.
  - Mutable: the object/data pointed to can be changed.
  - Types: Object, Array, Function, Date, RegExp, Map, Set, etc.
*/


// ============================================================
// 1. PRIMITIVE BEHAVIOR
// ============================================================

let a = 10;
let b = a; // b gets a COPY of the value 10

b = 20;
console.log("a:", a); // 10 (unaffected!)
console.log("b:", b); // 20

let str1 = "hello";
let str2 = str1;
str2 = "world";
console.log("str1:", str1); // "hello" (strings are immutable, new value created)

// IMMUTABILITY OF PRIMITIVES
// You cannot change the value itself in place, only reassign the variable.
let name = "Alice";
// name[0] = "B";        // This does nothing in JS (strings are immutable)
name = "Bob";            // Reassignment creates a new string value
console.log("name:", name);


// ============================================================
// 2. REFERENCE BEHAVIOR
// ============================================================

let obj1 = { value: 100 };
let obj2 = obj1; // obj2 gets a COPY OF THE REFERENCE, not a new object!

obj2.value = 200;
console.log("obj1.value:", obj1.value); // 200 (!!! both point to same object)
console.log("obj1 === obj2:", obj1 === obj2); // true (same reference)

let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log("arr1:", arr1); // [1, 2, 3, 4]
console.log("arr1 === arr2:", arr1 === arr2); // true


// ============================================================
// 3. VISUALIZING MEMORY (Conceptual)
// ============================================================

/*
  PRIMITIVES (Stack):
  +-------+     +-------+
  |   a   | --> |  10   |
  +-------+     +-------+
  +-------+     +-------+
  |   b   | --> |  20   |   <-- b is a separate copy
  +-------+     +-------+

  REFERENCES (Heap):
  +-------+     +------------------+
  |  obj1 | --> | { value: 200 }   |  <-- one object in heap memory
  +-------+     +------------------+
  +-------+          ^
  |  obj2 | ---------+             <-- obj2 holds same reference
  +-------+
*/


// ============================================================
// 4. COMPARISON DIFFERENCES
// ============================================================

let numA = 5;
let numB = 5;
console.log("numA === numB:", numA === numB); // true (values compared)

let objA = { x: 1 };
let objB = { x: 1 };
console.log("objA === objB:", objA === objB); // false (different references!)

let objC = objA;
console.log("objA === objC:", objA === objC); // true (same reference)

// Even empty objects/arrays with same contents are not equal
console.log("{} === {}:", {} === {});     // false
console.log("[] === []:", [] === []);     // false


// ============================================================
// 5. PASSING TO FUNCTIONS
// ============================================================

// Primitives: passed by VALUE (function gets a copy)
function incrementPrimitive(x) {
  x = x + 1;
  console.log("Inside function:", x);
}

let count = 10;
incrementPrimitive(count);
console.log("Outside function:", count); // 10 (unchanged!)

// References: passed by REFERENCE (function gets the same object)
function addProperty(obj) {
  obj.newProp = "added";
}

let myObj = { name: "test" };
addProperty(myObj);
console.log("After addProperty:", myObj); // { name: "test", newProp: "added" }

// Arrays behave the same way
function pushItem(arr) {
  arr.push("new");
}

let myArr = ["a", "b"];
pushItem(myArr);
console.log("After pushItem:", myArr); // ["a", "b", "new"]


// ============================================================
// 6. REASSIGNING THE REFERENCE VS MUTATING THE OBJECT
// ============================================================

let person = { name: "Alice" };

function reassignRef(p) {
  p = { name: "Bob" }; // local variable 'p' now points to a NEW object
  console.log("Inside reassign:", p.name); // "Bob"
}

reassignRef(person);
console.log("Outside reassign:", person.name); // "Alice" (original unchanged!)
// The function reassigns its LOCAL reference copy, not the outer variable.

function mutateObj(p) {
  p.name = "Charlie"; // mutates the object both 'p' and 'person' point to
}

mutateObj(person);
console.log("Outside mutate:", person.name); // "Charlie" (changed!)


// ============================================================
// 7. CLONING / AVOIDING SHARED REFERENCES
// ============================================================

const original = {
  name: "Original",
  nested: { score: 50 }
};

// SHALLOW COPY (only top level is new, nested still shared!)
const shallow = { ...original };
shallow.name = "Shallow";
shallow.nested.score = 999;
console.log("Original nested after shallow:", original.nested.score); // 999

// DEEP COPY (completely independent)
const deep = structuredClone(original);
deep.nested.score = 111;
console.log("Original nested after deep:", original.nested.score);     // 999 (unaffected)


// ============================================================
// 8. QUICK REFERENCE TABLE
// ============================================================

/*
  +--------------------+------------------------------------------+
  | PRIMITIVES         | REFERENCES                               |
  +--------------------+------------------------------------------+
  | Stored in stack    | Reference in stack, data in heap         |
  | Copied by VALUE    | Copied by REFERENCE (address)            |
  | Immutable          | Mutable (usually)                        |
  | Compared by value  | Compared by reference (memory address)   |
  | string, number,    | Object, Array, Function, Date, etc.    |
  | boolean, undefined,|                                          |
  | symbol, bigint,    |                                          |
  | null               |                                          |
  +--------------------+------------------------------------------+
*/


// ============================================================
// 9. SPECIAL CASE: WRAPPER OBJECTS (auto-boxing)
// ============================================================

// Primitives like string have temporary object wrappers so methods work.
let text = "hello";
console.log(text.toUpperCase()); // "HELLO"
// JS briefly wraps "hello" in a String object to call toUpperCase(),
// then discards the wrapper. The primitive itself remains immutable.

// You can explicitly create wrapper objects (rarely needed):
let numObj = new Number(10);  // object wrapper
let boolObj = new Boolean(true); // object wrapper
// These ARE reference types! Avoid them in normal code.
console.log("typeof numObj:", typeof numObj);   // "object"
console.log("typeof 10:", typeof 10);             // "number"


// ============================================================
// 10. SUMMARY CHECK
// ============================================================

function summarize() {
  console.log("\n=== SUMMARY ===");
  console.log("Primitives: immutable, copied by value, stored on stack.");
  console.log("References: mutable, copied by reference, stored on heap.");
  console.log("Assignment of reference = sharing the same object.");
  console.log("Comparing references = comparing memory addresses.");
  console.log("Use structuredClone or deep copy to avoid shared mutation.");
}

summarize();

module.exports = { incrementPrimitive, addProperty, reassignRef, mutateObj };
