function hello(){
    console.log("hello world");
}

// javascript function ===> function + object

// name is a property for function

// console.log(hello.name);

// you can add your own properties
hello.myOwnProperty = "very unique value";
console.log(hello.myOwnProperty);
console.log(hello);

// name property --> tells function name;

// function provides more useful properties

// When we create a function we get free space which is an object which is called prototype
// hello.prototype; // {} Object freespace
// console.log(hello.prototype); // {}

// only functions provide prototype property

// if(hello.prototype){
//     console.log("prototype is present");
// }else{
//     console.log("prototype is not present");
// }

// const hello1 = {key1 : "value1"};
// if(hello1.prototype){
//     console.log("prototype is present");
// }else{
//     console.log("prototype is not present");
// }

// const hello2 = ["value1"];
// if(hello2.prototype){
//     console.log("prototype is present");
// }else{
//     console.log("prototype is not present");
// }

// hello.prototype.abc = "abc";
// hello.prototype.xyz = "xyz";
// hello.prototype.sing = function(){
//     return "lalala";
// };

// console.log(hello.prototype);
// console.log(hello.prototype.abc);
// console.log(hello.prototype.sing());
