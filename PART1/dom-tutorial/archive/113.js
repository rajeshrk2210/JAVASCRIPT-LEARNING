// Add new HTML elements to page

// innerHTML to add html elements

const todoList = document.querySelector(".todo-list");

console.log(todoList);
console.log(todoList.innerHTML);

// todoList.innerHTML = <li>New Todo</li>;

// todoList.innerHTML = todoList.innerHTML + "<li>New Todo</li>";
todoList.innerHTML += "<li>New Todo</li>";
todoList.innerHTML += "<li>Teach Students</li>";

// when you should use it, when you should not
// Use only when you want to completely change the innerHTML
// Do not use for adding new elements as it rerender the HTML element completely which requires high computing power
