//Arrays
/*
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

//Assignment
function percentageOfWorld1(population) {
  return ((population / 7900) * 100).toFixed(2);
}

const populations = [10, 1441, 332, 83];

if (populations.length === 4) {
  console.log(populations);
}

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];

console.log(percentages);
