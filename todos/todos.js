import { 
    checkAuth, 
    createTodo, 
    completeTodo,
    getTodos,
    logout,
    deleteAllTodos, 
} from '../fetch-utils.js';
import { renderTodo } from '../render-utils.js';

checkAuth();

const todosEl = document.querySelector('.todos');
const todoForm = document.querySelector('.todo-form');
const logoutButton = document.querySelector('#logout');
const deleteButton = document.querySelector('.delete-button');


todoForm.addEventListener('submit', async(e) => {
    // on submit, create a todo, reset the form, and display the todos
    await createTodo();

});

async function displayTodos() {
    // fetch the todos
    const todos = await getTodos();

    // display the list of todos
    for (let todo of todos) {
        const todoEl = document.createElement('p');
        todoEl.textContent = todo;
        todosEl.append(todoEl);

        displayTodos();
    }
    console.log(todos)
    // be sure to give each todo an event listener

    // on click, complete that todo
}

// add an on load listener that fetches and displays todos on load
window.addEventListener('load', async() => {
    await getTodos();
    await displayTodos();
});

logoutButton.addEventListener('click', () => {
    logout();
});


deleteButton.addEventListener('click', async() => {
    // delete all todos

    // then refetch and display the updated list of todos
});
