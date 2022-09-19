//selectors
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')

//event
todoButton.addEventListener("click", addTodo);
todoList.addEventListener('click', deleteCheckEdit);
//functions

function addTodo(event) {
    event.preventDefault()
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo")

    const newTodo = document.createElement("li")
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    const editButton = document.createElement('button')
    editButton.innerHTML = 'Edit'
    editButton.classList.add('edit-btn')
    todoDiv.appendChild(editButton)

    const completeButton = document.createElement('button')
    completeButton.innerHTML = '✅'
    completeButton.classList.add('complete-btn')
    todoDiv.appendChild(completeButton)

    const trashButton = document.createElement('button')
    trashButton.innerHTML = '❌'
    trashButton.classList.add('trash-btn')
    todoDiv.appendChild(trashButton)

    todoList.appendChild(todoDiv)

    todoInput.value = "";

}

function deleteCheckEdit(e) {
    const item = e.target;

    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.remove();
    }

    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
    
    if (item.classList[0] === "edit-btn") {
        const editButton = prompt('edit the selected todo')
    }
}
