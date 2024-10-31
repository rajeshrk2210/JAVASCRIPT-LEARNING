// undefined
// null

// let firstName;
// console.log(typeof firstName); // We get undefined
// firstName = "Harshit";
// console.log(typeof firstName, firstName);

// let myVariable = null;
// console.log(myVariable);
// myVariable = "harshit";
// console.log(myVariable, typeof myVariable);
// const fName;
// console.log(typeof fName); // const must always be initialized else it will throw an error
console.log(typeof null); // Gives object as o/p and it is a bug/error

// BigInt
let myNumber = BigInt(12);
// let sameMyNumber = 123n;
let sameMyNumber = 123;
console.log(myNumber, typeof myNumber);
console.log(sameMyNumber, typeof sameMyNumber);
// console.log(Number.MAX_SAFE_INTEGER);
console.log(myNumber + sameMyNumber); // We cannot mix BigInt Datatype with others like Number