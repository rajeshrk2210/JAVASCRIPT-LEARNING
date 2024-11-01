// keypress event
// mouseover event

const body = document.body;

// body.addEventListener("keypress",(e)=>{
//     console.log(e.key);
// });

const mainButton = document.querySelector(".btn-headline");
console.log(mainButton);

mainButton.addEventListener("mouseover",()=>{
    console.log("mouseover event occured!!!");
});

mainButton.addEventListener("mouseleave",()=>{
    console.log("mouseleave event occured!!!");
});