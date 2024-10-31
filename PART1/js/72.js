// console.log(window);
// function myFunc(){
//     console.log("hello world");
//     console.log(this);
// }

// myFunc(); // we could see this function in the window object
// window.myFunc(); // we could also write like this


"use strict"
function myFunc(){
    console.log("hello world");
    console.log(this); // When we use strict we get undefined
}

myFunc(); // we could see this function in the window object
window.myFunc(); // Since we are using window object here we get window object in case of this