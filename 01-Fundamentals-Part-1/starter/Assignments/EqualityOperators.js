//Equality Operators: == VS. ===

/*
const age = '18';

if (age === 18) console.log('You just became an adult :D (strict)');

if (age == 18) console.log('You just became an adult :D (loose)');

const favourite = Number(prompt('What is your favorite number?')); //convert string to number

console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
  console.log('7 is also a cool number!');
} else if (favourite === 9) {
  console.log('9 is also a cool number!');
} else {
  console.log('Number is not 23 or 7 or 9!');
}

if (favourite !== 23) console.log('Why not 23?');
*/

//Assignment

const numNeighbours = Number(
  prompt('How many neighbours countries does your country have?')
);

if (numNeighbours === 1) {
  console.log('Only 1 border!');
} else if (numNeighbours > 1) {
  console.log('More than 1 border!');
} else {
  console.log('No borders!');
}
