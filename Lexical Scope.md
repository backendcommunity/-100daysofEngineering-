# Lexical Scope
In JavaScript, lexical scope is a key concept that defines how variable names are resolved at the time of writing code. Lexical scoping is based on the physical structure of the code, meaning that the scope of a variable is determined by its location within the source code.

Let's explore lexical scope in JavaScript with examples:

1. **Global Scope:**
   - Variables declared outside any function or block have global scope, meaning they can be accessed from anywhere in the code.

   ```javascript
   const globalVar = 'I am global';

   function example() {
     console.log(globalVar); // Accessing globalVar from within the function
   }

   example();
   ```

2. **Function Scope:**
   - Variables declared inside a function have function scope, meaning they are only accessible within that function.

   ```javascript
   function outer() {
     const outerVar = 'I am from outer';

     function inner() {
       console.log(outerVar); // Accessing outerVar from within the inner function
     }

     inner();
   }

   outer();
   ```

3. **Block Scope (ES6 and later):**
   - With the introduction of `let` and `const` in ECMAScript 6 (ES6), block scope was introduced. Variables declared with `let` or `const` are limited to the block (enclosed by curly braces) in which they are defined.

   ```javascript
   if (true) {
     const blockVar = 'I am in a block';
     console.log(blockVar); // Accessing blockVar inside the block
   }

   // console.log(blockVar); // Error: blockVar is not defined outside the block
   ```

4. **Nested Scopes and Closure:**
   - Lexical scope allows for the nesting of scopes. Inner functions have access to variables in their outer (lexical) scope, even after the outer function has finished execution. This behavior is known as closure.

   ```javascript
   function outer() {
     const outerVar = 'I am from outer';

     function inner() {
       console.log(outerVar); // Accessing outerVar from within the inner function
     }

     return inner;
   }

   const closureFunction = outer();
   closureFunction(); // This still logs 'I am from outer'
   ```

   In this example, `inner` forms a closure over `outerVar`, retaining access to it even after `outer` has completed.
