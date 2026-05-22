/**
 * FOR LOOP
 * 
 * Concept: A for loop runs a block of code a specific number of times.
 * It has three parts: initialization, condition, and increment.
 * 
 * Structure:
 * for (initialization; condition; increment) {
 *     // code to execute
 * }
 */

// =====================================================
// REAL WORLD EXAMPLE 1: Baking Cookies
// =====================================================
// Scenario: You need to bake 12 cookies, and you place them on a tray one by one.

console.log("=== Baking Cookies ===");
const totalCookies = 12;

for (let cookie = 1; cookie <= totalCookies; cookie++) {
    console.log(`Placing cookie #${cookie} on the baking tray.`);
}
console.log("All cookies are on the tray! Ready to bake.\n");


// =====================================================
// REAL WORLD EXAMPLE 2: Monthly Budget Check
// =====================================================
// Scenario: You want to track your savings over 6 months.

console.log("=== 6-Month Savings Tracker ===");
let savings = 0;
const monthlySaving = 500;
const months = 6;

for (let month = 1; month <= months; month++) {
    savings += monthlySaving;
    console.log(`Month ${month}: Saved $${monthlySaving}. Total savings: $${savings}`);
}
console.log(`After ${months} months, you have saved $${savings}!\n`);


// =====================================================
// REAL WORLD EXAMPLE 3: Shopping List
// =====================================================
// Scenario: You have a list of items to buy and you check them off one by one.

console.log("=== Shopping List ===");
const shoppingList = ["Milk", "Eggs", "Bread", "Butter", "Cheese"];

for (let i = 0; i < shoppingList.length; i++) {
    console.log(`Item ${i + 1}: ${shoppingList[i]} - Added to cart.`);
}
console.log("All items collected! Proceeding to checkout.\n");


// =====================================================
// REAL WORLD EXAMPLE 4: Gym Workout Sets
// =====================================================
// Scenario: You are doing 3 sets of 10 push-ups.

console.log("=== Gym Workout: Push-ups ===");
const sets = 3;
const repsPerSet = 10;

for (let currentSet = 1; currentSet <= sets; currentSet++) {
    console.log(`Starting Set ${currentSet}:`);
    for (let rep = 1; rep <= repsPerSet; rep++) {
        console.log(`  Push-up ${rep}`);
    }
    console.log(`Set ${currentSet} completed! Take a break.\n`);
}
console.log("Workout complete! Great job!\n");


// =====================================================
// KEY POINTS
// =====================================================
// 1. Best used when you KNOW how many times to repeat.
// 2. All three parts (init, condition, increment) are in one line.
// 3. The loop stops when the condition becomes false.
// 4. Be careful with the condition to avoid infinite loops!
