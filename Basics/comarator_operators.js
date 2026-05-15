
// >,<,>=,<=,==,!=, ===
let a=10,b=20;
console.log("a > b:", a>b); // false
console.log("a < b:", a<b); // true
console.log("a >= b:", a>=b); // false // a>b OR a==b
console.log("a <= b:", a<=b); // true
console.log("a == b:", a==b); // false
console.log("a != b:", a!=b); // true
// Strict equality checks both value and type
console.log("a === b:", a===b); // false
console.log("a !== b:", a!==b); // true 

// = assignment operator
let x=10;
console.log("Initial x:", x);  
// == loose equality (type coercion)
console.log("x == '10':", x == '10'); // true (string '10' is coerced to number 10)
// === strict equality (no type coercion)
console.log("x === '10':", x === '10'); // false (different types)  


let m=10;
let n="10";

console.log("m == n", m == n); // true (type coercion)
console.log("m === n", m === n); // false (different types)

console.log("null == undefined:", null == undefined); // true (loose equality)
console.log("null === undefined:", null === undefined); // false (strict equality)  
console.log("null == 0:", null == 0); // false
console.log("undefined == 0:", undefined == 0); // false
console.log("null == false:", null == false); // false
console.log("undefined == false:", undefined == false); // false
console.log("null === 0:", null === 0); // false
console.log("undefined === 0:", undefined === 0); // false
console.log("null === false:", null === false); // false
console.log("undefined === false:", undefined === false); // false

console.log("0 == false:", 0 == false); // true (type coercion)
console.log("0 === false:", 0 === false); // false (different types)

console.log(0==""); // true (empty string is coerced to 0)
console.log(0===""); // false (different types)