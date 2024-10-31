// array push pop

// array shift unshift

let fruits = ["apple","mango","grapes"];

// push --- Add an element at the last
// Array are mutable
// console.log(fruits);
// fruits.push("banana");
// console.log(fruits);

// pop --- Removes last element from the array
// fruits.pop(); // --> Returns the removed element from the array
// let poppedFruit = fruits.pop();
// console.log(fruits);
// console.log("popped fruits is ",poppedFruit);

// unshift -- Adds element from the begining
fruits.unshift("banana");
fruits.unshift("myfruits");
console.log(fruits);

// shift -- Removes element from the begining
let removedFruit = fruits.shift();
console.log(removedFruit); // Prints removed element
console.log(fruits);

// push & pop are fast compared to shift and unshift
// Because push & pop adds elements at the end
// Whereas unshift and shift requires all the array elemenst to get shifted