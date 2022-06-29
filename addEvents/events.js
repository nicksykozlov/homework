//27/06/2022

// const button = document.querySelector('button')
// const ul = document.querySelector('ul')
// let n = 1;
// button.addEventListener("click", create);

// function create() {
//     const li = document.createElement('li');
//     li.textContent = n;
//     n++;
//     ul.append(li);
// };
// ul.addEventListener('contextmenu', (e) => {
//     k.preventDefault()

//     if(e.target.tagName == "LI"){
//         e.target.remove();

//     }
//     console.log(e.target);
// });

// function creatTable(n, k) {
//     let table = document.createElement('table');
//     for (let i = 1; i < k; i++) {
//         let tr = document.createElement('tr');
//         for (let j = 1; j < n; j++) {
//             let td = document.createElement('td');
//             td.textContent = i + "-" + j;
//             tr.prepend(td)
//         }
//         table.border = `3px solid`
//         document.body.prepend(table)
//         table.append(tr)
//     }
// }
// creatTable(10, 5);

// const table = document.querySelector('table');

// table.addEventListener('click', (e) => {
//     if (e.target.tagName == "TD") {
//         const tr = e.target.closest('tr');

//         Array.from(tr.children).forEach(td => {
//             if(td !== e.target){
//                 td.style.backgroundColor = 'red';
//             }
//         });
//     }
//    });

// const div = document.querySelector("div");
// div.addEventListener('mouseover', (e) => {
// let currentPosition = div.style.left ? div.style.left : 0;
// currentPosition =   Number.parseInt(currentPosition);
// div.style.left = currentPosition + 20 + "px";

// });
// const div = document.querySelector("div");
// document.body.addEventListener('click', (e) => {
//     div.style.left = e.clientX + "px";
//     div.style.top = e.clientY + "px";
// });

//<input value="Нажми меня" onclick="alert('Клик!')" type="button"></input>
// onclick = " alert ('КЛИК')" обязательно одинарные кавычки внутри двойных

// дз 29.06.2022

//Создайте кнопку с цифрой 0, при клике на которую, цифра будет увеличиваться на 1
// const button = document.querySelector("button");
// button.addEventListener("click", (e) => {
//   button.textContent++
//   });

// Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// const button = document.querySelector('button');
// button.addEventListener ('click', (e) =>{
//         button.style.display = 'none';
      
// })

//Создайте div шириной и высотой 300px и добавьте в него 4 кнопки с тектом вверх, влево, 
//вниз, вправо. Реализуйте функционал сдвига div на 10px при 
//нажатии на кнопку, соответствующую направлению

// const div = document.querySelector('div')
// const button = document.querySelectorAll('button')
// div.addEventListener('click', (e)=>{
//      if(e.target.closest('button').textContent === 'влево'){
//     div.style.right =  '10px'
//    }
//     else if (e.target.closest('button').textContent === 'вправо'){
//     div.style.left =  '10px'
//    }
//    else if (e.target.closest('button').textContent === 'вниз'){
//     div.style.bottom =  '10px'
//    }
//    else if (e.target.closest('button').textContent === 'вверх'){
//     div.style.top =  '10px'
//    }
  
// })
// закрашивание таблицы при наведении курсора

// table.onmouseover = function(event) {
//     let target = event.target;
//     target.style.background = 'pink';
//     text.value += "mouseover " + target.tagName + "\n";
//     text.scrollTop = text.scrollHeight;
//   };
  
//   table.onmouseout = function(event) {
//     let target = event.target;
//     target.style.background = '';
//     text.value += "mouseout " + target.tagName + "\n";
//     text.scrollTop = text.scrollHeight;
//   };
// let sum = Infinity;
// console.log(sum);