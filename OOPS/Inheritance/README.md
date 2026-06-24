# Inheritance in JavaScript

## What is Inheritance?

Inheritance is an Object-Oriented Programming concept where a new class (child/subclass) derives properties and methods from an existing class (parent/superclass). It promotes code reusability and establishes a natural hierarchy between classes.

### Key Benefits
- **Code Reusability** - Reuse existing code instead of rewriting
- **Extensibility** - Add new features without modifying existing code
- **Organization** - Create logical hierarchies (e.g., Animal -> Dog)
- **Polymorphism** - Use child objects where parent objects are expected

---

## Types of Inheritance Supported in JavaScript

### 1. Single Inheritance
A class inherits from **one** parent class only.
```javascript
class Child extends Parent { }
```

### 2. Multi-Level Inheritance
A class is derived from a class which is also derived from another class (chain of inheritance).
```javascript
class A { }
class B extends A { }
class C extends B { }
```

### 3. Hierarchical Inheritance
Multiple classes inherit from a **single** parent class.
```javascript
class Parent { }
class Child1 extends Parent { }
class Child2 extends Parent { }
```

### 4. Multiple Inheritance (Simulated via Mixins)
JavaScript classes can only extend **one** class directly. Multiple inheritance is achieved using **Mixins** - functions that copy properties from multiple sources into one class.

### 5. Prototypal Inheritance
JavaScript's core inheritance model. Every object has an internal link (`__proto__`) to another object called its prototype.

---

## Files in this Folder

| File | Concept |
|------|---------|
| `single_inheritance.js` | One child extends one parent |
| `multilevel_inheritance.js` | Chain inheritance (A -> B -> C) |
| `hierarchical_inheritance.js` | Multiple children from one parent |
| `other_inheritance.js` | Mixins, Prototypal inheritance, Method overriding, `super` keyword |

---

## The `super` Keyword

- `super()` - Calls the parent class constructor
- `super.method()` - Calls a parent class method
- Must call `super()` before using `this` in the child constructor

---

## How to Run

```bash
node OOPS/Inheritance/single_inheritance.js
node OOPS/Inheritance/multilevel_inheritance.js
node OOPS/Inheritance/hierarchical_inheritance.js
node OOPS/Inheritance/other_inheritance.js
```
