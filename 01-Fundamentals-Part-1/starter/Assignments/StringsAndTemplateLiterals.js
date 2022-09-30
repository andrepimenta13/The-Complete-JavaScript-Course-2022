const country = 'Portugal';
const continent = 'Europe';
let population = 10;

console.log(country);
console.log(continent);
console.log(population);

const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

language = 'Portuguese';

console.log(population / 2);
console.log(population++);

const finlandPopulation = 6;
console.log(population > finlandPopulation);
console.log(population < 33);

const description =
  country +
  ' is in ' +
  continent +
  ', and its ' +
  population +
  ' million people speak ' +
  language +
  '.';

//Template Literals

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';

console.log(jonas);

//Other example (Assignment)

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(description);
console.log(
  `${country} is in ${continent}, and its ${population} million people speak ${language}.`
);
