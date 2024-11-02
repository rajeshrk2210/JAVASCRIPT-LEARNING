// understand callback

// function myFunc(callback){
//     console.log("Function is doing some task 1 ");
//     callback();
// }

// function myFunc2(){
//     console.log("Function is doing task 2 ");
// }

// myFunc(myFunc2);

// myFunc(function(){
//     console.log("Function is doing some task 2 ");
// });

// myFunc(()=>{
//     console.log("Function is doing some task 2 ");
// });

// function getTwoNumbersAndAdd(number1, number2, callback){
//     console.log(number1, number2);
//     if(typeof number1 === "number" && typeof number2 === "number"){
//         callback(number1,number2);
//     }
//     else{
//         console.log("Wrong Data Type");
//     }
// }

function getTwoNumbersAndAdd(number1, number2, onSuccess, onFailure) {
  console.log(number1, number2);
  if (typeof number1 === "number" && typeof number2 === "number") {
    onSuccess(number1, number2);
  } else {
    onFailure();
  }
}

function addTwoNumbers(num1, num2){
    console.log(num1+num2);
}

function onFail() {
  console.log("Wrong data type");
  console.log("please pass numbers only");
}

// getTwoNumbersAndAdd("4", "5", addTwoNumbers);
// getTwoNumbersAndAdd(4, 5, addTwoNumbers);

// getTwoNumbersAndAdd(4,5,
//   (num1, num2) => {
//     console.log(num1 + num2);
//   },
//   () => {
//     console.log("Wrong data type");
//     console.log("please pass numbers only");
//   }
// );

getTwoNumbersAndAdd(4,5,addTwoNumbers,onFail);
