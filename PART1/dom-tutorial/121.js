// this keyword
const btn = document.querySelector(".btn-headline");

function myFunc(){
    console.log("you clicked me !!!!");
    console.log("value of this")
    console.log(this);
}

btn.addEventListener("click", myFunc);
btn.addEventListener("click", function(){
    console.log("you clicked me !!!!");
    console.log("value of this")
    console.log(this);
});

btn.addEventListener("click", ()=>{
    console.log("you clicked me !!!!");
    console.log("value of this")
    console.log(this); // In case of arrow function we get window
});