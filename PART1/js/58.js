// filter method

const numbers = [1,3,2,6,4,8];

// const isEven = function(number){
//     return number%2===0;
// }

// const isOdd = function(number){
//     return number%2!==0;
// }

// const evenNumbers = numbers.filter(isEven); // filter callback function will return true/false

// console.log(evenNumbers);

// const oddNumbers = numbers.filter(isOdd);

// console.log(oddNumbers);

// const evenNumbers = numbers.filter((number)=>{
//     return number % 2 === 0;
// });

const evenNumbers = numbers.filter(function(number){
    return number % 2 === 0;
});

console.log(evenNumbers);