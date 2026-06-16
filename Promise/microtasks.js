// ========================================
// Promise Microtasks & The Event Loop
// ========================================

// Promises use the microtask queue (not the macrotask queue).
// Microtasks run BEFORE the next macrotask (setTimeout, setInterval).

console.log("1. Synchronous");

setTimeout(() => console.log("2. setTimeout (macrotask)"), 0);

Promise.resolve().then(() => console.log("3. Promise.then (microtask)"));

Promise.resolve().then(() => {
  console.log("4. Microtask 1");
  // Microtasks can queue more microtasks
  Promise.resolve().then(() => console.log("5. Microtask 1.1"));
});

setTimeout(() => console.log("6. setTimeout 2 (macrotask)"), 0);

console.log("7. Synchronous end");

// Output order:
//   1. Synchronous
//   7. Synchronous end
//   3. Promise.then (microtask)
//   4. Microtask 1
//   5. Microtask 1.1
//   2. setTimeout (macrotask)
//   6. setTimeout 2 (macrotask)

// --- Event Loop Order ---
// 1. Run all synchronous code (call stack)
// 2. Run all microtasks (Promise.then/catch/finally, queueMicrotask, MutationObserver)
// 3. Run one macrotask (setTimeout, setInterval, I/O, UI rendering)
// 4. Repeat (step 2 -> step 3)

// --- Microtask starvation ---
// Microtasks can starve macrotasks if they keep adding more microtasks

function starveLoop() {
  Promise.resolve().then(() => {
    console.log("Microtask");
    starveLoop(); // queues another microtask
  });
}

// setTimeout(() => console.log("Will this ever run?"), 0);
// starveLoop(); // Uncomment with caution: the setTimeout never runs!

// --- queueMicrotask() API ---

queueMicrotask(() => {
  console.log("queueMicrotask callback runs as microtask");
});

// --- Async/await and microtasks ---
// await always queues a microtask for the continuation

async function microtaskDemo() {
  console.log("A: inside async (sync part)");
  await Promise.resolve();
  console.log("B: after await (microtask)");
}

microtaskDemo();
console.log("C: outside async");
// Output: A, C, B
