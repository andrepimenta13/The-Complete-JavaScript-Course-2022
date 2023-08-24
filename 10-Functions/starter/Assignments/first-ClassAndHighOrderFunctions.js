///////////////////////////////////////////////////////////////
// First-Class and Higher Order Functions

// First Class Functions - means that functions are so-called first citizens. In practice, that means that functions are simply threated as values.
// Function are just another "type" of object.

// Higher Order Functions - A function that receives another function as an argument or a function that returns a new function, or both.
// This is only possible because of first class functions.

// An example of a Higher Order Function that receives another function as an argument:

// addEventListener is a Higher Order Function and greet is a Callback Function. A Callback function is a function that will be called later by the Higher Order Function.
// In this example "addEventListener" will call the greet function later, as soon as the click event happens.

const greet = () => console.log('Hey there!');
btnClose.addEventListener('click', greet);

// An example of a Higher Order Function that returns new function.

function count() {
  let counter = 0;
  return function () {
    counter++;
  };
}
