// ============================================================
// CONDITIONAL STATEMENTS — EXERCISES
// ============================================================
// Instructions:
// 1. Read each exercise comment carefully.
// 2. Write your solution below the comment.
// 3. Run this file with: node basics/exercise.js
// ============================================================

// ------------------------------------------------------------
// QUESTION 1: Even or Odd
// ------------------------------------------------------------
// Problem: Take a number and print whether it's even or odd.
let number = 7;

if (number % 2 === 0) {
    console.log("The number " + number + " is Even.");
} else {
    console.log("The number " + number + " is Odd.");
}

// ------------------------------------------------------------
// QUESTION 2: Student Grade Calculator
// ------------------------------------------------------------
// Problem: Take marks (0–100) and print the grade based on these rules:
// - 90 and above → A
// - 80–89 → B
// - 70–79 → C
// - 60–69 → D
// - Below 60 → Fail
let marks = 85;

if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 80) {
    console.log("Grade: B");
} else if (marks >= 70) {
    console.log("Grade: C");
} else if (marks >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: Fail");
}

// ------------------------------------------------------------
// QUESTION 3: Leap Year Check
// ------------------------------------------------------------
// Problem: Take a year and check if it's a leap year.
// Rules:
//   Divisible by 4 AND not divisible by 100 → Leap year
//   OR divisible by 400 → Leap year
//   Else → Not a leap year
let checkYear = 2024;

if ((checkYear % 4 === 0 && checkYear % 100 !== 0) || (checkYear % 400 === 0)) {
    console.log(checkYear + " is a leap year.");
} else {
    console.log(checkYear + " is not a leap year.");
}

// ------------------------------------------------------------
// EXERCISE 1: Basic if Statement
// ------------------------------------------------------------
// Write an if statement that checks if a number is positive.
// If it is, log "The number is positive."
let number1 = 7;

// Your code here:


// ------------------------------------------------------------
// EXERCISE 2: if...else Statement
// ------------------------------------------------------------
// Check if a person is eligible to vote (age >= 18).
// Log "Eligible to vote" or "Not eligible to vote".
let personAge = 16;

// Your code here:


// ------------------------------------------------------------
// EXERCISE 3: if...else if...else Statement
// ------------------------------------------------------------
// Based on the time of day (24-hour format), log the greeting:
// 0 - 11  -> "Good morning"
// 12 - 17 -> "Good afternoon"
// 18 - 23 -> "Good evening"
let time = 14;

// Your code here:


// ------------------------------------------------------------
// EXERCISE 4: Grade Calculator
// ------------------------------------------------------------
// Given a score (0-100), determine the grade:
// 90-100 -> A
// 80-89  -> B
// 70-79  -> C
// 60-69  -> D
// Below 60 -> F
let examScore = 85;

// Your code here:


// ------------------------------------------------------------
// EXERCISE 5: Nested if Statements
// ------------------------------------------------------------
// Check if a user is logged in AND has admin privileges.
// If both are true, log "Admin access granted."
// If logged in but not admin, log "User access only."
// If not logged in, log "Please log in first."
let isLoggedIn = true;
let isAdmin = false;

// Your code here:


// ------------------------------------------------------------
// EXERCISE 6: Ternary Operator
// ------------------------------------------------------------
// Use the ternary operator to assign "Pass" or "Fail" to a variable
// based on whether the score is >= 50.
let testScore = 45;
let result;

// Your code here:
// console.log(result);


// ------------------------------------------------------------
// EXERCISE 7: Logical Operators
// ------------------------------------------------------------
// A club allows entry if the person is over 18 AND has a membership card,
// OR if the person is a VIP.
// Determine if the person can enter and log the result.
let age = 20;
let hasMembership = false;
let isVIP = true;

// Your code here:


// ------------------------------------------------------------
// EXERCISE 8: Truthy and Falsy
// ------------------------------------------------------------
// Without running the code, predict what will be logged.
// Then test your prediction by uncommenting the code below.

// let username = "";
// if (username) {
//     console.log("Truthy");
// } else {
//     console.log("Falsy");
// }

// let count = 0;
// if (count) {
//     console.log("Truthy");
// } else {
//     console.log("Falsy");
// }

// let items = [];
// if (items) {
//     console.log("Truthy");
// } else {
//     console.log("Falsy");
// }


// ------------------------------------------------------------
// EXERCISE 9: switch Statement
// ------------------------------------------------------------
// Use a switch statement to log the name of the day based on a number (1-7).
// 1 = Monday, 7 = Sunday. If the number is invalid, log "Invalid day".
let dayNumber = 3;

// Your code here:


// ------------------------------------------------------------
// EXERCISE 10: Real-World Scenario
// ------------------------------------------------------------
// ATM Cash Withdrawal Logic:
// - If the withdrawal amount is a multiple of 10, proceed.
// - If the balance is sufficient, deduct the amount and log the new balance.
// - If not, log "Insufficient balance".
// - If the amount is not a multiple of 10, log "Enter amount in multiples of 10".
let balance = 500;
let withdrawalAmount = 130;

// Your code here:


// ------------------------------------------------------------
// EXERCISE 11: Leap Year Checker
// ------------------------------------------------------------
// A year is a leap year if:
// - It is divisible by 4, BUT
// - If it is divisible by 100, it must also be divisible by 400.
// Log whether the given year is a leap year or not.
let year = 2024;

// Your code here:


// ------------------------------------------------------------
// EXERCISE 12: Simple Calculator
// ------------------------------------------------------------
// Given two numbers and an operator (+, -, *, /), perform the operation.
// If the operator is invalid, log "Invalid operator".
// If dividing by zero, log "Cannot divide by zero".
let num1 = 10;
let num2 = 0;
let operator = "/";

// Your code here:


// ============================================================
// BONUS CHALLENGE
// ============================================================
// Write a program that checks if a given string is a palindrome.
// A palindrome reads the same forwards and backwards (e.g., "radar", "level").
// Ignore case differences.
// Hint: Use string methods like .toLowerCase() and .split().reverse().join()
let word = "Radar";

// Your code here:
