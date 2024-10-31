// splice method
// start, delete, insert

const myArray = ['item1','item2','item3'];

// delete
// const deletedItem = myArray.splice(1, 1);

// console.log("deleted Item", deletedItem);

// insert
// console.log(myArray.splice(1, 0, 'inserted item')); // Gives Empty array

// insert and delete together
const deletedItem = myArray.splice(1, 2, 'inserted item1', 'inserted item2'); // Gives array of deleted elements
console.log("Deleted Item", deletedItem);
console.log(myArray);