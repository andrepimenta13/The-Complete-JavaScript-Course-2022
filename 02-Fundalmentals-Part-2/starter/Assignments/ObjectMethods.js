//Object Methods

//Any function that is attached to an object is called a method.

/*
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: false,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  //with this method keyword
  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYear;
  // },

  //create a new property on the Jonas object
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's licence.`;
  },
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

console.log(jonas.getSummary());

console.log(jonas);

// console.log(jonas.calcAge(1991)); //access the function using dot notation
// console.log(jonas['calcAge'](1991)); //access the function using brackets notation

//Challenge
// "Jonas is a 46-year old teacher, and he has a/no driver's licence"

//Solution 1

// getSummary: function () {
//   this.summary = this.hasDriversLicense
//     ? `${jonas.firstName} is a ${jonas.age}-year old ${jonas.job}, and he has a driver's licence.`
//     : `${jonas.firstName} is a ${jonas.age}-year old ${jonas.job}, and he has no driver's licence.`;
// }

//Solution 2
// getSummary: function () {
//   return `${this.firstName} is a ${this.calcAge()}-year old ${
//     this.job
//   }, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's licence.`;
// },
*/

//Assignment

const myCountry = {
  country: 'Portugal',
  capital: 'Lisboa',
  language: 'Portuguese',
  population: 10,
  neighbours: ['Spain', 'France', 'Germany'],

  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
    );
  },

  checkIsland: function () {
    // this.isIsland = this.neighbours.length === 0 ? true : false;

    //Even simpler version
    this.isIsland = Boolean(this.neighbours.length);
  },
};

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry.isIsland);
