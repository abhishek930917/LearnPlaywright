// ============================================================
// JavaScript Number Types & Literals
// ============================================================
// JavaScript has ONLY ONE number type: Number (IEEE 754 double-precision 64-bit floating point)
// There is NO separate integer type. All numbers are floating point.
// Additionally, ES2020 introduced BigInt for arbitrarily large integers.

console.log("=== 1. INTEGER LITERALS ===\n");

const decimal = 42;
const negative = -17;
const zero = 0;

console.log("Decimal:", decimal);       // 42
console.log("Negative:", negative);     // -17
console.log("Zero:", zero);             // 0
console.log("typeof 42:", typeof 42);   // "number"

// ============================================================
console.log("\n=== 2. FLOATING-POINT (DECIMAL) LITERALS ===\n");

const pi = 3.14159;
const fraction = 0.5;
const leadingDecimal = .75;      // Valid but not recommended
const trailingDecimal = 5.;      // Valid but not recommended

console.log("Pi:", pi);                     // 3.14159
console.log("Fraction:", fraction);         // 0.5
console.log("Leading decimal (.75):", leadingDecimal);
console.log("Trailing decimal (5.):", trailingDecimal);

// ============================================================
console.log("\n=== 3. EXPONENTIAL (SCIENTIFIC) NOTATION ===\n");

const million = 1e6;            // 1 * 10^6 = 1,000,000
const micro = 1e-6;             // 1 * 10^-6 = 0.000001
const huge = 3.14e12;           // 3.14 * 10^12
const tiny = 3.14e-12;          // 3.14 * 10^-12

console.log("1e6 (million):", million);         // 1000000
console.log("1e-6 (micro):", micro);            // 0.000001
console.log("3.14e12:", huge);                  // 3140000000000
console.log("3.14e-12:", tiny);                 // 3.14e-12

// ============================================================
console.log("\n=== 4. HEXADECIMAL (BASE 16) ===\n");
// Prefix: 0x or 0X

const hex255 = 0xFF;            // 255 in decimal
const hex16 = 0x10;             // 16 in decimal
const hexBig = 0xABCDEF;        // 11259375 in decimal

console.log("0xFF:", hex255);               // 255
console.log("0x10:", hex16);                // 16
console.log("0xABCDEF:", hexBig);           // 11259375

// ============================================================
console.log("\n=== 5. BINARY (BASE 2) ===\n");
// Prefix: 0b or 0B (ES6+)

const binaryFive = 0b101;       // 5 in decimal
const binary255 = 0b11111111;   // 255 in decimal
const binary8 = 0B1000;         // 8 in decimal

console.log("0b101:", binaryFive);          // 5
console.log("0b11111111:", binary255);      // 255
console.log("0B1000:", binary8);            // 8

// ============================================================
console.log("\n=== 6. OCTAL (BASE 8) ===\n");
// Prefix: 0o or 0O (ES6+)
// Old syntax: leading zero (0) - deprecated, do NOT use!

const octal8 = 0o10;            // 8 in decimal
const octal64 = 0o100;          // 64 in decimal
const octal511 = 0o777;         // 511 in decimal

console.log("0o10:", octal8);               // 8
console.log("0o100:", octal64);             // 64
console.log("0o777:", octal511);            // 511

// ============================================================
console.log("\n=== 7. NUMERIC SEPARATORS (ES2021) ===\n");
// Underscores (_) can be used as separators for readability

const billion = 1_000_000_000;
const binaryWithSep = 0b1010_1111;
const hexWithSep = 0xFF_FF;
const decimalWithSep = 1_234.567_89;

console.log("1_000_000_000:", billion);             // 1000000000
console.log("0b1010_1111:", binaryWithSep);         // 175
console.log("0xFF_FF:", hexWithSep);                // 65535
console.log("1_234.567_89:", decimalWithSep);       // 1234.56789

// ============================================================
console.log("\n=== 8. BIGINT (ES2020) ===\n");
// For integers larger than Number.MAX_SAFE_INTEGER (2^53 - 1)
// Suffix: n

const big = 9007199254740991n;          // Max safe integer
const bigger = 9007199254740993n;       // Beyond safe integer range
const hugeBigInt = 123456789012345678901234567890n;
const bigFromNumber = BigInt(123);

console.log("BigInt:", big);                            // 9007199254740991n
console.log("Beyond safe int:", bigger);                // 9007199254740993n
console.log("Huge BigInt:", hugeBigInt);
console.log("BigInt from Number:", bigFromNumber);      // 123n
console.log("typeof BigInt:", typeof big);              // "bigint"

// BigInt CANNOT be mixed with regular numbers in arithmetic
// console.log(10n + 5); // TypeError!
console.log("10n + 5n:", 10n + 5n);                     // 15n
console.log("10n * 2n:", 10n * 2n);                     // 20n

