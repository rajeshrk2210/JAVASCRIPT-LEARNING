// function returning function

// function myFunc(){
//     // return "a";
//     // return {name: "harshit", age: 22};
//     // return 1;
//     function hello(){
//         console.log("hello world");
//     }
//     return hello;
// }

// const ans = myFunc();
// console.log(ans); // This will print the function

// function myFunc(){
//     function hello(){
//         return "hello world"
//     }
//     return hello; // return the hello function
// }

// const ans = myFunc(); // and gets the hello function
// console.log(ans()); // prints "hello world"

// Higher Order function -> Function in which we take a function as i/p or return a function we call them higher order function

function myFunc(){
    return function(){ // return the function directly using return keyword
        return "hello world"
    }
}

const ans = myFunc(); // and gets the hello function
console.log(ans()); // prints "hello world"
