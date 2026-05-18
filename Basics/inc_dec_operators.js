// INCREMENT (++) AND DECREMENT (--) OPERATORS IN JAVASCRIPT
// ===========================================================
//
// These operators add or subtract 1 from a variable.
// They ONLY work on variables (not on literal values like 5++).
//
// Two forms for each:
//   PREFIX  (++x, --x)  -> Change FIRST, then use the value
//   POSTFIX (x++, x--)  -> Use the value FIRST, then change


// ============================================
// EXAMPLE 1: BASIC INCREMENT
// ============================================

let score = 10;
console.log("Starting score:", score);

score++;   // Postfix increment: adds 1 AFTER using the value
console.log("After score++:", score);   // 11

++score;   // Prefix increment: adds 1 BEFORE using the value
console.log("After ++score:", score);   // 12


// ============================================
// EXAMPLE 2: POSTFIX vs PREFIX (THE BIG DIFFERENCE)
// ============================================

let a = 5;
let b = 5;

// POSTFIX (x++): Use the value FIRST, then increment
let resultA = a++;   // resultA gets 5, then a becomes 6
console.log("\n=== POSTFIX (x++) ===");
console.log("resultA =", resultA);   // 5
console.log("a =", a);               // 6

// PREFIX (++x): Increment FIRST, then use the new value
let resultB = ++b;   // b becomes 6 first, then resultB gets 6
console.log("\n=== PREFIX (++x) ===");
console.log("resultB =", resultB);   // 6
console.log("b =", b);               // 6


// ============================================
// EXAMPLE 3: BASIC DECREMENT
// ============================================

let lives = 3;
console.log("\nStarting lives:", lives);

lives--;   // Postfix: uses value first, then subtracts 1
console.log("After lives--:", lives);   // 2

--lives;   // Prefix: subtracts 1 first, then uses value
console.log("After --lives:", lives);   // 1


// ============================================
// EXAMPLE 4: DECREMENT - POSTFIX vs PREFIX
// ============================================

let x = 10;
let y = 10;

let resultX = x--;   // resultX gets 10, then x becomes 9
console.log("\n=== POSTFIX (x--) ===");
console.log("resultX =", resultX);   // 10
console.log("x =", x);               // 9

let resultY = --y;   // y becomes 9 first, then resultY gets 9
console.log("\n=== PREFIX (--x) ===");
console.log("resultY =", resultY);   // 9
console.log("y =", y);               // 9


// ============================================
// EXAMPLE 5: IN A LOOP (Most Common Use)
// ============================================
// Postfix and prefix work the same in a standalone statement!

console.log("\n=== Loop with i++ ===");
for (let i = 1; i <= 3; i++) {
    console.log("i =", i);
}
// Output: 1, 2, 3

console.log("\n=== Loop with ++i ===");
for (let j = 1; j <= 3; ++j) {
    console.log("j =", j);
}
// Output: 1, 2, 3 (SAME!)

// WHY? Because the increment part of a for-loop is a standalone statement.
// The value is not being assigned or used in the same expression.


// ============================================
// EXAMPLE 6: IN EXPRESSIONS (Where it Matters!)
// ============================================

let m = 5;
let n = 5;

// Used inside an expression - POSTFIX
let sum1 = m++ + 10;   // m (5) + 10 = 15, then m becomes 6
console.log("\nm++ + 10 =", sum1);    // 15
console.log("m after =", m);           // 6

// Used inside an expression - PREFIX
let sum2 = ++n + 10;   // n becomes 6 first, then 6 + 10 = 16
console.log("++n + 10 =", sum2);      // 16
console.log("n after =", n);           // 6


// ============================================
// EXAMPLE 7: MULTIPLE IN SAME EXPRESSION (TRICKY!)
// ============================================
// WARNING: This is confusing and bad practice!

let p = 5;
let q = 5;

// Do NOT write code like this in real projects!
let tricky = p++ + ++p;   // p++ gives 5 (p becomes 6), ++p makes p 7, gives 7
                          // Result: 5 + 7 = 12, p is now 7
console.log("\np++ + ++p =", tricky);   // 12 (but confusing!)
console.log("p final =", p);             // 7

let tricky2 = ++q + q++;  // ++q makes q 6 (gives 6), q++ gives 6 (q becomes 7)
                           // Result: 6 + 6 = 12
