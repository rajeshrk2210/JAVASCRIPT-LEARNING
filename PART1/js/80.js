const obj1 = {
    key1 : "value1",
    key2 : "value2"
}

// const obj2 = {
//     key3 : "value3"
// }

// const obj2 = {};

// obj2.key3 = "value3";

// console.log(obj2.key1);

// there is one more way to create empty object
const obj2 = Object.create(obj1); // {} - this sets the obj2 prototype as object1
obj2.key3 = "value3";
// obj2.key2 = "unique";

console.log(obj2.key3); // Works fine
console.log(obj2.key2); // Since key2 is not defined in obj2 it looks in obj1

// this is happening
console.log(obj2);
console.log(obj2.__proto__);

// obj2.__proto__ -> we call this as dunder in javascript

// __proto__

// official ecmascript documentation

// [[prototype]]

// __proto__ , [[prototype]]

// prototype