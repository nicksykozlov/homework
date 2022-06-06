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
let arr = [2, 4, 7, 1, 2, 5, 7, 3, 1];
let isDublicate = false;
while(arr.length){
    let element = arr.pop();
    if(arr.includes(element)){
        isDublicate=true;
        break;
    }
}
console.log(isDublicate);




// Дана строка, состоящая из слов, разделеннаяя пробелами. Определите количество слов в строке
 let str = "Дана  строка, состоящая     из слов ! ";
