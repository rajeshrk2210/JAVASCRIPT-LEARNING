// how to clone array

// how to concatenate two arrays

// let array1 = ["item1", "item2"];
// let array2 = array1; // array1 and array2 both refer to same object
// console.log(array1==array2); // Checks value
// console.log(array1===array2); // Checks value and type as well

// Below is not a proper way to clone array
// let array1 = ["item1", "item2"];
// let array2 = ["item1", "item2"];
// array1.push("item3");

// console.log(array1===array2);
// console.log(array1);
// console.log(array2);

// Clone using slice
// let array1 = ["item1", "item2"];
// let array2 = array1.slice(0);// slice here starts from index 0 till end and returns an array
// array1.push("item3");
// console.log(array1);
// console.log(array2);

// Clone using concat
// let array1 = ["item1", "item2"];
// let array2 = [].concat(array1);
// let array2 = array1.slice(0).concat(["item3","item4"]);
// let array2 = [].concat(array1,["item3","item4"]);
// let array2 = [...array1,"itme3","item4"];
// let array2 = [...array1,...oneMoreArray];
// array1.push("item3");
// console.log(array1===array2);
// console.log(array1);
// console.log(array2);

// Spread Operator
// let array1 = ["item1", "item2"];
// let array2 = [...array1]; // Spread Oprator expands the array
// array1.push("item3");
// console.log(array1===array2);
// console.log(array1);
// console.log(array2);

// Slice is fast compared to all but mostly the spread opeartor is used as it is more readable

// ** Task Copy an array to another and also add some new elements
let array1 = ["item1", "item2"];
// let array2 = array1.slice(0).concat(["item3","item4"]); // one way
// let array2 = [].concat(array1,["item3","item4"]); // another way
// let array2 = [...array1,"item3","item4"]; // One more method
// array1.push("item3");
