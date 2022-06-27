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


////D O M

// const windowWidth = window.innerWidth;
// console.log(`Ширина окна ${windowWidth}`); // ширина окна браузера 

// console.log(navigator.userAgent); // данные об операционной системе 
// получить название браузера
// if (navigator.userAgent.includes('Chrome')){ 
//     console.log("браузер Хром");
// }
// if (navigator.userAgent.includes('Firefox')){
//     console.log("браузер Firefox");
// }

// const elem = document.documentElement; // получить доступ к элементу html
// console.log(elem);

// const elem = document.body.childNodes; // получить доступ к непосредственным детям. элементы первого уровня вложенности
// console.log(elem);
// const node = document.body.nextSibling //parentNode previousSibling nextSibling
// console.log(node);

// Children firstElementChild lastElementChild - навигация по тегам 
// const node = document.body.lastElementChild //parentNode previousSibling nextSibling
// console.log(node);

//querySelectorAll можно переберать через  forEach
// const li = document.body.querySelectorAll('li');
// // console.log(li[5]); // выведит 5 элемент
// li.forEach(li => {
//     console.log(li);
// })

// Closest - ищет ближайшего родителя с низу вверх по ирархии
// const div = document.querySelector ('.first');
// const first = div.closest ('.one')
// console.log(div);

//Inner Html - содержание  outerHTML -добавляет тег и содержание 
// const p = document.querySelector("h1");
// const b = p.outerHTML;
// // p.innerHTML = `<h1>${b}</h1> <h2>Ох уж этот сосед</h2> <p class = "red">обормот</p>`;
// console.log(b);


// createElement создает тег в который моно через Inner Html добавить теги
// creaTextNode ("Privet") создает текстовую ноду
// вставка before - перед элементом, after - после, prepend - вставляет внутрь вначло append - внутрь в конец
// const element = document.body.querySelector('div');
// const newElement = document.createElement('div');
// newElement.innerHTML = `<h1>Гуляй</h1> <h2>Ох уж этот сосед</h2> <p class = "red">обормот</p>`
// element.before(newElement)
// console.log(element);

// insertAdjacentHTML /Text - вставит текст/ Element - вставит элемент
//beforebegin - перде div вначаде afterend - после див в конце
// beforeend - внутри в конце afterbegin - внутрь вначало
// const newElement = document.querySelector('div');
// newElement.insertAdjacentHTML(
//     'beforeend',
//     `<h3>РАБОТАЕТ</h3>`,
// );
// console.log(newElement);

// CloneNode - клаирование объектов. Если надо и содержимое то в скобках (true)
// const newElement = document.querySelector('div');
// const clone = newElement.cloneNode(true);
// newElement.prepend(clone)
// console.log(clone);

// remove - удаление объекта 
// const newElement = document.querySelector('div');
// newElement.remove()

// className  можно искать и потом перемеиновать
// const cls = document.querySelectorAll('.small');
// cls.className = "blue"
// console.log(cls);

// classList
// const cls = document.querySelector('.small'); // почему не добавляет если искать по ALL
// cls.classList.add('active')
// console.log(cls);

//style - добавление стилийЮ Если хотим сбросить CSS свойство то надо присвоить пустую строку

// const cls = document.querySelector('.first');
// cls.style.cssText = ` // обязатльно кривые кавычки 
// color: red;
// border: solid 10px red;
// `

//getComputedStyle - метод для получения стилей. Работает только для чтения свойства 
// const cls =document.querySelector('div');
// const style = getComputedStyle(cls);
// console.log(style.fontSize);
// const cls =document.querySelector('div');
// const style = getComputedStyle(cls, '::before');
// console.log(style.backgroundColor);

// получить свойства эдемента можно при помощи dir
// const link= document.querySelector('li');
// console.dir(link);

//hasAtrribute, getAttribute, removeAttribute






