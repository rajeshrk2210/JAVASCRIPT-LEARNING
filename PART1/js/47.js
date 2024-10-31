// hoisting

// This works fine in case 1
// Gives error in case 2 & 3
// This behaviour is called as hoisting
// hello(); 

// case 1
// function hello(){
//     console.log("Hello World!");
// }

// case 2
// const hello = function(){
//     console.log("Hello World!");
// }

// case 3
// const hello = () => {
//     console.log("Hello World!");
// }

// console.log(hello); // Gives undefined
// var hello = "hello world!";
// console.log(hello); // Gives "hello world!"

// console.log(hello); // Gives error before
// let hello = "hello world!";
// console.log(hello); // Gives "hello world!" after

// console.log(hello); // Gives error before
// const hello = "hello world!";
// console.log(hello); // Gives "hello world!" after




