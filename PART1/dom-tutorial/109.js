// loop

// array like  object ---> indexing, length property
// const navItems = document.getElementsByClassName("nav-item");
// const navItems = document.getElementsByTagName("a");
// let navItems = document.getElementsByTagName("a");
// console.log(navItems); // Gives HTMLCollection
// console.log(navItems.length);
// we can't use forEach method to iterate through HTMLCollection
// simple for loop
// for of loop
// forEach

// simple for loop
// for(let i=0; i<navItems.length; i++){
//     // console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }

// Using for of loop
// for(let navItem of navItems){    
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }

// navItems = Array.from(navItems);
// console.log(Array.isArray(navItems));
// navItems.forEach((navItem) => {
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// });

// console.log(navItems);
// console.log(typeof navItems);
// console.log(Array.isArray(navItems));
// console.log(navItems[0]);
// console.log(navItems[1]);
// console.log(navItems[2]);

let navItems = document.querySelectorAll("a");
console.log(navItems);
// simple for loop
// for of loop
// forEach

// simple for loop
// for(let i=0; i<navItems.length; i++){
//     // console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }

// Using for of loop
// for(let navItem of navItems){    
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }

navItems.forEach((navItem) => {
    navItem.style.backgroundColor = "#fff";
    navItem.style.color = "green";
    navItem.style.fontWeight = "bold";
});