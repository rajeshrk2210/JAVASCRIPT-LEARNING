// arrow functions
// Note: We can create only one function with same name
// const singHappyBirthday = function(){
//     console.log("happy birthday to you.....");
// }

const singHappyBirthday = ()=>{
    console.log("happy birthday to you.....");
}

singHappyBirthday();

const sumThreeNumbers = (number1, number2, number3) => {
    return number1 + number2 + number3;
}

const ans = sumThreeNumbers(1,2,3);
console.log(ans);

// const isEven = (number) => {
//     return number % 2 === 0;
// }

// When we have a single parameter the () are not needed
// const isEven = number => {
//     return number % 2 === 0;
// }

// We can further shorten the above function
const isEven = number => number % 2 === 0;

console.log(isEven(10));

// const firstChar = (anyString) => {
//     return anyString[0];
// }

// We can remove the return keyword in the following way
const firstChar = anyString => anyString[0];

console.log(firstChar("harshit"));

const findTarget = (array, target) => {
    for(let i = 0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}