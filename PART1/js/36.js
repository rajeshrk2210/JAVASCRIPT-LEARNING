// objects -> reference type similar to arrays // All reference types get stored in similar way
// arrays are good but not sufficient
// for real world data
// objects store key value pairs
// objects dont have index

// how to create Objects

// const person = {name:"Harshit", age:22};
// JavaScript stores key as a String only
const person = {
    name: "harshit",
    age: 22,
    hobbies: ["guitar","sleeping","listening music"]
}

// If we keep the keys asstrings it works in the same way
const person1 = {
    "name": "harshit",
    "age": 22,
    "hobbies": ["guitar","sleeping","listening music"]
}

console.log(person);
console.log(typeof person);

// how to access data from Objects
console.log(person.name);
console.log(person["name"]);
console.log(person.age);
console.log(person.hobbies); // This can be treated as normal array

// how to add key value pair to objects
// person.gender = "male";
person["gender"] = "male"; // This works same as the above one
console.log(person);