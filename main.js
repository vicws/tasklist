import CompleteTaskBtn from './components/completeTask.js'
import ClearTaskBtn from './components/clearTask.js'

document.onload = document.querySelector('[data-form-input]').focus();
const createTask = (event) => {
    
    event.preventDefault();

    const lista = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;
    
    const task = document.createElement('li');
    task.classList.add('task');
    
    const content = `<p class="content">${valor}</p>`;
    
    task.innerHTML = content;

    task.appendChild(CompleteTaskBtn());
    task.appendChild(ClearTaskBtn());
    lista.appendChild(task);
    input.value = " ";
}

const newTask = document.querySelector('[data-form-button]');

newTask.addEventListener('click', createTask);
