# Encapsulation in JavaScript

## What is Encapsulation?

Encapsulation is the bundling of data and methods that operate on that data within a single unit (like a class), while restricting direct access to some of the object's components. It is one of the four pillars of Object-Oriented Programming (OOP).

### Simple Definition
- **Hide** the internal details and sensitive data
- **Show** only what is necessary through controlled access
- **Protect** data from accidental or unauthorized modification

---

## Benefits of Encapsulation

1. **Data Hiding** - Keep internal state private and safe from external interference
2. **Control** - Control exactly how data is accessed or modified
3. **Validation** - Add rules and checks when setting values
4. **Flexibility** - Change internal implementation without breaking external code
5. **Security** - Prevent unauthorized access to sensitive data

---

## Types of Access in JavaScript

| Type | Syntax | Access |
|------|--------|--------|
| **Public** | `this.name` or `name = ""` | Accessible from anywhere |
| **Private** | `#name` | Accessible only inside the class |
| **Protected** | `_name` (convention) | Conventionally private, but technically public |

---

## Files in this Folder

### 1. `public_private_example.js`
Demonstrates:
- Public variables (default, no protection)
- Private variables using `#` syntax (ES2022+)
- Private variables using Closures (functional approach)
- Protected variables using `_` prefix (convention)

### 2. `getter_setter_example.js`
Demonstrates:
- Traditional getter/setter methods
- Modern `get` / `set` keywords
- Validation inside setters
- Computed properties
- Practical Bank Account example with full encapsulation
- Object literal getters/setters

---

## Quick Reference

### Private Fields (Modern)
```javascript
class MyClass {
    #privateField = 0;  // Truly private
    
    getPrivate() {
        return this.#privateField; // Accessible inside class
    }
}
```

### Getters and Setters (Modern)
```javascript
class MyClass {
    #value = 0;
    
    get value() {
        return this.#value;
    }
    
    set value(newValue) {
        if (newValue >= 0) {
            this.#value = newValue;
        }
    }
}

const obj = new MyClass();
console.log(obj.value);   // Uses getter
obj.value = 10;           // Uses setter
```

---

## How to Run

```bash
node encapsulation_concepts.js
node public_private_example.js
node getter_setter_example.js
```

---

## Key Takeaway

> **Encapsulation** allows you to protect your data by making fields private and exposing only the methods (getters/setters) needed to interact with that data safely.
