// function myFunction(power){
//     return function(number){
//         return number ** power;
//     }
// }

// const square = myFunction(2);
// const ans = square(2);
// console.log(ans);

// const cube = myFunction(3);
// const ans2 = cube(2);
// console.log(ans2);

// same as the above function
const myFunction = power =>  number => number ** power;

const square = myFunction(2);
const ans = square(2);
console.log(ans);

const cube = myFunction(3);
const ans2 = cube(2);
console.log(ans2);

