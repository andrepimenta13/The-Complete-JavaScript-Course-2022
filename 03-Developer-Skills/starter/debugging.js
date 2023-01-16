const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celcius',

    // C) FIX the bug
    // value: Number(prompt('Degrees celcius: ')),
    value: 10,
  };

  // B) FIND the bug
  //   console.log(measurement);
  console.table(measurement);

  //   console.log(typeof measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) IDENTIFY the bug
console.log(measureKelvin());

//Using a debugger

const calcTempAmplitudeBug = (t1, t2) => {
  // const temps = [...temps1, ...temps2]; //solution with spread operator
  const temps = t1.concat(t2); //solution with concat method

  console.log(temps);

  // B) FIND and FIX the Bug
  //   let max = 0;
  //   let min = 0;

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== 'number') continue;

    // debugger;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// A) IDENTIFY
console.log('New function:', amplitudeBug);
