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
function images(url) {
    const promise = new Promise(function (res, rej) {
        const img = document.createElement('img');
        img.src=url;
        // img.src = "https1://cdnn21.img.ria.ru/images/07e5/06/18/1738448523_0:21:864:669_1920x0_80_0_0_9920bbedf3cb1a14b1358e0677d01106.jpg"
        img.onload = function () {
            res(img)
        }
        img.onerror = function (){
            rej(img)
        }

    })
    return promise;
};
// images().then(n => {
//     document.body.append(n)
// }).catch(n => {
//     alert('Ошибка')
// });

// Деалем масив из котов проходи по ним for Each и загружаем всех котоиков

const imgCat =[
    'https://cdnn21.img.ria.ru/images/07e5/06/18/1738448523_0:21:864:669_1920x0_80_0_0_9920bbedf3cb1a14b1358e0677d01106.jpg',
    'https://telegra.ph/file/a23d68b6ee75f6fe6fa67.jpg',
    'https://4tololo.ru/sites/default/files/images/20182807105210.jpg'
];
const newImg = imgCat.map(img => images(img));
Promise.all(newImg)
.then(img =>{
    img.forEach(n => document.body.append(n))
})
.catch(n => {
        alert('Ошибка')
    });
