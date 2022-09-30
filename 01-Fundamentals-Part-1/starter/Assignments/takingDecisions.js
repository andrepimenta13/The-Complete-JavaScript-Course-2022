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

//Assignment
const country = 'Portugal';
const continent = 'Europe';
let population = 10;

if (population > 33) {
  console.log(`${country}'s population is above average.`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million below average.`
  );
}
