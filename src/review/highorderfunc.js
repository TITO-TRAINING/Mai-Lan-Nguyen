// Higher order functions are functions which take other function as a parameter or return a function as a value.

// Higher order function returning an other function
const higherOrder = (n) => {
  const doSomething = (m) => {
    const doWhatEver = (t) => {
      return 2 * n + 3 * m + t;
    };
    return doWhatEver;
  };
  return doSomething;
};
console.log(higherOrder(2)(3)(10));

//setTimeout
function sayHello() {
  console.log('Hello');
}
setTimeout(sayHello, 2000); // it prints hello after it waits for 2 seconds.

//map
const numbers = [1, 2, 3, 4, 5];
const numbersSquare = numbers.map((num) => num * num);

console.log(numbersSquare); //[1, 4, 9, 16, 25]

//filter
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
];
//Filter countries containing land
const countriesContainingLand = countries.filter((country) =>
  country.includes('land'),
);
console.log(countriesContainingLand); //['Finland', 'Ireland']

// reduce
const numbersB = [1, 2, 3, 4, 5];
const sum = numbersB.reduce((acc, cur) => acc + cur, 0);

console.log(sum); //15
