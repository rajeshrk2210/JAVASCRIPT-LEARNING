// spread operator
// const array1 = [1,2,3];
// const array2 = [5,6,7];

// const newArray = [...array1];
// const newArray = [...array1,...array2,89,69];
// const newArray = [..."abc"]; // String is also iterable
// const newArray = [..."123456789"]; // String is also iterable
// console.log(newArray);

// spread operator in objects
// In object all keys must be unique
// const obj1 = { 
//     key1: "value1",
//     key2: "value2",
//     key1: "value59", // In this case the last value is considered
// }

// console.log(obj1); // For key1 we get value59

const obj1 = { 
    key1: "value1",
    key2: "value2"
}

const obj2 = {
    key1: "valueUnique",
    key3: "value3",
    key4: "value4"
}

// const newObject = {...obj1, ...obj2};
// const newObject = {...obj2, ...obj1}; // Values are ordered similar to the order of the objects
// const newObject = { ...obj2, ...obj1, key69: "value69"}; // We can also other key value pairs along with spread operator
// const newObject = {..."abc"}; // In case the key are not present in such cases index will become the key
const newObject = {...["item1","item2"]};// Index will be used as keys
console.log(newObject);

