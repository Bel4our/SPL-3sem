// 1 задание

let a1 = 5;
let name = "Name";
let i1 = 0;
let double = 0.23;
let result = 1/0;
let answer = true;
let no = null;



// 2 задание

let Bsquare = 5 * 5;
let Asquare = 45 * 21;
let number = Asquare/Bsquare;
console.log("Поместиться",Math.trunc(number),"квадратов");



// 3 задание

let i = 2;
let a = ++i;
let b = i++;

if(a > b){
    console.log("а больше b");
}else if(b<a){
    console.log("b больше a")
}else{
    console.log("a равно b")
}



// 4 задание

console.log("Котик"=="котик"?true:false);
console.log("Котик"=="китик"?true:false);
console.log("Кот"=="Котик"?true:false);
console.log("Привет"=="Пока"?true:false);
console.log(73=="53"?true:false);
console.log(false==0?true:false);
console.log(54==true?true:false);
console.log(123==false?true:false);
console.log(true=="3"?true:false);
console.log(3=="5мм"?true:false);
console.log(8=="-2"?true:false);
console.log(34=="34"?true:false);
console.log(null==undefined?true:false);



// 5 задание

let user = prompt('Введите имя преподавателя',);
let user1 = user.toLowerCase(); 
if(user1.includes('марина'))
{
    alert("good");
}
else
{
    alert("not good");
}



// 6 задание

let mathScore = 10;
let rusScore = 10;
let engScore = 10;

if(mathScore < 4 || rusScore < 4 || engScore < 4)
{
    if(mathScore < 4 && rusScore < 4 && engScore < 4)
    {
        alert("Вы отчислены!");
    }

    alert("Вас ожидает пересдача");

} else {
    alert("Вы переводитесь на следующий курс");
}



// 7 задание

let s1 = true + true;
let s2 = 0 + "5";
let s3 = 5 + "мм";
let s4 = 8 / Infinity;
let s5 = 9 * "\n9";
let s6 = null - 1;
let s7 = "5" - 2;
let s8 = "5px" - 3;
let s9 = true - 3;
let s10 = 7 || 0;

console.log(s1, s2, s3, s4, s5, s6, s7, s8, s9, s10);



// 8 задание 

function isEven(j)
{
    j = j%2;
    if(j==0)
    {
        return true;
    }
    return false;
}


let j = 1;
while(j < 11)
{
    if(isEven(j))
    {
        console.log(2+j);
    } else {
        console.log(`${j}мм`);
    }
    j++;
}



// 9 задание 
 
var week = ["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье",];
let numb = prompt("Введите число!",1);
alert(week[numb-1]);



// 10 задание

function combinateString(userVal, defVal="def")
{
    return `Параметры: ${defVal}, ${userVal}`;
}
let userVal = prompt("Введите параметр:");
let res = combinateString(userVal);
alert(res);
  


// 11 задание



function params1(a,b)
{
    if(a==b)
    {
        return 2*(a+b);
    }
    return a*b;
}

console.log(params1(5,7));



let resExpression = function(a,b)
{
    if(a==b)
    {
       return 2*(a+b);
    }
    return a*b;
};

console.log(resExpression(2, 2))



let resArrow = (a,b) => a == b ? 2 * (a + b) : a * b;
console.log(resArrow(2, 3));