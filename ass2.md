Lexical Structure

Lexical scope, also known as static scope, is a fundamental concept in JavaScript (and many other programming languages) that determines how variable names are resolved in a program. Lexical scope is based on the physical structure of the code and where variables and functions are declared within the code.
In JavaScript, when a variable is referenced, the JavaScript engine looks for that variable in the current scope and, if not found, it traverses the scope chain to find it. Lexical scope follows these rules:

- Scope Nesting: Each function or block of code defines a new scope. Variables declared inside a scope are accessible within that scope and any nested scopes.
- Outer Scope Access: A scope has access to variables in its containing (outer) scope. This is often referred to as the "closure" property, allowing inner functions to access variables from their containing functions.
- Compile-Time Determination: Lexical scope is determined at compile-time or during code parsing, based on where variables and functions are declared in the code. This means that scope is static and doesn't change during runtime. 
  Code snippet 1
  function outer() {
  var outerVar = "I'm in the outer scope";

      function inner() {
            var innerVar = "I'm in the inner scope";
            console.log(outerVar); // Inner function can access the outerVar

  }

inner();
console.log(innerVar); // This will result in an error because innerVar is not accessible here.
}

outer();

Code snippet 2
function outerfunction( ){
let count = 0;
return function ( ){
count++;
console.log(count)
}
}

const counterOne = outerfunction()  
const counterTwo = outerfunction()

counterOne() //1
counterOne() //2
counterTwo() //1
counterOne() //3
counterTwo() //2
counterOne() //4

Here's what's happening step by step:

- outerfunction is called twice, creating two separate closures.
- outerfunction initializes count as 0 and returns an inner function that, when called, increments count and logs its value.
- counterOne and counterTwo are two separate instances of the inner function returned by outerfunction, and each maintains its own lexical scope (its own count variable).
  When you execute counterOne() and counterTwo(), they operate independently:
- counterOne():
  - Initializes its own count variable (in its closure) and increments it with each call. Thus, it logs the count starting from 1 and increments accordingly.
- counterTwo(): \* Operates separately and initializes its own count, starting from 1.
  Hence, you're seeing the count increase for each function separately, as they have their own independent closures keeping track of their respective counts.
