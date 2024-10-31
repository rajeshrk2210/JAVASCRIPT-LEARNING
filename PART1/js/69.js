// clone using Object.assign

// memory

const obj = {
    key1: "value1",
    key2: "value2"
}

// const obj2 = obj;
// obj.key3 = "value3";
// console.log(obj);
// console.log(obj2);

// const obj2 = {...obj}; // cloning method1
// const obj2 = Object.assign({}, obj); // Old cloning method
obj.key3 = "value3";
console.log(obj);
console.log(obj2);

