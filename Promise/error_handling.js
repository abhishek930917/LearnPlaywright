// ========================================
// Promise Error Handling
// ========================================

// --- .catch() catches errors from anywhere in the chain ---

Promise.resolve(1)
  .then((x) => {
    throw new Error("Something broke");
  })
  .then((x) => console.log("This won't run"))
  .catch((err) => console.error("Caught:", err.message));

// --- .catch() also catches rejected promises ---

Promise.reject(new Error("Rejected"))
  .catch((err) => console.error("Caught rejection:", err.message));

// --- Error recovery in .catch() ---
// You can return a fallback value from catch to continue the chain

Promise.reject(new Error("Not found"))
  .catch((err) => {
    console.error("Error:", err.message);
    return "Default value";
  })
  .then((value) => console.log("Recovered with:", value));

// --- Unhandled rejections ---
// If no .catch() is attached, Node.js emits 'unhandledRejection'

const unhandled = Promise.reject(new Error("Nobody catches me!"));
// Node.js: "UnhandledPromiseRejectionWarning"
// Browser: "Uncaught (in promise) Error"

// Always handle rejections!

// --- Multiple .catch() ---
// Only the first .catch() in the chain handles the error

Promise.reject(new Error("Error 1"))
  .catch((err) => {
    console.error("First catch:", err.message);
    // If you throw here, next catch handles it
    throw new Error("Error 2 from catch");
  })
  .catch((err) => console.error("Second catch:", err.message));

// --- .finally() does NOT receive the error ---

function cleanup() {
  console.log("Cleanup resources");
}

Promise.reject(new Error("Boom"))
  .catch((err) => console.error("Caught:", err.message))
  .finally(cleanup);

// --- Error in async/await ---

async function example() {
  try {
    await Promise.reject(new Error("Async error"));
  } catch (err) {
    console.error("Caught in async:", err.message);
  }
}

example();

// --- Global error handlers ---

// Node.js
if (typeof process !== "undefined") {
  process.on("unhandledRejection", (reason, promise) => {
    console.error("Unhandled Rejection at:", promise, "reason:", reason);
  });

  process.on("rejectionHandled", (promise) => {
    console.log("A rejection was handled late for:", promise);
  });
}

// Browser
// window.addEventListener("unhandledrejection", (event) => {
//   console.error("Unhandled rejection:", event.reason);
//   event.preventDefault();
// });
