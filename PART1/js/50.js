// block scope vs function scope

// let and const are block scope
// var is function scope

// {
//     // let firstName = "harshit";
//     const firstName = "harshit";
//     console.log(firstName); // This will print the firstName "harshit"
// }

// console.log(firstName); // Gives Error as firstName is not in its scope

// {
//     // let firstName = "mohit";
//     const firstName = "mohit";
//     console.log(firstName); // This will print the firstName "mohit"
// }

// const firstName = "garima";
// console.log(firstName);

// var is function scope

// if(true){
//     var firstName = "harshit";
//     console.log(firstName);
// }

// {
//     // var firstName = "mohit"; // If present o/p -> mohit else o/p -> harshit
//     console.log(firstName);
// }

// console.log(firstName);

// let firstName = "garima";
// function myApp() {
//     if(true){
//         let firstName = "harshit";
//         console.log(firstName);
//     }
//     console.log(firstName); // Gives error
// }

// myApp();

let firstName = "garima";
function myApp() {
    if(true){
        var firstName = "harshit";
        console.log(firstName); // Prints firstName as "harshit" as var is function scope
    }
    if(true){
        console.log(firstName); // Prints firstName as "harshit" as var is function scope
    }
    console.log(firstName); // Prints firstName as "harshit" as var is function scope
}

myApp();