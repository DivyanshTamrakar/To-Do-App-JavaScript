// Selectors
var todoInput = document.querySelector('.todo-input');
var todoButton = document.querySelector('.todo-button');
var todoList = document.querySelector('.todo-list');




//Event Listeners

todoButton.addEventListener("click", addTodo);




// Function 
function addTodo(event) {

    console.log("clicked");
    
    event.preventDefault();
}