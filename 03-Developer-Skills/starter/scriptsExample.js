// Classes;
/*
class Vehicle {
  constructor(type) {
    this.type = type;
  }

  honk() {
    return console.log('PIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII');
  }

  get carType() {
    return this.type;
  }

  set changeType(value) {
    this.type = value;
  }

  changetype2(value) {
    this.type = value;
  }
}
class Car extends Vehicle {
  constructor(type, age, brand, color) {
    super(type);
    this.age = age;
    this.brand = brand;
    this.color = color;
  }

  movement() {
    return console.log('Vrumm Vrummmm');
  }
}

const mini = new Car('Moto', 17, 'Mini', 'black');
const citroen = new Car('Car', 20, 'Citroen', 'black');

console.log(mini);
console.log(citroen);
mini.movement();
mini.honk();
citroen.movement();
citroen.honk();
console.log(citroen.type);
console.log(citroen.color);
console.log(citroen.carType);

citroen.changeType = 'loles';
console.log(citroen.carType);
citroen.changetype2('Bike');
console.log(citroen.carType);

console.log(citroen);

class PersonCL {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

class ExampleCL extends PersonCL {
  constructor(firstName, lastName, age) {
    super(firstName, lastName);
    this.age = age;
    this.favouriteFoods = [
      'arroz de cabidela',
      'pizza',
      'burguer',
    ];
  }

  getFavouriteFood(nabySarrJogadorDoAno) {
    return this.favouriteFoods[nabySarrJogadorDoAno];
  }

  getAge() {
    return this.age;
  }

  getNameWithFavouriteClub(lasanhaDoLidl) {
    return `${this.firstName}${lasanhaDoLidl}`;
  }
}

const andre = new ExampleCL('André', 'Pimenta', 32);
console.log(andre);
const filipa = new ExampleCL('Filipa', 'Neves', '29');
console.log(filipa);
*/

// Async await, Promises and requests to an API

function getData() {
  fetch('https://jsonplaceholder.typicode.com/posts/3')
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}
getData();

// async function getData() {
//   let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//   let data = await response.json();
//   console.log(data);
// }
// getData();
