### Map, Filter, and Reduce in JavaScript

JavaScript provides powerful array methods such as `map`, `filter`, and `reduce` that allow for efficient data manipulation and transformation. Here's an elaborate explanation of each method with examples:

#### Map
The `map` method is used to create a new array by applying a function to each element of the original array. It does not modify the original array.

**Syntax:**
```javascript
const new_array = arr.map(function callback(element, index, array) {
  // Return value for new_array
  });
  ```

  **Example:**
  ```javascript
  const numbers = [1, 2, 3, 4];
  const doubled = numbers.map(item => item * 2);
  console.log(doubled); 
  // Output: [2, 4, 6, 8]
  ```

  #### Filter
  The `filter` method creates a new array with elements that pass a certain condition. It does not modify the original array.

  **Syntax:**
  ```javascript
  const new_array = arr.filter(function callback(element, index, array) {
    // Return true or false
    });
    ```

    **Example:**
    ```javascript
    const studentGrades = [
      { name: 'Omaka', grade: 80 },
        { name: 'Justice', grade: 65 },
	  { name: 'Okoro', grade: 90 }
	  ];
	  const passingGrades = studentGrades.filter(student => student.grade >= 70);
	  console.log(passingGrades); 
	  // Output: [{ name: 'Omaka', grade: 80 }, { name: 'Okoro', grade: 90 }]
	  ```

	  #### Reduce
	  The `reduce` method reduces an array to a single value by performing a desired operation on the elements collectively.

	  **Syntax:**
	  ```javascript
	  const result = arr.reduce(function callback(accumulator, currentValue, index, array) {
	    // Return updated accumulator
	    }, initialValue);
	    ```

	    **Example:**
	    ```javascript
	    const numbers = [1, 2, 3, 4];
	    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
	    console.log(sum); 
	    // Output: 10
	    ```

	    ----------------------------------------------------------------
In JavaScript, loops are used to iterate over a set of values or perform a specific task repeatedly. There are several types of loops in JavaScript, each serving a different purpose. Here's a detailed explanation of the common types of loops with examples:

### For Loop
The `for` loop is used when the number of iterations is known. It consists of three parts: initialization, condition, and iteration.

**Syntax:**
```javascript
for (initialization; condition; iteration) {
  // code to be executed
  }
  ```

  **Example:**
  ```javascript
  for (let i = 0; i < 5; i++) {
    console.log(i);
    }
    ```

    ### While Loop
The `while` loop is used when the number of iterations is not known beforehand. It continues to execute as long as the specified condition is true.

    **Syntax:**
    ```javascript
    while (condition) {
      // code to be executed
    }
      ```

      **Example:**
      ```javascript
      let i = 0;
      while (i < 5) {
        console.log(i);
	  i++;
      }
	  ```

	  ### Do-While Loop
The `do-while` loop is similar to the `while` loop, but it always executes the block of code at least once before checking the condition.

	  **Syntax:**
	  ```javascript
	  do {
	    // code to be executed
	  } while (condition);
	    ```

	    **Example:**
	    ```javascript
	    let i = 0;
	    do {
	      console.log(i);
	        i++;
	    } while (i < 5);
		```

		### For-In Loop
		The `for-in` loop is used to iterate over the properties of an object.

		**Syntax:**
		```javascript
		for (variable in object) {
		  // code to be executed
		}
		  ```

		  **Example:**
		  ```javascript
		  const person = { name: 'John', age: 30 };
		  for (let key in person) {
		    console.log(key + ': ' + person[key]);
		  }
		    ```

		    ### For-Of Loop
		    The `for-of` loop is used to iterate over iterable objects such as arrays, strings, maps, sets, etc.

		    **Syntax:**
		    ```javascript
		    for (variable of iterable) {
		      // code to be executed
		    }
		      ```

		      **Example:**
		      ```javascript
		      const colors = ['red', 'green', 'blue'];
		      for (let color of colors) {
		        console.log(color);
		      }
			```

These loop constructs provide flexibility and control over the flow of execution in JavaScript, allowing developers to efficiently handle repetitive tasks and iterate over data structures.
