// // const p = document.body.querySelector('.middle'); // нашли элемент с классом middle
// // p.previousElementSibling.style.backgroundColor = 'red'; // элемент перед
// // p.nextElementSibling.style.backgroundColor = 'green'; // после поискового элемента
// // p.parentElement.style.background = 'gray';
// // console.log(p);

// // const plus = document.body.querySelectorAll('li');
// // plus.forEach(li =>{
// //     let n = li.textContent;

// //     n = n + '!';
// //     li.textContent=n;
// // })
// // console.log(plus);
// // поменять бэкгарунд чреез один
// // const plus = document.body.querySelectorAll('li:nth-child(2n)');
// // plus.forEach(li =>
// //     li.style.backgroundColor = 'red'

// // );
// // console.log(plus);

// const images = [
// 'https://www.belta.by/images/storage/news/with_archive/2020/000029_1605538227_415880_big.jpg',
// 'https://avatars.mds.yandex.net/get-kinopoisk-post-img/1101236/e1e09992d39f539b736c891a42960a39/960x540'
//     ]

// const img = document.body.querySelector('img');
// let n = 0;
// setInterval(() => {
//    img.src=images[n];
//    n++;
//    if(n == images.length){
//     n=0;
//    }

// },1000
// )
// // console.log(img);
// for (let i = 0; i<document.body.childNodes.length; i++){//вывести спсиок всех детей childNodes
//    console.log(document.body.childNodes[i]);
// }

// for (let i of document.body.childNodes){
//     console.log(i); ////вывести спсиок всех детей childNodes через For of
// }

// {/* <html>
// <body>
//   <div>Пользователи:</div>
//   <ul>
//     <li>Джон</li>
//     <li>Пит</li>
//   </ul>
// </body>
// </html> */}
//Напишите код, как получить…
// элемент <div>?
// <ul>?
// второй <li> (с именем Пит)?
//элемент <div>
// const p = document.body.firstElementChild;
// console.log(p);
// const b = document.body.lastElementChild.lastElementChild;
// console.log(b);

// //querySelectorAll
// const p = document.body.querySelectorAll('ul > li:last-child')
// for (let i of p){
//     console.log(i.innerHTML);//innerHTML - содержание элемента
// }; //  тест пройден

// ДЗ ДОМ
//Сделайте текст в четных(по порядку следования) тегах p подчеркнутым
// const underline = document.querySelectorAll('.small, .big');
// underline.forEach(p => {
//     p.style.textDecoration = 'underline'

//     })
//     console.log(underline);

// Удалите тег p с текстом text3
// const del = document.getElementsByTagName('p')[2];
// del.style.display = "none"
// console.log(del);

//Добавьте всем элементам li CSS-класс item

// const cls = document.body.querySelectorAll("li");
// cls.forEach((p) => {
//   p = p.classList.toggle("item");
// });
// console.log(cls);

//Удалите все CSS-классы у тегов p

//  const pdel = document.body.querySelectorAll('p');
//  pdel.forEach(k=>{
//     //k.className = '';
//     k = k.removeAttribute('class')
  
//  })
//  console.log(pdel);
