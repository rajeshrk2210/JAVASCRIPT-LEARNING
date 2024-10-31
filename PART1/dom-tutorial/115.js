// elem.insertAdjacentHTML(where, html)
// beforebegin
// after begin;
// beforeend;
// afterend;

const todoList = document.querySelector(".todo-list");
todoList.insertAdjacentHTML("beforeend","<li>Teach Students</li>"); // beforeend works like append
todoList.insertAdjacentHTML("afterbegin","<li>Teach Students</li>"); // beforeend works like append
