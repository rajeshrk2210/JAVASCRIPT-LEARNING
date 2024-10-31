// use const for creating array
// const pi = 3.14;
// pi = 5; // This will throw an error
// console.log(pi)

// heap memory ["apple","mango"] 0x11
const fruits = ["apple","mango"]; // fruits variable stores the address where as the array is stored in heap
fruits.push("banana");
console.log(fruits);
// fruits = ["grapes","pineapple"]; // This will throw an error as you are trying to assign a new array
// let allows such changes
// console.log(fruits);

// 90 % developer use const to create arrays as it allows no modification to be made unknowingly for safety reason
// Even for primitive data types as well