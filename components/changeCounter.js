const ChangeCounter = () => {
    let counter = document.getElementById("task-amount")
    let taskAmount = document.getElementsByTagName('li').length

    if (taskAmount == 0) {
        counter.innerText = "Your tasklist is empty. How about adding something to it?"
        return;
    }

    counter.innerText = `You've got ${taskAmount} tasks currently.`
}

export default ChangeCounter