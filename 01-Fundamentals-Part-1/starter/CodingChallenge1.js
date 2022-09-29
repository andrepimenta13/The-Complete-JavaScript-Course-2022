// const heightMark = 1.69;
// const weightMark = 78;

// const heightJohn = 1.95;
// const weightJohn = 92;

const heightMark = 1.88;
const weightMark = 95;

const heightJohn = 1.76;
const weightJohn = 85;

const markBMI = weightMark / heightMark ** 2;
const johnBMI = weightJohn / (heightJohn * heightJohn);
const markHigherBMI = markBMI > johnBMI;

console.log(markBMI.toFixed(2));
console.log(johnBMI.toFixed(2));
console.log(markHigherBMI);
