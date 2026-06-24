# Polymorphism in JavaScript

## What is Polymorphism?

**Polymorphism** means "many forms." In Object-Oriented Programming, it allows objects of different classes to be treated as objects of a common parent class, while each object responds to the same method call in its own specific way.

### Simple Definition
- Same **method name** behaves **differently** based on the object that calls it.
- One **interface**, multiple **implementations**.

---

## Real-World Analogy

Think of a **"Start" button**:
- Pressing it on a **Car** starts the engine.
- Pressing it on a **Phone** unlocks the screen.
- Pressing it on a **Computer** boots the OS.

Same action (`start()`), different behavior depending on the object.

---

## Types of Polymorphism in JavaScript

### 1. Subtype / Runtime Polymorphism (Method Overriding)
A child class provides a specific implementation of a method that is already defined in its parent class. JavaScript decides at **runtime** which method to execute based on the actual object's class.

**File:** `method_overriding.js`

### 2. Duck Typing (Structural Polymorphism)
JavaScript is dynamically typed. If an object has the required method/property, it can be used — regardless of its class. "If it looks like a duck and quacks like a duck, it's a duck."

**File:** `duck_typing.js`

### 3. Ad-hoc Polymorphism (Function Overloading Simulation)
JavaScript does not natively support method overloading (same method name, different parameters). However, we can simulate it using default parameters, rest parameters, or argument checks.

**File:** `function_overloading.js`

### 4. Practical Real-World Example
A complete payment processing system demonstrating all polymorphism concepts working together.

**File:** `practical_example.js`

---

## Key Benefits

1. **Code Reusability** - Write generic functions that work with any object type
2. **Extensibility** - Add new types without changing existing code
3. **Loose Coupling** - Functions depend on behavior, not specific types
4. **Readability** - Natural, intuitive code flow

---

## How to Run

```bash
node OOPS/polymorphism/method_overriding.js
node OOPS/polymorphism/duck_typing.js
node OOPS/polymorphism/function_overloading.js
node OOPS/polymorphism/practical_example.js
```
