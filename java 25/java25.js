// строки
// let s = 'It is a long ttestablished fact that a reader will be distracted by the readable content of a page when looking at its layout.'
// console.log(s.charAt(0));
// console.log(s[s.length - 2]);
// console.log(s.length);
// if(s.length%2 == 0 ) {
//     console.log(s[Math.ceil(s.length/2)]);
// }

// Дана строка . вывести  первые три символа и последний три символа, если
// длина строки болmше 5
// иначе вывести первый симовл столько раз сколько строк.

// let s = 'Irrrrrrfgfdsaam';
// if (s.length > 5) {
//     console.log(s.slice(0, 3));
//     console.log(s.slice(-3));
// }
// else{
//     let n = s.length;
//     for(let i = 0; i < n; i++){
//         console.log(s[0]);
//     }
// }

// Дана строка. Показать третий, шестой девятый и тд
// let s = 'It is s'
// for(let i = 3; i<s.length; i=i+3){
//     console.log(s[i]);
// }
// Дана строка. Создайте две строки первая из нечетных символов исходной строки,
// вторая из четных символов

// let s = 'It is a long ttestablished fact that a reader will be distracted by the readable content of a page when looking at its layout.'
// let n = "";
// let m = "";
// for (let i = 0; i < s.length; i++){
//     if(i%2 == 0){
//         n = n + s[i];
//     }
//     else {
//         m = m + s[i];
//     }
// }

// console.log(n);
// console.log(m);

//  Удалите в строке все сиволы ! используем replace
// let s = 'sjfkljd!!!!skj!!!!'

// console.log(s.replaceAll("!", ""));

//Дана строка Определить обещее количетсво плюсов и минусов, а также сколько символов
// полсе которых идут цифры
 let s = '+-++0++--0--+++0+---+'
 let pluscount = 0;
 let minuscount = 0;
 let minuswithzeo = 0;
 for (let i = 0; i<s.length; i++){
     if (s[i]=="+"){
         pluscount++;
     }
     else if (s[i]=='-'){
         minuscount++;
     }
     if((s[i]=='-' || s[i] == "+") && i<s.length-1 && s[i+1]=="0"){
         minuswithzeo++;
     }
 }
console.log(pluscount);
console.log(minuscount);
console.log(minuswithzeo);

// вставить пробелы после каждого символа
// let s = "dsfgnkjdhaghadf;gh;adk"
// let m = " ";
// for(let i = 0; i<s.length; i++ ){
//     m = m + s[i] + " ";
// }
// console.log(m);

// Дона строка, если ее длина больше, то оставить в строке только первые 6 символов
// иначе доплнить до 12

// let s = "dsfd"
// if(s.length>10){
//     console.log(s.slice(0, 6));
// }
// else{
//     s = s.padEnd(12, 'o');
//     console.log(s);
// }

// let str = "Привет";
// console.log(str.charAt(5));
// var x = 'Mozilla';
// var empty = '';

// console.log('\"Слово «Mozilla» з\\анимает ' + x.length + ' кодовых значений');
// /* "Слово «Mozilla» занимает 7 кодовых значений" */

// console.log(x[x.length - 1]);
// /* "Пустая строка имеет длину, равную 0" */

// for (let s of "kfpoiuytredca") {
//     console.log(s); // H,e,l,l,o (char — сначала "H", потом "e", потом "l" и т. д.)
//   }

// // изминение в строке получилось moZZila
// let str = "Mozzila"
// str = 'm' + str[1] + 'Z' + "Z" + str[4] + str[5] + str[6];
// console.log(str);

//Методы toLowerCase() и toUpperCase() меняют регистр символов:
// let str = "Mozzila"

// console.log(str.toUpperCase());//Mozzila будет с болшой буквы

// Поиск indexOf
// let str = 'Ослик Иа-Иа посмотрел на виадук';

// let target = 'Иа'; // цель поиска

// let pos = 0;
// while (true) {
//   let foundPos = str.indexOf(target, pos);
//   if (foundPos == -1) break;

//   alert( `Найдено тут: ${foundPos}` );
//   pos = foundPos + 1; // продолжаем со следующей позиции
// }
// let str = "Ослик Иа-Иа посмотрел на виадук";
// let target = "Иа";

