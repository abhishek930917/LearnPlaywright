/**
 * DO...WHILE LOOP
 * 
 * Concept: A do...while loop runs a block of code, then checks the condition.
 * It ALWAYS runs at least ONCE because the condition is checked AFTER.
 * 
 * Structure:
 * do {
 *     // code to execute
 * } while (condition);
 */

// =====================================================
// REAL WORLD EXAMPLE 1: Restaurant Menu
// =====================================================
// Scenario: A waiter shows you the menu at least once, 
// then asks if you want to see it again.

console.log("=== Restaurant Menu ===");
let seeMenuAgain = false;
let timesShown = 0;
const customerResponses = [true, false]; // Simulated responses

// The customer MUST see the menu at least once!
do {
    timesShown++;
    console.log(`Showing menu (Time ${timesShown})...`);
    console.log("  - Appetizers: Salad, Soup");
    console.log("  - Main Course: Steak, Pasta, Burger");
    console.log("  - Dessert: Ice Cream, Cake");
    
    // Simulate asking if they want to see it again
    if (timesShown < customerResponses.length + 1) {
        seeMenuAgain = customerResponses[timesShown - 1];
    } else {
        seeMenuAgain = false;
    }
    
    if (seeMenuAgain) {
        console.log("Customer wants to see the menu again.\n");
    }
} while (seeMenuAgain);

console.log("Customer is ready to order!\n");


// =====================================================
// REAL WORLD EXAMPLE 2: ATM Withdrawal
// =====================================================
// Scenario: You try to withdraw money. Even if your balance is low,
// the ATM processes your request once before telling you it's declined.

console.log("=== ATM Withdrawal ===");
let accountBalance = 30;
let withdrawalAmount = 50;
let transactionAttempted = 0;

// The ATM always processes the request at least once
do {
    transactionAttempted++;
    console.log(`Attempt ${transactionAttempted}: Requesting $${withdrawalAmount}`);
    
    if (accountBalance >= withdrawalAmount) {
        accountBalance -= withdrawalAmount;
        console.log(`Success! Withdrawn $${withdrawalAmount}. Remaining balance: $${accountBalance}`);
    } else {
        console.log(`Declined! Insufficient funds. Current balance: $${accountBalance}`);
        
        // User decides to try a smaller amount
        withdrawalAmount = 20;
        console.log(`Trying again with $${withdrawalAmount}...`);
    }
} while (accountBalance < withdrawalAmount && transactionAttempted < 3);

if (accountBalance >= withdrawalAmount && transactionAttempted > 1) {
    accountBalance -= withdrawalAmount;
    console.log(`Success on retry! Withdrawn $${withdrawalAmount}. Remaining: $${accountBalance}\n`);
} else {
    console.log("Transaction failed after attempts.\n");
}


// =====================================================
// REAL WORLD EXAMPLE 3: Kids' Homework
// =====================================================
// Scenario: A parent asks a child if they have homework.
// The child starts doing it first, then checks if there's more.

console.log("=== Kids' Homework ===");
let homeworkDone = false;
let subjectsCompleted = 0;
const totalSubjects = 3;

// The child sits down and starts working at least once
do {
    subjectsCompleted++;
    console.log(`Completed homework for Subject ${subjectsCompleted}.`);
    
    if (subjectsCompleted >= totalSubjects) {
        homeworkDone = true;
        console.log("All homework done!");
    } else {
        console.log("Checking if there's more homework... Yes, there is!");
    }
} while (!homeworkDone);

console.log("Great job! You can go play now.\n");


// =====================================================
// REAL WORLD EXAMPLE 4: Survey Participation
// =====================================================
// Scenario: You participate in a survey. You answer at least one question,
// then the system asks if you want to continue.

console.log("=== Customer Satisfaction Survey ===");
let continueSurvey = false;
let questionNumber = 0;
const responses = ["Good", "Excellent"];

// You answer the first question no matter what
do {
    console.log(`\n--- Question ${questionNumber + 1} ---`);
    console.log("How would you rate our service?");
    
    if (questionNumber < responses.length) {
        console.log(`Your answer: ${responses[questionNumber]}`);
    }
    
    questionNumber++;
    
    // Decide whether to show another question
    if (questionNumber < 3) {
        continueSurvey = true;
        console.log("Thank you! Next question...");
    } else {
        continueSurvey = false;
        console.log("That was the last question!");
    }
    
} while (continueSurvey);

console.log(`\nSurvey complete! You answered ${questionNumber} questions. Thank you for your feedback!\n`);


// =====================================================
// COMPARISON: WHEN TO USE WHAT?
// =====================================================
// FOR Loop:     When you know exactly how many times (e.g., 10 push-ups)
// WHILE Loop:   When you don't know, but might not need to run at all (e.g., waiting for a bus)
// DO...WHILE:   When you don't know, but MUST run at least once (e.g., showing a menu)
// =====================================================


// =====================================================
// KEY POINTS
// =====================================================
// 1. Best used when the code MUST run at least ONE TIME.
// 2. The condition is checked AFTER the loop runs.
// 3. Even if the condition is false from the start, the code runs once.
// 4. Remember the semicolon after while(condition)!
