const ClearTaskBtn = () => {
    const clearBtn = document.createElement('button');
    clearBtn.classList.add('delete-button');


    clearBtn.innerText = 'Clear';
    clearBtn.addEventListener('click', clearTask);
    return clearBtn;
}

const clearTask = (event) => {
    const clearBtn = event.target;

    const clearTask = clearBtn.parentElement;

    clearTask.remove()

    return clearBtn
}

export default ClearTaskBtn