// function expression
// function singHappyBirthday(){
//     console.log("happy birthday to you.....");
// }

// This is same as the above one
const singHappyBirthday = function(){
    console.log("happy birthday to you.....");
}

singHappyBirthday();

const sumThreeNumbers = function(number1, number2, number3){
    return number1 + number2 + number3;
}

// Anonymous function
// function(number1, number2, number3){
//     return number1 + number2 + number3;
// }

const ans = sumThreeNumbers(2,3,4);
console.log(ans);

// function isEven(number){
//     return number % 2 === 0;
// }

const isEven = function(number){
    return number % 2 === 0;
}
console.log(isEven(2));

// function firstChar(anyString){
//     return anyString[0];
// }

const firstChar = function(anyString){
    return anyString[0];
}

const findTarget = function(array, target){
    for(let i = 0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}