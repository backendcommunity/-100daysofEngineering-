Map:

Purpose: The map function is used to transform each element of an array based on a provided function.

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num) => num \* num);
// squaredNumbers is now [1, 4, 9, 16, 25]

Filter:

Purpose: The filter function is used to create a new array containing only the elements that pass a certain condition.

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
// evenNumbers is now [2, 4]

Loop:

Purpose: A loop is a programming construct that allows you to repeatedly execute a block of code until a certain condition is met.

const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
console.log(numbers[i]);
}
// This will print each number in the array

const people = [
{ name: 'Alice', age: 25 },
{ name: 'Bob', age: 30 },
{ name: 'Charlie', age: 22 },
{ name: 'David', age: 35 },
];

// Use map to create a new array with a message for each person
const greetings = people.map((person) => `Hello, ${person.name}!`);

// Use filter to get only people who are 30 or older
const olderPeople = people.filter((person) => person.age >= 30);

// Use a loop to print the greetings and ages of older people
for (let i = 0; i < olderPeople.length; i++) {
console.log(`${greetings[i]} Age: ${olderPeople[i].age}`);
}
