// ============================================================
// JavaScript switch STATEMENT — COMPLETE GUIDE
// ============================================================
// The switch statement is used to perform different actions based
// on different conditions. It compares an expression's value against
// multiple possible cases using STRICT EQUALITY (===).


// ------------------------------------------------------------
// 1. BASIC switch SYNTAX
// ------------------------------------------------------------
// switch (expression) {
//     case value1:
//         // code to run if expression === value1
//         break;
//     case value2:
//         // code to run if expression === value2
//         break;
//     default:
//         // code to run if no case matches
// }

let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day number";
}

console.log("Day " + day + " is " + dayName);


// ------------------------------------------------------------
// 2. WHY USE break?
// ------------------------------------------------------------
// The break statement "jumps out" of the switch block.
// WITHOUT break, execution FALLS THROUGH to the next case!

let fruit = "apple";

console.log("\n--- Without break (Fall-Through Demo) ---");
switch (fruit) {
    case "apple":
        console.log("It's an apple.");
        // No break here! Falls through to "banana"
    case "banana":
        console.log("It's a banana.");
        break;
    default:
        console.log("Unknown fruit.");
}
// Output:
// It's an apple.
// It's a banana.


// ------------------------------------------------------------
// 3. MULTIPLE CASES SHARING THE SAME CODE
// ------------------------------------------------------------
// You can group multiple cases together when they need the same logic.
// This is a major advantage of switch over long if-else chains.

let month = 5;
let season;

switch (month) {
    case 12:
    case 1:
    case 2:
        season = "Winter";
        break;
    case 3:
    case 4:
    case 5:
        season = "Spring";
        break;
    case 6:
    case 7:
    case 8:
        season = "Summer";
        break;
    case 9:
    case 10:
    case 11:
        season = "Autumn";
        break;
    default:
        season = "Invalid month";
}

console.log("\nMonth " + month + " is in " + season);


// ------------------------------------------------------------
// 4. STRICT EQUALITY (===) — IMPORTANT!
// ------------------------------------------------------------
// switch uses STRICT equality. "5" (string) does NOT match 5 (number).

let value = "5";

switch (value) {
    case 5:
        console.log("\nMatched number 5");
        break;
    case "5":
        console.log("\nMatched string '5'");  // This runs!
        break;
    default:
        console.log("\nNo match");
}


// ------------------------------------------------------------
// 5. switch WITH STRINGS
// ------------------------------------------------------------
let color = "red";
let message;

switch (color) {
    case "red":
        message = "Stop!";
        break;
    case "yellow":
        message = "Get Ready!";
        break;
    case "green":
        message = "Go!";
        break;
    default:
        message = "Invalid traffic light color";
}

console.log("\nColor: " + color + " -> " + message);


// ------------------------------------------------------------
// 6. switch vs if-else
// ------------------------------------------------------------
// Use switch when:
//   - You are comparing ONE variable against MANY exact values
//   - You have 3+ conditions on the same variable
//   - Code readability matters

// Use if-else when:
//   - Conditions involve ranges (>, <, >=, <=)
//   - Multiple different variables are involved
//   - Complex logical conditions (&&, ||)

// Example: switch is CLEANER here
let grade = "B";

switch (grade) {
    case "A":
        console.log("\nExcellent!");
        break;
    case "B":
        console.log("\nGood job!");  // This runs
        break;
    case "C":
        console.log("\nFair.");
        break;
    case "D":
        console.log("\nNeeds improvement.");
        break;
    case "F":
        console.log("\nFailed.");
        break;
    default:
        console.log("\nInvalid grade.");
}

// Equivalent if-else (more verbose):
// if (grade === "A") { ... }
// else if (grade === "B") { ... }
// else if (grade === "C") { ... }
// ...and so on


// ------------------------------------------------------------
// 7. COMMON MISTAKES & PITFALLS
// ------------------------------------------------------------

// Mistake 1: Forgetting break causes fall-through (sometimes intentional, usually a bug)
let number = 2;
switch (number) {
    case 1:
        console.log("\nOne");
    case 2:
        console.log("Two");     // Runs
    case 3:
        console.log("Three");   // Also runs! (fall-through)
        break;
    default:
        console.log("Other");
}
// Output: Two
//         Three

// Mistake 2: Using expressions that don't evaluate to exact values
// switch (true) is a hack, but not the intended use. Prefer if-else for ranges.
let score = 85;

switch (true) {  // Possible, but NOT recommended
    case score >= 90:
        console.log("\nGrade A");
        break;
    case score >= 80:
        console.log("\nGrade B");  // This runs
        break;
    default:
        console.log("\nOther grade");
}


// ------------------------------------------------------------
// 8. EXPRESSIONS IN case VALUES
// ------------------------------------------------------------
// case values can be expressions, but they are evaluated at compile time conceptually.
let a = 10;
let b = 5;

switch (a - b) {
    case 5:
        console.log("\nResult is 5");  // This runs (10 - 5 = 5)
        break;
    case 10:
        console.log("\nResult is 10");
        break;
    default:
        console.log("\nOther result");
}


// ------------------------------------------------------------
// 9. BEST PRACTICES
// ------------------------------------------------------------
// 1. Always use break unless fall-through is INTENTIONAL (comment why!)
// 2. Always include a default case for safety
// 3. Use switch for discrete value matching; use if-else for ranges
// 4. Keep cases ordered logically (e.g., ascending values, alphabetical)
// 5. Group related cases together for shared logic


// ------------------------------------------------------------
// 10. REAL-WORLD EXAMPLE: Menu Selection
// ------------------------------------------------------------
let choice = 2;

console.log("\n--- Menu ---");
console.log("1. View Profile");
console.log("2. Edit Settings");
console.log("3. Logout");

switch (choice) {
    case 1:
        console.log("\nLoading profile page...");
        break;
    case 2:
        console.log("\nOpening settings...");  // This runs
        break;
    case 3:
        console.log("\nLogging out...");
        break;
    default:
        console.log("\nInvalid choice. Please try again.");
}


// ============================================================
// SUMMARY
// ============================================================
// switch(expression) {
//     case value1: code; break;
//     case value2: code; break;
//     default: code;
// }
//
// Key Points:
// - Uses STRICT equality (===)
// - break stops fall-through
// - default catches unmatched cases
// - Great for many exact value checks on one variable
// ============================================================
