//var let const

//var
function example1() {
  var x = 10;
  if (true) {
    var x = 20;
    console.log(x); // Output: 20
  }
  console.log(x); // Output: 20
}
example1();

//let
function example2() {
  let x = 10;
  if (true) {
    let x = 20;
    console.log(x); // Output: 20
  }
  console.log(x); // Output: 10
}
example2();

//const
function example3() {
  const x = 10;
  if (true) {
    const x = 20;
    console.log(x); // Output: 20
  }
  console.log(x); // Output: 10
}
example3();