console.log("++q + q++ =", tricky2);     // 12
console.log("q final =", q);             // 7

// RULE: Never use ++ or -- more than once on the same variable in a single expression.


// ============================================
// EXAMPLE 8: REAL-LIFE - GAME SCORE
// ============================================

let playerScore = 100;
let combo = 0;

function hitTarget() {
    combo++;                           // Increase combo count
    let points = 10 * combo;           // More combo = more points
    playerScore += points;             // Add to total score
    return points;
}

console.log("\n=== GAME SCORE ===");
console.log("Hit 1: +", hitTarget(), "points. Score:", playerScore, "Combo:", combo);
console.log("Hit 2: +", hitTarget(), "points. Score:", playerScore, "Combo:", combo);
console.log("Hit 3: +", hitTarget(), "points. Score:", playerScore, "Combo:", combo);


// ============================================
// EXAMPLE 9: REAL-LIFE - SHOPPING CART ITEM COUNT
// ============================================

let cartCount = 0;

function addToCart() {
    cartCount++;
    return cartCount;
}

function removeFromCart() {
    if (cartCount > 0) {
        cartCount--;
    }
    return cartCount;
}

console.log("\n=== SHOPPING CART ===");
console.log("Add item:", addToCart());       // 1
console.log("Add item:", addToCart());       // 2
console.log("Add item:", addToCart());       // 3
console.log("Remove item:", removeFromCart()); // 2
console.log("Cart total:", cartCount);       // 2


// ============================================
// EXAMPLE 10: REAL-LIFE - PAGINATION
// ============================================

let currentPage = 1;
const totalPages = 5;

function nextPage() {
    // Prefix: increment first, then return the new page
    return currentPage < totalPages ? ++currentPage : currentPage;
}

function previousPage() {
    // Prefix: decrement first, then return the new page
    return currentPage > 1 ? --currentPage : currentPage;
}

console.log("\n=== PAGINATION ===");
console.log("Current page:", currentPage);     // 1
console.log("Next page:", nextPage());          // 2
console.log("Next page:", nextPage());          // 3
console.log("Previous page:", previousPage());  // 2
console.log("Previous page:", previousPage());  // 1
console.log("Previous page (at start):", previousPage()); // 1 (stays at 1)


// ============================================
// EXAMPLE 11: REAL-LIFE - API RETRY COUNTER
// ============================================

let retryCount = 0;
const maxRetries = 3;

function attemptApiCall() {
    retryCount++;
    console.log(`\nAttempt ${retryCount} of ${maxRetries}`);

    // Simulate failure for first 2 attempts
    if (retryCount < 3) {
        console.log("Failed! Will retry...");
        return false;
    }

    console.log("Success!");
    return true;
}

console.log("\n=== API RETRY ===");
while (retryCount < maxRetries) {
    if (attemptApiCall()) break;
}


// ============================================
// EXAMPLE 12: REAL-LIFE - ARRAY INDEXING
// ============================================

let index = -1;
const colors = ["red", "green", "blue", "yellow"];

function getNextColor() {
    index++;   // Move to next index
    if (index >= colors.length) {
        index = 0;   // Wrap around to start
    }
    return colors[index];
}

console.log("\n=== ARRAY CYCLING ===");
console.log(getNextColor());   // red (index becomes 0)
console.log(getNextColor());   // green (index becomes 1)
console.log(getNextColor());   // blue (index becomes 2)
console.log(getNextColor());   // yellow (index becomes 3)
console.log(getNextColor());   // red (wraps to 0)


// ============================================
// KEY TAKEAWAYS
// ============================================
//
// 1. x++ (postfix): Returns the value FIRST, then adds 1
// 2. ++x (prefix):  Adds 1 FIRST, then returns the new value
// 3. x-- (postfix): Returns the value FIRST, then subtracts 1
// 4. --x (prefix):  Subtracts 1 FIRST, then returns the new value
// 5. In standalone statements, ++x and x++ do the same thing
// 6. In expressions/assignments, the difference matters!
// 7. NEVER use ++ or -- multiple times on the same variable in one expression
// 8. These operators only work on variables, not on values like (5++)

console.log("\n=== End of Increment/Decrement Examples ===");
