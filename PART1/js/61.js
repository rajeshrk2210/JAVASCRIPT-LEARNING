// find method
// find method uses callback function
const myArray = ["Hello","cat","dog","lion"];

// function islength3(string){
//     return string.length === 3;
// }

// const ans = myArray.find(islength3); // Gives response for the first occurance and ignores the next elements

// Uisng arrow function
// const ans = myArray.find((string) => string.length === 3);

// console.log(ans); // If nothing is found then we get undefined

// const ans = islength3("doggy");
// console.log(ans);

const users = [
    {userId : 1, userName: "harshit"},
    {userId : 2, userName: "harsh"},
    {userId : 3, userName: "nitish"},
    {userId : 4, userName: "mohit"},
    {userId : 5, userName: "aaditya"},
];

// const myUser = users.find((user)=>{
//     return user.userId===3;
// });

const myUser = users.find((user)=>user.userId===3);

console.log(myUser);
