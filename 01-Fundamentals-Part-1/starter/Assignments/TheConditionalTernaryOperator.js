/*
//The conditional (Ternary) operator

const age = 23;

// age >= 18
//   ? console.log('I like to drink wine. 🍷')
//   : console.log('I like to drink water. 💦');

const drink = age >= 18 ? 'wine 🍷' : 'water 💦';

console.log(drink);

//doing the same but with if statement

let drink2;

if (age >= 18) {
  drink2 = 'wine 🍷';
} else {
  drink2 = 'water 💦';
}

console.log(drink2);

//with template literals

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💦'}`);
*/

//Assignment
const population = 10;
const country = 'Portugal';

console.log(
  `${country}'s population is ${population > 33 ? 'above' : 'below'} average.`
);
