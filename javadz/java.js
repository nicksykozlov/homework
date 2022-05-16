// alert( 'Я JavaScript!' );
// alert('Привет'); 
// alert('Мир');
// alert('Hello')
// [1, 2].forEach(alert);
// Этот комментарий занимает всю строку
// alert('Привет');
// alert('Мир'); // Этот комментарий следует за инструкцией
/* Пример с двумя сообщениями.
Это - многострочный комментарий.
*/
/*alert('Привет');*/
// 'use strict'
// alert('Мир');
// 'use strict'
// alert('hello');
// let message;
// message='Да припудет с нами сила';
// alert(message);
// let message='hello';
// message='never'
// alert(message);
// let message = "good night";
// let age;
// age=message; // копирование данных из переменных
// alert(age);
// const COLOR_RED = "#F00";
// const COLOR_GREEN = "#0F0";
// const COLOR_BLUE = "#00F";
// const COLOR_ORANGE = "#FF7F00";
// let color = COLOR_GREEN;
// alert(color);
// const COLOR_RED = "#F00";
// const COLOR_GREEN = "#0F0";
// const COLOR_BLUE = "#00F";
// const COLOR_ORANGE = "#FF7F00";

// // ...когда нам нужно выбрать цвет
// let color = COLOR_ORANGE;
// alert(color); // #FF7F00

// color = 'Джон'
// color = age;
// alert(age);
// let admin;
// let name;
// name = "Jhon"
// admin = name; // копирование данных из переменных
// alert(admin);
// let name = "good night";
// let admin;
// admin=name; // копирование данных из переменных
// alert(name);
// let NamePlanet
// let ourPlanetName = "Земля"; // верное название
// let NameSiteViseter
// let currentUserName = "Джон"; //верное название сайта
// let str = "Привет";
// let str2 = 'Одинарные кавычки тоже подойдут';
// let phrase = `Обратные кавычки позволяют встраивать переменные ${str}`;
// let name = "Иван";
// alert( `Привет, ${name}!` ); // Привет, Иван!
// alert( `результат: ${1 + 2}` );
// let nameFieldChecked = true; // да, поле отмечено
// let ageFieldChecked = false; // нет, поле не отмечено
// let isGreater = 4 > 1;
// alert( isGreater ); // true (результатом сравнения будет "да")
// let name = "Ilya";
// alert( `hello ${1}` ); // ?
// alert( `hello ${"name"}` ); // ?
// alert( `hello ${name}` ); // ?
// result = prompt("title");
// let age = prompt('Сколько тебе лет?');
// alert(`Тебе ${age} лет!`); // Тебе 100 лет!
// result = confirm("question");
// let isBoss = confirm("Ты здесь главный?");
// alert( isBoss ); // true, если нажата OK
// let name = prompt("Как тебя зовут?");
// alert ( `Меня зовут ${name} !`);
// let value = true;
// alert(typeof value); // boolean
// value = String(value); // теперь value это строка "true"
// alert(typeof value); // string,
// let x = 1;
// x = -x;
// alert( x ); // -1, применили унарный минус
// let a = +prompt("Первое число?", 1);
// let b = +prompt("Второе число?", 2);
// alert(a + b); // 12
// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);
// alert(+a + +b); // 12
// let a = +prompt("Первое число?", 1);
// let b = +prompt("Второе число?", 2);
// alert(a + b); // 3

// let a=prompt("введите сумму депозита"); // калькулятор 
// let b=prompt("срок депозита в месяцах");
// let result=a*(5/100)/365*30;
// console.log("сумма процентов в месяц",result);
// let summaZaVesSrok=result*b;
// console.log('сумма за весь срок хранения',summaZaVesSrok);
// let itogViplota=summaZaVesSrok+result+(a++);
// console.log('общая сумма к выплате в конце срока',itogViplota);

// let number=prompt("введите число");
// number %= 10;
// let numberB = 567 % 10;
// let numberC = 56 % 10;
// let numberG = 5 % 10;

// alert (''+number  +numberB  +numberC  +numberG);

// 16.05.2022 занятие 

// блок Else
// let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');
// if (year == 2015) {
//   alert( 'Да вы знаток!' );
// } else {
//   alert( 'А вот и неправильно!' ); // любое значение, кроме 2015
// }

//задания 34 задача

// let number = + prompt ('ведите число')
// if (number > 3){
//     alert(number + 10);
// }
// else{
//     alert(number - 10)
// }

//задания 35 задача

// let number = + prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');
// if (number < 7) {
//   alert( 'Yes' );
// }
// if(number>10)
// {alert ("No")}
// if (number==9){
//     alert("Error")
// }

// задание 36

// let number = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');
// if (number == 1) {
//   alert( 'Январь' );
// } else if (number == 2) {
//     alert( 'Февраль' );
//   }
//   else if (number == 3) {
//     alert( 'Март' );
//   }
//   else if (number == 4) {
//     alert( 'Апрель' );
//   }
//   else if (number == 5) {
//     alert( 'Май' );
//   }
//   else if (number == 6) {
//     alert( 'Июнь' );
//   }
//   else if (number == 7) {
//     alert( 'Июль' );
//   }
//   else if (number == 8) {
//     alert( 'Авуст' );
//   }
//   else if (number == 9) {
//     alert( 'Сентябрь' );
//   }
//   else if (number == 10) {
//     alert( 'Октябрь' );
//   }
//   else if (number == 11) {
//     alert( 'Ноябрь' );
//   }
//   else if (number == 12) {
//     alert( 'Декабрь' );
//   }

// задание 37

// let numberA = +prompt ("ввидите число")
// let numberB = +prompt ("Введите число")
// if (numberA>numberB){
//     alert(numberA)
// }
// else if {
//     alert(numberB)
// }

// задание 38 Доделать 

// let numberA = +prompt ("ввидите число")
// let numberB = +prompt ("Введите число")
// if (numberA>numberB){
// let numberC = numberA-numberB;
// if(numberC>100){
//     alert('Yes')
// }
  
// }
// else {
//     alert(numberB)
// }



// циклы

// let i = 0;
// while (i <=9 ) { // выводит 0, затем 1, затем 2
//   alert( "You are Welcome" );
//   i++;
// }

//zadacha 76

// let x= +prompt ("Choose number")
// for (let n=0; n<x; n++) {console.log("Silence")}

// zadacha 79 цифры по порядку

// for (let n=1; n<=20; n++) {console.log(n)}

// zadacha 79 цифры по порядку

// for (let n=1001; n<=1025; n=n+3) {console.log(n)}

// for (let n=100; n>=0; n=n-4) {console.log(n)}
// for (let n=1.2; n<=2.8; n=n+0.2) {console.log(n)}

// let n = +prompt('n') ;
// let s = 0;
// for (let i=1; i<=n; i++) {s = s + i;
// }
// console.log(s);

let a = +prompt("number 1")
let b = +prompt("number 2")

for (let i=a; i<=b; i++) {if((i%2)===0) {console.log(i)}}

 