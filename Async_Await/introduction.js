// ========================================
// Async/Await Introduction
// ========================================

// async/await is syntactic sugar over Promises.
// It makes asynchronous code look and behave like synchronous code.

// --- async function ---
// An async function ALWAYS returns a Promise.

async function greet() {
  return "Hello"; // automatically wrapped in Promise.resolve("Hello")
}

const result = greet();
console.log(result); // Promise { 'Hello' }

// Consume it with .then()
greet().then((value) => console.log("Resolved:", value));

// Or with await
greet().then(async (value) => {
  console.log("Awaited:", value);
});

// --- await keyword ---
// await pauses execution until a Promise resolves.
// Can ONLY be used inside an async function (or in top-level await in ES modules).

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function sayHi() {
  console.log("1. Starting...");
  await delay(1000); // pauses here for 1 second
  console.log("2. After 1 second");
  await delay(500);  // pauses for 0.5 seconds
  console.log("3. After 1.5 seconds total");
}

sayHi();

// --- async function expression ---

const fetchData = async function () {
  await delay(100);
  return { id: 1, name: "Alice" };
};

fetchData().then((data) => console.log("Data:", data));

// --- async arrow function ---

const getTime = async () => {
  await delay(200);
  return new Date().toISOString();
};

getTime().then((time) => console.log("Time:", time));

// --- Multiple awaits (sequential by default) ---

async function sequential() {
  const start = Date.now();
  
  const a = await delay(1000);
  const b = await delay(1000);
  const c = await delay(1000);
  
  const elapsed = Date.now() - start;
  console.log(`Sequential: ${elapsed}ms (expected ~3000ms)`);
}

// --- What happens without await? ---
// Without await, the Promise starts but we don't wait for it.

async function noAwait() {
  console.log("1. Starting promises");
  
  // These all start immediately (parallel)
  const p1 = delay(1000).then(() => console.log("2. p1 done"));
  const p2 = delay(500).then(() => console.log("3. p2 done"));
  const p3 = delay(200).then(() => console.log("4. p3 done"));
  
  console.log("5. All promises started (not awaited yet)");
  
  // Now wait for all to finish
  await Promise.all([p1, p2, p3]);
  console.log("6. All finished");
}

// Run sequentially first, then noAwait
sequential().then(() => noAwait());
