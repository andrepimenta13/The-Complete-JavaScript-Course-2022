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


//Reviewing Functions

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired!`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));

//Arrays

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years2 = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log([friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
//friends = ['Bob','Alice']

const firstName = 'Jonas';
// const jonas = ['Jonas', 'Schmedtmann', 2037 - 1991];
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];

console.log(jonas);
console.log(jonas.length);

//Exercise

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];

console.log(calcAge(years)); //= NaN

// console.log(calcAge(years[0])); //47
// console.log(calcAge(years[1])); //70
// console.log(calcAge(years[years.length - 1])); //19

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];

console.log(ages);
*/

//Arrays Methods

const friends = ['Michael', 'Steven', 'Peter'];

//push - Add elements to the end of the array and return the length
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

//unshift - Add elements to the beginning of the array and return the length
friends.unshift('John');
console.log(friends);

//pop - Remove last element from the array and return the removed element
friends.pop();
console.log(friends);

//shift - Remove first element from the array and return the removed element
friends.shift();
console.log(friends);

//indexOf - Return the index of the certain element in the array
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob')); //Doesn't exist, so return -1

//includes - simply return true if the element is present in the array and false if it's not
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
friends.push(23);
console.log(friends.includes('23')); //returns false because it's testing with strict equality which means that it does not do type coercion.

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}
