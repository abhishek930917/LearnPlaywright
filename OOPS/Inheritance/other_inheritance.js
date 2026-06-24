// ============================================================================
// OTHER INHERITANCE CONCEPTS IN JAVASCRIPT
// ============================================================================

/*
This file covers additional inheritance concepts in JavaScript:

1. PROTOTYPAL INHERITANCE     - JS's core inheritance mechanism
2. MIXINS (Multiple Inheritance) - Simulating multiple inheritance
3. CONSTRUCTOR INHERITANCE    - Pre-ES6 class inheritance
4. OBJECT.CREATE()            - Creating objects with a prototype
5. METHOD OVERRIDING RULES    - Best practices
6. COMPOSITION OVER INHERITANCE - Alternative approach
*/


// ============================================================================
// 1. PROTOTYPAL INHERITANCE (The Foundation of JS)
// ============================================================================

/*
JavaScript is a prototype-based language. Every object has an internal property
called [[Prototype]] (accessible via __proto__ or Object.getPrototypeOf()).
When you access a property/method on an object, JS first looks at the object,
then walks up the prototype chain until it finds it or reaches null.
*/

console.log("=== PROTOTYPAL INHERITANCE ===");

// Parent object (prototype)
const animalPrototype = {
    eat() {
        console.log(`${this.name} is eating.`);
    },
    sleep() {
        console.log(`${this.name} is sleeping.`);
    }
};

// Create child object linked to animalPrototype
const dog = Object.create(animalPrototype);
dog.name = "Buddy";
dog.bark = function() {
    console.log(`${this.name} barks: Woof!`);
};

console.log("--- Using Object.create() ---");
dog.eat();   // Inherited from animalPrototype
dog.sleep(); // Inherited from animalPrototype
dog.bark();  // Own method

// Check prototype chain
console.log(`dog.__proto__ === animalPrototype: ${Object.getPrototypeOf(dog) === animalPrototype}`);

// Another child
const cat = Object.create(animalPrototype);
cat.name = "Whiskers";
cat.meow = function() {
    console.log(`${this.name} meows: Meow!`);
};

cat.eat();   // Inherited
cat.meow();  // Own
console.log("\n");


// ----------------------------------------------------------------------------
// Prototype Chain Visualization
// ----------------------------------------------------------------------------
console.log("=== PROTOTYPE CHAIN ===");
console.log(`
Chain for 'dog':
  dog -> animalPrototype -> Object.prototype -> null

dog.eat() is found on animalPrototype
dog.toString() is found on Object.prototype
dog.unknownMethod -> Error: not found in chain
`);

// Modifying the prototype affects all objects linked to it
animalPrototype.move = function() {
    console.log(`${this.name} is moving.`);
};

dog.move(); // Now available on dog too!
cat.move(); // And on cat!
console.log("\n");


// ============================================================================
// 2. MIXINS (Simulating Multiple Inheritance)
// ============================================================================

/*
JavaScript classes can only extend ONE class. But we can simulate multiple
inheritance using MIXINS - functions that copy methods from multiple sources
into a single class.
*/

console.log("=== MIXINS (Multiple Inheritance Simulation) ===");

// Mixin 1: Can fly
const Flyable = (Base) => class extends Base {
    fly() {
        console.log(`${this.name} is flying at ${this.flySpeed || 100} km/h!`);
    }

    land() {
        console.log(`${this.name} is landing.`);
    }
};

// Mixin 2: Can swim
const Swimmable = (Base) => class extends Base {
    swim() {
        console.log(`${this.name} is swimming at ${this.swimSpeed || 10} km/h!`);
    }

    dive() {
        console.log(`${this.name} is diving underwater.`);
    }
};

// Mixin 3: Can walk
const Walkable = (Base) => class extends Base {
    walk() {
        console.log(`${this.name} is walking.`);
    }

    run() {
        console.log(`${this.name} is running.`);
    }
};

// Base class
class Animal {
    constructor(name) {
        this.name = name;
    }

    breathe() {
        console.log(`${this.name} is breathing.`);
    }
}

// Duck: Can fly, swim, and walk (multiple mixins!)
class Duck extends Flyable(Swimmable(Walkable(Animal))) {
    constructor(name) {
        super(name);
        this.flySpeed = 80;
        this.swimSpeed = 15;
    }

    quack() {
        console.log(`${this.name} says: Quack!`);
    }
}

// Fish: Can only swim
class Fish extends Swimmable(Animal) {
    constructor(name) {
        super(name);
        this.swimSpeed = 50;
    }
}

