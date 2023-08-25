// Functions Returning Functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');

// Challenge - Convert greet function to an arrow function

const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);
greetArr('Hi')('Pepper');
