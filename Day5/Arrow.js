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


let greetings = (name,age =18)=>{
    console.log(`Hello ${name} have good day`);
}

greetings('Utkarsh',20)