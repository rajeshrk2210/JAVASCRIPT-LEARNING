// how to get the dimension of element
// height width
const sectionTodo = document.querySelector(".section-todo");
const info = sectionTodo.getBoundingClientRect();
// const info = sectionTodo.getBoundingClientRect().width;
// const info = sectionTodo.getBoundingClientRect().height;
// const info = sectionTodo.getBoundingClientRect().top;
console.log(info);