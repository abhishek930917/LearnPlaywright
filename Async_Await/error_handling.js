// ========================================
// Async/Await Error Handling
// ========================================

// --- try/catch with await ---
// Since await waits for promises, you can use try/catch like synchronous code.

function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id < 0) {
        reject(new Error(`Invalid user ID: ${id}`));
      } else {
        resolve({ id, name: "Alice" });
      }
    }, 100);
  });
}

async function getUserSafe(id) {
  try {
    const user = await fetchUser(id);
    console.log("User:", user);
    return user;
  } catch (error) {
    console.error("Error caught:", error.message);
    return null; // or re-throw
  }
}

getUserSafe(1);   // Success
getUserSafe(-1);  // Error handled

// --- try/catch with multiple awaits ---

async function processUser(id) {
  try {
    const user = await fetchUser(id);
    const posts = await fetchPosts(user.id);
    const comments = await fetchComments(posts[0].id);
    console.log("Comments:", comments);
  } catch (error) {
    // Catches errors from ANY of the await expressions
    console.error("Process failed:", error.message);
  }
}

function fetchPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => resolve([{ id: 1, title: "Post 1" }]), 100);
  });
}

function fetchComments(postId) {
  return new Promise((resolve) => {
    setTimeout(() => resolve([{ text: "Nice!" }]), 100);
  });
}

// --- try/catch/finally ---

async function withFinally(id) {
  console.log("Loading...");
  
  try {
    const user = await fetchUser(id);
    console.log("Loaded:", user);
  } catch (error) {
    console.error("Failed:", error.message);
  } finally {
    console.log("Done loading (always runs)");
  }
}

withFinally(1);
withFinally(-1);

// --- try/catch vs .catch() ---

// Both are equivalent:
async function withTryCatch() {
  try {
    return await fetchUser(-1);
  } catch (err) {
    console.error("try/catch:", err.message);
  }
}

async function withDotCatch() {
  return fetchUser(-1).catch((err) => {
    console.error(".catch():", err.message);
  });
}

withTryCatch();
withDotCatch();

// --- Re-throwing errors ---

async function validateUser(id) {
  try {
    const user = await fetchUser(id);
    if (!user.name) {
      throw new Error("User name is required");
    }
    return user;
  } catch (error) {
    // Log and re-throw for upstream handling
    console.error("Validation failed:", error.message);
    throw error;
  }
}

validateUser(-1).catch((err) => {
  console.error("Upstream caught:", err.message);
});

// --- catch specific errors ---

class NetworkError extends Error {}
class ValidationError extends Error {}

async function fetchWithErrorType() {
  try {
    await fetchUser(-1);
  } catch (error) {
    if (error instanceof NetworkError) {
      console.error("Network issue:", error.message);
    } else if (error instanceof ValidationError) {
      console.error("Validation issue:", error.message);
    } else {
      console.error("Unknown error:", error.message);
    }
  }
}

fetchWithErrorType();

// --- Error in non-awaited promises ---
// If you don't await, errors won't be caught by try/catch

async function missingAwait() {
  try {
    // Promise starts but we don't await it!
    fetchUser(-1); // Unhandled rejection!
    console.log("This runs immediately");
  } catch (error) {
    // This won't catch the error!
    console.error("Won't catch:", error.message);
  }
}

// Correct way:
async function withAwait() {
  try {
    await fetchUser(-1); // Now error is caught
  } catch (error) {
    console.error("Correctly caught:", error.message);
  }
}

missingAwait();
setTimeout(() => withAwait(), 200);
