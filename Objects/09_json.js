// ============================================================
// 09 - JSON: JavaScript Object Notation
// ============================================================

// JSON is a string format for storing and transporting data.
// It looks like JS object literal syntax but with strict rules.

const userObj = {
  name: "Alice",
  age: 30,
  isActive: true,
  hobbies: ["reading", "coding"],
  address: { city: "NYC", zip: "10001" },
  // functions and undefined are NOT valid in JSON
  greet: function() { return "hi"; },
  nothing: undefined
};

// 1. JSON.stringify() - Convert JS object to JSON string
const jsonString = JSON.stringify(userObj);
console.log("JSON String:", jsonString);
// Note: greet and nothing are omitted automatically!

// Pretty-print with indentation
const prettyJson = JSON.stringify(userObj, null, 2);
console.log("Pretty JSON:\n", prettyJson);

// 2. JSON.parse() - Convert JSON string back to JS object
const parsed = JSON.parse(jsonString);
console.log("Parsed:", parsed);
console.log(parsed.name); // "Alice"

// 3. JSON.stringify() WITH REPLACER (filter/transform)
const replacerJson = JSON.stringify(userObj, ["name", "age"]);
console.log("Replacer (whitelist):", replacerJson); // only name and age

// Function replacer
const customJson = JSON.stringify(userObj, (key, value) => {
  if (key === "age") {
    return undefined; // omit age
  }
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value;
});
console.log("Custom replacer:", customJson);

// 4. JSON.parse() WITH REVIVER (transform while parsing)
const dateJson = '{"event":"Meeting","date":"2024-01-15T10:00:00.000Z"}';
const withDates = JSON.parse(dateJson, (key, value) => {
  if (key === "date" && typeof value === "string") {
    return new Date(value);
  }
  return value;
});
console.log("Reviver result:", withDates);
console.log(withDates.date instanceof Date); // true

// 5. COMMON JSON RULES / LIMITATIONS
// - Keys MUST be double-quoted strings
// - Values: string, number, object, array, true, false, null
// - NO functions, undefined, Symbol, or comments
// - NO trailing commas

// Invalid as pure JSON but valid JS object:
const jsOnly = {
  // 'key': 1,        // single quotes not valid in JSON
  // unquoted: 2,     // unquoted keys not valid in JSON
  // trailing comma,  // not valid in JSON
};

// 6. DEEP CLONE USING JSON (has limitations!)
const original = {
  name: "Test",
  nested: { a: 1 },
  arr: [1, 2, 3]
};
const clone = JSON.parse(JSON.stringify(original));
clone.nested.a = 999;
console.log("Original nested:", original.nested.a); // 1 (independent!)
// Limitations: loses functions, undefined, Dates, RegExp, Maps, Sets, circular refs

// 7. toJSON() METHOD - Custom serialization
const order = {
  id: 1,
  items: ["book", "pen"],
  total: 25.50,
  toJSON() {
    return {
      orderId: this.id,
      itemCount: this.items.length,
      amount: `$${this.total}`
    };
  }
};
console.log("toJSON result:", JSON.stringify(order));
// {"orderId":1,"itemCount":2,"amount":"$25.5"}

// 8. HANDLING CIRCULAR REFERENCES
const circular = { name: "A" };
circular.self = circular; // circular reference!
// JSON.stringify(circular); // TypeError: Converting circular structure

// Fix with custom replacer
const seen = new WeakSet();
const safeJson = JSON.stringify(circular, (key, value) => {
  if (typeof value === "object" && value !== null) {
    if (seen.has(value)) {
      return "[Circular Reference]";
    }
    seen.add(value);
  }
  return value;
});
console.log("Safe circular:", safeJson);

module.exports = { userObj, parsed, withDates, order };
