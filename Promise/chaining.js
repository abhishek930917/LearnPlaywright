// ========================================
// Promise Chaining & Transformation
// ========================================

// Each .then() returns a new Promise, enabling chaining.
// The return value of .then() becomes the next .then()'s input.

function fetchUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id, name: "Alice" }), 300);
  });
}

function fetchPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve([
          { id: 1, title: "Post 1" },
          { id: 2, title: "Post 2" },
        ]),
      300
    );
  });
}

function fetchComments(postId) {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve([
          { id: 1, text: "Nice!" },
          { id: 2, text: "Great post" },
        ]),
      300
    );
  });
}

// --- Flat chain (vs callback hell) ---

console.log("--- Promise Chain ---");

fetchUser(1)
  .then((user) => {
    console.log("User:", user);
    return fetchPosts(user.id); // return a Promise
  })
  .then((posts) => {
    console.log("Posts:", posts);
    return fetchComments(posts[0].id);
  })
  .then((comments) => {
    console.log("Comments:", comments);
  })
  .catch((err) => console.error("Error:", err.message));

// --- Value Transformation ---
// .then() can return a plain value (not just a Promise)

Promise.resolve(5)
  .then((x) => x * 2)     // 10
  .then((x) => x + 3)     // 13
  .then((x) => x.toString()) // "13"
  .then(console.log);     // "13"

// --- Returning Promises in .then() ---
// If .then() returns a Promise, the chain waits for it

Promise.resolve(1)
  .then((x) => {
    console.log("Step 1:", x);
    return new Promise((resolve) => setTimeout(() => resolve(x * 2), 500));
  })
  .then((x) => {
    console.log("Step 2:", x);
    return new Promise((resolve) => setTimeout(() => resolve(x * 3), 500));
  })
  .then((x) => console.log("Step 3:", x));

// --- .finally() ---
// Runs regardless of fulfillment or rejection, no arguments

function showSpinner() {
  console.log("Spinner: ON");
}

function hideSpinner() {
  console.log("Spinner: OFF");
}

showSpinner();
fetchUser(1)
  .then((user) => console.log("Got user:", user.name))
  .catch((err) => console.error(err))
  .finally(() => hideSpinner());
