// 1 задание

let arr1 = [1,2,3,4,5,6,7,8,9,10];
let [firstEl] = arr1;

console.log(firstEl);



// 2 задание

let user = {
    name : "1234",
    age : 12
}

let admin = {
    admin: "admin name",
    ...user
}

console.log(admin);



// 3 задание

let store = {
    state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi', LikesCount: 12 },
                {id: 1, message: 'By', LikesCount: 1 },
            ],
            newPostText: 'About me',
        },
        dialogPage: {
            dialogs: [
                {id: 1, name: 'Valera'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sasha'},
                {id: 4, name: 'Viktor'},
            ],
            messages: [
                {id: 1, message: 'hi'},
                {id: 2, message: 'hi hi'},
                {id: 3, message: 'hi hi hi'},
            ],
        },
        sidebar: [],
    },
}


let { 
    state:{ 
        profilePage: { posts }, 
        dialogPage: { dialogs, messages }
     }
    } = store;


posts.forEach(post => {
    console.log(post.LikesCount);
})


let evenIdDialogs = [];
for (let i =0; i< dialogs.length; i++)
{
    if (dialogs[i].id % 2 === 0) {
        evenIdDialogs.push(dialogs[i]);
    }
}
console.log(evenIdDialogs);

let updatedMessages = messages.map(message => ({
    ...message,
    message: 'Hello user'
}));
console.log(updatedMessages);



// 4 задание

let tasks = [
    {id: 1, title: "HTML&CSS", isDone: true },
    {id: 2, title: "JS", isDone: true },
    {id: 3, title: "ReactJS", isDone: false },
    {id: 4, title: "Rest API", isDone: false },
    {id: 5, title: "GraphQL", isDone: false },
];

let task = [
    {id: 6, title: "Some new task", isDone: false },
]

let newTask = [...tasks, task];
console.log(newTask);



// 5 задание

function sumValues(x,y,z)
{
    return x+y+z;
}


let arr5 = [1,2,3];
console.log(sumValues(...arr5));
