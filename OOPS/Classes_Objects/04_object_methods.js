// ============================================================
// BUILT-IN OBJECT METHODS
// ============================================================
// JavaScript provides powerful static methods on the Object constructor.

export function demonstrateObjectMethods() {
  const user = {
    name: "Alice",
    age: 30,
    email: "alice@example.com",
    isAdmin: false,
  };

  // ------------------ Object.keys() ------------------
  // Returns an array of the object's own enumerable property names.
  console.log("Keys:", Object.keys(user));
  // ["name", "age", "email", "isAdmin"]

  // ------------------ Object.values() ------------------
  // Returns an array of the object's own enumerable property values.
  console.log("Values:", Object.values(user));
  // ["Alice", 30, "alice@example.com", false]

  // ------------------ Object.entries() ------------------
  // Returns an array of [key, value] pairs.
  console.log("Entries:", Object.entries(user));
  // [["name", "Alice"], ["age", 30], ...]

  // Iterating with entries
  for (const [key, value] of Object.entries(user)) {
    console.log(`  ${key}: ${value}`);
  }

  // ------------------ Object.fromEntries() ------------------
  // Converts an array of [key, value] pairs back into an object.
  const entries = [
    ["a", 1],
    ["b", 2],
  ];
  const fromEntries = Object.fromEntries(entries);
  console.log("fromEntries:", fromEntries); // { a: 1, b: 2 }

  // ------------------ Object.assign() ------------------
  // Copies enumerable own properties from source objects to a target.
  const defaults = { theme: "light", lang: "en" };
  const settings = Object.assign({}, defaults, { theme: "dark" });
  console.log("Assigned:", settings); // { theme: "dark", lang: "en" }

  // Modern alternative: spread operator
  const spreadSettings = { ...defaults, ...{ theme: "dark" } };
  console.log("Spread:", spreadSettings);

  // ------------------ Object.freeze() ------------------
  // Prevents modification of existing properties (shallow freeze).
  const frozen = Object.freeze({ x: 1, nested: { y: 2 } });
  // frozen.x = 10; // Silently fails or throws in strict mode
  frozen.nested.y = 20; // Works! Only the top level is frozen.
  console.log("Frozen nested modified:", frozen.nested.y); // 20

  // Check if frozen
  console.log("Is frozen?", Object.isFrozen(frozen));

  // ------------------ Object.seal() ------------------
  // Prevents adding/removing properties, but allows modifying existing ones.
  const sealed = Object.seal({ a: 1 });
  sealed.a = 100; // OK
  // sealed.b = 2;   // Fails
  // delete sealed.a; // Fails
  console.log("Sealed:", sealed); // { a: 100 }
  console.log("Is sealed?", Object.isSealed(sealed));

  // ------------------ Object.hasOwn() ------------------
  // Checks if property is an own property (not inherited).
  console.log("Has own 'name':", Object.hasOwn(user, "name")); // true
  console.log("Has own 'toString':", Object.hasOwn(user, "toString")); // false (inherited)
}
