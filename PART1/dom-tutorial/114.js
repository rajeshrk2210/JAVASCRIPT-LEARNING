// document.createElement()
// append
// prepend
// remove

// const newTodoItem = document.createElement("li");
// const newTodoItemText = document.createTextNode("Teach Students");
// newTodoItem.textContent = "Teach Students";
// const todoList = document.querySelector(".todo-list");
// newTodoItem.appendChild(newTodoItemText);
// newTodoItem.append(newTodoItemText);
// todoList.append(newTodoItem);
// todoList.prepend(newTodoItem);
// todoList.appendChild(newTodoItem);
// console.log(newTodoItem);

// const todo1 = document.querySelector('.todo-list li');
// todo1.remove();
// console.log(todo1);

// before
// after

const newTodoItem = document.createElement("li");
newTodoItem.textContent = "Teach students";
const todoList = document.querySelector(".todo-list");
// todoList.before(newTodoItem);
todoList.after(newTodoItem);