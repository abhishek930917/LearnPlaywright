/**
 * WHILE LOOP
 * 
 * Concept: A while loop runs as long as a condition is true.
 * It checks the condition BEFORE running the code.
 * 
 * Structure:
 * while (condition) {
 *     // code to execute
 * }
 */

// =====================================================
// REAL WORLD EXAMPLE 1: Waiting for Water to Boil
// =====================================================
// Scenario: You put water on the stove. You keep checking until it boils.

console.log("=== Making Tea: Waiting for Water to Boil ===");
let waterTemperature = 20; // Room temperature in Celsius
const boilingPoint = 100;

while (waterTemperature < boilingPoint) {
    waterTemperature += 15; // Temperature rises
    console.log(`Water is at ${waterTemperature}°C... Not boiling yet.`);
}
console.log("Water is boiling! You can now make tea.\n");


// =====================================================
// REAL WORLD EXAMPLE 2: Password Attempt
// =====================================================
// Scenario: You try to log in but forgot your password. You get 3 attempts.

console.log("=== Phone Unlock Attempt ===");
const correctPassword = "1234";
let attempts = 0;
const maxAttempts = 3;
let enteredPassword = "";
const passwordsTried = ["1111", "1234"]; // Simulating user input

while (enteredPassword !== correctPassword && attempts < maxAttempts) {
    enteredPassword = passwordsTried[attempts]; // Simulating user typing
    attempts++;
    
    if (enteredPassword === correctPassword) {
        console.log(`Attempt ${attempts}: Password correct! Phone unlocked.`);
    } else {
        console.log(`Attempt ${attempts}: Incorrect password. ${maxAttempts - attempts} tries remaining.`);
    }
}

if (enteredPassword !== correctPassword) {
    console.log("Phone locked! Too many failed attempts.\n");
} else {
    console.log("Welcome!\n");
}


// =====================================================
// REAL WORLD EXAMPLE 3: Downloading a File
// =====================================================
// Scenario: You are downloading a file and wait until it reaches 100%.

console.log("=== Downloading File ===");
let downloadProgress = 0;

while (downloadProgress < 100) {
    downloadProgress += Math.floor(Math.random() * 25) + 5; // Random progress increase
    if (downloadProgress > 100) downloadProgress = 100;
    console.log(`Download progress: ${downloadProgress}%`);
}
console.log("Download complete! File ready to use.\n");


// =====================================================
// REAL WORLD EXAMPLE 4: Filling a Bucket
// =====================================================
// Scenario: You fill a bucket with water until it is full.

console.log("=== Filling a Bucket ===");
let currentLiters = 0;
const bucketCapacity = 10;
const cupSize = 2;

while (currentLiters < bucketCapacity) {
    currentLiters += cupSize;
    const remaining = bucketCapacity - currentLiters;
    
    if (currentLiters <= bucketCapacity) {
        console.log(`Added ${cupSize} liters. Bucket now has ${currentLiters} liters.`);
    } else {
        console.log(`Added water. Bucket is overflowing!`);
    }
}
console.log("Bucket is full!\n");


// =====================================================
// KEY POINTS
// =====================================================
// 1. Best used when you DON'T know exactly how many times to repeat.
// 2. The condition is checked BEFORE the loop runs.
// 3. If the condition is false from the start, the loop NEVER runs.
// 4. Make sure the condition will eventually become false to avoid infinite loops!
