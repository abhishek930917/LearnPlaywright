// ============================================================
// JavaScript Conditional Statements (if, else, else if)
// ============================================================
// Conditional statements control the flow of execution based on conditions.
// They allow your code to make decisions and execute different blocks of code.

console.log("=== 1. BASIC if STATEMENT ===");
// The simplest conditional. Executes code ONLY if the condition is true.
let age = 18;
if (age >= 18) {
    console.log("You are an adult.");
}
// If the condition is false, nothing happens (no output for age < 18)

let temperature = 30;
if (temperature > 25) {
    console.log("It's a hot day!");
}


console.log("\n=== 2. if...else STATEMENT ===");
// Provides two paths: one for true, one for false.
let isRaining = true;
if (isRaining) {
    console.log("Take an umbrella.");
} else {
    console.log("No need for an umbrella.");
}

let score = 45;
if (score >= 50) {
    console.log("You passed!");
} else {
    console.log("You failed. Study harder!");
}


console.log("\n=== 3. if...else if...else STATEMENT ===");
// Checks multiple conditions in sequence. Only the FIRST matching block runs.
let grade = 85;
if (grade >= 90) {
    console.log("Grade: A");
} else if (grade >= 80) {
    console.log("Grade: B");
} else if (grade >= 70) {
    console.log("Grade: C");
} else if (grade >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}

let hour = 14;
if (hour < 12) {
    console.log("Good morning!");
} else if (hour < 17) {
    console.log("Good afternoon!");
} else if (hour < 21) {
    console.log("Good evening!");
} else {
    console.log("Good night!");
}


console.log("\n=== 4. NESTED if STATEMENTS ===");
// An if statement inside another if statement.
// Use sparingly to avoid complexity.
let hasID = true;
let hasTicket = true;
if (hasID) {
    if (hasTicket) {
        console.log("You may enter the cinema.");
    } else {
        console.log("You need a ticket to enter.");
    }
} else {
    console.log("You need an ID first.");
}

// Alternative using logical operators (cleaner):
if (hasID && hasTicket) {
    console.log("Welcome to the cinema!");
} else {
    console.log("Entry denied.");
}


console.log("\n=== 5. TERNARY OPERATOR (? :) ===");
// A shorthand for simple if...else statements.
// Syntax: condition ? valueIfTrue : valueIfFalse
let num = 10;
let result = (num % 2 === 0) ? "Even" : "Odd";
console.log(`The number ${num} is ${result}.`);

let userAge = 20;
let access = (userAge >= 18) ? "Allowed" : "Denied";
console.log(`Access: ${access}`);

// Nested ternary (use carefully, can hurt readability):
let marks = 75;
let performance = (marks >= 90) ? "Excellent" : (marks >= 60) ? "Good" : "Needs Improvement";
console.log(`Performance: ${performance}`);


console.log("\n=== 6. LOGICAL OPERATORS IN CONDITIONS ===");
// && (AND) - Both conditions must be true
let username = "admin";
let password = "secret";
if (username === "admin" && password === "secret") {
    console.log("Login successful!");
}

// || (OR) - At least one condition must be true
let day = "Saturday";
if (day === "Saturday" || day === "Sunday") {
    console.log("It's the weekend!");
}

// ! (NOT) - Negates/reverses the boolean value
let isLoggedIn = false;
if (!isLoggedIn) {
    console.log("Please log in first.");
}

// Combining operators (use parentheses for clarity)
let age2 = 25;
let hasLicense = true;
if ((age2 >= 18 && age2 <= 65) && hasLicense) {
    console.log("You are eligible to drive.");
}


console.log("\n=== 7. TRUTHY AND FALSY VALUES ===");
// In JavaScript, values are evaluated as true or false in conditions.

// FALSY values (evaluate to false in conditions):
// false, 0, "" (empty string), null, undefined, NaN

// TRUTHY values (evaluate to true in conditions):
// Everything else: true, non-zero numbers, non-empty strings, objects, arrays, etc.

let username2 = "";
if (username2) {
    console.log("Username is set.");
} else {
    console.log("Username is empty (falsy).");
}

let count = 0;
if (count) {
    console.log("Count has a value.");
} else {
    console.log("Count is zero (falsy).");
}

let items = [];
if (items) {
    console.log("Array exists (truthy), even if empty!");
}


console.log("\n=== 8. COMPARISON OPERATORS ===");
// ==   Equal to (loose equality, type coercion happens)
// ===  Strict equal to (value AND type must match) - RECOMMENDED
// !=   Not equal to (loose)
// !==  Strict not equal to - RECOMMENDED
// >    Greater than
// <    Less than
// >=   Greater than or equal to
// <=   Less than or equal to

let a = "5";
let b = 5;
if (a == b) {
    console.log("Loose equality: '5' == 5 is TRUE (types coerced)");
}
if (a === b) {
    console.log("This won't print - strict equality requires same type");
} else {
    console.log("Strict equality: '5' === 5 is FALSE (different types)");
}


console.log("\n=== 9. SHORT-CIRCUIT EVALUATION ===");
// && returns the first falsy value, or the last value if all are truthy
let user = "John";
let greeting = user && `Hello, ${user}!`;
console.log(greeting); // "Hello, John!"

let emptyUser = "";
let greeting2 = emptyUser && `Hello, ${emptyUser}!`;
console.log(greeting2); // "" (empty string, falsy)

// || returns the first truthy value, or the last value if all are falsy
let name = "";
let displayName = name || "Guest";
console.log(`Welcome, ${displayName}!`); // "Welcome, Guest!"

// ?? (Nullish Coalescing) - only null and undefined are considered "missing"
let value = 0;
let result2 = value ?? "default";
console.log(result2); // 0 (0 is not null/undefined, so it's kept)

let missingValue = null;
let result3 = missingValue ?? "default";
console.log(result3); // "default"


console.log("\n=== 10. switch STATEMENT ===");
// An alternative to multiple if...else if statements when checking one variable against many values.
let fruit = "apple";
switch (fruit) {
    case "apple":
        console.log("Apples are red or green.");
        break; // Exits the switch statement
    case "banana":
        console.log("Bananas are yellow.");
        break;
    case "orange":
        console.log("Oranges are orange.");
        break;
    default:
        console.log("Unknown fruit.");
        break;
}

// Multiple cases sharing the same code
let month = 3;
switch (month) {
    case 12:
    case 1:
    case 2:
        console.log("Winter");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Spring");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Summer");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Autumn");
        break;
    default:
        console.log("Invalid month");
}


console.log("\n=== 11. BEST PRACTICES ===");
// 1. Always use strict equality (=== and !==) to avoid unexpected type coercion
// 2. Keep conditions simple and readable
// 3. Avoid deep nesting; use early returns or logical operators instead
// 4. Use ternary operators only for simple, two-path decisions
// 5. Comment complex conditions
// 6. Use meaningful variable names in conditions

// Example of early return (cleaner than nested ifs):
function checkEligibility(age, hasTicket) {
    if (age < 18) return "Too young";
    if (!hasTicket) return "No ticket";
    return "Welcome!";
}
console.log(checkEligibility(20, true));


// ============================================================
// END OF CONDITIONAL STATEMENTS TUTORIAL
// ============================================================
console.log("\n=== All conditional concepts demonstrated! ===");
