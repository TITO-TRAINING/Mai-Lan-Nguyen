// Function Declaration
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // Output: 5

// Function without a parameter and return
function addTwoNumbers() {
  let numOne = 10;
  let numTwo = 20;
  let sum = numOne + numTwo;

  console.log(sum);
}
addTwoNumbers(); // a function has to be called by its name to be executed

// Anonymous Function
const anonymousFun = function () {
  console.log(
    'I am an anonymous function and my value is stored in anonymousFun',
  );
};

// Expression Function
const square = function (n) {
  return n * n;
};

console.log(square(2)); // -> 4

// Arrow Function
// function square(n) {
//   return n * n
// }

// console.log(square(2)) // 4
// =>
const square1 = (n) => n * n; // -> 4

//callBack Function
// a callback function, the name of the function could be any name
const callback = (n) => {
  return n ** 2
}
​
// function that takes other function as a callback
function cube(callback, n) {
  return callback(n) * n
}
​
console.log(cube(callback, 3))
