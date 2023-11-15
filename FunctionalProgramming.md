# filter, reduce, map
## Filter
It filters out items which full fill filtering conditions and return a new array.

```
const scores = [
  {name: 'Alvin', score: 95},
  {name: 'Lidya', score: 98},
  {name: 'Elias', score: 80},
  {name: 'Martha', score: 50},
  {name: 'John', score: 85},
  {name: 'Mathias', score: 100},
]

const scoresGreaterEighty = scores.filter((score) => score.score > 80)
console.log(scoresGreaterEighty)
```

## Map
It iterates through array elements and modifies them returning a new array.
It takes a callback function with elements, index, array parameter and return a new array.

```
###format
const modifiedArray = arr.map((element, index, arr) => element)

###Example
const numbers = [1, 2, 3, 4, 5]
const numbersSquare = numbers.map((num) => num * num)
console.log(numbersSquare)
// [1, 4, 9, 16, 25]

```
## Reduce
Is an array method that is used to reduce an array to a single value. It executes a provided function once for each element in the array, resulting in a single output value.

###Syntax
```
array.reduce(callback, initialValue);
```
The callback function takes `accumulator`, `current` and optional `initial value` as a parameter and returns a single value.

The callback function takes four parameters:

accumulator: The accumulator accumulates the callback's return values. It is the accumulated result of the previous callback invocations or the initialValue if provided.

currentValue: The current element being processed in the array.

currentIndex (optional): The index of the current element being processed.

array (optional): The array on which reduce() was called.

### Example
```
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15
```