// ============================================================
console.log("\n=== 9. SPECIAL NUMBER VALUES ===\n");

// Positive Infinity
const posInf = Infinity;
const alsoInf = 1 / 0;

// Negative Infinity
const negInf = -Infinity;
const alsoNegInf = -1 / 0;

// NaN - Not a Number
const notANumber = NaN;
const alsoNaN = 0 / 0;
const parseFail = Number("hello");

console.log("Infinity:", posInf);                       // Infinity
console.log("1 / 0:", alsoInf);                         // Infinity
console.log("-Infinity:", negInf);                      // -Infinity
console.log("-1 / 0:", alsoNegInf);                     // -Infinity
console.log("NaN:", notANumber);                        // NaN
console.log("0 / 0:", alsoNaN);                         // NaN
console.log("Number('hello'):", parseFail);             // NaN

// ============================================================
console.log("\n=== 10. NUMBER LIMITS & PROPERTIES ===\n");

console.log("Number.MAX_VALUE:", Number.MAX_VALUE);                     // ~1.79e+308
console.log("Number.MIN_VALUE:", Number.MIN_VALUE);                     // ~5e-324
console.log("Number.MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER);       // 9007199254740991
console.log("Number.MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER);       // -9007199254740991
console.log("Number.POSITIVE_INFINITY:", Number.POSITIVE_INFINITY);     // Infinity
console.log("Number.NEGATIVE_INFINITY:", Number.NEGATIVE_INFINITY);     // -Infinity
console.log("Number.EPSILON:", Number.EPSILON);                         // ~2.22e-16

// ============================================================
console.log("\n=== 11. SAFE INTEGER CHECK ===\n");

console.log("Number.isSafeInteger(9007199254740991):", Number.isSafeInteger(9007199254740991));   // true
console.log("Number.isSafeInteger(9007199254740992):", Number.isSafeInteger(9007199254740992));   // false
console.log("Number.isSafeInteger(42):", Number.isSafeInteger(42));                               // true

// ============================================================
console.log("\n=== 12. FLOATING POINT PRECISION ISSUE ===\n");
// Binary floating-point cannot precisely represent all decimal fractions

console.log("0.1 + 0.2:", 0.1 + 0.2);                   // 0.30000000000000004
console.log("0.1 + 0.2 === 0.3:", 0.1 + 0.2 === 0.3);   // false!

// Fix: use epsilon comparison or toFixed
console.log("(0.1 + 0.2).toFixed(1):", (0.1 + 0.2).toFixed(1));   // "0.3"
console.log("parseFloat((0.1 + 0.2).toFixed(10)):", parseFloat((0.1 + 0.2).toFixed(10)));

// ============================================================
console.log("\n=== 13. NUMBER CONVERSION ===\n");

console.log("Number('42'):", Number("42"));             // 42
console.log("Number('3.14'):", Number("3.14"));         // 3.14
console.log("Number(''):", Number(""));                 // 0
console.log("Number(true):", Number(true));             // 1
console.log("Number(false):", Number(false));           // 0
console.log("Number(null):", Number(null));             // 0
console.log("Number(undefined):", Number(undefined));   // NaN
console.log("parseInt('42px'):", parseInt("42px"));     // 42
console.log("parseFloat('3.14abc'):", parseFloat("3.14abc")); // 3.14
console.log("parseInt('FF', 16):", parseInt("FF", 16)); // 255

// ============================================================
console.log("\n=== 14. SUMMARY TABLE ===\n");

const summary = `
┌──────────────────────────┬─────────────────────────────────────────────────────┐
│ Literal Type             │ Example                                             │
├──────────────────────────┼─────────────────────────────────────────────────────┤
│ Decimal Integer          │ 42, -17, 0                                          │
│ Decimal Float            │ 3.14, 0.5, .75                                      │
│ Exponential              │ 1e6, 1e-6, 3.14e12                                  │
│ Hexadecimal (Base 16)    │ 0xFF, 0xABC                                         │
│ Binary (Base 2)          │ 0b1010, 0B1111                                      │
│ Octal (Base 8)           │ 0o77, 0O10                                          │
│ Numeric Separators       │ 1_000_000, 0xFF_FF                                  │
│ BigInt (ES2020)          │ 123n, 9007199254740993n                             │
│ Special Values           │ Infinity, -Infinity, NaN                            │
└──────────────────────────┴─────────────────────────────────────────────────────┘

KEY TAKEAWAYS:
1. JavaScript has ONLY one Number type: 64-bit floating point (no int/float separation)
2. Use BigInt (n suffix) for integers beyond Number.MAX_SAFE_INTEGER
3. BigInt and Number cannot be mixed in arithmetic operations
4. Floating-point math has precision issues (0.1 + 0.2 !== 0.3)
5. NaN is the only value not equal to itself: NaN !== NaN
6. typeof Infinity and NaN is still "number"
`;

console.log(summary);
