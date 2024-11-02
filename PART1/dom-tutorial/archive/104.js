// select element using query selector

// const mainHeading = document.getElementById("main-heading");
const mainHeading = document.querySelector("#main-heading");
const header = document.querySelector(".header");
const navItem = document.querySelector(".nav-item"); // Gives the first query element
const navItems = document.querySelectorAll(".nav-item"); // Gives all the query element
console.log(mainHeading);
console.log(header);
console.log(navItem);
console.log(navItems);