//My solution:
const bill = 430;

bill >= 50 && bill <= 300
  ? console.log(
      `The bill was ${bill}, the tip was ${0.15 * bill}, and the total value ${
        bill + 0.15 * bill
      }`
    )
  : console.log(
      `The bill was ${bill}, the tip was ${0.2 * bill}, and the total value ${
        bill + 0.2 * bill
      }`
    );

//Solution

// const bill = 275;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
