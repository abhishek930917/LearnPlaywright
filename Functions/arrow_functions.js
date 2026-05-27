// arrow_functions.js
// Comprehensive guide to Arrow Functions in JavaScript (ES6+)

// ==========================================
// 1. What is an Arrow Function?
// ==========================================
// Arrow functions provide a concise syntax for writing function expressions.
// They were introduced in ES6 (ECMAScript 2015).

// --- Traditional Function Expression ---
const addTraditional = function(a, b) {
    return a + b;
};

// --- Arrow Function Equivalent ---
const addArrow = (a, b) => {
    return a + b;
};

console.log("Traditional:", addTraditional(2, 3)); // 5
console.log("Arrow:", addArrow(2, 3));             // 5

// ==========================================
// 2. Concise Syntax Rules
// ==========================================

// --- Single Parameter: Parentheses are optional ---
const square = x => x * x;
console.log("Square of 4:", square(4)); // 16

// const square = (x) => x * x; // This is also valid

// --- Multiple Parameters: Parentheses are REQUIRED ---
const multiply = (a, b) => a * b;
console.log("Multiply 3 * 4:", multiply(3, 4)); // 12

// --- No Parameters: Empty parentheses REQUIRED ---
const sayHello = () => "Hello, World!";
console.log(sayHello()); // "Hello, World!"

// ==========================================
// 3. Implicit Return (Concise Body)
// ==========================================
// When the function body is a single expression, you can omit the braces `{}`
// and the `return` keyword. The expression is implicitly returned.

const double = n => n * 2;
console.log("Double 5:", double(5)); // 10

const greet = name => `Hello, ${name}!`;
console.log(greet("Alice")); // "Hello, Alice!"

// ==========================================
// 4. Explicit Return (Block Body)
// ==========================================
// When using curly braces `{}`, you MUST use the `return` keyword explicitly.
// This is needed for multiple statements.

const calculate = (a, b) => {
    const sum = a + b;
    const product = a * b;
    return `Sum: ${sum}, Product: ${product}`;
};
console.log(calculate(3, 4)); // "Sum: 7, Product: 12"

// ==========================================
// 5. Returning an Object Literal
// ==========================================
// When returning an object directly, wrap it in parentheses `()`
// Otherwise, JS interprets `{}` as a function block, not an object.

// WRONG: This treats {} as a block, not an object
// const makeUser = (name, age) => { name: name, age: age }; // SyntaxError

// CORRECT: Wrap object in parentheses
const makeUser = (name, age) => ({ name: name, age: age });
console.log(makeUser("Bob", 25)); // { name: "Bob", age: 25 }

// With shorthand property syntax
const createPoint = (x, y) => ({ x, y });
console.log(createPoint(10, 20)); // { x: 10, y: 20 }

// ==========================================
// 6. Arrow Functions and 'this' (Lexical Scoping)
// ==========================================
// Arrow functions do NOT have their own 'this' context.
// They inherit 'this' from the surrounding (parent) scope where they are defined.

const person = {
    name: "Charlie",
    hobbies: ["reading", "coding", "gaming"],

    // Traditional function: 'this' refers to the object
    showHobbiesTraditional: function() {
        console.log("Traditional - this.name:", this.name);
        this.hobbies.forEach(function(hobby) {
            // Inside this traditional function, 'this' is lost (undefined in strict mode)
            // console.log(this.name + " likes " + hobby); // Error or undefined
        });
    },

    // Arrow function: 'this' is inherited from the parent scope (person object)
    showHobbiesArrow: function() {
        console.log("Arrow - this.name:", this.name);
        this.hobbies.forEach(hobby => {
            console.log(`${this.name} likes ${hobby}`);
        });
    }
};

person.showHobbiesArrow();
// Output:
// Arrow - this.name: Charlie
// Charlie likes reading
// Charlie likes coding
// Charlie likes gaming

// --- setTimeout example ---
const timer = {
    message: "Time's up!",
    start: function() {
        // Arrow function inherits 'this' from start()
        setTimeout(() => {
            console.log(this.message); // "Time's up!"
        }, 100);
    }
};
timer.start();

