// ========================================
// Callback Hell (Pyramid of Doom)
// ========================================

// Simulated async operations
function getUser(id, callback) {
  setTimeout(() => {
    callback({ id, name: "Alice" });
  }, 300);
}

function getPosts(userId, callback) {
  setTimeout(() => {
    callback([
      { id: 1, title: "Post 1" },
      { id: 2, title: "Post 2" },
    ]);
  }, 300);
}

function getComments(postId, callback) {
  setTimeout(() => {
    callback([{ id: 1, text: "Nice!" }, { id: 2, text: "Great" }]);
  }, 300);
}

// ---- Callback Hell ----
// Nested, hard to read, error-prone

console.log("--- Callback Hell ---");

getUser(1, (user) => {
  console.log("User:", user);
  getPosts(user.id, (posts) => {
    console.log("Posts:", posts);
    getComments(posts[0].id, (comments) => {
      console.log("Comments:", comments);
      // More nesting...
      getComments(posts[1].id, (moreComments) => {
        console.log("More comments:", moreComments);
        // Imagine 5+ levels deep!
      });
    });
  });
});

// Problems with callback hell:
// 1. Difficult to read and maintain
// 2. Error handling is scattered
// 3. Cannot use try/catch properly
// 4. Hard to parallelize operations
// 5. Inversion of control (giving control to nested functions)

// ---- Solutions ----

// Solution 1: Named functions
function handleComments(comments) {
  console.log("Comments:", comments);
}

function handlePosts(posts) {
  console.log("Posts:", posts);
  getComments(posts[0].id, handleComments);
}

function handleUser(user) {
  console.log("User:", user);
  getPosts(user.id, handlePosts);
}

getUser(1, handleUser);

// Solution 2: Promises (modern)
// (See promises.js for detailed coverage)

// Solution 3: Async/Await (best)
// (See async_await.js for detailed coverage)
