'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'audio';
// const private = 534;
// const if = 23;


//Functions - is a simply a piece of code that we can reuse over and over again in our code.

function logger(name) {
  console.log(`My name is ${name}`);
}

// Calling / Running / Invoking the function
logger('andré');
logger('andré');
logger('andré');
logger('andré');
logger('andré');


function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');


//Function Declarations vs. Expressions

// //Function declaration

// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);

// //Function expression

// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };
// const age2 = calcAge2(1991);

// console.log(age1, age2);

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

console.log(percentageOfWorld1(1441).toFixed(1));
console.log(percentageOfWorld1(10).toFixed(1));
console.log(percentageOfWorld1(100).toFixed(1));

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

console.log(percentageOfWorld2(1441).toFixed(1));
console.log(percentageOfWorld2(10).toFixed(1));
console.log(percentageOfWorld2(100).toFixed(1));


//Arrow Functions
// //Function expression example

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

//Arrow Function

const callAge3 = (birthYear) => 2037 - birthYear;
const age3 = callAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1991, 'André'));
console.log(yearsUntilRetirement(1980, 'Bob'));
*/

//Functions calling other functions

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} piece of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));
