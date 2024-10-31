// for loop in array

let fruits = ["apple","mango","grapes","banana"];

// for(let i =0; i<=9; i++){
//     console.log();
// }

// Array property -> length
// console.log(fruits.length);
// To get the last index element
// console.log(fruits[fruits.length-1]);
let fruits2 = [];
for(let i=0; i<fruits.length; i++){
    // console.log(i);
    // console.log(fruits[i].toUpperCase());
    fruits2.push(fruits[i].toUpperCase()); // Make a new array and get elemenst in uppercase for fruits
}

console.log(fruits2);

