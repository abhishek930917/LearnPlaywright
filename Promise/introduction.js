// ========================================
// Promise Introduction - States & Creation
// ========================================

// A Promise represents a value that may be available now, later, or never.
// States: pending -> fulfilled OR pending -> rejected

// --- Creating a Promise ---

const promise = new Promise((resolve, reject) => {
  // executor function runs immediately
  const success = true;

  if (success) {
    resolve("Operation succeeded");
  } else {
    reject(new Error("Operation failed"));
  }
});

// Consuming a Promise
promise
  .then((value) => console.log("Fulfilled:", value))
  .catch((error) => console.error("Rejected:", error.message))
  .finally(() => console.log("Promise settled (always runs)"));

// --- Async Promise Example ---

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function fetchUser(id) {
  return new Promise((resolve, reject) => {
    console.log(`Fetching user ${id}...`);
    setTimeout(() => {
      if (id <= 0) {
        reject(new Error("Invalid user ID"));
      } else {
        resolve({ id, name: "Alice", email: "alice@example.com" });
      }
    }, 1000);
  });
}

fetchUser(1)
  .then((user) => console.log("User:", user))
  .catch((err) => console.error(err.message));

fetchUser(-1)
  .then((user) => console.log("User:", user))
  .catch((err) => console.error("Error caught:", err.message));

// --- Promise is Eager (not lazy) ---
// The executor runs immediately when the Promise is created

const eagerPromise = new Promise((resolve) => {
  console.log("Executor runs NOW");
  resolve("Done");
});
console.log("After promise creation");
// Output: "Executor runs NOW" then "After promise creation"
