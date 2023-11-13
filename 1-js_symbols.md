# Symbols in JavaScript

Symbols are a primitive data type introduced in ECMAScript 6 (ES6) to provide a way to create unique and immutable values. Unlike other primitive data types (such as strings or numbers), symbols are unique identifiers that help in avoiding naming collisions and unintended overwrites in the property keys of objects.

## Table of Contents
- [Introduction](#introduction)
- [Creating Symbols](#creating-symbols)
- [Symbol Properties](#symbol-properties)
- [Symbol Use Cases](#symbol-use-cases)
- [Global Symbols](#global-symbols)
- [Conclusion](#conclusion)

## Introduction

A Symbol is a unique and immutable data type in JavaScript. Each Symbol value is unique, even if it has the same description. Symbols are often used as keys for object properties to avoid naming conflicts.

```javascript
// Creating a symbol
const mySymbol = Symbol('description');
```
In this example, mySymbol is a Symbol with the optional description 'description'.

## Creating Symbols
Symbols are created using the Symbol() constructor. The optional parameter is a description that can be used for debugging but does not affect the uniqueness of the Symbol.

```JavaScript
const symbol1 = Symbol();
const symbol2 = Symbol('description');
const symbol3 = Symbol('description'); // symbol2 and symbol3 are different symbols
```

## Symbol Properties
Symbols have several unique properties and methods associated with them:

**1. Symbol.toStringTag:** A well-known symbol that provides a string representation of an object. It is used by built-in JavaScript objects to customize their default string description.

```JavaScript
const obj = {};
obj[Symbol.toStringTag] = 'CustomObject';
console.log(Object.prototype.toString.call(obj)); // [object CustomObject]
```