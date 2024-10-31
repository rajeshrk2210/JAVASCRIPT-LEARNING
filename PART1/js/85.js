// let numbers = [1,2,3];
// Object.getPrototypeOf(numbers);
// console.log(numbers);
// prototype -- functions
// proto

// let numbers = new Array(1,2,3);
// console.log(Array.prototype);
// console.log(numbers);

let numbers = [1,2,3];
console.log(Array.prototype);
console.log(Array.isArray(Array.prototype));
console.log(numbers);

function hello(){
    console.log("hello");
}

// prototype
console.log(hello.prototype);
hello.prototype = [];
console.log(hello.prototype);
hello.prototype.push('1');