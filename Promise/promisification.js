// ========================================
// Promisification - Callback -> Promise
// ========================================

// Convert callback-based functions to Promise-based ones.
// Node.js has a built-in util.promisify for this.

const util = require("util");
const fs = require("fs");

// --- Manual promisification ---

function readFileCallback(path, encoding, callback) {
  // Simulated async file read
  setTimeout(() => {
    if (!path) {
      callback(new Error("Path is required"));
    } else {
      callback(null, `Content of ${path}`);
    }
  }, 100);
}

function promisify(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  };
}

const readFilePromise = promisify(readFileCallback);

readFilePromise("/etc/config.json")
  .then((data) => console.log("Data:", data))
  .catch((err) => console.error("Error:", err.message));

// --- Using Node.js util.promisify ---

const readFile = util.promisify(fs.readFile);

async function readConfig() {
  try {
    const data = await readFile("config.json", "utf8");
    console.log("Config:", data);
  } catch (err) {
    console.error("Config error:", err.message);
  }
}

readConfig();

// --- Promisify with multiple arguments ---
// Some callbacks return multiple results

function getCoordinates(city, callback) {
  setTimeout(() => {
    callback(null, 40.7128, -74.006); // lat, lng
  }, 100);
}

function promisifyMulti(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (err, ...results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results.length === 1 ? results[0] : results);
        }
      });
    });
  };
}

const getCoords = promisifyMulti(getCoordinates);

getCoords("New York")
  .then(([lat, lng]) => console.log(`Lat: ${lat}, Lng: ${lng}`))
  .catch(console.error);

// --- Promisify all methods of an object ---

function promisifyAll(obj) {
  const result = {};
  for (const key of Object.getOwnPropertyNames(Object.getPrototypeOf(obj))) {
    if (typeof obj[key] === "function" && key !== "constructor") {
      result[`${key}Async`] = promisify(obj[key].bind(obj));
    }
  }
  return result;
}

// --- The reverse: callbackify ---

function callbackify(fn) {
  return function (...args) {
    const callback = args.pop();
    fn(...args)
      .then((result) => callback(null, result))
      .catch((err) => callback(err));
  };
}
