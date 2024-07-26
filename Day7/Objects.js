// Task 1
// let books = {
//     title : 'Legends',
//     Author : 'Utkarsh',
//     year : '2003',
//     // 'date-of-publication' : '2003',
// };
// Task 2
// console.log(books);
// console.log(books.Author);
// console.log(books.year);
// console.log(books.title);
// console.log(books['year']);
// console.log(books.Author);
// console.log(books["date-of-publication"]);


// Task 3
// let books = {
//     title : 'Legends',
//     Author : 'Utkarsh',
//     year : '2003',

//     displayInfo(){
//         return `Title : ${this.title} , Author : ${this.Author}`
//     },

//     updatedYear(year){
//         this.year = year;
//     }
        
//     };
//     console.log(books.displayInfo());
//     // console.log(books.updatedYear(2006));
//     console.log(books.year);


// Task 3 
// let library = {
//     name : 'Best Library of the world',
//     books : [
//         {
//             title : "Book1",
//             Author : "Author1",
//         }
//     ]


// };
// console.log(library);

// let library = {
//     name:'Library 1',
//     book: [
//         {
//             title : "Book1",
//             Author : "Author1",
//         },
//         {
//             title : "Book2",
//             Author:"Author2"
//         },
//         {
//             title : "Book3",
//             Author:"Author3"
//         },
        
//     ]
    
// };
// console.log(library.book);


let books = {
        title : 'Legends',
        Author : 'Utkarsh',
        year : '2003',
        // 'date-of-publication' : '2003',


        displayInformation(){
            return `title ${this.title} Year ${this.year} `;
        }

    };
// console.log(books.displayInformation());
// console.log(Object.values(books));
console.log(Object.keys(books));


// for ... in
// for(let i in books){
//     console.log(i,":",books[i]);
// }

