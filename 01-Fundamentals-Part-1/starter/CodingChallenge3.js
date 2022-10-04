const avgDolphins = Number(((109 + 95 + 80) / 3).toFixed(2));
const avgKoalas = Number(((109 + 95 + 50) / 3).toFixed(2));

console.log(avgDolphins, avgKoalas);

if (avgDolphins > avgKoalas && avgDolphins >= 100) {
  console.log('Congratulations Dolphins. You won! 🏆');
} else if (avgKoalas > avgDolphins && avgKoalas >= 100) {
  console.log('Congratulations Koalas. You won! 🏆');
} else if (
  avgDolphins === avgKoalas &&
  avgKoalas >= 100 &&
  avgDolphins >= 100
) {
  console.log(`It's a draw! Both won the trophy 🏆`);
} else {
  console.log(
    `The teams need to have at least 100 points! No one wins the trophy 😢`
  );
}
