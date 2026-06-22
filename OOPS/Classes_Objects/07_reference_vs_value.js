// ============================================================
// REFERENCE VS VALUE (Primitives vs Objects)
// ============================================================
// Primitives are copied by value. Objects are copied by reference.

export function demonstrateReferenceVsValue() {
  // ------------------ Primitives (value) ------------------
  let a = 10;
  let b = a; // b gets a COPY of the value
  b = 20;
  console.log("a:", a, "b:", b); // a: 10, b: 20 (independent)

  // ------------------ Objects (reference) ------------------
  const obj1 = { x: 1 };
  const obj2 = obj1; // obj2 references the SAME object
  obj2.x = 2;
  console.log("obj1.x:", obj1.x); // 2 (both point to same memory)

  // ------------------ Comparison ------------------
  const c = { val: 1 };
  const d = { val: 1 };
  console.log("c === d:", c === d); // false (different references)

  const e = c;
  console.log("c === e:", c === e); // true (same reference)

  // ------------------ Shallow Copy ------------------
  const original = { name: "Alice", details: { age: 30 } };

  // Method 1: Spread operator
  const shallow1 = { ...original };

  // Method 2: Object.assign()
  const shallow2 = Object.assign({}, original);

  // Method 3: Array/Object method (for arrays)
  // const arrCopy = originalArr.slice();

  shallow1.name = "Bob"; // OK — top-level copy
  shallow1.details.age = 99; // Affects original! (nested is shared)

  console.log("Original name:", original.name);     // Alice (unchanged)
  console.log("Original age:", original.details.age); // 99 (CHANGED!)

  // ------------------ Deep Copy ------------------
  const deepOriginal = {
    name: "Alice",
    details: { age: 30, hobbies: ["reading", "gaming"] },
  };

  // Method 1: JSON trick (works for plain objects, loses functions, dates, undefined)
  const jsonCopy = JSON.parse(JSON.stringify(deepOriginal));
  jsonCopy.details.age = 40;
  console.log("JSON deep copy age changed:", deepOriginal.details.age); // 30 (safe)

  // Method 2: StructuredClone (modern, built-in, better than JSON)
  const structuredCopy = structuredClone(deepOriginal);
  structuredCopy.details.hobbies.push("coding");
  console.log("Original hobbies:", deepOriginal.details.hobbies); // ["reading", "gaming"] (safe)

  // ------------------ Deep Clone Function (recursive) ------------------
  function deepClone(obj) {
    if (obj === null || typeof obj !== "object") return obj;
    if (obj instanceof Date) return new Date(obj);
    if (Array.isArray(obj)) return obj.map((item) => deepClone(item));

    const cloned = {};
    for (const key of Object.keys(obj)) {
      cloned[key] = deepClone(obj[key]);
    }
    return cloned;
  }

  const recursiveCopy = deepClone(deepOriginal);
  recursiveCopy.details.age = 50;
  console.log("Recursive deep copy safe?", deepOriginal.details.age === 30); // true
}
