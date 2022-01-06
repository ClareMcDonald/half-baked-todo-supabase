export function renderTodo(todo) {
    // create a div and a p tag
    const todoDiv = document.createElement('div');
    const todoEl = document.createElement('p');
    // depending on whether the todo is complete, give the div the appropriate css class ('complete' or 'incomplete')
    if (todo.complete) {
        todoDiv.classList.add('complete');
    } else {
        todoDiv.classList.add('incomplete');
    }
        
    // add the 'todo' css class no matter what
    todoDiv.classList.add('todo');

    // put the todo's text into the p tag
    todoEl.textContent = todo.todo;

    // append stuff
    //todoEl.append(todo);
    todoDiv.append(todoEl);

    // return the div
    return todoDiv;
}
