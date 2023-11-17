# Lexical Scope in JavaScript

Lexical scope is a fundamental concept in programming that determines the accessibility of variables and functions within a program. In JavaScript, the lexical scope is used to determine the accessibility of variables and functions within a program. Understanding lexical scope is crucial for writing clean, organized, and maintainable code.

## Key Concepts
- **Scope Definition**: Scope refers to the area where an item (such as a function or variable) is visible and accessible to other code. Global scope means global space, while local scope means a restricted region.
- **Lexical Scope**: Lexical scope is the definition area of an expression. It refers to the place in which an item was created. Another name for lexical scope is static scope.

## How Lexical Scope Works
- **Global Scope**: When a variable is defined outside of any functions or blocks, it has a global scope. This means that it can be accessed from anywhere within the program, including within functions.
- **Local Scope**: Local variables can only be accessed within the function or block in which they are defined. The nested scope allows functions to access variables defined in parent functions, and block scope allows variables to have limited accessibility within a block of code.

## Example
Consider the following JavaScript code:
```javascript
// Define a variable in the global scope
const myName = "Omaka";

// Call myName variable from a function
function getName() {
  return myName;
}

In this example, `myName` is defined in the global scope and can be accessed within the `getName` function.
