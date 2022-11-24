const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = parseFloat(this.mass / this.height ** 2).toFixed(2);
    return this.BMI;
  },
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = parseFloat((this.mass / (this.height * this.height)).toFixed(2));
    return this.BMI;
  },
};

john.calcBMI();
mark.calcBMI();
console.log(john.BMI);
console.log(mark.BMI);

if (mark.BMI > john.BMI) {
  console.log(
    `${mark.fullName}'s BMI (${mark.BMI}) is higher than John's (${john.BMI})!`
  );
} else if (john.BMI > mark.BMI) {
  console.log(
    `${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s (${mark.BMI})!`
  );
} else {
  console.log(
    `${john.fullName}'s BMI (${john.BMI}) is equal to ${mark.fullName}'s BMI (${mark.BMI})!`
  );
}
