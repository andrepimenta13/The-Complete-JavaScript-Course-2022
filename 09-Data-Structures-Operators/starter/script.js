'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}.`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

////////////////////////////////////////////////////////////////
// Logical Assignment Operators

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

/*
// OR assignment operator - this operator assigns a variable to a variable if that variable is currently falsy.

// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests = rest1.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// console.log(rest1); // numGuests = 20
// console.log(rest2); // numGuests = 10

// nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

console.log(rest1); // numGuests = 0
console.log(rest2); // numGuests = 10

// AND assignment operator - when the first value is falsy, then immediately returns that falsy value

// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);


////////////////////////////////////////////////////////////////
// Nullish Coalescing Operator (??)
// Nullish Coalescing Operator (??) works with nullish values ( null or undefined)

restaurant.numGuests = 0;

const guests = restaurant.numGuests || 10; // 10
console.log(guests);

// Nullish: null and undefined (Not 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); // 0


////////////////////////////////
// Short Circuiting ( && and || )

console.log('----- OR -----');

// Use ANY date type, return ANY date type and short-circuiting

// || (OR) operator = if the first value is a truthy value, it will immediately return that first value.
// So the OR operator will return the first truthy value of all operands or simply the last value if all of them are falsy.
// For practical applications, we can use the OR operator to set default values.

console.log(3 || 'Jonas'); // 'Jonas'
console.log('' || 'jonas'); // 'jonas'
console.log(true || 0); // 'true'
console.log(undefined || null); // 'null'

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // 'hello'

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('----- AND -----');

// && (AND) operator = AND operator works in the exact opposite way of the OR operator.
// AND operator short circuits when the first value is falsy, and then immediately returns that falsy value.
// AND operator will return the first falsy value or the last if all of them are truthy.
// For practical applications, we can use the AND operator to execute code in the second operand if the first one is true.

console.log(0 && 'Jonas'); // 0
console.log(7 && 'Jonas'); // 'Jonas'

console.log('Hello' && 23 && null && 'Jonas'); // null

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');


////////////////////////////////////////////////////////////////
// Rest pattern and Parameters

// 1) Destructuring

// Spread, because on RIGHT side of the assignment operator

const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of the assignment operator
const [a, b, ...others] = [1, 2, 3, 4, 5];

console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekDays } = restaurant.openingHours;
console.log(sat, weekDays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);

  // Modern solution, using reduce method
  // return console.log(numbers.reduce((accu, current) => accu + current, 0));
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');


////////////////////////////////////////////////////////////////
// Spread Operator

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array

const mainMenuCopy = [...restaurant.mainMenu];

// Join two arrays

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps and sets, but NOT objects.
const str = 'Jonas';
const letters = [...str, '', 'S.'];
console.log(letters);
console.log(...str);
// console.log(`${...str} Schmedtmann`);

// Real-world example

const ingredients = [
  // prompt('Lets make pasta! Ingredient 1?'),
  // prompt('Lets make pasta! Ingredient 2?'),
  // prompt('Lets make pasta! Ingredient 3?'),
];
console.log(ingredients);

// Old way
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// New way with spread operator
restaurant.orderPasta(...ingredients);

// Spread Operator with Objects

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

// Copy Object

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);


// Destructuring Objects

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b);

// Nested destructuring objects

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);


// Array Destructuring is a way of unpacking values from an array or an object into separate variables.

const arr = [2, 3, 4];

const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables - Without destructuring

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// Switching variables - With destructuring

[main, secondary] = [secondary, main];
console.log(main, secondary);

console.log(restaurant.order(2, 0));

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

*/
