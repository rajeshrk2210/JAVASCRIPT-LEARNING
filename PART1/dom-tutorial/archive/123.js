// event object
// const firstButton = document.querySelector('#one');
// firstButton.addEventListener("click",function(){
//     console.log(this);
// });
// firstButton.addEventListener("click",function(event){
//     console.log(event);
//     console.log(this);
// });

// jab bhi mai kisi bhi element pe event listener add hoga
// js engine -- line by line execute karta hai
// browser -- js engine + extra features
// browser -- js engine + WebApi

// jab browser ko pata chala ki user ne event perform kia
// jo hum listen kar rahe hai
// browser ----- 2
// 1.) callback function hai vo js engine ko degi ......
// 2.) callback function ke sath vo jo event hua hai uski information bhi dega
// ye info hamein ek object ke form mai milegi

const allButtons = document.querySelectorAll('.my-buttons button');

// for(let button of allButtons){
//     button.addEventListener("click",function(){
//         console.log(this.textContent); // we get window object
//     })
// }

for(let button of allButtons){
    button.addEventListener("click",(e)=>{
        console.log(e);
        console.log(e.currentTarget); 
        console.log(e.target); 
        console.log(this.textContent);
    })
}

function hello(abc){
    console.log(abc);
}

hello({firstkey: "value1", secondkey: "value2"});