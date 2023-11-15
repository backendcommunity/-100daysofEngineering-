# Lexical Scope
Lexical scope defines the region in your code where a variable can be accessed or modified.

***For example lets look at the code below:***
```
const outerFunc = () => {
  let outerVariable = "I am from outerFunc";

  const innerFunc = () => {
    let innerVariable = "I am from innerFunc";
    console.log(outerVariable); // Accessing outerVariable from the outer scope
    console.log(innerVariable); // Accessing innerVariable from the inner scope
  }

  innerFunc();
}

outerFunc();
```

In the code above the `innerFunc` has access to both innerVariable and outerVariable, as it is declared inside the scope of `outerFunc`.
When `innerFunc` tries to access a variable, JavaScript looks for that variable first in its own scope (the innermost scope). If it doesn't find the variable there, it looks in the outer scope, and so on, until it reaches the global scope which is  known as the scope chain.

In this case, the lexical scope ensures that `innerFunc` can access both innerVariable and outerVariable because `innerFunc` is lexically scoped within `outerFunc`.
