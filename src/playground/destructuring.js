//OBJECT DESTRUCTING

const person = {
  name: 'Darth Vader',
  age: 23,
  location: {
    city: 'Oslo',
    temp: 5
  }
};

// Have reassigned the variables to a new name below and given defaults in the case of name
const { name :renamedName = 'defaultNameAnon', age } = person;
const  {city, temp: renamedTemp } = person.location;

console.log(`${renamedName} is ${age}`);
console.log(`The fucking weather in ${city} is shitty, temp = ${renamedTemp}`);

// const book = {
//   title: 'great book',
//   author: 'some dude',
//   publisher: {
//     // name: 'penguin'
//   }
// };
//
// const { name: publisherName = 'defaultwhennotavailable' } = book.publisher;
// console.log(publisherName);

//ARRAY DESTRUCTING

const address = ['123 disphit st.', 'mebane', 'nc', '27302']

// console.log(`you are in ${address[1]} in shitty ${address[2]}`);
//old way above
//new way destructured
const [ , town, state = 'defaultState'] = address; //skipping the street here not using it
console.log(`you are in ${town} in shitty ${state}`);

const item = ['coffee', '2 bucks','3 bucks','4 bucks'];
const [drink, , price] = item;
console.log(`a should be coffee ${drink} costs should be 3 ${price}`);
