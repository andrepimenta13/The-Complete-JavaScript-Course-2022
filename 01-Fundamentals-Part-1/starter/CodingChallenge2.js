const heightMark = 1.88;
const weightMark = 15;

const heightJohn = 1.76;
const weightJohn = 85;

const markBMI = parseFloat(weightMark / heightMark ** 2).toFixed(1);
const johnBMI = parseFloat((weightJohn / (heightJohn * heightJohn)).toFixed(1));
const markHigherBMI = markBMI > johnBMI;

console.log(markBMI);
console.log(johnBMI);
console.log(markHigherBMI);

if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else if (johnBMI > markBMI) {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
} else {
  console.log(`John's BMI (${johnBMI}) is equal to Mark's BMI (${markBMI})!`);
}
