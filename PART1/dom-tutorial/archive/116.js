// clone nodes
const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "new todo";
const li2 = li.cloneNode(true); // true is used for deep cloning
ul.append(li); // Only one of append or prepend will work
ul.prepend(li2);


