// ============================================================================
// 09-string-practical-examples.js
// Real-World String Manipulation Examples
// ============================================================================

// ----------------------------------------------------------------------------
// 1. Capitalize First Letter
// ----------------------------------------------------------------------------
function capitalize(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => capitalize(word))
    .join(" ");
}

console.log("Capitalize 'hello':", capitalize("hello"));                  // Hello
console.log("Capitalize words:", capitalizeWords("javaScript is fun"));  // Javascript Is Fun

// ----------------------------------------------------------------------------
// 2. Slugify (Create URL-friendly strings)
// ----------------------------------------------------------------------------
function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")      // remove special chars
    .replace(/[\s_-]+/g, "-")      // replace spaces/underscores with -
    .replace(/^-+|-+$/g, "");       // remove leading/trailing -
}

console.log("Slugify:", slugify("Hello World! This is JS")); // hello-world-this-is-js
console.log("Slugify:", slugify("  Special #$Characters  ")); // special-characters

// ----------------------------------------------------------------------------
// 3. Truncate Text with Ellipsis
// ----------------------------------------------------------------------------
function truncate(str, maxLength) {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength - 3) + "...";
}

console.log("Truncate:", truncate("This is a very long text", 15)); // This is a ve...

// ----------------------------------------------------------------------------
// 4. Format Currency
// ----------------------------------------------------------------------------
function formatCurrency(amount, currency = "USD", locale = "en-US") {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(amount);
}

console.log("USD:", formatCurrency(1234.56));          // $1,234.56
console.log("EUR:", formatCurrency(1234.56, "EUR"));   // €1,234.56
console.log("INR:", formatCurrency(1234.56, "INR"));   // ₹1,234.56

// ----------------------------------------------------------------------------
// 5. Format Numbers with Commas
// ----------------------------------------------------------------------------
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

console.log("Format number:", formatNumber(1234567890)); // 1,234,567,890

// Using built-in (modern approach)
console.log("Built-in format:", (1234567890).toLocaleString("en-US")); // 1,234,567,890

// ----------------------------------------------------------------------------
// 6. Validate Input Types
// ----------------------------------------------------------------------------

function isEmpty(str) {
  return !str || str.trim().length === 0;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
  return /^\d{10}$/.test(phone.replace(/\D/g, ""));
}

console.log("isEmpty(''):", isEmpty(""));                   // true
console.log("isEmpty('  '):", isEmpty("  "));                 // true
console.log("isValidEmail('test@test.com'):", isValidEmail("test@test.com")); // true
console.log("isValidPhone('555-123-4567'):", isValidPhone("555-123-4567"));     // true

// ----------------------------------------------------------------------------
// 7. Mask Sensitive Data (e.g., Credit Card)
// ----------------------------------------------------------------------------
function maskCard(cardNumber) {
  const cleaned = cardNumber.replace(/\D/g, "");
  const last4 = cleaned.slice(-4);
  return "*".repeat(cleaned.length - 4) + last4;
}

function maskEmail(email) {
  const [user, domain] = email.split("@");
  const maskedUser = user[0] + "*".repeat(user.length - 2) + user.slice(-1);
  return maskedUser + "@" + domain;
}

console.log("Mask card:", maskCard("4532-1234-5678-9012")); // ************9012
console.log("Mask email:", maskEmail("john.doe@gmail.com")); // j********e@gmail.com

// ----------------------------------------------------------------------------
// 8. Parse Query Parameters from URL
// ----------------------------------------------------------------------------
function parseQueryParams(url) {
  const params = {};
  const queryString = url.split("?")[1];

  if (!queryString) return params;

  queryString.split("&").forEach((param) => {
    const [key, value] = param.split("=");
    params[decodeURIComponent(key)] = decodeURIComponent(value || "");
  });

  return params;
}

const testUrl = "https://example.com/search?q=javascript&page=1&sort=date";
console.log("Query params:", parseQueryParams(testUrl));
// { q: 'javascript', page: '1', sort: 'date' }

// Modern approach using URL API
const urlObj = new URL(testUrl);
console.log("URL search params:", Object.fromEntries(urlObj.searchParams));

// ----------------------------------------------------------------------------
// 9. Generate Random ID/String
// ----------------------------------------------------------------------------
function generateId(length = 8) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

console.log("Random ID:", generateId());     // e.g., "aB3dE5fG"
console.log("Random ID (12):", generateId(12)); // e.g., "x9KpL2mNqR4s"

// Using built-in crypto (for better randomness)
function generateSecureId(length = 8) {
  const array = new Uint8Array(length);
  crypto.getRandomValues(array);
  return Array.from(array, (byte) => byte.toString(16).padStart(2, "0")).join("").slice(0, length);
}

console.log("Secure ID:", generateSecureId(8));

// ----------------------------------------------------------------------------
// 10. Count Character Frequency
// ----------------------------------------------------------------------------
function charFrequency(str) {
  const freq = {};
  for (const char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  return freq;
}

console.log("Frequency:", charFrequency("hello"));
// { h: 1, e: 1, l: 2, o: 1 }

// ----------------------------------------------------------------------------
// 11. Remove Duplicate Characters
// ----------------------------------------------------------------------------
function removeDuplicates(str) {
  return [...new Set(str)].join("");
}

console.log("Remove dups:", removeDuplicates("hello world")); // helo wrd

// ----------------------------------------------------------------------------
// 12. String Interpolation with Object
// ----------------------------------------------------------------------------
function template(string, data) {
  return string.replace(/\{\{(\w+)\}\}/g, (match, key) => {
    return data[key] !== undefined ? data[key] : match;
  });
}

const userData = { name: "Alice", age: 30, city: "New York" };
console.log(
  template("{{name}} is {{age}} years old and lives in {{city}}.", userData)
);
// Alice is 30 years old and lives in New York.

// ============================================================================
