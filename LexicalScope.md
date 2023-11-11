# Lexical
- Means anything related to creating words,expressions and variable is termed as lexical
# Scope
- Refer to any area where function or variable is visible and accessible to other code in other words scope means area,region or space.
- We have global scope which means public space or global space and Local scope that means restricted region or local region
# Example
# define  variable in global scope
const fullName = 'Mbonyimfura Tresor'
function profile() {
 function sayName() {
function writeName() {
    return fullName;
}
return writeName();
 }
 return sayName();
}
 variable fullName is in global scope that means its accessible to all code within the scripts.
 But we defined writeName() within sayName() which means is locally scoped to sayName().

#  lexical scope
- lexical scope is the definition area of an expression in other words, an item's lexical scope is place in which item got created
# Example of lexical scope
const name= 'Tresor'; #global scope
#call variable name from a function
function getName() {
    return name;
}
Question: Which of the two spaces is myName’s lexical scope? Is it the global scope or the getName() function’s local scope?
Answer lexical scope means definition space not invocation space. Therefore, name's lexical scope is global scope because we defined name in global environment
# How lexical scope works 
A JavaScript expression’s definition environment determines the code permitted to access it.
In other words, only code within an item's lexical scope can access it.

# for instance 
function showLastName() {
  const lastName = "Tresor";
  return lastName;
}
# Define another function:
function displayFullName() {
  const fullName = " Mbonyimfura " + lastName;
  return fullName;
}
# Call displayFullName():
console.log(displayFullName());
# This will return:
Uncaught ReferenceError: lastName is not defined

The lastName variable is defined in the lexical scope of the showLastName() function.
The displayFullName() function is trying to access lastName, but it cannot do so because lastName is not within its lexical scope.
The error indicates that only code within the lexical scope where a variable is defined can access that variable. Since lastName is defined in showLastName()'s lexical scope, it cannot be directly accessed by displayFullName() in its global lexical scope.

# In summary every time you hear word lexical think definition 
So, the lexical scope of a car, variable, phone, function, or swimsuit refers to its definition region.

# This code includes modifications based on code from https://www.freecodecamp.org/news/javascript-lexical-scope-tutorial/.