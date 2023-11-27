In JavaScript, a symbol is a primitive data type introduced in ECMAScript 2015 (ES6). Symbols are unique and immutable values, often used as unique identifiers. Unlike strings, symbols are guaranteed to be unique, which makes them useful for scenarios where you want to create private or hidden object properties.

Here's how you can create a symbol:

```javascript
// Creating a symbol with an optional description
let mySymbol = Symbol("This is a symbol");
```

Symbols are typically used as keys for object properties to avoid naming conflicts. Here's an example:

```javascript
// Creating symbols
let symbol1 = Symbol("symbol1");
let symbol2 = Symbol("symbol2");

// Creating an object with symbol keys
let myObject = {
  [symbol1]: "Value for symbol1",
  [symbol2]: "Value for symbol2"
};

// Accessing values using symbols
console.log(myObject[symbol1]); // Output: Value for symbol1
console.log(myObject[symbol2]); // Output: Value for symbol2
```

The `Symbol` function can be called with an optional description, which is useful for debugging and doesn't affect the uniqueness of the symbol.

It's important to note that symbols are not enumerable in `for...in` loops and are not included in `Object.keys()` or `Object.getOwnPropertyNames()`. This makes them suitable for creating "private" properties in objects.

Here's an example:

```javascript
let myObject = {
  publicProperty: "I'm public!",
  [Symbol("privateProperty")]: "I'm private!"
};

console.log(Object.keys(myObject)); // Output: ["publicProperty"]
```

In this example, the symbol-keyed property is not visible when enumerating the object's keys.

Symbols also have some predefined, well-known values called "symbolic properties." For example:

- `Symbol.iterator`: A symbol that specifies an object's default iterator.
- `Symbol.match`, `Symbol.replace`, and `Symbol.search`: Symbols used for regular expression matching.

Symbols provide a way to create truly unique and non-colliding identifiers in JavaScript. They are often used in conjunction with other features introduced in ES6 and later versions of the language.