// сформировать возрастающий мосив из нечетных чисел от 0 до 999
// вывести массив и количество элементов

// let arr = [];
// for (let i = 2; i < 999; i=i+2) {

//      arr.push(i);
//     }
//     console.log(arr);
//     console.log(arr.length);

// сформировать цбывающий массив из чисел которые делятся на 3 ( от 1000 до 200)

// let arr = [];
// for (let i = 1000; i > 200; i--) {
//     if (i % 3 == 0) {
//         arr.push(i);
//     }

// }
// console.log(arr);

// создать масив каждый элемент которого  равен квадрату своего номера

// let arr = [];
// for (let i = 0; i < 1000; i++) {

//     arr.push((i+1)**2);
// }
// console.log(arr);

// найти количетсво четных чисел в масиве

// let arr = [2, 4, 7, 1, 2, 5, 7];
// let num = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         num = num + 1;
//     }

// }
// console.log(num);

// найди сумму и произведенеие элементов массива

// let arr = [2, 4, 7, 1, 2, 5, 7];
// let sum = 0;
// let p = 1;
// for (let element of arr){
// sum = sum + element;
// p = p * element;
// }
// console.log(sum);
// console.log(p);

// найдите сумму чисел массива которые стоят на нечетных местах и при этом превосходят сумму крайних элементов массива
// let arr = [2, 4, 7, 1, 2, 5, 7, 3, 1];
// let sum = arr[0] + arr[arr.length-1];
// s=0;
// for (let i = 0; i < arr.length; i++){
//     if (i % 2 && arr[i] > sum){
//         s = s + arr[i];
//     }
// }
// console.log(s);

// // найдите наименьший четный элемент масив
// let arr = [2, 4, 7, 1, 2, 5, 7, 3, 1];
// let minnum = arr[0];
// for (let i of arr){
//    if (arr[i]%2 == 0 && arr[i]<minnum){
//        minnum=arr[i];
//    }
// }
// console.log(minnum);

// Определить есть ли в масиве повторяющие элементы
// let arr = [2, 4, 7, 1, 2, 5, 7, 3, 1];
// let isDublicate = false;
// while(arr.length){
//     let element = arr.pop();
//     if(arr.includes(element)){
//         isDublicate=true;
//         break;
//     }
// }
// console.log(isDublicate);

// Дана строка, состоящая из слов, разделеннаяя пробелами. Определите количество слов в строке

// let str = 'Дана    строка, состоящая    из слов!';
// while(str.includes('  ')){
//   str = str.replaceAll('  ', ' ');
// }
// let words = str.split(' ');
// console.log(words.length);

// дз масив


// Заполнить массив нулями, кроме первого и последнего элементов, которые должны быть равны единице.
// let arr = [];
// for (let i = 0; i < 40; i++) {
//     arr[i] = 0;
//     arr [0] = 1;
//     arr[-1] = 1;

// }
// console.log(arr);

//Заполнить массив нулями и единицами, при этом данные значения чередуются, начиная с нуля.
//  let arr = [];
//  for (let i = 0; i <  40; i++){
//      arr[i] = 0;
//      if (i=i+1){
//          arr[i] = 1;
//      }
//  }
//  console.log(arr);

//Создать массив, на четных местах в котором стоят единицы, а на нечетных местах - числа, ]
//равные остатку от деления своего номера на 5. не совсем понял

// let arr = [];
// for (let i = 0; i < 40; i++) {
//   arr[i] = 1;
//   if ((i = i + 1)) {
//     arr[i] = i % 5;
//   }
// }
// console.log(arr);

//Определите, каких чисел в массиве больше: которые делятся 
//на первый элемент массива или которые делятся на последний элемент массива
// let arr = [2,6,6,6,5,5,5,3,5,5,5];
// let first = arr[0];
// let second = arr[arr.length - 1];
// for (let i = 0; i < arr.length; i++) {
//  if (arr[i] % first == 0) {
//  first = i++;
//  }  
//  else if (arr[i] % second == 0){
//      second = i++;
//  }
// }
// console.log(first);
// console.log(second);

