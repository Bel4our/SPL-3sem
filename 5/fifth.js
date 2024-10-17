// 1-1

{
function makeCounter(){
    let currentCount = 1;

    return function(){
        return currentCount++;
    };
}

let counter = makeCounter();

alert( counter() );
alert( counter() );
alert( counter() );

let counter2 = makeCounter();
alert( counter2() );

}


// 1-2
{
let currentCount = 1;

function makeCounter(){
    return function(){
        return currentCount++;
    };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert( counter() );
alert( counter() );

alert( counter2() );
alert( counter2() );

}



// 2 задание

function volume(a){
    return (b)=>{
        return (c)=>{
            return a*b*c;
        }
    }
}

console.log(volume(2)(4)(5));

let length5 = volume(5);
console.log(length5(3)(4));


// 3 задание


function* joystick()
{
    let x=0;
    let y=0;

    while(true)
    {
        let dir = yield;
        switch (dir) {
            case "left" :
                x-=10;
                break;
            case "right" :
                x+=10;
                break;
            case "up" :
                y+=10;
                break;
            case "down" :
                y-=10;
                break;
            default :
                break;
        }
        console.log(`x:${x}, y:${y}`);
    }
}

let movement = joystick();
movement.next();
for(let i =0; i<10;i++)
{
let direction = prompt("Введите направление(up,left,down,right)","up");
movement.next(direction);
}



// 4 задание

for (let prop in window) {
         if (window.hasOwnProperty(prop)) {
           console.log(`Property: ${prop}, Value: ${window[prop]}`);
         }
       }
       var tempVar = 10;
       console.log(tempVar);
       window.tempVar = 10000;
       console.log(tempVar);
       window.volume = function() {
         console.log("new calc func");
       }
       volume();