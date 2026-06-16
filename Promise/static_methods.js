// ========================================
// Promise Static Methods
// ========================================

const p1 = new Promise((resolve) => setTimeout(() => resolve("p1 done"), 1000));
const p2 = new Promise((resolve) => setTimeout(() => resolve("p2 done"), 500));
const p3 = new Promise((resolve) => setTimeout(() => resolve("p3 done"), 800));

const fail = new Promise((_, reject) =>
  setTimeout(() => reject(new Error("p failed")), 600)
);

// --- Promise.all ---
// Resolves when ALL promises resolve. Rejects if ANY rejects.
// Returns array of results in input order.

console.log("--- Promise.all ---");

Promise.all([p1, p2, p3])
  .then((results) => console.log("All resolved:", results))
  .catch((err) => console.error("All rejected:", err.message));

Promise.all([p1, fail, p3])
  .then((results) => console.log("All:", results))
  .catch((err) => console.error("All rejected:", err.message));

// --- Promise.allSettled ---
// Resolves when ALL promises settle (resolve or reject).
// Never rejects. Returns array of { status, value/reason }.

console.log("\n--- Promise.allSettled ---");

Promise.allSettled([p1, fail, p3]).then((results) => {
  results.forEach((r) => {
    if (r.status === "fulfilled") {
      console.log("Fulfilled:", r.value);
    } else {
      console.log("Rejected:", r.reason.message);
    }
  });
});

// --- Promise.race ---
// Settles when the FIRST promise settles (resolve or reject).

console.log("\n--- Promise.race ---");

Promise.race([p1, p2, p3])
  .then((value) => console.log("Race winner:", value))
  .catch((err) => console.error("Race error:", err.message));

// Timeout pattern with race
function withTimeout(promise, ms) {
  const timeout = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Timed out")), ms)
  );
  return Promise.race([promise, timeout]);
}

const slow = new Promise((resolve) => setTimeout(() => resolve("Slow data"), 2000));

withTimeout(slow, 1000)
  .then(console.log)
  .catch((err) => console.error("Timeout:", err.message));

// --- Promise.any ---
// Resolves when the FIRST promise FULFILLS.
// Rejects only if ALL promises reject (AggregateError).

console.log("\n--- Promise.any ---");

const f1 = new Promise((_, reject) => setTimeout(() => reject("fail 1"), 200));
const f2 = new Promise((_, reject) => setTimeout(() => reject("fail 2"), 300));

Promise.any([p2, f1, f2])
  .then((value) => console.log("Any resolved:", value))
  .catch((err) => console.error("Any errors:", err.errors));

Promise.any([f1, f2])
  .then((value) => console.log("Any resolved:", value))
  .catch((err) => console.error("Any errors:", err.errors));

// --- Promise.resolve / Promise.reject ---
// Create already-resolved or already-rejected promises.

const resolved = Promise.resolve(42);
resolved.then(console.log);

const rejected = Promise.reject(new Error("Boom"));
rejected.catch((err) => console.error(err.message));