// Eagle: Can only fly
class Eagle extends Flyable(Animal) {
    constructor(name) {
        super(name);
        this.flySpeed = 200;
    }
}

console.log("--- Duck (Fly + Swim + Walk) ---");
const duck = new Duck("Donald");
duck.breathe();  // From Animal
duck.fly();      // From Flyable
duck.swim();     // From Swimmable
duck.walk();     // From Walkable
duck.quack();    // From Duck

console.log("--- Fish (Swim only) ---");
const fish = new Fish("Nemo");
fish.breathe();
fish.swim();
// fish.fly(); // Error: fish.fly is not a function

console.log("--- Eagle (Fly only) ---");
const eagle = new Eagle("Eddie");
eagle.breathe();
eagle.fly();
console.log("\n");


// ============================================================================
// 3. CONSTRUCTOR FUNCTION INHERITANCE (Pre-ES6)
// ============================================================================

console.log("=== CONSTRUCTOR FUNCTION INHERITANCE ===");

// Parent constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log(`Hello, I'm ${this.name}, ${this.age} years old.`);
};

Person.prototype.haveBirthday = function() {
    this.age++;
    console.log(`Happy birthday ${this.name}! Now ${this.age} years old.`);
};

// Child constructor function
function Student(name, age, grade) {
    // Call parent constructor
    Person.call(this, name, age);
    this.grade = grade;
}

// Inherit from Person's prototype
Student.prototype = Object.create(Person.prototype);

// Fix constructor reference
Student.prototype.constructor = Student;

// Add student-specific methods
Student.prototype.study = function() {
    console.log(`${this.name} is studying for grade ${this.grade}.`);
};

const person = new Person("Alice", 30);
person.greet();

const student = new Student("Bob", 20, "A");
student.greet();   // Inherited from Person
student.study();   // Own method
student.haveBirthday(); // Inherited from Person

console.log(`student instanceof Student: ${student instanceof Student}`); // true
console.log(`student instanceof Person: ${student instanceof Person}`);   // true
console.log("\n");


// ============================================================================
// 4. OBJECT.ASSIGN() FOR MIXING IN METHODS
// ============================================================================

console.log("=== OBJECT.ASSIGN() FOR MIXINS ===");

const CanSing = {
    sing() {
        console.log(`${this.name} is singing a beautiful song.`);
    }
};

const CanDance = {
    dance() {
        console.log(`${this.name} is dancing gracefully.`);
    }
};

const CanPaint = {
    paint() {
        console.log(`${this.name} is painting a masterpiece.`);
    }
};

// Create a class and mix in capabilities
class Artist {
    constructor(name) {
        this.name = name;
    }
}

// Mix in multiple capabilities
Object.assign(Artist.prototype, CanSing, CanDance, CanPaint);

const artist = new Artist("Picasso");
artist.sing();   // From CanSing mixin
artist.dance();  // From CanDance mixin
artist.paint();  // From CanPaint mixin
console.log("\n");


// ============================================================================
// 5. METHOD OVERRIDING RULES AND super
// ============================================================================

console.log("=== METHOD OVERRIDING RULES ===");

class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }

    start() {
        console.log(`${this.brand} vehicle is starting.`);
    }

    getInfo() {
        return `Brand: ${this.brand}`;
    }
}

class Car extends Vehicle {
    constructor(brand, model) {
        super(brand);
        this.model = model;
    }

    // Override with super call (extends parent behavior)
    start() {
        super.start(); // Call parent's start
        console.log(`${this.model} engine is now running.`);
    }

    // Override with completely new behavior
    getInfo() {
        // Option 1: Extend parent
        return `${super.getInfo()}, Model: ${this.model}`;

        // Option 2: Completely replace (don't call super)
        // return `Car: ${this.brand} ${this.model}`;
    }
}

const car = new Car("Toyota", "Camry");
car.start();
console.log(car.getInfo());

console.log(`
OVERRIDING RULES:
1. Child method with SAME NAME replaces parent method
2. Use super.methodName() to include parent behavior
3. You can completely replace behavior by not calling super
4. Must call super() in constructor BEFORE using 'this'
5. Cannot override private methods (#method)
`);
console.log("\n");


// ============================================================================
// 6. COMPOSITION OVER INHERITANCE
// ============================================================================

console.log("=== COMPOSITION OVER INHERITANCE ===");

/*
Sometimes composition is better than deep inheritance hierarchies.
Instead of "is-a" relationship (Dog IS AN Animal),
use "has-a" relationship (Car HAS AN Engine).
*/

