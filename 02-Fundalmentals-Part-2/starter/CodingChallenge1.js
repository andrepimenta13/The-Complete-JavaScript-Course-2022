const calcAverage = (score1, score2, score3) =>
  ((score1 + score2 + score3) / 3).toFixed(0);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  } else if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } else {
    console.log(`No team wins!`);
  }
}

//Test 1
const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);

//Test 2
// const avgDolphins = calcAverage(85, 54, 41);
// const avgKoalas = calcAverage(23, 34, 27);
console.log(avgDolphins, avgKoalas);

checkWinner(avgDolphins, avgKoalas);
