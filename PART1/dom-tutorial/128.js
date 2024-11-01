// console.log("hello world!!!!");

const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");

// capturing events

// child.addEventListener("click", () => {
//     console.log("capture !!!! child");
// }, true);

// parent.addEventListener("click", () => {
//     console.log("capture !!!! parent");
// }, true);

// grandparent.addEventListener("click", () => {
//     console.log("capture !!!! grandparent");
// }, true);

// document.body.addEventListener("click", () => {
//     console.log("capture !!!! documet.body");
// }, true);

// no capture

// child.addEventListener("click", () => {
//     console.log("bubble child!!!");
// });

// parent.addEventListener("click", () => {
//     console.log("bubble parent!!!");
// });

// grandparent.addEventListener("click", () => {
//     console.log("bubble grandparent!!!");
// });

// document.body.addEventListener("click", () => {
//     console.log("bubble documet.body!!!");
// });

// This is called event bubbling or event propagation

// event delegation
// grandparent.addEventListener("click",()=>{
//     console.log("you clicked something!!!");
// })

grandparent.addEventListener("click",(e)=>{
    // console.log(e);
    // console.log(e.target);
    console.log(e.target.textContent);
})