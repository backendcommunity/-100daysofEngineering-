# Lexical Scope
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
