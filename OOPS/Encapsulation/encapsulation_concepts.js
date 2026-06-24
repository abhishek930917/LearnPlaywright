// ============================================================================
// ENCAPSULATION IN JAVASCRIPT - Complete Guide
// ============================================================================

/*
WHAT IS ENCAPSULATION?
----------------------
Encapsulation is one of the four pillars of Object-Oriented Programming (OOP).
It means "bundling data (variables) and methods (functions) that work on that 
data into a single unit (class/object), and restricting access to some of the 
object's components."

In simple words:
- Hide the internal details (sensitive data)
- Show only what is necessary (controlled access)
- Protect data from accidental or unauthorized modification

BENEFITS OF ENCAPSULATION:
--------------------------
1. Data Hiding        -> Keep internal state private and safe
2. Control            -> Control how data is accessed or modified
3. Validation         -> Add rules when setting values
4. Flexibility        -> Change internal implementation without affecting external code
5. Security           -> Prevent unauthorized access to sensitive data

TYPES OF ACCESS IN JS:
----------------------
1. PUBLIC    -> Accessible from anywhere (default in JS)
2. PRIVATE   -> Accessible only inside the class/object
3. PROTECTED -> Conventionally private (prefixed with _)

WAYS TO ACHIEVE ENCAPSULATION IN JAVASCRIPT:
--------------------------------------------
1. Using Closures (before ES6)
2. Using WeakMap (older approach)
3. Using #private fields (Modern ES2022+)
4. Using Getters and Setters
*/

console.log("=== ENCAPSULATION CONCEPTS LOADED ===");
console.log("Run individual example files to see encapsulation in action.\n");
