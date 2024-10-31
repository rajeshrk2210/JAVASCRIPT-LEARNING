// trim()
// toUpperCase()
// toLowerCase()
// slice

// It's important to know that in JavaScript, strings are immutable. This means that once a string is created, its contents cannot be changed.

let firstName = "   harshit   ";

console.log(firstName.length);
// firstName.trim(); // String is immutable and it will not change the existing string
let newString = firstName.trim();
console.log(firstName.length);
console.log(newString.length);
firstName = firstName.trim();
console.log(firstName.length);

// toUpperCase()
console.log(firstName.toUpperCase());
console.log(firstName);
firstName = firstName.toUpperCase(); // firstName.toUpperCase() gives a new String 
console.log("After making uppercase ->",firstName);

// toLowerCase()
firstName = "harSHIT";
console.log(firstName.toLowerCase());

// slice
let newfirstName = firstName.slice(0,5); // It will take string from index 0 uptil 5 but does not include 5
console.log(newfirstName);
console.log(firstName);
console.log(firstName.slice(2)); // It is take string from index 2 uptill end