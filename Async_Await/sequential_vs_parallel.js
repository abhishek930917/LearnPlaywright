// ========================================
// Sequential vs Parallel Execution
// ========================================

// Sequential: one after another (slower, but sometimes necessary)
// Parallel: all at once (faster, when independent)

function delay(ms, label) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`  ${label} finished after ${ms}ms`);
      resolve(label);
    }, ms);
  });
}

// --- Sequential execution (dependent operations) ---

async function fetchUserData(userId) {
  console.log("\n--- Sequential: Fetch user data ---");
  const start = Date.now();
  
  // Step 1: Get user
  const user = await delay(300, "fetch user");
  
  // Step 2: Get posts (needs user.id)
  const posts = await delay(300, "fetch posts");
  
  // Step 3: Get comments (needs posts)
  const comments = await delay(300, "fetch comments");
  
  const elapsed = Date.now() - start;
  console.log(`Total sequential time: ${elapsed}ms`);
  
  return { user, posts, comments };
}

// --- Sequential anti-pattern (independent operations) ---

async function sequentialAntiPattern() {
  console.log("\n--- Sequential Anti-Pattern (bad for independent ops) ---");
  const start = Date.now();
  
  // These are independent but we await them sequentially!
  const a = await delay(300, "task A");
  const b = await delay(300, "task B");
  const c = await delay(300, "task C");
  
  const elapsed = Date.now() - start;
  console.log(`Anti-pattern time: ${elapsed}ms (should be ~300ms)`);
  
  return [a, b, c];
}

// --- Parallel execution (independent operations) ---

async function parallelExecution() {
  console.log("\n--- Parallel: All at once ---");
  const start = Date.now();
  
  // All start immediately!
  const promiseA = delay(300, "task A");
  const promiseB = delay(300, "task B");
  const promiseC = delay(300, "task C");
  
  // Wait for all to finish
  const [a, b, c] = await Promise.all([promiseA, promiseB, promiseC]);
  
  const elapsed = Date.now() - start;
  console.log(`Total parallel time: ${elapsed}ms`);
  
  return [a, b, c];
}

// --- Parallel with error handling ---

async function parallelWithErrorHandling() {
  console.log("\n--- Parallel with Error Handling ---");
  
  function taskWithError(name, shouldFail) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldFail) {
          reject(new Error(`${name} failed!`));
        } else {
          resolve(`${name} succeeded`);
        }
      }, 100);
    });
  }
  
  // If any fails, Promise.all fails immediately
  try {
    const results = await Promise.all([
      taskWithError("A", false),
      taskWithError("B", true), // This will fail
      taskWithError("C", false),
    ]);
    console.log("All succeeded:", results);
  } catch (error) {
    console.error("One failed:", error.message);
  }
  
  // Use Promise.allSettled to get all results regardless of failure
  const settled = await Promise.allSettled([
    taskWithError("A", false),
    taskWithError("B", true),
    taskWithError("C", false),
  ]);
  
  settled.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`Task ${index}:`, result.value);
    } else {
      console.error(`Task ${index} failed:`, result.reason.message);
    }
  });
}

// --- Parallel with concurrency limit ---

async function withConcurrencyLimit(tasks, limit) {
  console.log("\n--- Parallel with Concurrency Limit ---");
  const results = [];
  
  for (let i = 0; i < tasks.length; i += limit) {
    const batch = tasks.slice(i, i + limit);
    const batchResults = await Promise.all(batch.map((t) => t()));
    results.push(...batchResults);
    console.log(`  Batch ${i / limit + 1} complete`);
  }
  
  return results;
}

// --- Running the examples ---

async function runExamples() {
  await fetchUserData();
  await sequentialAntiPattern();
  await parallelExecution();
  await parallelWithErrorHandling();
  
  const tasks = Array.from({ length: 6 }, (_, i) => () =>
    delay(100, `task ${i + 1}`)
  );
  await withConcurrencyLimit(tasks, 2);
}

runExamples();