// let pos = -1;
// while ((pos = str.indexOf(target, pos + 1)) != -1) {
//   alert( pos );
// }

// slice

// let str = "пусть всегда будет солнце";
// console.log(str.slice(5, 15));
// Написат Вася с большой буквы
// let str = "вася";
// let newStr = str.charAt(0).toUpperCase() + str.slice(1)
// console.log(newStr);

//Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
//Функция должна быть нечувствительна к регистру: делаетася путем присвоения всем буквам нижнего регистра
// function checkSpam(str){
//     let lowerStr = str.toLowerCase();
//     return lowerStr.includes('viagra') || lowerStr.includes('xxx');
// }
// alert( checkSpam('buy ViAgRA now') );
// alert( checkSpam('free xxxxx') );
// alert( checkSpam("innocent rabbit") );

// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и,
// если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо,
// усечённая строка.
// function truncate(str, maxlength) {
//     return (str.length > maxlength) ?
//       str.slice(0, maxlength - 1) + '…' : str;
//   }

//   truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"

//   truncate("Всем привет!", 20) = "Всем привет!"

// ДЗ строки

// Дана строка, состоящая из слов, разделенных пробелами.

// Определите количество слов в строке.
// В данной строке вставить после каждого символа 'a' символ 'b'.

//  let str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
//  let num = 0;
//  let leter = str.replace(/a/gi, "ab");
//  if (str.length !=0){
//     num++;
//     for (let i = 0; i<str.length; i++){
//         if (str.charAt(i) == " "){
//             num ++;
//         }
//     }
// }

// console.log(leter);
// console.log(num);

// //Дана строка str = 1234567 Выведите её в виде 1 234 567
// let str = "1234567";
// str = str.slice(0,1)+ " " + str.slice (1,4) + " " +str.slice(4);
// console.log(str);

//В данной строке найти количество цифр.

// let str = 'Lorem ipsum123 dolor 123 sit amet, co1nsec856989tetur adipis7cing elit, sed d6o eiusmod temp567or incid6idunt ut l65abore et123 dolore magn256a aliqua. Ut enim4 ad minim veniam, quis nostrud'
// let num = "";
// if (str.length !=0){
//         num++;
//         for (let i = 0; i<str.length; i++){
//             if (str.charAt(i) == "1" || str.charAt(i) == "2" || str.charAt(i) == "3" || str.charAt(i) == "4" || str.charAt(i) == "5" || str.charAt(i) == "6" || str.charAt(i) == "7" || str.charAt(i) == "8" || str.charAt(i) == "9" || str.charAt(i) == "0"){
//                 num ++;
//             }
//         }
//     }
//     console.log(num);

//Перевернуть строку, т.е. последние символы должны стать первыми, а первые последними.

// let str = "Lorem ipsum dolor  sit amet, consectetur";
// let newStr = " ";

//   for (i = str.length - 1; i >= 0; i--) {
//     newStr += str.charAt(i);
//   }

// console.log(newStr);

//Найдите самое длинное слово в строке

// function longestWord(string) {
//     let str = string.split(" ");
//     let longest = 0;
//     let word = null;
//     str.forEach(function(str) {
//         if (longest < str.length) {
//             longest = str.length;
//             word = str;
//         }
//     });
//     return word;
// }
// console.log(longestWord("Lorem ipsum dolor  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco   laboris nisi ut aliquip ex ea commodo consequat. Duis aute    irure dolor in reprehenderit   in voluptate velit esse   cillum dolore eu fugiat nulla pariatur.    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"));


//Проверить, читается ли это слово слева направо и наоборот
// let str = "abcddcba";
// let newStr = " ";

// for (i = str.length - 1; i >= 0; i--) {
//   newStr += str.charAt(i);
 
// }

//     console.log(str===newStr);

    //Вывести слова строки, начинающиеся и заканчивающиеся одной и той же буквой

    // let str = "abdc asdff asdfa asdffggg bdfdb";
    // let a = " ";
    // if (str.includes ('a')){
    //     for (let i = 0; i < str.length; i++) {
    //       let a = i+1;
            
    //     }
    // }

    // console.log(a);
    



