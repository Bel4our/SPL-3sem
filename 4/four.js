// 1 задание

function addToProductList(value)
{
    productList.add(value);
}

function deleteFromProductList(value)
{
    productList.delete(value);
}

function checkInProductList(value)
{
    if(productList.has(value))
    {
        console.log(`Список товаров содержит ${value}`);
        return;
    }
    console.log(`Список товаров не содержит ${value}`);
}

let productList = new Set();

addToProductList("fgfkgkf");
addToProductList("gjghj");
addToProductList(76);

for (let value of productList) { 
    console.log(value); 
  }


deleteFromProductList(76);

for (let value of productList) { 
    console.log(value); 
  }

  checkInProductList("gjghj");
  checkInProductList(345);

  let size = productList.size;
  console.log(`Размер списка товаров: ${size}`);



// 2 задание

function addStudent(id, group, name) 
{
    studentList.add({ id, group, name });
}

function deleteStudentById(id) 
{
    for(let value of studentList)
        {
            let buf = value;
            if(buf.id == id)
            {
                studentList.delete(value);
            }
        }
}

function filterByGroup(group) {
       let filteredStudents = new Set();
       studentList.forEach((student) => {
         if (student.group === group) {
           filteredStudents.add(student);
         }
       });
       return filteredStudents;
     }

function sortByStudentId() {
  let sortedStudents = Array.from(studentList);
  sortedStudents.sort((a, b) => a.studentId - b.studentId);
  return sortedStudents;
}



let studentList = new Set();

addStudent(1, 5, "QWERTY");
addStudent(2, 6, "YUIOP");
addStudent(3, 5, "ASDFGH");
addStudent(4, 5, "ZXCVBN");

for (let value of studentList) { 
    console.log(value); 
  }

deleteStudentById(4);

for (let value of studentList) { 
    console.log(value); 
  }


let filteredStudents = filterByGroup(5);

console.log(`Студенты 5 группы: `);
for(let value of filteredStudents)
{
    console.log(value);
}



let sortedStudents = sortByStudentId();


console.log(`Отсортированные студенты по ID: `);
for(let value of sortedStudents)
    {
        console.log(value);
    }




// 3 задание

function addToMap(id, name, count, price)
{
    let product = {
        name: name,
        count: count,
        price: price
    }
    storage.set(id,product);
}

function deleteByID(ID)
{   
    if(storage.has(ID)){

    storage.delete(ID);
    console.log("Удалено успешно");
    } else {
        console.log("ID не найдено!");
    }

}

function deleteByName(name){
    for(let key of storage.keys())
    {
        let buf = storage.get(key);
        if(buf.name == name)
        {
            storage.delete(key);
        }
    }
}

function changeCount()
{
    for(let key of storage.keys())
    {
        buf = storage.get(key);
        let newCount = prompt(`Введите новое количество для ${buf.name}`, 0);
        buf.count = parseInt(newCount);
        storage.set(key, buf);
    }
}

function changePrice()
{
    for(let key of storage.keys())
    {
        buf = storage.get(key);
        let newPrice = prompt(`Введите новую цену для товара: ${buf.name}`, 0);
        buf.price = parseInt(newPrice);
        storage.set(key, buf);
    }
}

function countTotalPrice()
{
    let total = 0;
    for(let key of storage.values())
    {
        total += key.price*key.count;
    }
    return total;
}


let storage = new Map();
addToMap(1,"qwerty",5,780);
addToMap(3,"asdfg",4,73480);
addToMap(5,"zxcvb",6,76780);
addToMap(6,"qwerty",7,4580);

for (let entry of storage) { 
    console.log(entry); 
  }
  
deleteByID(3);
deleteByName("qwerty");

for (let entry of storage) { 
    console.log(entry); 
}

changeCount();

changePrice();

let allGoods = storage.size;
console.log(`Общее количество позиций: ${allGoods}`);

console.log(`Общая стоимость: ${countTotalPrice()}`);



// 4 задание


let cache = new WeakMap();

function process(obj) {
  if (!cache.has(obj)) {
    let result = obj.age/2+1;

    cache.set(obj, result);
  }

  return cache.get(obj);
}

let obj = {name: "qwerty", age:35};
let obj1 = {name: "ytrewq", age:24};


let result1 = process(obj);
console.log(result1);
let result2 = process(obj1);
console.log(result2);


let result3 = process(obj);
console.log(result3);
let result4 = process(obj1);
console.log(result4);
