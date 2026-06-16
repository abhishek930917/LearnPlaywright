// ========================================
// Advanced Async/Await Patterns
// ========================================

// --- 1. IIAFE (Immediately Invoked Async Function Expression) ---

// Use this when you need top-level await in a script (not in an ES module)

(async () => {
  console.log("--- IIAFE ---");
  const result = await Promise.resolve("IIAFE works!");
  console.log(result);
})();

// --- 2. Top-level await (ES modules only) ---
// In .mjs files or with "type": "module" in package.json:
// const data = await fetch('https://api.example.com/data');
// console.log(data);

// --- 3. Async constructors (anti-pattern) ---
// Constructors cannot be async. Use factory pattern instead.

// ❌ BAD: class with async constructor
class BadService {
  async constructor() {
    this.data = await fetchData();
  }
}

// ✅ GOOD: Factory pattern
class GoodService {
  constructor(data) {
    this.data = data;
  }
  
  static async create() {
    const data = await fetchData();
    return new GoodService(data);
  }
}

async function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ connected: true }), 100);
  });
}

async function demoFactory() {
  console.log("\n--- Factory Pattern ---");
  const service = await GoodService.create();
  console.log("Service created:", service.data);
}

// --- 4. Async class methods ---

class DataService {
  async fetchUsers() {
    await new Promise((r) => setTimeout(r, 100));
    return [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }];
  }
  
  async fetchUserById(id) {
    const users = await this.fetchUsers();
    return users.find((u) => u.id === id);
  }
}

async function demoClass() {
  console.log("\n--- Async Class Methods ---");
  const service = new DataService();
  const user = await service.fetchUserById(1);
  console.log("User:", user);
}

// --- 5. Race condition prevention with locks ---

class AsyncLock {
  constructor() {
    this.promise = Promise.resolve();
  }
  
  async acquire() {
    let release;
    const newPromise = new Promise((resolve) => {
      release = resolve;
    });
    
    const wait = this.promise;
    this.promise = this.promise.then(() => newPromise);
    
    await wait;
    return release;
  }
}

async function demoLock() {
  console.log("\n--- Async Lock ---");
  const lock = new AsyncLock();
  
  async function criticalSection(name) {
    const release = await lock.acquire();
    console.log(`  ${name} entered`);
    await new Promise((r) => setTimeout(r, 200));
    console.log(`  ${name} leaving`);
    release();
  }
  
  await Promise.all([
    criticalSection("A"),
    criticalSection("B"),
    criticalSection("C"),
  ]);
}

// --- 6. Async with AbortController ---

async function fetchWithAbort(url, signal) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      resolve(`Data from ${url}`);
    }, 1000);
    
    if (signal) {
      signal.addEventListener("abort", () => {
        clearTimeout(timeout);
        reject(new Error("Aborted"));
      });
    }
  });
}

async function demoAbort() {
  console.log("\n--- AbortController ---");
  const controller = new AbortController();
  
  // Abort after 500ms
  setTimeout(() => {
    console.log("  Aborting...");
    controller.abort();
  }, 500);
  
  try {
    const result = await fetchWithAbort("api.example.com", controller.signal);
    console.log("Result:", result);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// --- 7. Async event handling ---

class AsyncEventEmitter {
  constructor() {
    this.listeners = new Map();
  }
  
  on(event, listener) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    this.listeners.get(event).push(listener);
  }
  
  async emit(event, data) {
    const listeners = this.listeners.get(event) || [];
    for (const listener of listeners) {
      await listener(data); // sequential execution
    }
  }
}

async function demoEvents() {
  console.log("\n--- Async Event Emitter ---");
  const emitter = new AsyncEventEmitter();
  
  emitter.on("data", async (data) => {
    await new Promise((r) => setTimeout(r, 100));
    console.log("  Listener 1:", data);
  });
  
  emitter.on("data", async (data) => {
    await new Promise((r) => setTimeout(r, 100));
    console.log("  Listener 2:", data);
  });
  
  await emitter.emit("data", "Hello Events");
}

// --- 8. Async with generators and yield ---

async function* asyncGenerator() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
}

async function demoGenerator() {
  console.log("\n--- Async Generator ---");
  for await (const num of asyncGenerator()) {
    console.log("  Generated:", num);
  }
}

// --- Run all demos ---

async function runAll() {
  await demoFactory();
  await demoClass();
  await demoLock();
  await demoAbort();
  await demoEvents();
  await demoGenerator();
}

runAll();
