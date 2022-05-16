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

let number=prompt("введите число");
number %= 10;
let numberB = 567 % 10;
let numberC = 56 % 10;
let numberG = 5 % 10;

alert (number + numberB + numberC + numberG);



 
//  a /= 10;
//  let c = (a % 10) * 100; // 2я цифра нового числа
 
// //  a /= 10;
//  let d = (a % 10) * 10;//  3я цифра нового числа
 
 
//  a /= 10;
//  let e = a % 10 ;// последняя циффра нового числа
 
 
//  alert( newNumber = b + d + c + e); 