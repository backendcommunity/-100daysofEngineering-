# Lexical Scope

## Description
First assignment on Lexical Scope

----------------


## What is Lexical Scope?

Lexical scope refers to the region of a program where a variable is visible and accessible. In other words, it refers to the area of code where a variable gets its meaning.

Variables in JavaScript have one of two scopes:

* Global scope: Variables defined outside of a function are accessible anywhere in your JavaScript code. They are said to have global scope.
* Local scope: Variables defined inside a function are accessible only within that function. They are said to have local scope.

Lexical scope in JavaScript is determined statically, based on the location where a variable is declared. This is in contrast to dynamic scope, where the scope is determined based on the call stack.

Some key points about lexical scope:

- The scope of a variable is determined by where it is declared, not where it is used.
- Inner functions have access to variables declared in outer functions, but not vice versa. This is known as closures.
- Variables declared with `let` and `const` have block scope and are only accessible within that block.
- Variables declared with `var` have function scope and are accessible within the entire function.

Here is an example:

function outer() {
  let message = "Hello";

  function inner() {
    console.log(message); 
  }

  inner();
}

outer(); // Prints "Hello"

Here, `message` is defined within the scope of the `outer()` function. But the inner `inner()` function has access to it through closure, since it is defined within the lexical scope of `outer()`.

Hope this explanation helps! Let me know if you have any other questions.
