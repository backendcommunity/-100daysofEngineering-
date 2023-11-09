# Lexical Scope in JavaScript

## Introduction
**Lexical Scope** (also known as Static Scope) in JavaScript is a fundamental concept that every developer should understand. It's the scope model that JavaScript follows and it's about how and where variables, constants, and functions can be accessed during the runtime of the code.

## Understanding Lexical Scope
In JavaScript, a scope is created:
- At the global level (outside of all code blocks).
- Every time a function is created.

When a variable is used in JavaScript, the JavaScript engine will try to find the variable's value in the current scope. If it can't find it, it will look in the outer scope and will continue to do so until it finds the variable or reaches the global scope.

```javascript
let globalVar = "I'm a global variable";

function outerFunc() {
    let outerVar = "I'm an outer variable";
    
    function innerFunc() {
        let innerVar = "I'm an inner variable";
        console.log(innerVar); // Output: I'm an inner variable
        console.log(outerVar); // Output: I'm an outer variable
        console.log(globalVar); // Output: I'm a global variable
    }
    
    innerFunc();
}

outerFunc();
```
In the above example, innerFunc has access to variables in its own scope, the outer function's scope, and the global scope.
Conclusion
Understanding lexical scope is crucial for writing effective JavaScript code. It helps in understanding how variables are looked up and can help prevent potential bugs in the code.
