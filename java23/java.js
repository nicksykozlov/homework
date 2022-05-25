// function myFunc( x, y) {
//     console.log  (Math.sqrt(x-Math.sqrt(y)));
// }

// for(let i = 1; i<=10; i++){
//     myFunc(i, i+1)

// }

// function rgb(r=0, g=0, b=0){
//     return 'rgb(' +r + ',' + g + ',' + b + ')';

// }
// let test = rgb (5,28,78);
// console.log(test)

//случайные числа
// function avg(a=0, b=0, c=0, d=0, x=0){
//     return (a+b+c+d+x)/5;

// }

//  for( let i = 0; i<=10; i++){
//      let res = avg( Math.random(),  Math.random(),  Math.random(),  Math.random(),  Math.random());
//      console.log(res);

//  }

// Функция два параметра длину и ширину прямоугольника и вычесляет его площадь

// function sss(a, b) {
//     let s = a*b;
//     if (b === undefined) {
//      s=Math.pow(a,2)
//     }
//     return s;
//   }

//  let test = sss(5,48);
//  console.log (test);

// Вывести числа 11 12 13 21 22 23 31 32 33 !!!!!!!


// for (let i = 10; i <= 33; i++) {
//   //запускаем число 11
//   // на втором цикле сюда придет число 19 к нему прибавиться i++ b станет 20 и 
//   //пойдет на второй круг внутреннего уикла
//   for (let j = 1; j <= 3; j++) {
//     //входит число 11, увеличивается на i++ и становится 12
//     //этот цикл повторяем три раза каждый разв увеличива на i++ до 13, когда запускайтся 4 раз 
//     // число 14 не верно и выкинет 13 во внешний цикл
//     //на второй итерации сюда зайдет чисо 20 прибавьтся 3 и выдаст 21 22 23
//     i++;
//     console.log(i);
//   }
// //сюда приходит число 13 к нему прибовляется 6 и получается 19 
// // приходит 23 + 6 и на третем цикле начнется с 31 
//   i=i+6;
//   console.log(i); 
// }

//Вызовов return может быть несколько, например:!!!!!!!!

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else // работает без else
//   {
//     return confirm('А родители разрешили?');
//   }
// }

// let age = prompt('Сколько вам лет?', 18);

// if ( checkAge(age) ) {
//   alert( 'Доступ получен' );
// } else {
//   alert( 'Доступ закрыт' );
// }

// Задать вопрос почему так
// function showPrimes(n) {
//   nextPrime: for (let i = 2; i < n; i++) // i=2 начало, i<10 - условие, i++ шаг первое число 2, затем 3, 5,7
//   {

//     for (let j = 2; j < i; j++) // j=2<i=3
//     {
//       if (i % j == 0) continue nextPrime; //
//     }

//     alert( i ); // простое
//   }
// }
// showPrimes(10)


// Использование ? и || вместо IF

// function checkAge(age) {
//   return (age > 18) ? true : confirm('Родители разрешили?');
// }
// let age = prompt('Сколько вам лет?', 18);

// if ( checkAge(age) ) {
//   alert( 'Доступ получен' );
// } else {
//   alert( 'Доступ закрыт' );
// }

// function checkAge(age) {
//     return (age > 18) || confirm('Родители разрешили?');
//   }
//   let age = prompt('Сколько вам лет?', 18);
  
//   if ( checkAge(age) ) {
//     alert( 'Доступ получен' );
//   } else {
//     alert( 'Доступ закрыт' );
//   }

//Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

// function min (a, b) {
//   return Math.min(a, b);
// }
// let result = min (200, -555);
// alert (result);

//второй вариант
// function min(a, b) {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }
// alert (min(52,94));

//третий вариант
// function min(a, b) {
//   return a < b ? a : b;
// }

// alert (min(-98,47));


//Напишите функцию pow(x,n), 
//которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

// function pow(x, n){
//   return Math.pow (x, n)
// }

// let x = prompt ("Введите первое число");
// let n = prompt ("Введите второе число");
// alert (pow(x, n))


//Напишите функцию, которая принимает цену товара price 
//и возвращает новую цену с скидкой 3.5 %. Результат округлите до 2 дробных знаков

// function price(x){
//   return (x /100 * 96.5).toFixed(2);
  
// }
// alert (price(200)); 


//Напишите функцию которая принимает r и возвращает длину окружности радиусом r

// function dlina(r){ 
//   return  2 * Math.PI * r}

//   alert (dlina(10))


//Елка

let i = 0;
let j = 0;
let min = 11; //ширина елки
let max = 6; // высота елки
let space = ""; // переменные для -
let star = ""; // перменная для +

while (i < max) {
  space = "";
  star = "";
  for (j = 0; j < max - i; j++) space += " ";
  for (j = 0; j < 2 * i + 1; j++) star += "+"; // первый плюс на 7 
  console.log(space + star);
  i++;
 
}
