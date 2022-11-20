//Assignment

const myCountry = {
  country: 'Portugal',
  capital: 'Lisboa',
  language: 'Portuguese',
  population: 10,
  neighbours: ['Spain', 'France', 'Germany'],
};

console.log(myCountry);

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries
and a capital called ${myCountry.capital}.`);

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries
and a capital called ${myCountry.capital}.`);

//Increase the country's population by two million using dot notation, and then decrease it by two million using brackets notation.

myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry.population);
