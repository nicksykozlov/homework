// 18.05. занятие 

// let x = 1;
// for (x; x<=100; x++) {
// let res = (Math.abs(x-5)-Math.sin(x))/3 + Math.sqrt (Math.pow(x,2) + 2014)*Math.cos(2*x)- 3;
// console.log(res);}
// let x =3.6;
// let res = Math.E**(x-2) + Math.abs(Math.sin(x)) - Math.pow (x,4)*Math.cos(1/x);
// console.log(res)

// let a = 0.1;
// let b = 0.2;
// let x = 1;
// let res = (Math.pow (x,2) + b **(1/5))
// зелка из звезд
// let n = 5;
// str = ""
// for (let i=1; i<=n; i++){
//    str=str+'*';
//    console.log(str)
// }
// Обязательно Разобраться !!!!!!!!!!
// let k = 10;
// let m = 10;
// for (let r = 1; r<=m; r++)
// {
//     let s = "" // запускается цикл в котором объявленна переменаяя "" идет к m

//     for (let c = 1; c<=k; c++) 
//     {
//         if (c==k || c==1 || c==r || r==1 || r==m || c==m-r) 
//         {
//             s=s+"1"
//         }
//         else{
//             s=s+'0'
//         }

//     }
//     console.log (s)
// } 


// let num = 255;

// alert( num.toString(16) );  // пероброзует в шестнадцетиричное чилсо
// alert( num.toString(2) );   // преоброзует в двоичное число
// let value = Math.random(10)

// console.log(value) // выведет случайное число


// let k= 20; //столбцы
// let m = 20; // строки
// for (let r = 1; r<=m; r++) // делает 10 строк m
// {
//     let s = "" //обявляется строчная перемееная

//     for (let c = 1; c<=k; c++) //запускает цикл столбец
//     {
//         if (c==k || c==1 || c==r || r==1 || r==m || c==m-r) 
//         {
//             s=s+"1"
//         }
//         else{
//             s=s+'0'
//         }

//     }
//     console.log (s)
// } 
//Задание 1 
//1 способ
// let n = 20;
// for (let i=1; i<=n; i++){
//     if(i%2 == 1){ 
//         console.log('AAABBBAAABBBAAABBB') 
//     }
//     else {
//         console.log('BBBAAABBBAAABBBAAA')
//     }
// }
//таких строк n, в каждой строке m троек AAA)
//AAABBBAAABBBAAABBB
//BBBAAABBBAAABBBAAA
// let n = 10;
// let a = 'AAA';
// let b = 'BBB';
// for ( let i = 1; i<=n; i++) {
    
//     if(i%2==1){
//         console.log(a+b+a+b+a+b)
//     }
//     else{
//         console.log(b+a+b+a+b+a)
//     }
// }

//количество строк вводит пользователь, ширина прямоугольника в два раза больше высоты)

// let x = + prompt ('enter the number');

// for (let r = 1; r<=x; r++) // делает 10 строк m
// {
//     let s =  ""  //обявляется строчная перемееная
  
//     for (let c = 1; c<=x; c++) //запускает цикл столбец
    
//     {
//         if ( c==1 ||  c == x || r==1 || r==x) 
//         {
//             s=s+"A"
//         }
//         else{
//             s=s+'B'
//         }

//     }
//     console.log (s)
// } 

//Вывести 3 случайных числа от 578 до 10024
      
//   for(let k = 1; k<=3; k++){
//     console.log(Math.floor  (578 + Math.random() *1024 - 446))
//   }

//Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.

// console.log (Math.min( 4, -2, 5, 19, -130, 0, 10))
// console.log (Math.max( 4, -2, 5, 19, -130, 0, 10))


//Даны переменные a и b. Найдите найдите модуль разности a и b. Проверьте работу скрипта самостоятельно для различных a и b.
//  let a = 20;
//  let b = 100;
//  console.log(Math.abs(a-b))

//Выведите на экран равнобедренный треугольник с длиной основания n (n должно быть не четным, в противном случае выведите сообщение о ошибке)




