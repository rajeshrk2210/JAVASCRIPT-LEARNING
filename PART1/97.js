// lexical environment, scope chain

// const lastName = "Vashistha";

// const printName = function(){
//     const firstName = "harshit";
//     console.log(firstName);
//     console.log(lastName); // Gets the value from the lexical environment
// }

// printName();

// case 2
const lastName = "Vashishtha";

const printName = function(){
    const firstName = "harshit";
    function myFunction(){
        console.log(firstName);
        console.log(lastName);
    }
    myFunction();
}

printName();