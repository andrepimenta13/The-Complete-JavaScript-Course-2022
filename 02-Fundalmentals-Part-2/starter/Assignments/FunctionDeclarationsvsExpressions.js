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

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

console.log(percentageOfWorld1(1441).toFixed(1));
console.log(percentageOfWorld1(10).toFixed(1));
console.log(percentageOfWorld1(100).toFixed(1));

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

console.log(percentageOfWorld2(1441).toFixed(1));
console.log(percentageOfWorld2(10).toFixed(1));
console.log(percentageOfWorld2(100).toFixed(1));
