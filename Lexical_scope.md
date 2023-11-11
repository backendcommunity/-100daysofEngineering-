# LEXICAL SCOPING

* Scope is the part of the program where an identifier such as a variable or function is visible. I.e  refers to the area where a function or variable is visible and accessible to other code.

## Types Of Scope in Js
* there are basically two types of Scope in javascript and they are
    1. Global scope
    2. Function Scope

*Global Scope:* A Identifier defined in the global scope is visble and accesible from anywhere in the program.
 
*Local Scope:* An Identifier defined in the local scope is visible only within the local scope it was defined. The types of local scope are:
    1. *Function scope*
    2. *Block scope.*

* Function scope refers to the scope within a function. An identifier(variable of function) defined in function scope is only accessible within the function.

## ================= SCOPE CHAIN ============================
* Scope chain refers to the unique spaces that exist from the scope where a variable was called to the global scope. Javascript uses scope chain to find an identifier when it is invoked.
*  When the Javascript engine is searching for a variable, it starts from the current scope and moves outward. 
    - The Javascript engine looks in the scope where the variable is requested.
    - If it can't find it in the current scope, it moves out one level and checks again.
    - It keeps moving to the outer scope until it has reached the global scope.
    - If the javascript engines checks the global scope and still can't find the identifier, it then returns a .Reference error

## Lexical Scoping.
* Lexical scoping refers to the place/environment/area where an is defined  i.e where it was created. An identifier is scoped in the area where it was defined and not were it is invoked.

    ` 
    // myName variable and getName function defined in the 
    // global variable
    const myName = "Joshua";

    // Call myName variable from a function:
    function getName() {
    const Country = "Nigeria"
    return myName;
    } `

    - In the code above, the myName and getName identifiers are defined in the global scope, so they are globally scoped, hence they can be accessed from anywhere in the program.
    - The country identifier however is function scoped as it is defined within getName function, hence it can only be accessed within that function.