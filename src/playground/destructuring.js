console.log('destruct');

const person = {
    name: 'Pete',
    age: '23',
    location: {
        city: 'Torquay',
        temp: 40
    }
}

console.log(`${person.name} is ${person.age} year's old and live in ${person.location.city}`)

//destruct - create same named variables from an object. very pretty.
const { name, age } = person;
console.log(name);


//renaming.
const { city, temp: temperature } = person.location;
console.log(temperature);

//set default if undefined in main object
const { weight = 50 } = person
console.log(weight);



//example.
const book = {
    title: 'Ego is the enemy',
    author: 'Ryan holiday',
    publisher: {
        name: 'Penguin'
    }
}

//publisherName
const { publisher: publisherName = 'Self-Published'} = book.publisher
console.log(publisherName);




//
// Array destructing - example shows leaving out items in the array too - use of commas
//
//Also possible to rename and add defaults

const address = ['52A Park Road', 'Paignton', 'Devon', 'TQ1 3EJ' ];
const [, town, county = 'unknown'] = address;
console.log(city);

