// ========================================
// Async Iteration
// ========================================

// --- for await...of ---
// Iterates over async iterables (objects with Symbol.asyncIterator)

function createAsyncRange(start, end, delay = 100) {
  return {
    async *[Symbol.asyncIterator]() {
      for (let i = start; i <= end; i++) {
        await new Promise((resolve) => setTimeout(resolve, delay));
        yield i;
      }
    },
  };
}

async function iterateRange() {
  console.log("--- for await...of ---");
  
  for await (const num of createAsyncRange(1, 5, 200)) {
    console.log(`  Number: ${num}`);
  }
  
  console.log("Done iterating!");
}

// --- Async generators ---

async function* fetchPages(urls) {
  for (const url of urls) {
    console.log(`Fetching ${url}...`);
    await new Promise((resolve) => setTimeout(resolve, 300));
    yield { url, data: `Data from ${url}` };
  }
}

async function consumeGenerator() {
  console.log("\n--- Async Generator ---");
  
  const urls = ["page1.com", "page2.com", "page3.com"];
  
  for await (const page of fetchPages(urls)) {
    console.log(`  Received: ${page.url} => ${page.data}`);
  }
}

// --- Async iteration with .map() ---

async function asyncMap(array, asyncFn) {
  const results = [];
  for (const item of array) {
    results.push(await asyncFn(item));
  }
  return results;
  // Note: This is sequential. For parallel, use Promise.all(array.map(asyncFn))
}

async function demoAsyncMap() {
  console.log("\n--- asyncMap (sequential) ---");
  
  const numbers = [1, 2, 3, 4, 5];
  const doubled = await asyncMap(numbers, async (n) => {
    await new Promise((r) => setTimeout(r, 100));
    return n * 2;
  });
  
  console.log("Doubled:", doubled);
}

// --- Parallel async map (better for independent ops) ---

async function parallelAsyncMap(array, asyncFn) {
  return Promise.all(array.map(asyncFn));
}

async function demoParallelMap() {
  console.log("\n--- parallelAsyncMap ---");
  
  const numbers = [1, 2, 3, 4, 5];
  const start = Date.now();
  
  const doubled = await parallelAsyncMap(numbers, async (n) => {
    await new Promise((r) => setTimeout(r, 100));
    return n * 2;
  });
  
  const elapsed = Date.now() - start;
  console.log(`Doubled: ${doubled} (took ${elapsed}ms, ~100ms parallel)`);
}

// --- Async reduce ---

async function asyncReduce(array, asyncReducer, initialValue) {
  let accumulator = initialValue;
  
  for (const item of array) {
    accumulator = await asyncReducer(accumulator, item);
  }
  
  return accumulator;
}

async function demoAsyncReduce() {
  console.log("\n--- asyncReduce ---");
  
  const numbers = [1, 2, 3, 4, 5];
  const sum = await asyncReduce(numbers, async (acc, n) => {
    await new Promise((r) => setTimeout(r, 50));
    return acc + n;
  }, 0);
  
  console.log("Sum:", sum);
}

// --- Async filter ---

async function asyncFilter(array, asyncPredicate) {
  const results = [];
  
  for (const item of array) {
    if (await asyncPredicate(item)) {
      results.push(item);
    }
  }
  
  return results;
}

async function demoAsyncFilter() {
  console.log("\n--- asyncFilter ---");
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const evens = await asyncFilter(numbers, async (n) => {
    await new Promise((r) => setTimeout(r, 30));
    return n % 2 === 0;
  });
  
  console.log("Even numbers:", evens);
}

// --- Async forEach (sequential) ---

async function asyncForEach(array, asyncFn) {
  for (const item of array) {
    await asyncFn(item);
  }
}

async function demoAsyncForEach() {
  console.log("\n--- asyncForEach ---");
  
  const items = ["A", "B", "C"];
  await asyncForEach(items, async (item) => {
    await new Promise((r) => setTimeout(r, 100));
    console.log(`  Processed: ${item}`);
  });
  
  console.log("All done!");
}

// --- Run all demos ---

async function runAll() {
  await iterateRange();
  await consumeGenerator();
  await demoAsyncMap();
  await demoParallelMap();
  await demoAsyncReduce();
  await demoAsyncFilter();
  await demoAsyncForEach();
}

runAll();
