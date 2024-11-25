// 1 задание

let square = {
    length: 10,
    color: "yellow",
    showFeature(){
        console.log(`Я ${this.color}, размером ${this.length}`); 
    }
};

let smallSquare = {
    __proto__: square,
    length: 5,
}

let circle = {
    color: "colorless",
    diametr: 10,
    showFeature(){
        console.log(`Я ${this.color}, размером ${this.diametr}`); 
      }
};

let greenCircle = {
    __proto__: circle,
    color: "green",
};

let triangle = {
    length: 10,
    countStick: 1,
    showFeature(){
        console.log(`Я размером ${this.length}, и количеством полосок ${this.countStick}`); 
      }
};

let triangleWithMoreStick = {
    __proto__: triangle,
    countStick: 3,

};

smallSquare.showFeature();
greenCircle.showFeature();
triangleWithMoreStick.showFeature();



function getUniqueProperties(obj) {
    let prototype = Object.getPrototypeOf(obj);
    let uniqueProperties = [];

    for (let [key, value] of Object.entries(obj)) {
        if (prototype[key] != value) {
            uniqueProperties.push(key);
        }
    }

    return uniqueProperties;
}

console.log("Свойства, которые отличают зеленый круг: ", getUniqueProperties(greenCircle));


for(let prop in triangleWithMoreStick) {
    let isOwn = triangleWithMoreStick.hasOwnProperty(prop);
    if (isOwn) {
      console.log(`Собственное: ${prop}`); 
    } else {
      console.log(`Заимствванное: ${prop}`); 
    }
  }
  

console.log("Есть собственное свойство color:", smallSquare.hasOwnProperty("color"));



// 2 задание

class Human{

    constructor(firstName, lastName, age, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
    }

    setAddress(newAddress)
    {
        this.address = newAddress;
    }

    get Age(){
        return this.age;
    }

    set Age(newbitrhday){
        this.bitrhday = newbitrhday; 
        let currentYear = new Date().getFullYear();
        this.age = currentYear - this.bitrhday;
    }
}

class Student extends Human{

    constructor(faculty,course,group, numbOfRecBook,firstName,lastName,age, address)
    {
        super(firstName,lastName,age,address);
        this.faculty = faculty;
        this.course = course;
        this.group = group;
        this.numbOfRecBook = numbOfRecBook;
    }

    changeCourseAndGroup(course, group)
    {
        this.course = course;
        this.group = group;
    }

    getFullName()
    {
        console.log(`Имя: ${this.firstName}, Фамилия: ${this.lastName}`);
    }

}


class Faculty{

    constructor(facultyName, groupCount)
    {
        this.facultyName = facultyName;
        this.groupCount = groupCount;
        this.studentCount = 0;
        this.students = [];
    }

    addStudent(student) {
        this.students.push(student);
        this.studentCount++;
    }

    setGroupCount(newCount)
    {
        this.groupCount = newCount;
    }

    getGroup(value)
    {
        return this.students.filter(student => student.group == value);
    }

    getDev()
    {
        let buf = this.students.filter(student => student.numbOfRecBook.toString()[1] === "3");
        return buf.length;
    }
}



let student1 = new Student("ФИТ", 1, 3, 73242001, "Иван", "Александрович", 19, "NotFounded");
student1.getFullName();
student1.Age = 2004;
console.log(student1.Age);

let student2 = new Student("ФИТ",1,4,73191002, "qwerty", "asdfg", 25,"-");
let FIT = new Faculty("ФИТ", 10);
FIT.addStudent(student1);
FIT.addStudent(student2);

console.log(FIT.getGroup(3));
console.log(FIT.getDev());

