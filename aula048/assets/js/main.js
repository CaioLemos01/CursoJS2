const list = document.querySelector('#list');
const text = document.querySelector('#itext');
const btn = document.querySelector('.add');

btn.addEventListener('click', function() {
    if (!text.value) return;
    createTask(text.value);
    clearInput();
})

text.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if (!text.value) return;
        createTask(text.value);
        clearInput();
    }
})

function createTask(value) {
    const li = createLi();
    li.innerText = value;
    list.appendChild(li);
    createDelete(li);
    saveTasks();
}

function createLi() {
    const li = document.createElement('li');
    return li;
}

function clearInput() {
    text.value = '';
    text.focus();
}

function createDelete(li) {
    li.innerText += ' ';
    const del = document.createElement('button');
    del.innerText = 'Apagar';
    del.setAttribute('class', 'delete');
    li.appendChild(del);
}

document.addEventListener('click', function(e) {
    const element = e.target;
    if (element.classList.contains('delete')) {
        element.parentElement.remove();
        saveTasks();
    }
});

function saveTasks() {
    const liText = list.querySelectorAll('li');
    const tasks = [];

    for (let task of liText) {
        let taskText = task.innerText
        taskText = taskText.replace('Apagar', '').trim();
        tasks.push(taskText);
    }
    const tasksJSON = JSON.stringify(tasks);
    localStorage.setItem('tasks', tasksJSON);
}

function getSavedTasks() {
    const task = localStorage.getItem('tasks');
    const taskList = JSON.parse(task);

    for (let tasks of taskList) {
        createTask(tasks);
    }
}
getSavedTasks();