// function expression
// console.log("happy birthday to you.....");
// console.log("happy birthday to you.....");

// function declaration
function singHappyBirthday(){
    console.log("happy birthday to you.....");
}

singHappyBirthday();

// function twoPlusFour(){
//     console.log(2+4);
// }

// // call, invoke, run all meaning the same
// twoPlusFour();

// Programming principle DRY - Do not repeat yourself

// function twoPlusFour(){
//     return 2+4;
// }

// const returnedValue = twoPlusFour();
// console.log(returnedValue);

function sumTwoNumbers(number1, number2){ // number1 & number2 are called parameters
    console.log(number1);
    console.log(number2);
    return number1 + number2;
}

// const returnedValue = sumTwoNumbers(4,5);
// console.log(returnedValue);

// If no parameters are passed we get response as NaN and parameters will be considered as undefined
// const returnedValue = sumTwoNumbers();
// console.log(returnedValue);

function sumThreeNumbers(number1, number2, number3){
    return number1 + number2 + number3;
}

// const returnedValue = sumThreeNumbers(2,3,5);
// console.log(returnedValue);
// console.log(2+3+undefined);

// isEven
// input : 1 number
// output : true , false

// function isEven(number){
//     if(number%2===0){
//         return true;
//     }else{
//         return false;
//     }
// }

// function isEven(number){
//     if(number%2===0){
//         return true;
//     }
//     return false;
// }

// function isEven(number){    
//     return number % 2 === 0;
// }

// console.log(isEven(5));
// console.log(12 % 2 === 0);

// function
// input: string
// output: firstCharacter

function firstChar(anyString){
    return anyString[0];
}

console.log(firstChar("zbc"));

// function
// input: array, target (number)
// output: index of target if target present in array
// [1,5,9,27,6], 9

function findTarget(array, target){
    for(let i = 0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}

const myArray = [1,3,8,90];
const ans = findTarget(myArray, 8);
console.log(ans);
