// setInterval
// console.log("script start");
// setInterval(()=>{
//     let total = 0;
//     for(let i = 0; i < 1000; i++){
//         total += i;
//     }
//     console.log(total);
//     console.log(Math.random());
// },100);
// console.log("script end");

const body = document.body;
const button = document.querySelector("button");
// console.log(button);
// console.log(body);

const intervalId = setInterval(()=>{
    const red = Math.floor(Math.random()*126);
    const green = Math.floor(Math.random()*126);
    const blue = Math.floor(Math.random()*126);
    const rgb = `rgb(${red},${green},${blue})`;
    console.log(rgb)
    body.style.background = rgb;
},1000);

button.addEventListener("click",()=>{
    clearInterval(intervalId);
    button.textContent = body.style.background;
});

console.log(intervalId);