// get multiple elements using getElements by class name
// get multiple elements items using querySelectorAll

// const navItems = document.getElementsByClassName("nav-item");
// console.log(navItems); // Gives HTMLCollection
// console.log(typeof navItems);
// console.log(Array.isArray(navItems));
// console.log(navItems[0]);
// console.log(navItems[1]);
// console.log(navItems[2]);

// const navItems = document.getElementsByClassName("nav-item");
const navItems = document.querySelectorAll(".nav-item"); // NodeList
console.log(navItems);
console.log(navItems[0]);
console.log(navItems[1]);
console.log(navItems[2]);
