/* 
//Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
//2 ** 3 means 2 to the power of 3 = 2 * 2 * 2;

const firstName = 'Jonas';
const lastName = 'Schmedtmann';

console.log(firstName + ' ' + lastName);

//Assignment operators
let x = 10 + 5; //15
x += 10; //x = x +10 = 25
x *= 4; //x = x * 4 = 100
x++; //x = x + 1 = 101
x--; //x = x - 1  = 100
x--; //x = x - 1 = 99

console.log(x);

//Comparison operators
console.log(ageJonas > ageSarah); // > , <, >= , <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

// console.log(25 - 10 - 5);

let x, y;

x = y = 25 - 10 - 5; // x = y = 10

console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;

console.log(ageJonas, ageSarah, averageAge);


const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';

console.log(jonas);

//Template Literals

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log('String with \n\
multiple \n\
lines');

console.log(`String 
multiple
lines`);


//Taking Decisions: if/else statements

const age = 15;

if (age >= 18) {
  console.log('Sarah can start driving license 🚘');
} else {
  const yearsLeft = 18 - age;
  console.log(
    `Sarah is to young. Wait another ${yearsLeft} years to start driving license`
  );
}

const birthYear = 2012;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);

//Type Conversion and Coercion

//Type Conversion

const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof Nan);

console.log(String(23), 23);

//Type Coercion

console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1; //'11'
n = n - 1;
console.log(n);


//Truthy and Falsy Values

//5 falsy values: 0, '', undefined, null, Nan -> all of these five values will be converted to false
//when we attempt to convert them to a boolean. They're not exactly false initially, but they will
//become converted to a boolean.

//Examples:

console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean('Jonas')); //true
console.log(Boolean({})); //true
console.log(Boolean('')); //false

const money = 0;

if (money) {
  console.log('Dont spend it all');
} else {
  console.log('You should get a job!');
}

let height;
if (heig) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}


//Equality Operators: == VS. ===

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

//Logical Operators

const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}

const isTired = false; //C
console.log((hasDriversLicense && hasGoodVision) || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}

//The Switch Statement

const day = 'sunday';

switch (day) {
  case 'monday': //day === 'monday'
    console.log('Plan course structure.');
    console.log('Go to coding meetup.');
    break;
  case 'tuesday': //day === 'tuesday'
    console.log('Prepare theory videos.');
    break;
  case 'wednesday': //day === 'wednesday'
  case 'thursday': //day === 'thursday'
    console.log('Write code examples.');
    break;
  case 'friday': //day === 'friday'
    console.log('Record videos.');
    break;
  case 'saturday': //day === 'saturday'
  case 'sunday': //day === 'sunday'
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
}

if (day === 'monday') {
  console.log('Plan course structure.');
  console.log('Go to coding meetup.');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos.');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples.');
} else if (day === 'friday') {
  console.log('Record videos.');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend :D');
} else {
  console.log('Not a valid day!');
}

Statements and Expressions

Expression is a piece of code that produces a value.
3 + 4 (example of an expression)
1991 (is a expression too)
true && false && !false

Statements is like a bigger piece of code that is executed and which does not produce a value on itself.
example:

if (23 > 10) {
  const str = '23 is bigger';
}
this IF is a statement. But the string itself is an expression. Expressions are always part of a statement.
And Statements are like full sentences that translate our actions. The actions that we want to perform.

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
