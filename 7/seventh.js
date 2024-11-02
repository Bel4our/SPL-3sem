// 1 задание

let person = {
    name: "Jhon",
    years: 18,
    greet()
    {
        alert("Привет " + this.name);
    },

    ageAfterYears(years)
    {
        alert("Текущий возраст: " + years);  
    }
}


person.greet();
person.ageAfterYears(4);



// 2 задание

let car ={
    model: "model",
    year: "2026",
    getInfo()
    {
        alert(`Модель: ${this.model}, Год выпуска: ${this.year}`);
    }
}

car.getInfo();



// 3 задание

function Book(title, author)
{
    this.title = title;
    this.author = author;

    this.getTitle = function()
    {
        alert("Название книги: "+ this.title);
    };

    this.getAuthor = function()
    {
        alert("Автор книги: "+ this.author);
    }
}


let book1 = new Book("Книга1", "Автор1");
book1.getAuthor();
book1.getTitle();



// 4 задание

let team = {
    players: ["игрок1","игрок2","игрок3"],
    getInfo()
    {
        for(player of this.players)
        {
            console.log(player);
        }
    }
    
}

team.getInfo();



// 5 задание

const counter = (function() {
    let count = 0;
    return{
        count: count,
        increment: function() {
            this.count++;
            return this.count;
        },
        decrement: function() {
            this.count--;
            return this.count;
        },
        getCount: function() {
            return this.count;
        } 
    }
    })();
    
    console.log(counter.increment()); 
    console.log(counter.increment()); 
    console.log(counter.decrement()); 
    console.log(counter.getCount()); 



// 6 задание

let item = {
    price: 123,
    value1: 12
}

console.log(Object.getOwnPropertyDescriptor(item, "price"));

Object.defineProperty(item, "price", {writable: false, enumerable: false, configurable: false});
item.price = 5;
for(value in item)
{
    console.log(item[value]);
}
console.log(item.price);



// 7 задание


let circle = {
    radius: 25,

    get getSquare()
    {
       return this.radius*this.radius*3.14;
    },

    get Radius()
    {
        return this.radius;
    },
    set Radius(value)
    {
        this.radius = value;
    }

};

console.log(circle.Radius);
console.log(circle.Radius = 5);
console.log(circle.getSquare);



// 8 задание

let car2 = {
    make: "Germany",
    model: "Mercedes-Benz",
    year: 2024
}

Object.defineProperties(car2,{
    make: {writable: false},
    model: {writable:false},
    year: {writable:false}
});

car2.make = "USA";

console.log(car2.make);



// 9 задание

let arr = [1,2,3];

Object.defineProperty(arr, 'sum',
{
    get: function() {
        return this.reduce((acc, num) => acc + num, 0);
    },
    configurable: false,
    enumerable: true
});
console.log(arr.sum);



// 10 задание 

let rectangle = {

    width: 5,
    height: 4,

    get Width()
    {
        return this.width;
    },

    get Height()
    {
        return this.height;
    },

    set Width(value)
    {
        this.width = value;
    },

    set Width(value)
    {
        this.height = value
    },

    get getSq()
    {
        return this.height*this.width;
    }
}


console.log(rectangle.Height);
console.log(rectangle.Width);
console.log(rectangle.Height = 6);
console.log(rectangle.Width = 8);
console.log(rectangle.getSq);



// 11 задание

let user = {
    firstName: "qwerty",
    lastName: "uiop",

    get fullName()
    {
        return `${this.firstName} ${this.lastName}`;
    },

    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
      }
}


user.fullName = "ytrewq poiu";
console.log(user.firstName);
console.log(user.lastName);