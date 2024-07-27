let UserInfo1 = `Name : Utkarsh , Age : 18`
// console.log(UserInfo);


let quote  =`he thing is, continuity of strategic direction and continuous improvement in how you do things are absolutely consistent with each other. In fact, they're mutually reinforcing.`
// console.log(quote);


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

// Spread Operator
let arr1 = [1,2,3,4,5,6];
// let newArr=[...arr1,8,9,10,11,12];
// console.log(newArr);


// Rest operator
function Sum(...args){
    let sum = 0;
    for(let i of args){
        sum+=i;
    }
    return sum;
    
}
console.log(Sum([1,2,3,4,5,5]));




