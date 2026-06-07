// ============================================================
// 02 - Property Access: Dot vs Bracket Notation
// ============================================================

const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  "publication year": 1925,
  1: "first chapter"
};

// 1. DOT NOTATION
console.log(book.title);   // "The Great Gatsby"
console.log(book.author);  // "F. Scott Fitzgerald"

// 2. BRACKET NOTATION (required for multi-word or dynamic keys)
console.log(book["publication year"]); // 1925
console.log(book[1]);                   // "first chapter"

// 3. DYNAMIC KEY ACCESS
const prop = "author";
console.log(book[prop]); // "F. Scott Fitzgerald"

// 4. CHECKING IF PROPERTY EXISTS
console.log("title" in book);           // true
console.log(book.hasOwnProperty("author")); // true
console.log(book.year === undefined);    // true (property doesn't exist)

// 5. ADDING / MODIFYING PROPERTIES
book.pages = 180;
book["language"] = "English";
console.log("After add:", book);

// 6. DELETING PROPERTIES
delete book[1];
console.log("After delete:", book);

// 7. ITERATING OVER PROPERTIES
// for...in loop
for (const key in book) {
  if (book.hasOwnProperty(key)) {
    console.log(`${key}: ${book[key]}`);
  }
}

// 8. OPTIONAL CHAINING (safe nested access)
const company = {
  name: "TechCorp",
  address: {
    city: "New York",
    zip: "10001"
  }
};

console.log(company.address?.city);      // "New York"
console.log(company.ceo?.name);        // undefined (no error!)

// 9. NULLISH COALESCING (provide default for null/undefined)
const settings = {
  theme: null,
  fontSize: 0,
  notifications: undefined
};

console.log(settings.theme ?? "dark");           // "dark"
console.log(settings.fontSize ?? 16);              // 0 (0 is not null/undefined!)
console.log(settings.notifications ?? true);     // true

module.exports = { book, company, settings };
