// array destructuring
const myArray = ["value1","value2","value3","value4"];
// const myArray = ["value1","value2","value3"]; // In this case first values are taken and others are ignored

// let myvar1 = myArray[0];
// let myvar2 = myArray[1];

// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);

// JavaScript provides a shortcut
// let [myvar1,myvar2] = myArray;
// let [myvar1,myvar2,myvar3,myvar4] = myArray;
// let [myvar1,,myvar3,myvar4] = myArray;
// myvar1 = "value changed";
// const [myvar1,myvar2] = myArray;
// myvar1 = "value changed"; // const will throw an error
// let myNewArray = myArray.slice(2);
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);
// console.log("value of myvar3", myvar3); // Gives undefined
// console.log("value of myvar4", myvar4); // Gives undefined
// console.log(myNewArray);

let [myvar1,myvar2,...myNewArray] = myArray;
console.log("value of myvar1",myvar1);
console.log("value of myvar2",myvar2);
console.log(myNewArray);
