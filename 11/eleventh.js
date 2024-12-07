
class Task{
    static counter = 0;
    constructor(name)
    {
        this.name = name;
        this.isCompleted = "Не выполнено";
        this.id = ++Task.counter;
    }

    changeName(name)
    {
        this.name = name;
    }

    changeState(state) 
    {
       
            if(state.toUpperCase() === "ВЫПОЛНЕНО")
            {
                this.isCompleted = state; 
            }else if(state.toUpperCase() === "НЕ ВЫПОЛНЕНО")
            {
                this.isCompleted = state; 
            }
            else{
                alert("Вы ввели неправильное значение"); 
                return;
            }
            
        }

}

class Todolist{

    static counter = 0;
    constructor(name)
    {
        this.id = ++Todolist.counter;
        this.name = name;
        this.list = [];
    }

    addNewTask(task)
    {
        this.list.push(task);
    }

    changeName(name)
    {
        this.name = name;
    }

    filterTasksByState(state) 
    { 
        return this.list.filter(task => task.isCompleted.toUpperCase() === state.toUpperCase());
    }

    displaysList()
    {
       
        console.log("ID списка: " + this.id + ", Название: "+ this.name);
        if(this.list.length === 0)
            {
                console.log("список пуст");
                return;
            }
        for (let task of this.list) {
            console.log("ID: "+ task.id + ", Название: "+ task.name +", Статус выполнения: " + task.isCompleted);
        }
    }
}

let task1 = new Task("Проснуться");
let task2 = new Task("Покушать");
let task3 = new Task("Поиграть на гитаре");
let task4 = new Task("Пойти на пары");
let task5 = new Task("Не сдать лабу");
let task6 = new Task("Вернуться в общагу");
let task7 = new Task("Опять покушать");
let task8 = new Task("Лечь спать");

task1.changeState("Выполнено");
task4.changeState("Выполнено");
task6.changeState("Выполнено");
task8.changeState("Выполнено");
task3.changeName("Сделать лабу");
task5.changeName("Сдать лабу");

let todolist1 = new Todolist("Список дел в будние дни");
let todolist2 = new Todolist("Список дел на выходные");

todolist1.addNewTask(task1);
todolist1.addNewTask(task2);
todolist1.addNewTask(task3);
todolist1.addNewTask(task4);
todolist1.addNewTask(task5);
todolist1.addNewTask(task6);
todolist1.addNewTask(task7);
todolist1.addNewTask(task8);


todolist1.displaysList();
console.log(todolist1.filterTasksByState("Выполнено"));
console.log(todolist1.filterTasksByState("Не выполнено"));
todolist2.displaysList();