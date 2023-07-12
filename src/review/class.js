class Person {
  constructor(firstName, lastName) {
    console.log(this); // Check the output from here
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person1 = new Person('Asabeneh', 'Yetayeh');

console.log(person1);
