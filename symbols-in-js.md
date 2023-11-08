# Symbols In JavaScript

In JavaScript, symbols are a primitive data type introduced in ECMAScript 6 (ES6). A symbol is a unique and immutable value that can be used as an object property key. Symbols are often used to create property names for object properties that are meant to be completely private and not easily accessible from outside the object. Here are some key characteristics of symbols in JavaScript:

1. Uniqueness: Each symbol value is guaranteed to be unique. Even if you create multiple symbols with the same description, they are distinct and not equal to each other.

2. Immunity: Symbols are immutable, meaning their value cannot be changed once they are created. This makes them suitable for use as property keys, especially when you want to create private or hidden properties.

3. Symbol creation: You can create a symbol using the `Symbol()` constructor or the shorthand notation `Symbol(description)` where the optional `description` is a string that can help provide a human-readable description of the symbol, but it doesn't affect the uniqueness of the symbol.

```javascript
const symbol1 = Symbol();
const symbol2 = Symbol("description");
```

4. Using symbols as property keys: Symbols are typically used as object property keys to create hidden or private properties.

```javascript
const myObject = {
  [symbol1]: "I am a hidden property",
};

console.log(myObject[symbol1]); // Accessing the property using the symbol
```

5. Symbol properties: Symbols are not enumerable in for...in loops, and they do not appear in Object.keys(), Object.getOwnPropertyNames(), or JSON.stringify(). This makes it easier to create truly private properties in objects.

```javascript
const myObject = {
  [symbol1]: "I am a hidden property",
  regularProperty: "I am a regular property",
};

for (const key in myObject) {
  console.log(key); // Only "regularProperty" will be logged, not the symbol
}

console.log(Object.keys(myObject)); // Only ["regularProperty"] will be listed
```

NB: Symbols are useful for scenarios where you need to ensure the uniqueness and privacy of property keys in objects, such as when working with libraries, frameworks, or modules that may interact with other code and need to avoid naming conflicts.
