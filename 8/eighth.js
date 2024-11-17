let user = {
    name: 'Masha',
    age: 21
};


let numbers = [1, 2, 3];


let user1 = {
    name: 'Masha',
    age: 23,
    location: {
        city: 'Minsk',
        country: 'Belarus'
    }
};



let user2 = {
    name: 'Masha',
    age: 28,
    skills: ["HTML", "CSS", "JavaScript", "React"]
};



const array = [
    {id: 1, name: 'Vasya', group: 10}, 
    {id: 2, name: 'Ivan', group: 11},
    {id: 3, name: 'Masha', group: 12},
    {id: 4, name: 'Petya', group: 10},
    {id: 5, name: 'Kira', group: 11},
]




let user4 = {
    name: 'Masha',
    age: 19,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        exams: {
            maths: true,
            programming: false
        }
    }
};




let user5 = {
    name: 'Masha',
    age: 22,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10,
        },
        exams: [
            { maths: true, mark: 8},
            { programming: true, mark: 4},
        ]
    }
};



let user6 = {
    name: 'Masha',
    age: 21,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10,
        },
        exams: [
            { 
		maths: true,
		mark: 8,
		professor: {
		    name: 'Ivan Ivanov ',
		    degree: 'PhD'
		}
	     },
            { 
		programming: true,
		mark: 10,
		professor: {
		    name: 'Petr Petrov',
		    degree: 'PhD'
		}
	     },
        ]
    }
};



let user7 = {
    name: 'Masha',
    age: 20,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10,
        },
        exams: [
            { 
		maths: true,
		mark: 8,
		professor: {
		    name: 'Ivan Petrov',
		    degree: 'PhD',
		    articles: [
                        {title: "About HTML", pagesNumber: 3},
                        {title: "About CSS", pagesNumber: 5},
                        {title: "About JavaScript", pagesNumber: 1},
                    ]
		}
	     },
            { 
		programming: true,
		mark: 10,
		professor: {
		    name: 'Petr Ivanov',
		    degree: 'PhD',
		    articles: [
                        {title: "About HTML", pagesNumber: 3},
                        {title: "About CSS", pagesNumber: 5},
                        {title: "About JavaScript", pagesNumber: 1},
                    ]
		}
	     },
        ]
    }
};




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

// 1 заданаие

let userC = {...user};
let numbersC = {...numbers};
let user1C = {...user1, location: {...user.location}};
let user2C = {...user2, skills: [...user2.skills]};
let arrayC = array.map(obj=> ({...obj}));
let user4C = {...user4, studies: {...user4.studies, exams: {...user4.studies.exams}}};
let user5C = {...user5, studies:{...user5.studies, department: {...user5.studies.department}, exams:{...user5.studies.exams}}};
let user6C = {...user6, studies:{...user6.studies, department: {...user6.studies.department}, exams: user6.studies.exams.map(exam => ({ ...exam, professor: { ...exam.professor }}))}};
let user7C = { ...user7, studies: { ...user7.studies, department: { ...user7.studies.department }, exams: user7.studies.exams.map(exam => ({ ...exam, professor: { ...exam.professor, articles: exam.professor.articles.map(article => ({ ...article })) } })) }};
let storeC = { ...store, state: { ...store.state, profilePage: { ...store.state.profilePage, posts: store.state.profilePage.posts.map(post => ({ ...post })) }, dialogPage: { ...store.state.dialogPage, dialogs: store.state.dialogPage.dialogs.map(dialog => ({ ...dialog })), messages: store.state.dialogPage.messages.map(message => ({ ...message })) }, sidebar: [...store.state.sidebar] }};



// 2 задание

user5C.studies.department.group = 12;
user5C.studies.exams[1].mark = 10;
console.log(user5C);

// 3 задание

user6C.studies.exams[0].professor.name = 'Даниил Семёнов';
user6C.studies.exams[1].professor.name = 'Мамонько Денис';
console.log(user6C);
console.log(user6.studies.exams[0].professor.name);

// 4 задание

user7C.studies.exams[1].professor.name = 'Арсений Рауба';
user7.studies.exams[1].professor.name = 'Freddy fazber';
user7C.studies.exams[1].professor.articles[1].pagesNumber = 3;
console.log(user7C);
console.log(user7);

//5 задание

store.state.profilePage.posts.forEach(post => {
    post.message = 'Hello';
});

store.state.dialogPage.messages.forEach(message => {
    message.message = 'Hello';
});

console.log(storeC);
