// closures
// closure : 30 - 40%
// analyze : 70 -80 %
// real example : 100%

// function can return functions
// case 1
// function myFunc(){
//     return 1;
// }

// const ans = myFunc();

// console.log(ans);

// case 2
// function outerFunction(){
//     function innerFunction(){
//         console.log("hello world");
//     }
//     return innerFunction;
// }

// const ans = outerFunction();

// console.log(ans);

// ans();

// case 3
function printFullName(firstName, lastName){
    function printName(){
        console.log(firstName, lastName);
    }
    return printName; // Return along with its lexical environment
}

const ans = printFullName("harshit","sharma");

console.log(ans);

ans();