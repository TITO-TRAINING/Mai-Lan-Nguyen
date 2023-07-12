// Creating an objecting with values
const rectangle = {
  length: 20,
  width: 20,
};
console.log(rectangle); // {length: 20, width: 20}

const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js',
  ],
  isMarried: true,
};
console.log(person);

// accessing values using .
console.log(person.firstName);

// value can be accessed using square bracket and key name
console.log(person['firstName']);

//find Properties in an object
console.log(person.hasOwnProperty('firstName'));
