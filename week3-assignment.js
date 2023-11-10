// ** What is the different between these 3 array methods, filter, reduce and map. also give a code example for each

// ** Filter Method
// Filter method is an array method which loop through an array to prouce a copy of the array based on condition passes

const numbers = [1, 2, 3, 4, 5, 6];
const array = [1, 'a', 2, 'b,', 3, 'd', 4, 5, 6];

const string = array.filter((arr) => typeof arr === 'string');

console.log(string);

// ** Map method
//  Map method is an array method that create a copy of the main array then return the copy of the array with the condition passed

const squaredNum = numbers.map((num) => num * num);

console.log(squaredNum);

// ** Reduce Method
//  Reduce method is a that get a given accumulator mostly 0 then get current numbers and add the value from the current index to the accumulator

const total = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(total);
