// 1 задание

let arrayOne = [1, [1, 2, [3, 4]], [2, 4]];
let resultOne = arrayOne.reduce((total, amount) => {
    return total.concat(amount);
}, []);
console.log(`Элементы нового массива: ${resultOne}`);



// 2 задание

let arrayTwo = [1, [2,5,[5,8,9,[3,6],7],8,9,[10,11],13],24];
function sumArr(arr)
{
  let res = arr.reduce((sum,cur)=>sum + (Array.isArray(cur)?sumArr(cur): cur));
   return res;
}
console.log(arrayTwo);
let resultTwo = sumArr(arrayTwo);
console.log(resultTwo);



// 3 задание

let students = [{name: "firstSt", age: 17, groupId:1},
    {name: "secondSt", age: 17, groupId:1},
    {name: "thirdSt", age: 18, groupId:1},
    {name: "fourthSt", age: 19, groupId:3},
    {name: "fifthSt", age: 20, groupId:3},
    {name: "sixthSt", age: 17, groupId:4},
    {name: "seventSt", age: 17, groupId:4}
]

let groupStudentsByGroup = (students) =>
    students.reduce((total, student) => {
        if (student.age < 18) return total;
        if (total[student.groupId]) {
            total[student.groupId].push(student);
        } else {
            total[student.groupId] = [student];
        }
        return total;
    }, {});

console.log(groupStudentsByGroup(students));



// 4 задание

let str = "javaScript";
let total1 = "";

for(let i = 0; i<str.length; i++)
{
     total1 += str.charCodeAt(i);
}

let total2 = "";

for(let i =0; i < total1.length; i++)
{
    if(total1[i]==7)
    {
        total2 += 1;
        continue;
    }

    total2+=total1[i];
}

console.log(total1);
console.log(total2);
console.log(total1-total2);



// 5 задание 

let obj1 = {a: 1, b: 3, c: 5};
let obj2 = {a: 2, d: 4, y: 7};
obj1.x = 3;
console.log(newObj(obj1, obj2));

function newObj(obj1, obj2){
    let obj3 = {};
    Object.assign(obj3, obj1, obj2);
    return obj3;
}



// 6 задание

function buildTower(n)
{
    let tower = [];
   
    let bufN = n-1;
    for(let i = 0; i < n; i++)
    {
        let buf = "";
        for(let j = 0; j <  bufN; j++ )
        {
            buf +=" "; 
        }
        for(let j = 0; j < 2 * i + 1; j++)
        {
            buf+="*";
        }
        for(let j = 0; j < bufN; j++)
        {
            buf+=" ";
        }
        tower[i] = buf;
        bufN--;
    }

    console.log(tower);
    console.log(tower.join("\n"));


}

let n = 6;
buildTower(n);
