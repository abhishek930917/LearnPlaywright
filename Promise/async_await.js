// ========================================
// Async / Await - Syntactic Sugar over Promises
// ========================================

// async functions ALWAYS return a Promise.
// await pauses execution until the Promise settles.

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function fetchUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id, name: "Alice" }), 300);
  });
}

function fetchPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(["Post 1", "Post 2"]), 300);
  });
}

// --- Basic async/await ---

async function getUserData(id) {
  console.log("Fetching user...");
  const user = await fetchUser(id);
  console.log("User:", user);

  console.log("Fetching posts...");
  const posts = await fetchPosts(user.id);
  console.log("Posts:", posts);

  return { user, posts };
}

getUserData(1).then((result) => console.log("Final:", result));

// --- Error handling with try/catch ---

function riskyOperation() {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error("Something went wrong")), 300);
  });
}

async function handleErrors() {
  try {
    const result = await riskyOperation();
    console.log("Result:", result);
  } catch (error) {
    console.error("Caught error:", error.message);
  }
}

handleErrors();

// --- Parallel execution ---
// Use Promise.all with await for concurrent operations

async function fetchAll() {
  const [user, posts] = await Promise.all([
    fetchUser(1),
    fetchPosts(1),
  ]);

  console.log("Parallel - User:", user);
  console.log("Parallel - Posts:", posts);
}

fetchAll();

// --- Sequential vs Parallel ---

async function sequential() {
  console.time("sequential");
  const user = await fetchUser(1);
  const posts = await fetchPosts(1);
  console.timeEnd("sequential");
}

async function parallel() {
  console.time("parallel");
  const [user, posts] = await Promise.all([fetchUser(1), fetchPosts(1)]);
  console.timeEnd("parallel");
}

sequential().then(() => parallel());
// parallel is ~2x faster

// --- await in loops ---

async function processItems(items) {
  for (const item of items) {
    // Sequential processing (one at a time)
    await delay(100);
    console.log("Processed:", item);
  }
}

async function processItemsParallel(items) {
  // Parallel processing (all at once)
  await Promise.all(items.map(async (item) => {
    await delay(100);
    console.log("Processed:", item);
  }));
}

processItems([1, 2, 3]).then(() => processItemsParallel([4, 5, 6]));

// --- Top-level await (ES2022, modules only) ---

// In ES modules:
// const data = await fetch("https://api.example.com/data");
// console.log(data);
