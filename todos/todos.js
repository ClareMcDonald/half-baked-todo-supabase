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
    e.preventDefault();
    const data = new FormData(todoForm);
    const todo = data.get('todo');

    await createTodo(todo);
    await displayTodos();

});

async function displayTodos() {
    todosEl.textContent = '';
    // fetch the todos
    const todos = await getTodos();

    // display the list of todos
    for (let todo of todos) {
        const newTodo = renderTodo(todo);
        todosEl.append(newTodo);

    // be sure to give each todo an event listener
        newTodo.addEventListener('click', async() => {
            // on click, complete that todo 
            await completeTodo(todo.id);
            displayTodos();
        });
        

    }


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
    await deleteAllTodos();

    // then refetch and display the updated list of todos
    displayTodos();
});
