// important array methods

// forEach
// map
// filter
// reduce

const numbers = [4,2,5,8];

//Multiply by 2
// function myFunc(number, index){
//     console.log(`index is ${index} number is ${number}`);
//     // console.log(`${number}*2 = ${number*2}`);
// }

// myFunc(numbers[0], 0);
// myFunc(numbers[1], 1);

// for(let i = 0; i< numbers.length; i++){
//     // console.log(i);
//     myFunc(numbers[i],i);
// }

// number and index are passed as parameters of an array
// numbers.forEach(myFunc); // forEach is a callback function

// parameter vs argument
// When writing a function we call parameter
// When passing the value to a function we call it as argument
// numbers.forEach(function(number,index){
//     console.log(`index is ${index} number is ${number}`);
// });

// numbers.forEach(function(number){ // index we are not taken as an argument
//     console.log(number*2);
// });

// numbers.forEach(function(number,index){
//     console.log(number*2, index);
// })

const users = [
    {firstName: "harshit", age: 23},
    {firstName: "mohit", age: 23},
    {firstName: "nitish", age: 23},
    {firstName: "garima", age: 23},
];

// users.forEach(function(user){
//     console.log(user.firstName);
// });

// users.forEach((user)=>{
//     console.log(user.firstName);
// })

users.forEach((user, index)=>{
    console.log(user.firstName, index);
})

// for(let user of users){
//     console.log(user.firstName);
// }
