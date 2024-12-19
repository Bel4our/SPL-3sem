class Task {
    constructor(id, nameTask, status = false) 
    {
        this.id = id;
        this.nameTask = nameTask;
        this.status = status;
    }
    changeNameTask(newName) {
        this.nameTask = newName;
    }
    changeStatus() {
        this.status = !this.status;
    }
}

class Todolist {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.tasks = [];
        this.currentFilter = 'all';
    }

    changeName(newNameTask) {
        this.name = newNameTask;
    }

    addNewTask(item) {
        this.tasks.push(item);
        this.render();
    }

    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.render();
    }

    filterTasks(filter) 
    {
        switch (filter) 
        {
            case 'completed':
                return this.tasks.filter(task => task.status);
            case 'notCompleted':
                return this.tasks.filter(task => !task.status);
            default:
                return this.tasks;
        }
    }
    render() {
        let taskList = document.getElementById('taskList');
        taskList.innerHTML = '';

        let filteredTasks = this.filterTasks(this.currentFilter);
        filteredTasks.forEach(task => {
            let taskItem = document.createElement('div');
            taskItem.className = 'task-item';

            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = task.status;
            checkbox.addEventListener('change', () => {
                task.changeStatus();
                this.render();
            });

            let taskName = document.createElement('input');
            taskName.type = 'text';
            taskName.value = task.nameTask;
            taskName.addEventListener('change', (event) => {
                task.changeNameTask(event.target.value);
            });

            let editButton = document.createElement('button');
            editButton.textContent = 'Редактировать';
            editButton.addEventListener('click', () => {
                let newName = prompt('Введите новое название задачи', task.nameTask);
                if (newName) {
                    task.changeNameTask(newName);
                    this.render();
                }
            });

            let deleteButton = document.createElement('button');
            deleteButton.textContent = 'Удалить';
            deleteButton.className = 'delete';
            deleteButton.addEventListener('click', () => {
                this.deleteTask(task.id);
            });

            taskItem.appendChild(checkbox);
            taskItem.appendChild(taskName);
            taskItem.appendChild(editButton);
            taskItem.appendChild(deleteButton);
            taskList.appendChild(taskItem);
        });
    }
    setFilter(filter) {
        this.currentFilter = filter;
        this.render();
    }
}

let list = new Todolist(1, "Учебные дисциплины");

document.getElementById('addTaskButton').addEventListener('click', () => {
    let taskNameInput = document.getElementById('taskName');
    let name = taskNameInput.value.trim();
    if (name) {
        let task = new Task(Date.now(), name);
        list.addNewTask(task);
        taskNameInput.value = '';
    }
});

document.getElementById('showAll').addEventListener('click', () => {
    list.setFilter('all');
});

document.getElementById('showCompleted').addEventListener('click', () => {
    list.setFilter('completed');
});

document.getElementById('showNotCompleted').addEventListener('click', () => {
    list.setFilter('notCompleted');
});
