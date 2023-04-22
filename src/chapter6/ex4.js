let map = { one: 1, two: 2, hasOwnProperty: "oops" };

console.log(Object.prototype.hasOwnProperty.call(map, "one"));
// → true
