// lexical scope
// lexical environment

// myApp function is in Global Scope
// case 1
// function myApp(){
//     const myVar = "value1";
//     function myFunc(){
//         const myVar = "value59"; // If this line is commented then it give myVar as "value1"
//         console.log("inside myFunc", myVar);
//     }
//     const myFunc2 = function(){}
//     const myFunc3 = () => {}
//     console.log(myVar);
//     myFunc();
// }

// myApp();

const myVar = "value1"; // Variable is in Global Scope

function myApp(){
    function myFunc(){
        // const myVar = "value59";
        const myFunc2 = () => {
            console.log("inside myFunc", myVar);
        }
        myFunc2();
    }
    console.log(myVar);
    myFunc();
}

myApp();