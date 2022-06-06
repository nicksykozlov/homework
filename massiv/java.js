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


//Поменять местами наибольший и наименьший элементы массива НЕ СДЕДАД
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
// let arr = [5,3,8,9,6,8,9,99,150, 280, 369875];
// for(let i = 0; i < arr.length; i++){
//     if (i>=0){
//         i = " ";
//     }
  
// }
// console.log(arr);