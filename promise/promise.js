// пишем промис который генереируе число от 0 до 1
// если число больше 0,5 вызвать промис

// const promise = new Promise(function (res, rej) {
//     const num = Math.random();
//     if (num >= 0.5) {
//         res(num);
//     } else {
//         rej(num);
//     }

// })

// promise.then( n =>{
//     console.log('Ok', n);
// })
// .catch(n=>{
//     console.log('Error', n);
// });

// Пишим код для загрущки картинки на страрницу если она не грузиться то вывестити код об ошибке
// function images(url) {
//     const promise = new Promise(function (res, rej) {
//         const img = document.createElement('img');
//         img.src=url;
//         // img.src = "https1://cdnn21.img.ria.ru/images/07e5/06/18/1738448523_0:21:864:669_1920x0_80_0_0_9920bbedf3cb1a14b1358e0677d01106.jpg"
//         img.onload = function () {
//             res(img)
//         }
//         img.onerror = function (){
//             rej(img)
//         }

//     })
//     return promise;
// };
// images().then(n => {
//     document.body.append(n)
// }).catch(n => {
//     alert('Ошибка')
// });

// Деалем масив из котов проходи по ним for Each и загружаем всех котоиков

// const imgCat =[
//     'https://cdnn21.img.ria.ru/images/07e5/06/18/1738448523_0:21:864:669_1920x0_80_0_0_9920bbedf3cb1a14b1358e0677d01106.jpg',
//     'https://telegra.ph/file/a23d68b6ee75f6fe6fa67.jpg',
//     'https://4tololo.ru/sites/default/files/images/20182807105210.jpg'
// ];
// const newImg = imgCat.map(img => images(img));
// Promise.all(newImg)
// .then(img =>{
//     img.forEach(n => document.body.append(n))
// })
// .catch(n => {
//         alert('Ошибка')
//     });

// Promise
// let promise = new Promise(function(resolve, reject) {
//     // эта функция выполнится автоматически, при вызове new Promise

//     // через 1 секунду сигнализировать, что задача выполнена с результатом "done"
//     // setTimeout(() => resolve("done"), 3000);
//     // выведит ошибку
//     setTimeout(()=>reject(new Error('OOPS')), 3000);
//     // если вызваны и resolve и reject то выполняться код по порядку если превый resorv, то в Then выполниться res
//   });

//   //.then
// //   promise.then(
// //     res => console.log(res),
// //     error => console.log(error)
// //   );

// //.catch
// promise.catch(alert)

// function loadScript(src) {
//   return new Promise(function (resolve, reject) {
//     let script = document.createElement("script");
//     script.src = src;

//     script.onload = () => resolve(script);
//     script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));

//     document.head.append(script);
//   });
// }

// let promise = loadScript(
//   "https1://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"
// );

// promise.then(
//   (script) => alert(`${script.src} загружен!`),
//   (error) => alert(`Ошибка: ${error.message}`)
// );

// promise.then((script) => alert("Ещё один обработчик..."));

//Можно ли "перевыполнить" промис?
// let promise = new Promise(function(resolve, reject) {
//     // resolve(1);

//     setTimeout(() => resolve(2), 1000);
//   });

//   promise.then(alert);
//   Вывод будет: 1.
// Второй вызов resolve будет проигнорирован, поскольку учитывается только первый вызов
// reject/resolve. Все последующие вызовы – игнорируются.

// Встроенная функция setTimeout использует колбэк-функции.
// Создайте альтернативу, использующую промисы.
// Функция delay(ms) должна возвращать промис, который перейдёт в
// состояние «выполнен» через ms миллисекунд, так чтобы мы могли добавить к нему .then:

// function delay(ms) {
//         return new Promise(resolve => setTimeout(resolve, ms));
//   }

//   delay(3000).then(() => alert('выполнилось через 3 секунды'));

// Анимация круга с помощью промиса

// function go() {
//     showCircle(150, 150, 100).then(div => {
//       div.classList.add('message-ball');
//       div.append("Hello, world!");
//     });
//   }

//   function showCircle(cx, cy, radius) {
//     let div = document.createElement('div');
//     div.style.width = 0;
//     div.style.height = 0;
//     div.style.left = cx + 'px';
//     div.style.top = cy + 'px';
//     div.className = 'circle';
//     document.body.append(div);

//     return new Promise(resolve => {
//       setTimeout(() => {
//         div.style.width = radius * 2 + 'px';
//         div.style.height = radius * 2 + 'px';

//         div.addEventListener('transitionend', function handler() {
//           div.removeEventListener('transitionend', handler);
//           resolve(div);
//         });
//       }, 0);
//     })
//   }

// Цепочка промисов
// new Promise(function(resolve, reject) {

//     setTimeout(() => resolve(1), 1000); // (*)

