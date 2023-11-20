# Lexical Scope in JavaScript

Lexical scope is a fundamental concept in JavaScript that governs the visibility and accessibility of variables within the code. It describes how the JavaScript engine resolves variable names during the runtime of a program.

## Table of Contents
- [Scope](#scope)
- [Lexical Scope](#lexical-scope)
- [Example](#example)
- [Closure](#closure)
- [Conclusion](#conclusion)

## Scope

Scope refers to the context in which variables are declared and accessed. In JavaScript, there are two types of scope: global scope and local scope.

- **Global Scope:** Variables declared outside of any function or block have global scope, meaning they can be accessed from any part of the code.

- **Local Scope:** Variables declared inside a function or block have local scope, and they are only accessible within that function or block.

## Lexical Scope

Lexical scope, also known as static scope, is determined at the time of code writing. It is based on the physical placement of variables and blocks in the code. In other words, the scope of a variable is determined by its location within the source code.

```javascript
function outer() {
  let outerVar = 'I am in the outer function';

  function inner() {
    let innerVar = 'I am in the inner function';
    console.log(outerVar); // Accessing outerVar from the outer function
  }

  inner();
}

outer();
```

## Example
```JavaScript
function example() {
  let x = 10;

  if (true) {
    let y = 20;
    console.log(x); // Accessing x from the outer scope
    console.log(y); // Accessing y from the local scope
  }

  console.log(x); // Accessing x from the outer scope
  // console.log(y); // This would result in an error, as y is not defined in this scope
}

example();
```

In this example, the x variable is accessible both inside and outside the if block because it's declared in the outer scope. However, the y variable is only accessible within the if block due to its local scope.

## Closure

Closures are a natural outcome of lexical scope in JavaScript. A closure occurs when a function is defined within another function, and the inner function retains access to the outer function's variables even after the outer function has finished executing.

```JavaScript
function outer() {
  let outerVar = 'I am from outer';

  function inner() {
    console.log(outerVar); // Accessing outerVar from the closure
  }

  return inner;
}

const closureFunction = outer();
closureFunction(); // Logs 'I am from outer'

```
In this example, the inner function forms a closure over the outerVar, allowing it to access outerVar even after the outer function has completed execution.

## Conclusion
Understanding lexical scope is crucial for writing maintainable and error-free JavaScript code. It dictates how variables are accessed and provides the foundation for concepts like closures. By grasping lexical scope, developers can write more predictable and organized code.
