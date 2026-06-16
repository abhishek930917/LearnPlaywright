// ========================================
// Synchronous vs Asynchronous Callbacks
// ========================================

// --- Synchronous Callback ---
// Executes immediately, blocks execution

function syncCallback() {
  console.log("2. Inside sync callback");
}

console.log("1. Before sync callback");
syncCallback();
console.log("3. After sync callback");
// Output: 1, 2, 3 (in order)

// --- Asynchronous Callback ---
// Executes later, non-blocking

console.log("\n--- Async ---");
console.log("1. Before setTimeout");

setTimeout(function () {
  console.log("2. Inside setTimeout callback (after 1s)");
}, 1000);

console.log("3. After setTimeout");
// Output: 1, 3, then after 1 second -> 2

// --- Real-world async example ---
console.log("\n--- Simulating file read ---");

function readFileAsync(filename, callback) {
  console.log(`Starting to read ${filename}...`);
  setTimeout(() => {
    const content = `Contents of ${filename}`;
    callback(null, content);
  }, 500);
  console.log("Read initiated, continuing...");
}

console.log("1. Requesting file");
readFileAsync("data.txt", (err, data) => {
  if (err) {
    console.error("Error:", err);
    return;
  }
  console.log("4. File data:", data);
});
console.log("2. Doing other work...");
console.log("3. This runs before the callback!");
