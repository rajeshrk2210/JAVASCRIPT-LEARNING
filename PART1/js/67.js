// Sets (it is iterable)
// store data
// sets also have its own methods
// No index-based access
// Order is not guaranteed
// unique items only (no duplicates allowed)

// const numbers = new Set([1,2,3,3]); // duplicates are ignored
// const numbers = new Set("abc"); // duplicates are ignored
// console.log(numbers);
// console.log(numbers[2]); // Gives undefined

// const items = ['item1','item2','item3'];
// const numbers = new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(items);
// numbers.add(items); //ignore this one as both have same reference of the array
// numbers.add(['item1','item2','item3']);
// numbers.add(['item1','item2','item3']);// In this both arrays are considered as different
// console.log(numbers);

// To check if an element is present in the set
// if(numbers.has(1)){
//     console.log("1 is present");
// }else{
//     console.log("1 is not present");
// }

// for of loop
// for(let number of numbers){
//     console.log(number);
// }

const myArray = [1,2,4,4,5,6,5,6];

const uniqueElements = new Set(myArray);

console.log(uniqueElements.length); // We get undefined
console.log(uniqueElements);
console.log(myArray);

let length = 0;

for(let element of uniqueElements){
    length++;
}

console.log(length);