console.log("Hello World");

const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");
console.log(todoInput);
// console.log(todoForm);
// todoForm.addEventListener("submit",()=>{
//     console.log("form submitted");
// });

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log("submit event");
    // console.log(todoInput.value);
    const newTodoText = todoInput.value;
    const newLi = document.createElement("li");
    const newLiInnerHtml = `<span class="text">${newTodoText}</span>
    <div class="todo-buttons">
      <button class="todo-btn done">Done</button>
      <button class="todo-btn remove">Remove</button>
    </div>`;
    newLi.innerHTML = newLiInnerHtml;
    // console.log(newLi);
    todoList.append(newLi);
    todoInput.value = "";
});

todoList.addEventListener("click",(e)=>{
    // check if user clicked on done button
    // console.log(e.target);
    // console.log(e.target.classList);
    if(e.target.classList.contains("remove")){
        // console.log("You want to remove something ? ");
        const targetedLi = e.target.parentNode.parentNode;
        console.log(targetedLi);
        targetedLi.remove();
    }
    if(e.target.classList.contains("done")){
        // console.log("great !!!!");
        const liSpan = e.target.parentNode.previousElementSibling;
        // console.log(liSpan);
        liSpan.style.textDecoration = "line-through";
    }
})