//   }).then(function(result) { // (**)

//     alert(result); // 1
//     return result * 2;

//   }).then(function(result) { // (***)

//     alert(result); // 2
//     return result * 2;

//   }).then(function(result) {

//     alert(result); // 4
//     return result * 2;

//   });

// Классическая ошибка новичков:
// технически возможно добавить много
// обработчиков .then к единственному промису. Но это не цепочка.
// Например:

// let promise = new Promise(function(resolve, reject) {
//   setTimeout(() => resolve(1), 1000);
// });

// promise.then(function(result) {
//   alert(result); // 1
//   return result * 2;
// });

// promise.then(function(result) {
//   alert(result); // 1
//   return result * 2;
// });

// promise.then(function(result) {
//   alert(result); // 1
//   return result * 2;
// });
// Все обработчики .then на одном и том же промисе получают одно и то же значение – результат
// выполнения того же самого промиса. Таким образом, в коде выше все alert показывают одно и то же: 1.

//Метод Fetch
// Например, мы можем послать запрос на GitHub,
// чтобы загрузить данные из профиля пользователя и показать его аватар:

// // Запрашиваем user.json
// fetch('/article/promise-chaining/user.json')
//   // Загружаем данные в формате json
//   .then(response => response.json())
//   // Делаем запрос к GitHub
//   .then(user => fetch(`https://api.github.com/users/${user.name}`))
//   // Загружаем ответ в формате json
//   .then(response => response.json())
//   // Показываем аватар (githubUser.avatar_url) в течение 3 секунд (возможно, с анимацией)
//   .then(githubUser => {
//     let img = document.createElement('img');
//     img.src = githubUser.avatar_url;
//     img.className = "promise-avatar-example";
//     document.body.append(img);

//     setTimeout(() => img.remove(), 3000); // (*)
//   });

//   fetch('/article/promise-chaining/user.json')
//   .then(response => response.json())
//   .then(user => fetch(`https://api.github.com/users/${user.name}`))
//   .then(response => response.json())
//   .then(githubUser => new Promise(function(resolve, reject) { // (*)
//     let img = document.createElement('img');
//     img.src = githubUser.avatar_url;
//     img.className = "promise-avatar-example";
//     document.body.append(img);

//     setTimeout(() => {
//       img.remove();
//       resolve(githubUser); // (**)
//     }, 3000);
//   }))
//   // срабатывает через 3 секунды
//   .then(githubUser => alert(`Закончили показ ${githubUser.name}`));

// new Promise(function() {
//     noSuchFunction(); // Ошибка (нет такой функции)
//   })
//     .then(() => {
//       // обработчики .then, один или более
// }); // без .catch в самом конце!

// function outer() {
//     function inner() {
//       // Функция 3
//       console.log("Hello!")
//     }

//     // Функция 2
//     inner()
//   }

//   // Функция 1
//   outer()

// ДЗ 13.07

// Напишите функцию, с помощью которой можно будет
// выполнять различные действия с задержкой.

// функция, которую нужно реализовать
// const sleep = (ms) => {
//   return new Promise(resolve => setTimeout(resolve, ms))
// };

// // её использование для выполнения действия с задержкой 5 секунд
// sleep(5000).then(() => {
//   console.log("Выполнилось через 5 секунд!");
// });
// // её использование для выполнения действия с задержкой 10 секунд
// sleep(10000).then(() => {
//   console.log("Выполнилось через 10 секунд!");
// });

//Перепишите код для динамической загрузки скриптов в определенном порядке через промисы:

// let loadJs = src => {
//     return new Promise((resolve, reject) => {
//       const script = document.createElement('script');
//       script.onload = resolve;
//       script.onerror = reject;
//       script.src = src;
//       document.head.append(script);
//     });
//   }

//   loadJs('https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js')
//     .then(() => loadJs('https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js'))
//     .then(() => {
//       setTimeout(() => {
//         $('.modal').modal('show');
//       }, 1000);
//     })
//     .catch(() => {
//       console.error('Ошибка при загрузки скриптов!');
//     });

fetch('http://192.168.0.200:3000/messages')
.then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach(element=>{
       let list = document.createElement('li')
        list.textContent = element.name;
        let ul = document.querySelector('ul')
        ul.append(list)
        let img = document.createElement('img');
        img.src = element.img;
        list.append(img)
        let message = document.createElement('message');
        message.textContent = element.message;
        list.append(message);
    })
    console.log(data);
  });
 
  let form = document.querySelector(form);
  console.log(form);

//   formElem.onsubmit = async (e) => {
//     e.preventDefault();

//     let response = await fetch('http://192.168.0.200:3000/messages', {
//       method: 'POST',
//       body: new FormData(formElem)
//     });

//     let result = await response.json();

//     alert(result.message);
//   };