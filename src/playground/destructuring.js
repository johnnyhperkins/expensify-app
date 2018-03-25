// Object Destruturing

// const person = {
//     // name: 'Johnny',
//     age: 34,
//     location: {
//         city: 'NYC',
//         temp: 40
//     }
// };

// //this line
// const {name: firstName = 'Anonymous' // you can define defaults like this, and you can rename a variable at the same time
//     , age} = person;

// // is the same as creating these two variables: 
// // const name = person.name;
// // const age = person.age;

// console.log(`${firstName} is ${age}` );

// //also works levels deep into an object
// // const {city, temp} = person.location;

// // you can also change the name of the variable
// const { city, temp: tempurature } = person.location;

// console.log(`It's ${tempurature} in ${city}`)

// const book = {
//   title: 'Salt Houses',
//   author: 'Hala Alyan',
//   publisher: {
//       name: 'Houghton Mifflin'
//   }  
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

//
// Array Destructuring
//

const address = ['102 devoe','Brooklyn', 'New York', '11211'];

const [street, city, state, zip] = address;

// to only pull certain items from the array:
const [, , state, zip] = address;

// for defaults, it's the same as with objects
const [, , state = 'New York', zip] = address;

console.log(`You are in ${state}, ${zip}`)