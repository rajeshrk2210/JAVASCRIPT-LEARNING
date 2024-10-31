// const firstButton = document.querySelector('#one');
// const allButtons = document.querySelectorAll("button");
// firstButton.addEventListener("click",function(){
//     console.log("you clciked me!!!!");
// });
// console.log(allButtons);

const allButtons = document.querySelectorAll(".my-buttons button");
console.log(allButtons);

// for(let button of allButtons){
//     button.addEventListener("click",function(){
//         console.log("you clicked me!!!!");
//     })
// }

// for(let button of allButtons){
//     button.addEventListener("click",function(){
//         console.log(this);
//         console.log(this.textContent);
//     })
// }

// for(let button of allButtons){
//     button.addEventListener("click",()=>{
//         console.log(this); // we get window object
//         console.log(this.textContent); // we will get undefined
//     })
// }

// for(let i = 0; i < allButtons.length; i++){
//     allButtons[i].addEventListener("click", function(){
//         console.log(this);
//     });
// }

allButtons.forEach(function(button){
    button.addEventListener("click",function(){
        console.log(this);
    });
});
