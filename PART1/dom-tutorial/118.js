// static list vs live list

// querySelectorAll hamein static list degi
// getElementsBySomething hamein live list degi


// const listItems = document.querySelectorAll(".todo-list li");
const ul = document.querySelector(".todo-list");
const listItems = document.getElementsByTagName("li"); // HTML Collection
// const listItems = document.querySelectorAll(".todo-list li");
const sixthLi = document.createElement("li");
sixthLi.textContent = "item 6";
// const ul = document.querySelector(".todo-list");
ul.append(sixthLi);
console.log(listItems);