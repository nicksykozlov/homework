// const ul = document.createElement('ul');
// document.body.prepend(ul);
// for (let i = 1; i<100; i++){
//     const li = document.createElement('li');
//     li.textContent = 'item' + i;
//     ul.append(li);
// };

// const art = document.createElement('article');
// document.body.prepend(art);
// const h = document.createElement('h3');
// art.prepend(h);
// const p = document.createElement('p');
// art.prepend(p);
// const ol = document.createElement('ol');
// art.prepend(ol);
// //for (let i = 1; i<2; i++){
// //     const li = document.createElement('li');
// //     li.textContent = 'item';
// //     ul.append(li);
// // }; // можно так что бы не плодить const
// const li = document.createElement('li');
// ol.prepend(li);
// li.textContent = 'title';
// const lim = document.createElement('li');
// ol.prepend(lim);
// lim.textContent = 'content';
// const foot = document.createElement('footer');
// art.append(foot);
// const a = document.createElement('a');
// foot.prepend(a);
// a.textContent = 'author';
// a.href = 'google.com'
// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//         const ul = document.createElement('ul');
//         document.body.prepend(ul);
//         data.forEach(t => {
//             const li = document.createElement('li');
//             // li.textContent = t.title;
//             ul.append(li);
//             const span = document.createElement('span');
//             span.textContent = t.id;
//             li.append(span);
//             const p = document.createElement('p');
//             p.textContent = t.title;
//             span.append(p);
//             const input = document.createElement('input');
//             p.append(input);
//             input.type = "checkbox";
//             input.checked = t.completed

//         });

// const timer = setInterval(() => {
//     if(ul.children.length > 0){

//         const index = Math.floor(Math.random()*ul.children.length);
//         ul.children.item(index).remove();

//     }else{
//         clearInterval(timer)
//     }

// }, 100);

// console.log(li);

// })

// ДЗ 27.06
// const header = document.createElement("header");
// document.body.prepend(header);
// const nav = document.createElement("nav");
// header.prepend(nav);
// const ul = document.createElement("ul");
// ul.className = "head-menu";
// nav.prepend(ul);
// for (let i = 1; i < 5; i++) {
//   const li = document.createElement("li");
//   li.textContent = "page1";
//   if (i == 2) {
//     li.textContent = "page2";
//   }
//   if (i == 3) {
//     li.textContent = "page3";
//   }
//   if (i == 4) {
//     li.textContent = "page4";
//   }
//   ul.append(li);
// }
// const main = document.createElement("main");
// main.className = " container";
// header.after(main);
// const article = document.createElement ('article');
// // article.insertAdjacentHTML(
// //     'beforeend',
// //     `<h1>title</h1>`,
// //     'beforeend',
// //     `<p>content</p>`,
// // );
// main.prepend(article);
// const h1 = document.createElement('h1');
// h1.textContent = 'title';
// article.prepend(h1);
// const p = document.createElement('p');
// p.textContent = 'content';
// article.append(p);
// const aside = document.createElement('aside');
// aside.className = "sidebar";
// main.append(aside);
// const ul2 = document.createElement('ul');
// aside.prepend(ul2);
// for (let i = 0; i < 3; i++){
//     const li2 = document.createElement('li');
//     li2.textContent = "post 1"
//     if(i == 1){
//      li2.textContent = 'post 2'
//     }
//     if(i == 2){
//         li2.textContent = 'post 3'
//        }
//     ul2.append(li2);
// };
// const footer = document.createElement('footer');
// document.body.prepend(footer);
// main.after(footer);
// const p2 = document.createElement('p')
// footer.prepend(p2);
// p2.textContent = "copyright ";
// const b = document.createElement('b');
// b.textContent = "text";
// p2.append(b);


//Написать функцию, которая строит таблицу n (кол-во столбцов) на k (кол-во строк), 
//используя Javascript. В каждую ячийку записать текст типа ‘n - k’


// function creatTable(n, k){
//   let table = document.createElement('table');
//   for (let i = 1; i<k; i++){
//     let tr = document.createElement('tr');
//     for (let j = 1; j < n; j++){
//       let td = document.createElement('td');
//       td.textContent = i + "-" + j;
//       tr.prepend(td)
//     }
//     table.border = `3px solid`
//     document.body.prepend(table)
//     table.append(tr)

//   }
// }
// creatTable(10,5);


// 27/06/2022
const button = document.querySelector('button')
const ul = document.querySelector('ul')
let n = 1;
button.addEventListener("click", create);

function create() {
    const li = document.createElement('li');
    li.textContent = n;
    n++;
    ul.append(li);
};
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
