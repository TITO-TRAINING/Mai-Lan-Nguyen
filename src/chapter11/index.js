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

/* ex2: Given an array of promises, Promise.all returns a promise that waits for all
of the promises in the array to finish. It then succeeds, yielding an array of
result values. If a promise in the array fails, the promise returned by all fails
too, with the failure reason from the failing promise.
Implement something like this yourself as a regular function called
Promise_all.
Remember that after a promise has succeeded or failed, it can’t succeed
or fail again, and further calls to the functions that resolve it are ignored.
This can simplify the way you handle failure of your promise. */
// Here's an implementation of Promise_all that behaves similarly to Promise.all:
function Promise_all(promises) {
  return new Promise((resolve, reject) => {
    let results = [];
    let completedCount = 0;

    if (promises.length === 0) {
      resolve(results);
    } else {
      for (let i = 0; i < promises.length; i++) {
        promises[i]
          .then((result) => {
            results[i] = result;
            completedCount++;

            if (completedCount === promises.length) {
              resolve(results);
            }
          })
          .catch(reject);
      }
    }
  });
}

//Here's how you can use the Promise_all function:
const promise1 = Promise.resolve(1);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 2));
const promise3 = new Promise((resolve, reject) =>
  setTimeout(reject, 200, "Error")
);

Promise_all([promise1, promise2])
  .then((results) => {
    console.log(results); // Output: [1, 2]
  })
  .catch((error) => {
    console.log(error);
  });

Promise_all([promise1, promise3])
  .then((results) => {
    console.log(results); // This will not be executed
  })
  .catch((error) => {
    console.log(error); // Output: Error
  });

/*  ex1: Tracking the Scalpel
  The village crows own an old scalpel that they occasionally use on special
  missions—say, to cut through screen doors or packaging. To be able to
  quickly track it down, every time the scalpel is moved to another nest, an
  entry is added to the storage of both the nest that had it and the nest that
  took it, under the name "scalpel", with its new location as the value.
  This means that finding the scalpel is a matter of following the breadcrumb trail of storage entries, until you find a nest where that points at the
  nest itself.
  Write an async function locateScalpel that does this, starting at the nest
  on which it runs. You can use the anyStorage function defined earlier to
  access storage in arbitrary nests. The scalpel has been going around long
  enough that you may assume that every nest has a "scalpel" entry in its data
  storage.
  Next, write the same function again without using async and await.
  Do request failures properly show up as rejections of the returned
  promise in both versions? How? */

// Here's an implementation of the locateScalpel function using async and await:
async function locateScalpel(nest) {
  let currentNest = nest.name;
  while (true) {
    let nextNest = await anyStorage(nest, currentNest, "scalpel");
    if (nextNest === currentNest) {
      return currentNest;
    }
    currentNest = nextNest;
  }
}

// And here's an implementation of the locateScalpel function without using async and await:
function locateScalpel(nest) {
  let currentNest = nest.name;
  return new Promise((resolve, reject) => {
    function loop() {
      anyStorage(nest, currentNest, "scalpel")
        .then((nextNest) => {
          if (nextNest === currentNest) {
            resolve(currentNest);
          } else {
            currentNest = nextNest;
            loop();
          }
        })
        .catch(reject);
    }
    loop();
  });
}

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