class Engine {
    constructor(type, horsepower) {
        this.type = type;
        this.horsepower = horsepower;
    }

    start() {
        console.log(`${this.type} engine (${this.horsepower} HP) starting... Vroom!`);
    }
}

class Wheels {
    constructor(count) {
        this.count = count;
    }

    rotate() {
        console.log(`${this.count} wheels rotating.`);
    }
}

class Stereo {
    constructor(brand) {
        this.brand = brand;
    }

    playMusic() {
        console.log(`${this.brand} stereo playing music.`);
    }
}

// Car COMPOSES (has) Engine, Wheels, and Stereo
// Instead of inheriting from them
class CarComposed {
    constructor(brand, model, engineType, hp, stereoBrand) {
        this.brand = brand;
        this.model = model;
        // Composition: Car HAS these components
        this.engine = new Engine(engineType, hp);
        this.wheels = new Wheels(4);
        this.stereo = new Stereo(stereoBrand);
    }

    start() {
        this.engine.start();
        this.wheels.rotate();
        console.log(`${this.brand} ${this.model} is ready to drive!`);
    }

    playMusic() {
        this.stereo.playMusic();
    }
}

const myCar = new CarComposed("Honda", "Civic", "V4", 180, "Bose");
myCar.start();
myCar.playMusic();

console.log(`
COMPOSITION BENEFITS:
- More flexible than inheritance
- Can change behavior at runtime by swapping components
- No tight coupling to parent class
- Easier to test (mock components)
- Avoids "fragile base class" problem

INHERITANCE vs COMPOSITION:
- Use inheritance for "is-a" relationships (Dog IS AN Animal)
- Use composition for "has-a" relationships (Car HAS AN Engine)
- Prefer composition when unsure
`);
console.log("\n");


// ============================================================================
// 7. CLASS STATIC METHODS AND INHERITANCE
// ============================================================================

console.log("=== STATIC METHODS INHERITANCE ===");

class BaseClass {
    static baseMethod() {
        return "Base static method";
    }

    static utility() {
        return "Utility from base";
    }
}

class DerivedClass extends BaseClass {
    static derivedMethod() {
        return "Derived static method";
    }

    // Can override static methods too
    static utility() {
        return `${super.utility()} + Derived override`;
    }
}

console.log(BaseClass.baseMethod());      // Base static method
console.log(DerivedClass.baseMethod());   // Inherited from BaseClass
console.log(DerivedClass.derivedMethod()); // Derived static method
console.log(DerivedClass.utility());      // Overridden static method
console.log("\n");


// ============================================================================
// 8. PROPERTY DESCRIPTORS AND INHERITANCE
// ============================================================================

console.log("=== PROPERTY DESCRIPTORS ===");

class ParentWithGetter {
    #privateValue = 100;

    get value() {
        return this.#privateValue;
    }

    set value(newValue) {
        if (newValue >= 0) {
            this.#privateValue = newValue;
        }
    }
}

class ChildWithGetter extends ParentWithGetter {
    doubleValue() {
        return this.value * 2; // Access inherited getter
    }
}

const childGetter = new ChildWithGetter();
console.log(`Value: ${childGetter.value}`);         // 100 (inherited getter)
childGetter.value = 50;                              // Uses inherited setter
console.log(`Double: ${childGetter.doubleValue()}`); // 100
console.log("\n");


// ============================================================================
// SUMMARY
// ============================================================================
console.log("=== OTHER INHERITANCE CONCEPTS SUMMARY ===");
console.log(`
1. PROTOTYPAL INHERITANCE:
   - Core of JavaScript's object system
   - Objects inherit from other objects via prototype chain
   - Use Object.create() to set an object's prototype

2. MIXINS (Multiple Inheritance):
   - JS classes can only extend one class
   - Mixins simulate multiple inheritance
   - Use function mixins: const Mixin = (Base) => class extends Base { }
   - Or Object.assign() to copy methods

3. CONSTRUCTOR FUNCTION INHERITANCE:
   - Pre-ES6 way of creating classes
   - Use Function.prototype and Object.create()
   - Call parent with Parent.call(this, args)

4. COMPOSITION OVER INHERITANCE:
   - "Has-a" instead of "is-a"
   - More flexible and maintainable
   - Components can be swapped at runtime

5. STATIC METHODS:
   - Static methods are inherited too
   - Can be overridden in child classes
   - Use super.staticMethod() to call parent version

6. GETTERS/SETTERS:
   - Inherited just like regular methods
   - Private fields accessed through getters/setters are encapsulated
`);
