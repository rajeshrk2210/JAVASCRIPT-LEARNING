// methods
// function inside object

// const person = {
//     firstName: "harshit",
//     age: 8,
//     about: function(){
//         console.log("person name is harshit and person age is 22");
//     }
// }

// const person = {
//     firstName: "harshit",
//     age: 8,
//     about: function(){
//         // console.log(`person name is ${firstName} and person age is ${age}`); // Gives undefined error
//         console.log(`person name is ${this.firstName} and person age is ${this.age}`);
//         console.log(this);
//     }
// }

// this refers to an object in which it is called or used

// person.about();// Call the function
// console.log(person.about); // Logs the complete function

function personInfo(){
    console.log(`person name is ${this.firstName} and person age is ${this.age}`);
    console.log(this);
}

const person1 = {
    firstName: "harsh",
    age: 8,
    about: personInfo  
}

const person2 = {
    firstName: "mohit",
    age: 18,
    about: personInfo  
}

const person3 = {
    firstName: "nitish",
    age: 17,
    about: personInfo  
}

person1.about();
person2.about();
person3.about();

personInfo(); // We get window object here
// JavaScript global object is window object
// console.log(window); // This is same as below one
// console.log(this);

console.log(this===window); // Gives true