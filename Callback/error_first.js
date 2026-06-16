// ========================================
// Error-First Callback Pattern (Node.js)
// ========================================

// Convention: callback(err, result)
// First argument is an error (null if success)
// Second argument is the result

const fs = require("fs");

// Example with fs.readFile
fs.readFile("nonexistent.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err.message);
    return;
  }
  console.log("File content:", data);
});

// Custom error-first function
function divide(a, b, callback) {
  if (typeof a !== "number" || typeof b !== "number") {
    callback(new TypeError("Both arguments must be numbers"));
    return;
  }
  if (b === 0) {
    callback(new Error("Division by zero"));
    return;
  }
  callback(null, a / b);
}

// Usage
divide(10, 2, (err, result) => {
  if (err) {
    console.error("Error:", err.message);
    return;
  }
  console.log("Result:", result);
});

divide(10, 0, (err, result) => {
  if (err) {
    console.error("Error:", err.message);
    return;
  }
  console.log("Result:", result);
});

// Chaining with error-first callbacks (still callback hell)
function readConfig(path, callback) {
  // Simulate reading config
  setTimeout(() => {
    if (!path) {
      callback(new Error("Path is required"));
      return;
    }
    callback(null, { db: "mongo", port: 3000 });
  }, 100);
}

function connectDB(config, callback) {
  setTimeout(() => {
    if (!config.db) {
      callback(new Error("No database specified"));
      return;
    }
    callback(null, { connected: true, db: config.db });
  }, 100);
}

function startServer(dbStatus, callback) {
  setTimeout(() => {
    if (!dbStatus.connected) {
      callback(new Error("Database not connected"));
      return;
    }
    callback(null, { server: "running", port: 3000 });
  }, 100);
}

// Chained callbacks
readConfig("/etc/config.json", (err, config) => {
  if (err) return console.error(err.message);
  connectDB(config, (err, dbStatus) => {
    if (err) return console.error(err.message);
    startServer(dbStatus, (err, server) => {
      if (err) return console.error(err.message);
      console.log("Server started:", server);
    });
  });
});

// This pattern led to Promises and async/await
