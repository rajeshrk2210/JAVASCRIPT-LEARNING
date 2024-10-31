// intro to events
// click
// event add karne ke 3 tarike hai
// 1.)

const btn = document.querySelector(".btn-headline");
console.log(btn);
console.dir(btn);
// btn.onclick = function(){
//     console.log("You Clicked Me!!!")
// };
// function clickMe(){
//     console.log("you clicked me!!!!!");
// }
// btn.addEventListener("click",clickMe);
// btn.addEventListener("click",function(){console.log("you clicked me!!!!!")});
btn.addEventListener("click",()=>{console.log("arrow function!!!")});
