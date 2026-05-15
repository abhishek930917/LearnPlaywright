let a=10,b=20;

let sum=a+b;
console.log("Sum:", sum);
let diff=a-b;
console.log("Difference:", diff);
let product=a*b;   
console.log("Product:", product);
let quotient=a/b;
console.log("Quotient:", quotient);
let remainder=a%b;
console.log("Remainder:", remainder);

let exponentiation=a**2;// a raised to the power of 2
console.log("Exponentiation (a^2):", exponentiation);

let x=10;
x++; // Post-increment: returns x then increments
console.log("Post-increment (x++):", x); // 11
x--; // Post-decrement: returns x then decrements
console.log("Post-decrement (x--):", x); // 10  
x+=5; // x = x + 5
console.log("Addition assignment (x += 5):", x);
x-=3; // x = x - 3
console.log("Subtraction assignment (x -= 3):", x);
x*=2; // x = x * 2
console.log("Multiplication assignment (x *= 2):", x);
x/=4; // x = x / 4
console.log("Division assignment (x /= 4):", x);
x%=3; // x = x % 3
console.log("Remainder assignment (x %= 3):", x);

let x=10;
x=+5; // Unary plus: converts to number
console.log("Unary plus (+5):", x);
x=-x; // Unary minus: negates the value
console.log("Unary minus (-x):", x);
