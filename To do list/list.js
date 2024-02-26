
<ul id="taskList"></ul>


    const taskList = document.getElementById('taskList');
    const taskInput = document.getElementById('taskInput');
    const todos = JSON.parse(localStorage.getItem('todos')) || [];

    function renderTasks() {
        taskList.innerHTML = '';
        todos.forEach((task, index) => {
            const li = document.createElement('li');
            li.textContent = task;
            taskList.appendChild(li);
        });
    }

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText == '') {
            alert('Please enter a task.');
            return;
        }

        todos.push(taskText);
        localStorage.setItem('todos', JSON.stringify(todos));
        renderTasks();
        taskInput.value = '';
    }

    renderTasks();
