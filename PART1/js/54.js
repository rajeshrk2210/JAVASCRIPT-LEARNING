// callback functions
// We take any function as input and calling it is called as callback function

// function myFunc(a){
//     console.log('hello world');
// }

// myFunc([1,2,3]); // a becomes an array
// myFunc("abc"); // a becomes an string
// myFunc({name: "harshit"}); // a becomes an object

// function myFunc2(){
//     console.log("inside my func 2");
// }

// function myFunc(callback){
//     console.log("hello there I am a func and I can....")
//     callback();
// }

// myFunc(myFunc2);

function myFunc2(name){
    console.log("inside my func 2");
    console.log(`your name is ${name}`);
}

function myFunc(callback){ 
    console.log("hello there I am a func and I can....")
    callback();
}

myFunc(myFunc2);