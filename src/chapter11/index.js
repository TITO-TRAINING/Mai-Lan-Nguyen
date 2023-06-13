function first() {
  setTimeout(function () {
    console.log("một");
  }, 5000);
}

function second() {
  console.log("hai");
}

first();
second();
//hai
//một

// Callback
function alertCallback() {
  console.log("i am callback");
}
function logAndAlert(a) {
  console.log("vào");
  a();
}
logAndAlert(alertCallback);
//vào
//i am Callback

//promise
let fifteen = Promise.resolve(15);
fifteen.then((value) => console.log(`Got ${value}`)); // got 15

//Failure
new Promise((_, reject) => reject(new Error("Fail")))
  .then((value) => console.log("Handler 1"))
  .catch((reason) => {
    console.log("Caught failure " + reason);
    return "nothing";
  })
  .then((value) => console.log("Handler 2", value));
// → Caught failure Error: Fail
// → Handler 2 nothing
