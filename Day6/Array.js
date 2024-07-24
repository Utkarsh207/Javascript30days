// Creating a array
// let arr = [1,2,3,4,5];
// console.log(arr);

// Accessing array elements
// let arr = [1,2,3,4,5];
// console.log(arr[0]);
// console.log(arr[4]);

// Basic Method of arr
// let arr = [1,2,3,4,5];
// arr.push(10);
// console.log(arr);
// arr.pop();
// console.log(arr);

// Shift And Unshift
// let arr = [1,2,3,4,5];
// arr.unshift(3);
// console.log(arr);
// arr.shift();
// console.log(arr);

// Map
// let arr = [1,2,3,4,5];
// let newArr = arr.map(num=>{
//     return num*2;
// })
// console.log(newArr);

// filter
// let arr = [100,2,3,43,2,5,42,54,554,45,4];
// let evenArr = arr.filter((num,indx)=>{
//     if(num%2==0) return true;
//     else return false;
// })
// console.log(evenArr);
// let evenArr = arr.filter((num,indx)=>num%2==0);
// console.log(evenArr);


// Reduce Method
let arr = [1,2,3,9,4,5];
let c = arr.reduce((value1, value2)=>{
    return value1+value2;
})
// console.log(c);
// Array iteration
// for loop
// let arr = [1,2,3,4,5,6,7,8,9,10];
// for(let i =0; i<arr.length;i++){
//     console.log(arr[i]);

// Using forEach
// let arr = [1,2,3,4,5,6,7,8,9,10];
//  arr.forEach((num,indx)=>{
//     console.log(num);
// })

// 2D array
let arr2 = [
    [1,2],
    [3,4],
];
for(let i=0; i<2; i++){
    for(let j=0; j<2; j++){
        // console.log(arr2[i][j]);
    }
}
console.log(arr2[0][0]);
console.log(arr2[0][1]);
console.log(arr2[1][0]);
console.log(arr2[1][1]);