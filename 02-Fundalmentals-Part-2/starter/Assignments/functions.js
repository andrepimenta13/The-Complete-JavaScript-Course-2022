function describeCountry(country, population, capitalCity) {
  console.log(
    `${country} has ${population} million people and its capital city is ${capitalCity}.`
  );
}

const firstCountry = describeCountry('Portugal', 10, 'Lisboa');
const secondCountry = describeCountry('Spain', 30, 'Madrid');
const thirdCountry = describeCountry('France', 50, 'Paris');
