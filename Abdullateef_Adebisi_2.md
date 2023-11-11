The term “lexical scope” may seem tricky to grasp at first glance. But it's helpful to understand what each word means.

So this article will explain lexical scope by first examining the meaning of “lexical” and “scope”.

So, let’s get it started by understanding the term “scope”.

What exactly is Scope?
Scope refers to the area where an item (such as a function or variable) is visible and accessible to other code.

Note:

Scope means area, space, or region.
Global scope means global space or a public space.
Local scope means a local region or a restricted region.
Here's an example:

// Define a variable in the global scope:
const fullName = "Oluwatobi Sofela";

// Define nested functions:
function profile() {
function sayName() {
function writeName() {
return fullName;
}
return writeName();
}
return sayName();
}
Try it on StackBlitz

In the snippet above, we defined the fullName variable in the global scope. This means that it is visible and accessible globally to all code within the script.

But we defined writeName() within the sayName() function, so it is locally scoped to sayName().

In other words, writeName() is locally visible and accessible only to code in the sayName() function.

Keep in mind that whenever the writeName() function gets invoked, the computer will not go straight to the global scope to call the fullName variable. Instead, it must sequentially go through the scope chain to look for fullName.

What is a Scope Chain?
A scope chain refers to the unique spaces that exist from the scope where a variable got called to the global scope.

Here's an example:

// Define a variable in the global scope:
const fullName = "Oluwatobi Sofela";

// Define nested functions:
function profile() {
function sayName() {
function writeName() {
return fullName;
}
return writeName();
}
return sayName();
}
In the snippet above, observe that the fullName variable got called from the writeName() function's scope.

Therefore, the scope chain that exists from the variable’s call to the global scope is:

writeName() scope ---> sayName() scope ---> profile() scope ---> global scope

In other words, there are four (4) spaces from fullName’s invocation scope to its lexical scope (the global scope in this instance).

Note: The global scope is the last link in JavaScript's scope chain.

How Does the Scope Chain Work?
JavaScript's scope chain determines the hierarchy of places the computer must go through — one after the other — to find the lexical scope (origin) of the specific variable that got called.

For instance, consider the code below:

// Define a variable in the global scope:
const fullName = "Oluwatobi Sofela";

// Define nested functions:
function profile() {
function sayName() {
function writeName() {
return fullName;
}
return writeName();
}
return sayName();
}
In the snippet above, whenever the profile() function gets invoked, the computer will first invoke the sayName() function (which is the only code in the profile() function).

Secondly, the computer will invoke the writeName() function (which is the only code in the sayName() function).

At this point, since the code in writeName() instructs the computer to call and return the fullName variable's content, the computer will call fullName. But it will not go directly to the global scope to call fullName.

Instead, the computer must go step-by-step through the scope chain to look for the lexical scope of fullName.

So, here are the sequential steps the computer must take to locate fullName's lexical scope:

Firstly, the computer will check if fullName got defined locally within the writeName() function. But it will find no fullName definition there, so it moves up to the next scope to continue its quest.
Secondly, the computer will search for fullName's definition in sayName() (the next space in the scope chain). Still, it doesn't find it there, so it climbs up the ladder to the next scope.
Thirdly, the computer will search for fullName's definition in the profile() function. Yet still, fullName is not found there. So the computer goes forward to seek fullName's lexical scope in the next region of the scope chain.
Fourthly, the computer goes to the global scope (the following scope after profile()). Fortunately, it finds fullName's definition there! Therefore, it gets its content ("Oluwatobi Sofela") and returns it.
Time to Practice with Scope 🤸‍♂️🏋️‍♀️🏊‍♀️
Consider the script below. Which of the three fullName variables will the computer call?

// First fullName variable defined in the global scope:
const fullName = "Oluwatobi Sofela";

// Nested functions containing two more fullName variables:
function profile() {
const fullName = "Tobi Sho";
function sayName() {
const fullName = "Oluwa Sofe";
function writeName() {
return fullName;
}
return writeName();
}
return sayName();
}
Will the computer call the first, second, or third fullName variable?

Note: You will benefit much more from this tutorial if you attempt the exercise yourself.

If you get stuck, don’t be discouraged. Instead, review the lesson and give it another try.

Once you’ve given it your best shot (you’ll only cheat yourself if you don’t!), go ahead to see the correct answer below.

Did you get it right?
Out of the three fullName definitions present in the script above, the computer will call and return the one defined in the sayName() function.

