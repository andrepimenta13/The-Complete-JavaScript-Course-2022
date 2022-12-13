const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
let average = 0;

function calcTip(bills) {
  return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
}

function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return (sum / arr.length).toFixed(2);
}

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(bills);
console.log(calcAverage(bills));

console.log(tips);
console.log(calcAverage(tips));

console.log(totals);
console.log(calcAverage(totals));
