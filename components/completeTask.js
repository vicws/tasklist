const CompleteTaskBtn = () => {
    const completeBtn = document.createElement('button');

    completeBtn.classList.add('check-button');
    completeBtn.innerText = 'Done';
    completeBtn.addEventListener('click', completeTask);

    return completeBtn;
}

const completeTask = (event) => {
    const completeBtn = event.target;

    const taskComplete = completeBtn.parentElement;

    taskComplete.classList.toggle('done');
}

export default CompleteTaskBtn