sayName()’s fullName variable will get called because sayName() is the scope inside which the computer will first find a fullName definition.

Therefore, when profile() gets invoked, the returned value will be "Oluwa Sofe".

Try it on StackBlitz

Some things to keep in mind:

Suppose the computer did not find fullName's definition in any of the scopes. In such a case, the computer will return Uncaught ReferenceError: fullName is not defined.
The global scope is always the last scope of any JavaScript scope chain. In other words, the global scope is where all searches will end.
An inner (child) scope has access to its parent (outer) scope, but an outer scope does not have access to its child scope.
For instance, in the snippet above, writeName() can access codes inside any of its parent scope (sayName(), profile(), or the global scope).
However, neither sayName(), profile(), nor the global scope can access any of writeName()'s codes.
Quick Review of Scope So Far
JavaScript scope is all about space.

So next time your partner calls you to their private scope, remember they are inviting you to their private space 😜!

When you get there, be sure to ask them about their best lexical game...

But what does lexical mean, I hear you ask? Let’s find out below.

What Does Lexical Mean?
Lexical refers to the definition of things.

Anything related to creating words, expressions, or variables is termed lexical.

For instance, a scrabble game is a lexical activity because it relates to the creation of words.

Also, someone whose job relates to linguistics (the study of languages) has a lexical career.

Note: Another name for a dictionary is a lexicon. In other words, a lexicon is a dictionary where words are listed and defined.

So now that we know what scope and lexical mean, we can talk about lexical scope.

What is Lexical Scope in JavaScript?
Lexical scope is the definition area of an expression.

In other words, an item's lexical scope is the place in which the item got created.

Note:

Another name for lexical scope is static scope.
The place an item got invoked (or called) is not necessarily the item's lexical scope. Instead, an item's definition space is its lexical scope.
Example of Lexical Scope
Consider the code below:

// Define a variable in the global scope:
const myName = "Oluwatobi";

// Call myName variable from a function:
function getName() {
return myName;
}
In the snippet above, notice that we defined the myName variable in the global scope and called it in the getName() function.

Question: Which of the two spaces is myName’s lexical scope? Is it the global scope or the getName() function’s local scope?

Answer: Remember that lexical scope means definition space — not invocation space. Therefore, myName’s lexical scope is the global scope because we defined myName in the global environment.

Another example of lexical scope
function getName() {
const myName = "Oluwatobi";
return myName;
}
Question: Where is myName’s lexical scope?

Answer: Notice that we created and called myName within getName(). Therefore, myName’s lexical scope is getName()’s local environment because getName() is myName’s definition space.

How Does Lexical Scope Work?
A JavaScript expression’s definition environment determines the code permitted to access it.

In other words, only code within an item's lexical scope can access it.

For instance, consider the code below:

// Define a function:
function showLastName() {
const lastName = "Sofela";
return lastName;
}

// Define another function:
function displayFullName() {
const fullName = "Oluwatobi " + lastName;
return fullName;
}

// Invoke displayFullName():
console.log(displayFullName());

// The invocation above will return:
Uncaught ReferenceError: lastName is not defined
Notice that the invocation of displayFullName() in the snippet above returned an Uncaught ReferenceError. The error returned because only code within an item's lexical scope can access the item.

Therefore, neither the displayFullName() function nor its internal code can access the lastName variable because lastName got defined in a different scope.

In other words, lastName’s lexical scope is different from that of displayFullName().

lastName’s definition space is showLastName() while displayFullName()’s lexical scope is the global environment.

Now, consider this other code below:

function showLastName() {
const lastName = "Sofela";
return lastName;
}

// Define another function:
function displayFullName() {
const fullName = "Oluwatobi " + showLastName();
return fullName;
}

// Invoke displayFullName():
console.log(displayFullName());

// The invocation above will return:
"Oluwatobi Sofela"
In the snippet above, displayFullName() successfully returned "Oluwatobi Sofela" because displayFullName() and showLastName() are in the same lexical scope.

In other words, displayFullName() could invoke showLastName() because the two functions are both defined in the global scope.

Note:

In example 2 above, displayFullName() did not gain access to showLastName()'s lastName variable.
Instead, displayFullName() invoked showLastName() — which then returned the content of its lastName variable.
An alternative to the lexical scope is the dynamic scope — but it rarely gets used in programming. Only a few languages, like bash, use dynamic scope.
