//Template literals
const myName = 'lan';
const greeting = `Hello, ${myName}!`;
console.log(greeting); // Hello, lan!

// Destructuring
//Object
const person = { name: 'Lan', age: 20 };
const { name, age } = person;

console.log(name);
console.log(age);

//Array
const numbers = [1, 2, 3];
const [firt, second, third] = numbers;

console.log(firt);
console.log(second);
console.log(third);

//Spread syntax
//cloning an array
const original = [1, 2, 3];
const clone = [...original];
console.log(clone);

//Merging array
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = [...arr1, ...arr2];
