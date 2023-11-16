#Array Methods Assignment

numbers=[1,2,3,4,5]

#forEach

\*syntax : numbers.forEach(takes a callback with two paramters, first :value and second:index)

- the value name should be singular to what is that of the array name as best practise.
  Eg; numbers.forEach((number,index)=>console.log(number,index));

- forEach method always returns undefined values .i.e you can never get return value out of it

When to use:

- Use when you want to do something with each element

Don't Use:
*If you want to break/stop loop if the condition is false
*When working with async code:Promises,then,async/await can't be used inside forEach.

#Map

const itemList=[
{name:'egg',price:'7'},
{name:'chicken',price:'240'},
{name:'pencil',price:'5'},
{name:'eraser',price:'3'}
];

const price=itemList.map((item)=>item.price);
const itemName=itemList.map((item)=>item.name);
console.log(price);
console.log(itemName);

Diff b/w forEach and Map:
*Map method allocates memory to store and return values whereas forEach does not return any value.
*forEach method allows to change the original array whereas the map function return a new array thereby the original array being unaltered.

##Array Filter

- Returns a filtered copy of the array.
  Eg: numbers=[-6,2,-9,4,-8,7,5,3,2,-1,0]
  const filteredValue=numbers.filter((number)=> number >=0//no need to put return since it is automatically taken here)
  console.log(filteredValue);

##Array Reduce
\*Iterates over an array and computes a single value

- Syntax:arrayName.reduce((takes in two parameters:accumulator,currentValue)=>{},takes in an intial value:accumulator)
  numbers=[1,2,3,4,5,6,7,8,9,10]
  const getValue=numbers.reduce((acc,currVal)=>acc+currVal,0);
  console.log(getValue);

#Array Find
\*Returns the first value that satisfies the condition.

Eg: numbers=[1,2,3,4,5]
const getValue=numbers.find((number) =>number > 2)
console.log(getValue) o/p: 3 -->since its the first value satisfying the condition

//more Eg:
const employees=[
{name:'Harish',workHours:7},
{name:'Vinod',workHours:20},
{name:'Arjun',workHours:5},
{name:'Joshua',workHours:3}
];

const employeeWithMoreOverTime=employees.filter((employee)=>employee.workHours>5);
console.log(employeeWithMoreOverTime);

#Array Includes
*Checks if an array includes a particular element and returns true/false based on the result.
*It is CASE SENSITIVE

Eg: numbers=[1,2,3,4,5]
console.log(numbers.includes(4));
o/p:true

#Sort method

sort() : sorts in alpabetically order
numbers.sort((a,b)=>a-b) //a comparator function that sorts in ascending order.
numbers.sort((a,b)=>b-a) //a comparator function that sorts in descending order.
