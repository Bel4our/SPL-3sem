// 1 задание

function basicOperation(operation, value1, value2)
{
    let result;
    if(operation == '+')
    {
        result = Number(value1) + Number(value2);
    } else if (operation == '-') {
        result = Number(value1)-Number(value2);
    } else if(operation == '*'){
        result = Number(value1)*Number(value2);
    } else if(operation == '/'){
        result = Number(value1)/Number(value2);
    } else {
        return " Не правильное значение оператора"
    }


    return result;
}

let result = basicOperation('+',5,10);
console.log(result);


// 2 задание

function cubesToN(n)
{
    let result = 0;
    for(let i = 1; i <= n; i++ )
    {
        result += i*i*i; 
    }

    return result;
}

let n = 4;
let sumOfCubes = cubesToN(n);
console.log(sumOfCubes);


// 3 задание

function averageNumb(arr)
{
    let sum = 0;
    for(let i=0; i< arr.length; i++)
    {
        sum+=arr[i];
    }
    return sum/arr.length;
}

let arr = [4,7,3,5,7,2,64,63,8,54,8];
let averNumb = averageNumb(arr);
console.log(averNumb);


// 4 задание

function revString(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);
        if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
            newStr += str[i];
        }
    }
    newStr = newStr.split('');
    newStr = newStr.reverse();
    newStr = newStr.join('');
    return newStr;
}

let str1 = "JavaScript";
let str2 = "JavaварScript";
str1 = revString(str1);
str2 = revString(str2);

console.log(str1);
console.log(str2); 

 
// 5 задание


function increaseLine(n,s)
{
    let buf ="";
    for(let i = 0; i<n; i++)
    {
        buf+=s;
    }
    s = buf;
    return s;
}


let s = "str";
let n1 = 5;

console.log(increaseLine(n1,s));


// 6 задание

function updArr(arr1, arr2) {
    let arr3 = [];
    
    for(let i = 0; i < arr1.length; i++) {
        let flag = true;
        for(let j = 0; j < arr2.length; j++) {
            if(arr1[i] == arr2[j]) {
                flag = false;
                break; 
            }
        }
        if(flag) {
            arr3.push(arr1[i]); 
        }
    }
    return arr3; 
}

let arr1 = ["apple", "water", "milk", "pineapple", "melon"];
let arr2 = ["hello", "apple", "car"];
let arr3 = updArr(arr1, arr2);

for(let i = 0; i < arr3.length; i++) {
    console.log(arr3[i] + " ");
}
