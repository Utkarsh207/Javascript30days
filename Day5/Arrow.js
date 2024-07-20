// Sum using Arrow function
let add =(num1,num2)=>num1+num2;
// console.log(add(5,6));

// let check = (str)=>{
//     for(let i=0; i<str.length; i++){
//         if(str[i]=='U'){
//             return true;
//         }

//     }
//     return false;
// }
// console.log(check('utkarsh'));

// Product of two numbers
// function p(num1,num2=2){
//     return num1*num2
// }
// console.log(p(4,3));


// let greetings = (name,age =18)=>{
//     console.log(`Hello ${name} have good day`);
// }

// greetings('Utkarsh',20)

// Higher Order Functions - A function which takes another function as a arugment or returns a function from it is known as higher order function.

// Task1
// function x(){
//     return 'You are inside the function x';
// }
// function print(func1,num){
//     for(let i=0; i<num; i++){
//         console.log(x());
//     }
// }
// print(x,5)

// Task2
// function greet(){
//     return 'Hello'
// }
// function name(){
//     return 'Utkarsh';
// }

function num1(num){
    return num+1;
}
function num2(num){
    return num+2;
}

function higerOrderfun(func1,func2,value){
    console.log(func2(func1(value)));
}
higerOrderfun(num1,num2,5)