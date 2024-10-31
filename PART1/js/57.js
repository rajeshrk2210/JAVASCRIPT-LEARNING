// map method
const numbers = [3,4,6,1,8];

// const square = function(number){
//     return number * number;
// }

// console.log(numbers.map(square)); // map always creates a new array

// const squareNumber = numbers.map(square);

// console.log(squareNumber);

// const square = function(number){
//     console.log(number * number);
// }

// const squareNumber = numbers.map(square);
// console.log(squareNumber); // Gives numbers as undefined as we are not returning anything

// forEach does not give a new array where as map gives a new array

// Using anonymous function
// const squareNumber = numbers.map(function(number){
//     return number * number;
// });

// Using arrow function
// const squareNumber = numbers.map((number)=>{
//     return number * number;
// });

// const squareNumber = numbers.map((number, index)=>{
//     return `index: ${index}, square : ${number * number}`;
// });

// console.log(squareNumber);

const users = [
    {firstName: "harshit", age: 23},
    {firstName: "mohit", age: 21},
    {firstName: "nitish", age: 22},
    {firstName: "garima", age: 20}
];

const userNames = users.map((user)=>{
    return user.firstName;
});

console.log(userNames);