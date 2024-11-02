
// callbacks, callback hell, pyramid of doom
// asynchronous programming

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");

setTimeout(() => {
    heading1.textContent = "Heading 1";
    heading1.style.color = "violet";
    setTimeout(()=>{
        heading2.textContent = "Heading 2";
        heading2.style.color = "purple";
    })
}, 1000);

// setTimeout(() => {
//     heading2.textContent = "Heading 2";
//     heading2.style.color = "purple";
// }, 3000);