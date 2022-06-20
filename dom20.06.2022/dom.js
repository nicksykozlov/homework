// const p = document.body.querySelector('.middle'); // нашли элемент с классом middle
// p.previousElementSibling.style.backgroundColor = 'red'; // элемент перед 
// p.nextElementSibling.style.backgroundColor = 'green'; // после поискового элемента 
// p.parentElement.style.background = 'gray';
// console.log(p);

// const plus = document.body.querySelectorAll('li');
// plus.forEach(li =>{
//     let n = li.textContent;

//     n = n + '!';
//     li.textContent=n;
// })
// console.log(plus);
// поменять бэкгарунд чреез один 
// const plus = document.body.querySelectorAll('li:nth-child(2n)');
// plus.forEach(li => 
//     li.style.backgroundColor = 'red'

// );
// console.log(plus);

const images = [
'https://www.belta.by/images/storage/news/with_archive/2020/000029_1605538227_415880_big.jpg',
'https://avatars.mds.yandex.net/get-kinopoisk-post-img/1101236/e1e09992d39f539b736c891a42960a39/960x540'
    ]

const img = document.body.querySelector('img');
let n = 0;
setInterval(() => {
   img.src=images[n];
   n++;
   if(n == images.length){
    n=0;
   } 
   
},1000
)
console.log(img);