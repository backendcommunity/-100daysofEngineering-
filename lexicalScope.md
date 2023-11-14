# Lexical Scope

In JavaScript lexical scope is a fundamental concept which refers to how variable names are accessed and resolved in nested functions,  whereby the region or domain where a variable is sorted using where it can be found within the source code. Simply put lexical scope means the scope of a variables is defined by the placement of variables and blocks in the code.

A function nested inside another function in JavaScript forms a lexical scope. This nested function is in such a way that the inner function can access the variables of its outer function, which is not determined by the way the functions are called or executed but rather by how the functions are positioned within the code.


A simple example to illustrate lexical scope:

function outer() {
  let outerVar = 'I am from outer';

  function inner() {
    let innerVar = 'I am from inner';
    console.log(outerVar); // Inner function has access to outerVar
    console.log(innerVar);
  }

  inner();
}

outer();


As shown in this example, the concept of lexical scoping makes it feasible for the "inner" function to have access to both "outerVar" and its own "innerVar" in such a way that the inner function sort of have recall of its memory of the scope in which it was created, having access to variables in that scope even when it is called outside the scope.