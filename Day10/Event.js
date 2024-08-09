// <!-- TASK 1 -->
// let p = document.querySelector('p');
// let button = document.querySelector('button');
// let flag = 0; 
// button.addEventListener('click',function(){
//     if(flag==0){
//         p.textContent = 'Never Fold Never Backdown - SMW';
//         flag = 1;
//     }
//     else{
//         p.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, tenetur.';
//         flag = 0;
//     }
// })
// <!-- TASK 2 -->
// let button = document.querySelector('button');
// let img = document.querySelector('img');
// button.addEventListener('dblclick', function(){
//     if(img.style.display ==='none'){
//         img.style.display = 'block';
//     }
//     else{
//         img.style.display = 'none';
//     }
// })

// <!-- TASK 3 -->
// let button = document.querySelector('button');
// let flag = 0;
// button.addEventListener('mouseover', function(){
//    if(flag ==0){
//     button.style.backgroundColor = 'royalBlue';
//     button.style.color = 'salmon';
//     flag = 1;
//    }
//    else{
//     button.style.backgroundColor = 'black';
//     button.style.color = 'yellow';
//     flag = 0;
//    }
// })

// <!-- TASK 4 -->
// let button = document.querySelector('button');
// button.addEventListener('mouseout', function(){
//     button.style.backgroundColor = 'royalBlue';
//     button.style.color = 'salmon';
// })

// <!-- TASK 5 -->
let input = document.querySelector('#input');
// input.addEventListener('keydown', function(e){
//     console.log(`Key Pressed : ${e.key}`);
    
// })
// <!-- TASK 6 -->
// input.addEventListener('keyup', function(e){
//     console.log(`Key Up: ${e.key}`);
//   });


// <!-- TASK 7 -->

// let form = document.querySelector('#myForm');
// form.addEventListener('submit',function(e){
//     e.preventDefault();

//     const  formData = new FormData(form);

//     for(const [key,value] of formData.entries()){
//         console.log(`${key}: ${value}`);
        
//     };
    
// })

// <!-- TASK 8 -->
// let dd = document.querySelector('#myDropDown');
// let p = document.querySelector('#paragraph');

// dd.addEventListener('change' , function(){
//     let selectedValue = dd.value;


//     p.textContent = `You Selected ${selectedValue}`;
// })

// <!-- TASK 9 -->
// let li = document.querySelector('ul');
// li.addEventListener('click', function(event){
//     if(event.target.tagName ==='LI'){
//         console.log(event.target.textContent);
        
//     }
// })

// <!-- TASK 10 -->
document.getElementById('buttonContainer').addEventListener('click',function(e){
    if(e.target.tagName === 'BUTTON'){
        alert('Button Clicked ' + e.target.textContent);
    }
  })

document.getElementById('addButton').addEventListener('click', function(){
    const newButton = document.createElement('button');
    newButton.textContent = 'New Button';


document.getElementById('buttonContainer').appendChild(newButton);
  })

