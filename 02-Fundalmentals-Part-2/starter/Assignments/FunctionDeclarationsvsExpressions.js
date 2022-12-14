// //Function declaration

// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);

// //Function expression

// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };
// const age2 = calcAge2(1991);

// console.log(age1, age2);

//Assignment
//Function declaration
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percPortugal1 = percentageOfWorld1(1441).toFixed(1);
const percChina1 = percentageOfWorld1(10).toFixed(1);
const percUSA1 = percentageOfWorld1(100).toFixed(1);

console.log(percPortugal1, percChina1, percUSA1);

//Function expression
const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const percPortugal2 = percentageOfWorld1(1441).toFixed(1);
const percChina2 = percentageOfWorld1(10).toFixed(1);
const percUSA2 = percentageOfWorld1(100).toFixed(1);

console.log(percPortugal2, percChina2, percUSA2);
