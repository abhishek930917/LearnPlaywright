// ========================================
// Real-World Async/Await Patterns
// ========================================

// --- 1. Retry with exponential backoff ---

async function retry(fn, maxRetries = 3, delay = 1000) {
  let lastError;
  
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
      console.log(`Attempt ${i + 1} failed: ${error.message}`);
      
      if (i < maxRetries - 1) {
        const wait = delay * Math.pow(2, i); // exponential backoff
        console.log(`Retrying in ${wait}ms...`);
        await sleep(wait);
      }
    }
  }
  
  throw new Error(`Failed after ${maxRetries} attempts: ${lastError.message}`);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Simulate a flaky API
let attemptCount = 0;
async function flakyAPI() {
  attemptCount++;
  if (attemptCount < 3) {
    throw new Error("Network error");
  }
  return "Success!";
}

retry(() => flakyAPI(), 3, 500).then(console.log).catch(console.error);

// --- 2. Timeout wrapper ---

async function withTimeout(promise, ms) {
  const timeout = new Promise((_, reject) => {
    setTimeout(() => reject(new Error(`Timeout after ${ms}ms`)), ms);
  });
  
  return Promise.race([promise, timeout]);
}

async function slowOperation() {
  await sleep(2000);
  return "Done";
}

withTimeout(slowOperation(), 1000)
  .then((result) => console.log("Result:", result))
  .catch((error) => console.error("Timeout:", error.message));

// --- 3. Debounce with async ---

function debounceAsync(fn, ms) {
  let timer = null;
  
  return async function (...args) {
    if (timer) clearTimeout(timer);
    
    return new Promise((resolve) => {
      timer = setTimeout(async () => {
        const result = await fn(...args);
        resolve(result);
      }, ms);
    });
  };
}

// --- 4. Async queue (sequential processing) ---

class AsyncQueue {
  constructor() {
    this.queue = [];
    this.running = false;
  }
  
  async add(task) {
    return new Promise((resolve, reject) => {
      this.queue.push(async () => {
        try {
          const result = await task();
          resolve(result);
        } catch (error) {
          reject(error);
        }
      });
      
      if (!this.running) this.run();
    });
  }
  
  async run() {
    this.running = true;
    
    while (this.queue.length > 0) {
      const task = this.queue.shift();
      await task();
    }
    
    this.running = false;
  }
}

// --- 5. Async cache / memoization ---

function asyncMemoize(fn) {
  const cache = new Map();
  
  return async function (...args) {
    const key = JSON.stringify(args);
    
    if (cache.has(key)) {
      console.log("Cache hit:", key);
      return cache.get(key);
    }
    
    console.log("Cache miss:", key);
    const result = await fn(...args);
    cache.set(key, result);
    return result;
  };
}

async function fetchData(id) {
  await sleep(500);
  return { id, data: `Data for ${id}` };
}

const memoizedFetch = asyncMemoize(fetchData);

async function demoMemoize() {
  console.log("\n--- Async Memoization ---");
  const r1 = await memoizedFetch(1);
  const r2 = await memoizedFetch(1); // From cache
  const r3 = await memoizedFetch(2);
  
  console.log("Results:", r1, r2, r3);
}

// --- 6. Async waterfall (sequential with data passing) ---

async function waterfall(tasks, initialValue) {
  let result = initialValue;
  
  for (const task of tasks) {
    result = await task(result);
  }
  
  return result;
}

async function demoWaterfall() {
  console.log("\n--- Async Waterfall ---");
  
  const result = await waterfall([
    async (x) => {
      console.log("Step 1:", x);
      await sleep(100);
      return x + 1;
    },
    async (x) => {
      console.log("Step 2:", x);
      await sleep(100);
      return x * 2;
    },
    async (x) => {
      console.log("Step 3:", x);
      await sleep(100);
      return x.toString();
    },
  ], 0);
  
  console.log("Final result:", result);
}

// --- 7. Run async functions in parallel with limit ---

async function parallelLimit(tasks, limit) {
  const results = new Array(tasks.length);
  let index = 0;
  
  async function worker() {
    while (index < tasks.length) {
      const currentIndex = index++;
      results[currentIndex] = await tasks[currentIndex]();
    }
  }
  
  const workers = Array.from({ length: limit }, () => worker());
  await Promise.all(workers);
  
  return results;
}

async function demoParallelLimit() {
  console.log("\n--- Parallel with Limit ---");
  const tasks = Array.from({ length: 10 }, (_, i) => () =>
    sleep(100).then(() => `Task ${i + 1}`)
  );
  
  const results = await parallelLimit(tasks, 3);
  console.log("Results:", results);
}

// --- Run demos ---

async function runAll() {
  await retry(() => flakyAPI(), 3, 500);
  await demoMemoize();
  await demoWaterfall();
  await demoParallelLimit();
}

runAll();
