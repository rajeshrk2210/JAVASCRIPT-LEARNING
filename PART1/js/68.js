// Maps
// map is an iterable

// store data in ordered fashion

// store key value pair (like object)
// diplicate keys are not allowed like objects

// different between maps and objects

// objects can only have string or symbol
// as key

// in maps you can use anything as key
// like array, number, string

// object literal
// key -> string
// key -> symbol
// const person = {
//     firstName : "harshit",
//     age: 7,
//     1: "one"
// };

// console.log(person.firstName);
// console.log(person[firstName]);
// console.log(person['1']);
// for(let key in person){
//     console.log(typeof key);
// }

// key value pair
// const person = new Map();
// person.set('fisrtName', 'Harshit');
// person.set('age', 7);
// person.set(1,'one');
// person.set([1,2,3],'onetwothree');
// person.set({1: 'one'},'onetwothree');
// console.log(person);
// console.log(Array.isArray(person));
// console.log(person.firstName); // Gives error as maps cannot be accessed like objects
// console.log(person[firstName]); // Gives error as maps cannot be accessed like objects
// console.log(person.get('age')); // Map has get method to access the elements in the map using key
// console.log(person.keys()); // Gives all the keys as o/p
// for(let key of person.keys()){
//     console.log(key, typeof key);
// }
// for(let item of person){
//     console.log(item,typeof(item),Array.isArray(item));
// }

// Destructuring of map
// for(let [key, value] of person){
//     console.log(key,value);
// }

// Creating a map using constructor
// const person = new Map([['firstName','harshit'],['age',7]]);
// console.log(person);

// const person1 = {
//     id: 1,
//     firstName: "harshit"    
// };

// const userInfo = new Map();
// userInfo.set(person1, {age: 8, gender: "male"});
// console.log(userInfo);

const person1 = {
    id: 1,
    firstName: "harshit"    
};

const person2 = {
    id: 2,
    firstName: "harsh"
};

const extraInfo = new Map();
extraInfo.set(person1, {age: 8, gender: "male"});
extraInfo.set(person2, {age: 8, gender: "male"});
console.log(person1.id);
console.log(extraInfo.get(person1).gender);
console.log(extraInfo.get(person1).age);
console.log(extraInfo.get(person2).gender);
console.log(extraInfo.get(person2).age);