//Найти наибольший элемент массива.
// let arr = [5,3,8,9,6,6,8,9,99,150, 280, 369875];
// let min = arr[0];
// let max = 0;
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] < min){
//         min = arr[i]; 
//     }
//     else{ max = arr[i]}
// }
// console.log(max);


// Найдите сумму наибольшего и наименьшего элементов массива.
// let arr = [5,3,8,9,6,6,8,9,99,150, 280, 369875];
// let min = arr[0];
// let max = 0;
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] < min){
//         min = arr[i]; 
//     }
//     else{ max = arr[i]}

// }
// console.log(max+min);

//Проверьте, является ли массив возрастающим или убывающим.Не СДЕЛАЛ
// let arr = [5,4,3,2,1];
// for (let i = 0; i < arr.length; i++){
//     if (arr[i]<arr[i+1]){
//         console.log('вовзрастающий');
//         break;        ;
//     }
//     else{
//         console.log("убывающий");
//     }
// }

//Поменять местами наибольший и наименьший элементы массива НЕ СДЕДАД вычеслить индекс и поменять местами 

// let arr = [5,3,8,9,6,6,8,9,99,150, 280, 369875];
// let min = arr[0];
// let max = 0;
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] < min){
//         min = arr[i]; 
//     }
//     else{ max = arr[i]}

// }
// console.log(arr(reverse));




//Удалить в массиве первый и последний элементы.

// let arr = [5,3,8,9,6,6,8,9,99,150, 280, 369875];
// arr.pop();
// arr.shift();
// console.log(arr);


//Переставить элементы массива в обратном порядке.
// let arr = [5,3,8,9,6,8,9,99,150, 280, 369875];
// console.log(arr.reverse());



// //Удалите в целочисленном массиве все положительные числа
// let arr = [];
// let copy = [];
// for(let i = 0; i<arr.length; i++){
//     if(arr[i]<= 0){
//         copy.push(arr[i]);
//     }
// }
// arr=copy;
// console.log(arr);


// 06/06/22 изучить map foreach filter 

// let arr = [1,2,34,5,6,7,78,8]
// let newarray = arr.map(i=>i**3)
// console.log(newarray);
// newarray = newarray.sort((a,b) => a-b)
// console.log(newarray);
// let sum = 0;
// newarray.forEach((el) => sum = sum + el);
// let around = sum/newarray.length;
// newarray = newarray.filter((x) => x > around);
// console.log(newarray);

// let str = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur laborum similique amet doloribus sunt corrupti impedit vero cupiditate, beatae, hic non dolore officiis eveniet doloremque accusamus laudantium quidem? Modi, quis?'
// let arr = str.split('');
// console.log(arr);
// let newarr = arr.filter(x => x !=='.' && x !==',' ).join('');
// console.log(newarr);
// newarr = newarr.toLocaleLowerCase();
// console.log(newarr);
// let count = str.split(' ').reduce((n, word) => word.length > 6 ? ++n: n, 0);
// console.log(count);
// let maxword = str.split(' ').reduce((word1, word2) => word1.length>word2.length ? word1:word2);
// console.log(maxword);

//  let upper = str.split(' ').map(word => {
//      let letters = word.split('');
//      letters[0] = letters[0].toLocaleUpperCase();
//      letters[letters.length-1] = letters[letters.length-1].toUpperCase();
//      letters = letters.join('');
//      return letters;
//  }).join(' ')
//  console.log(upper);
// let por = str.split(' ').map(word => word.split('').reverse().join('')).join(' ')
// console.log(por);

// let first = str.split(' ').map(w=>w[0]);
// console.log(first);


///// МЕТОДЫ МАССИВОВО

// FOR EACH
// const people = [
//     {name: 'Ivan', surName: 'Petrov', age: 45, zp: 248},
//     {name: 'Petro', surName: 'Zyglo', age: 32, zp: 100},
//     {name: 'Nick', surName: 'Yasykevic', age: 12, zp: 50},
//     {name: 'Gleb', surName: 'Ninntendo', age: 2, zp: 300},
//     {name: 'Roma', surName: 'PetrIvanov', age: 1, zp: 12},
// ];
// people.forEach(i => console.log(i));// переберет весь масив как For Of

//MAP
// const newpeple = people.map(i => i.age > 18); // новый масив 
// есди прописывать условия как выше то выдаст true, где верно, False - неверно
// что быполучить новый масив по условиям надо использовать filter
// console.log(newpeple);

//Filter
// const adults = people.filter(i => i.age < 18)//нов масив в котором удовлетварены услОВИЯ ФИЛЬТР
// for (let i = 0; i < people.length; i++){
//     if (people[i].age >= 18){
//         adults.push(people[i]);
//     }
// };
// console.log(adults);

// // Reduse
// let sum = 0;
// for (let i = 0; i < people.length; i++){
//     sum += people[i].zp;
// };
// console.log(sum);


// let a = [1,2,3,4 [6,8], 10];
// let b = [0,9,8[4,4[2,3]],4];
// let c = a.concat(b);
// console.log(c);
/* <select id="select" multiple>
  <option value="blues" selected>Блюз</option>
  <option value="rock" selected>Рок</option>
  <option value="classic">Классика</option>
</select> */
// let a = Array.from(select.options).filter(option =>option.selected).map(option=>option.value);
// console.log(a);
//  let a = new Option ("nhhn", "sdsd");
//  console.log(a);



//Проверить массив является ли возврастающим либо убывающим

// let arr = [1,2,3,4,5,6];
// let newarr = arr.sort((a,b)=> a-b);
// console.log(newarr);
// for (let i = 0; i < arr.length; i++){
//     if (arr[i]<arr[i+1]){
//         console.log('вовзрастающий');
//         break;        ;
//     }
//     else{
//         console.log("убывающий");
//     }
// };


// В данном массиве найти два наименших элемента 
// let arr = [1,2,9,5,5,6,7];
// let newarr = arr.sort((a,b)=> a-b);
// let min = `${newarr[0]} и ${newarr[1]}`;
// console.log(min);

// Определить есть ли в масииве повторяющие элемнты 

// let arr = [2, 4, 7, 1, 11, 5, 6, 3, 10];
// let isDublicate = false;
// while(arr.length){
//     let element = arr.pop();
//     if(arr.includes(element)){
//         isDublicate=true;
//         break;
//     }
// }
// console.log(isDublicate);

// Календарь


function createCalendar(elem, year, month) {

  let mon = month - 1; // месяцы в JS идут от 0 до 11, а не от 1 до 12
  let d = new Date(year, mon);

  let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

  // пробелы для первого ряда
  // с понедельника до первого дня месяца
  // * * * 1  2  3  4
  for (let i = 0; i < getDay(d); i++) {
    table += '<td></td>';
  }

  // <td> ячейки календаря с датами
  while (d.getMonth() == mon) {
    table += '<td>' + d.getDate() + '</td>';

    if (getDay(d) % 7 == 6) { // вс, последний день - перевод строки
      table += '</tr><tr>';
    }

    d.setDate(d.getDate() + 1);
  }

  // добить таблицу пустыми ячейками, если нужно
  // 29 30 31 * * * *
  if (getDay(d) != 0) {
    for (let i = getDay(d); i < 7; i++) {
      table += '<td></td>';
    }
  }

  // закрыть таблицу
  table += '</tr></table>';

  elem.innerHTML = table;
}

function getDay(date) { // получить номер дня недели, от 0 (пн) до 6 (вс)
  let day = date.getDay();
  if (day == 0) day = 7; // сделать воскресенье (0) последним днем
  return day - 1;
}

createCalendar(calendar, 2022, 1);
createCalendar(calendar, 2022, 2);
createCalendar(calendar, 2022, 3);
