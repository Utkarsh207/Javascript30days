// Task 1

let UserInfo1 = `Name : Utkarsh , Age : 18`
// console.log(UserInfo);


let quote  =`he thing is, continuity of strategic direction and continuous improvement in how you do things are absolutely consistent with each other. In fact, they're mutually reinforcing.`
// console.log(quote);

// Task 2
// Destructuring Of Arrays
// let arr =  [1,2,3,4,5,6,7,8,9,10];

// let [a,b,...rest] = arr;
// console.log(a,b,rest);



// Destructuring Of Objects

// let UserInfo2 = {
//     name : 'XYZ',
//     age: 41,
//     location : 'Delhi',
//     IsLoggedIn : true
// };
// let {name : n, age : a, IsLoggedIn: t} = UserInfo2
// console.log(n,a,t);

// Task 3
// Spread Operator
let arr1 = [1,2,3,4,5];
let arr2 = [...arr1,8,9,10,11,12];
// console.log(arr2);


// Rest Operator
function Sum(...args){
    let sum = 0;
    for (const i of args) {
        sum+=i;
    }
    return sum;
}

console.log(Sum(1,1,1,5,5,3));



// Task 4
// Default Parameters
// function Product(a,b=1){
//     return a*b;
// }
// console.log(Product(3,2));

// Task 5
// Enhanced Object Literals
// const name = 'abc';
// const age = 18;

// const person ={
//     name,
//     age,
//     greet(){
//         console.log(`Have a Good Day ${name}`);
//     }
// };
// console.log(person.name);
// console.log(person.age);
// person.greet();

const propertyName1 = 'firstName';
const propertyName2 = 'MiddleName';
const propertyName3 = 'LastName';

const value1 = 'a';
const value2 = 'b';
const value3 = 'c';

const person ={
    [propertyName1] : value1,
    [propertyName2] : value2,
    [propertyName3] : value3,
};
// console.log(person);