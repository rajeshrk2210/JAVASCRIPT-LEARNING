// intro to arrays
// Arrays - Reference Type (Reference Type means Object)
// Where as string, number .. are primitive data types
// ordered collection of elements (Which means we have index)
// how to create arrays

// let fruits = ["apple","mango","grapes"];
// let numbers = [1,2,3,4];
// let mixed = [1,2,2.3,"string",null,undefined];
// console.log(mixed); // prints all the elements of the array in console
// console.log(numbers);
// console.log(fruits[2]); // We can also print element of a particular index as well

let fruits = ["apple","mango","grapes"];
let obj = {}; // object literal
console.log(fruits);
fruits[1] = "banana";
console.log(fruits);
console.log(typeof fruits);
// We can check if an object is an array
console.log(Array.isArray(fruits)); // like this we can check if an object is array or not
console.log(Array.isArray(obj));

// array indexing