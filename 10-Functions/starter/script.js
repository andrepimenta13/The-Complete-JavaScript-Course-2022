'use strict';

/*
///////////////////////////////////////////////////////////////
// Default Parameters

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);

///////////////////////////////////////////////////////////////
// How Passing Arguments Works: Value vs Reference

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: '31239283127',
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === '31239283127') {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(jonas);
checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

// Javascript doesn't have passing by reference, only passing by value.


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


///////////////////////////////////////////////////////////////
// Functions Accepting Callback Functions

const oneWord = (str) => str.replace(/ /g, '').toLowerCase();

// console.log(oneWord('JavaScript is the best!'));

const upperFirstWord = function (str) {
  // 1st solution
  // return str[0].toUpperCase() + str.slice(1);

  //2nd solution
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// console.log(upperFirstWord('javascript is the best!'));

// High-Order Function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  // we can retrieve the name of the function
  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best!', upperFirstWord);

transformer('Javascript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);

///////////////////////////////////////////////////////////////
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

*/

///////////////////////////////////////////////////////////////
// The call and apply Methods
