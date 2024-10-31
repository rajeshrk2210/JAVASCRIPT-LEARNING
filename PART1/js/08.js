// typeof operator

// data types - Primitive Data types
// string "harshit"
// number 2,4,5.6
// booleans
// undefined
// null
// BigInt
// Symbol

let age = 22;
let firstName = "harshit";

console.log(typeof age);
console.log(typeof firstName);
console.log(typeof "harshit");
console.log(typeof 7);

// convert number to string
console.log(typeof (age + "")); // age + "" -> converts number to String
age = age + ""; // converts age to String
console.log("typeof(age)->",typeof(age));

// convert string to number
let myStr = +"12"; // Placing + infront of string changes it to number
console.log(myStr," -> ",typeof myStr);
myStr = +"a"; // If it is not a number then it returns NaN (Not a Number)
console.log(myStr," -> ",typeof myStr);

// **Another method
let newAge = 18;
newAge = String(newAge);
console.log("newAge -> ",newAge,"typeof -> ",typeof newAge);