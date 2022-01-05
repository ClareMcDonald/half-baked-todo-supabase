export function renderTodo(todo) {
    for (let todo of todos) {
    // create a div and a p tag
        const todoDiv = document.createElement('div');
        const todoEl = document.createElement('p');
    // depending on whether the todo is complete, give the div the appropriate css class ('complete' or 'incomplete')
        if (todo.comlete) {
            todoDiv.classList.add('complete');
        } else {
            todoDiv.classList.add('incomplete');
        }
        
    // add the 'todo' css class no matter what
        todoDiv.classList.add('todo');

    // put the todo's text into the p tag
        todoEl.textContent = todo;

    // append stuff
        todoEl.append(todo);
        todoDiv.append(todoEl);

    // return the div
        return todoDiv;
    }

}