// ==========================================
// 7. Arrow Functions Do NOT Have 'arguments' Object
// ==========================================
// Traditional functions have a special 'arguments' object.
// Arrow functions do NOT. Use rest parameters (...) instead.

function traditionalSum() {
    // 'arguments' exists here
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

const arrowSum = (...numbers) => {
    // 'arguments' is NOT available here
    // We use rest parameter '...numbers' instead
    return numbers.reduce((total, num) => total + num, 0);
};

console.log("Traditional sum:", traditionalSum(1, 2, 3, 4)); // 10
console.log("Arrow sum:", arrowSum(1, 2, 3, 4));           // 10

// ==========================================
// 8. Arrow Functions Cannot Be Used as Constructors
// ==========================================
// Arrow functions cannot be called with the 'new' keyword.

const Animal = (name) => {
    this.name = name;
};

// const dog = new Animal("Buddy"); // TypeError: Animal is not a constructor

// Use a class or traditional function for constructors:
class AnimalClass {
    constructor(name) {
        this.name = name;
    }
}
const dog = new AnimalClass("Buddy");
console.log("Dog name:", dog.name); // "Buddy"

// ==========================================
// 9. Arrow Functions and Array Methods
// ==========================================
// Arrow functions shine when used as short callbacks.

const numbers = [1, 2, 3, 4, 5];

// map
const doubled = numbers.map(n => n * 2);
console.log("Doubled:", doubled); // [2, 4, 6, 8, 10]

// filter
const evens = numbers.filter(n => n % 2 === 0);
console.log("Evens:", evens); // [2, 4]

// reduce
const total = numbers.reduce((sum, n) => sum + n, 0);
console.log("Total:", total); // 15

// find
const firstGreaterThanThree = numbers.find(n => n > 3);
console.log("First > 3:", firstGreaterThanThree); // 4

// sort
const desc = [...numbers].sort((a, b) => b - a);
console.log("Descending:", desc); // [5, 4, 3, 2, 1]

// ==========================================
// 10. Common Use Cases
// ==========================================

// --- Event listeners with preserved context ---
class Button {
    constructor(label) {
        this.label = label;
    }

    handleClick() {
        // Arrow function preserves 'this' pointing to the Button instance
        document.addEventListener('click', () => {
            console.log(`Button "${this.label}" clicked!`);
        });
    }
}

// --- Promise chains ---
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

// --- Default parameters with arrow functions ---
const greetUser = (name = "Guest", greeting = "Hello") => `${greeting}, ${name}!`;
console.log(greetUser());                  // "Hello, Guest!"
console.log(greetUser("Alice"));           // "Hello, Alice!"
console.log(greetUser("Alice", "Hi"));     // "Hi, Alice!"

// ==========================================
// 11. When NOT to Use Arrow Functions
// ==========================================

// 1. Object methods (when you need dynamic 'this')
const badCounter = {
    count: 0,
    // Don't do this! 'this' won't refer to the object
    increment: () => {
        this.count++; // 'this' refers to outer scope, NOT badCounter
    }
};

// CORRECT way:
const goodCounter = {
    count: 0,
    increment() {
        this.count++;
    }
};

// 2. Constructor functions (arrow functions can't use 'new')
// 3. Event listeners on DOM elements when you need 'this' to be the element
//    (unless you explicitly want the outer 'this')
//    element.addEventListener('click', function() { this.style.color = 'red'; });

// ==========================================
// Summary
// ==========================================
// ✅ Use arrow functions for:
//    - Short callbacks (map, filter, reduce, etc.)
//    - Preserving 'this' context (setTimeout, event handlers inside classes)
//    - Writing concise one-liners
//    - Promise chains

// ❌ Don't use arrow functions for:
//    - Object methods that rely on 'this' pointing to the object
//    - Constructor functions (use class instead)
//    - When you need the 'arguments' object (use rest parameters)
//    - Event listeners where 'this' should be the DOM element

// Key characteristics:
// - Concise syntax: () => expression
// - Lexical 'this': inherits from parent scope
// - No 'arguments' object
// - Cannot be used with 'new'
// - Cannot be used as generators
