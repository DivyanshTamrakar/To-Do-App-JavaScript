// Selectors
var todoInput = document.querySelector('.todo-input');
var todoButton = document.querySelector('.todo-button');
var todoList = document.querySelector('.todo-list');




//Event Listeners

todoButton.addEventListener("click", addTodo);




// Function 
function addTodo(event) {
    event.preventDefault();

    if (todoInput.value === "") {
        alert("Input Can't be Empty");
    } else {
        // create div element 
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");

        // create li 
        const newTodo = document.createElement("li");
        newTodo.innerText = todoInput.value;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);
        // completing button
        const completedButton = document.createElement("button");
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);
        // Delete button
        const trash = document.createElement("button");
        trash.innerHTML = '<i class="fas fa-trash"></i>';
        trash.classList.add("trash-btn");
        todoDiv.appendChild(trash);

        todoList.appendChild(todoDiv);
        todoInput.value = "";

        


    }

}