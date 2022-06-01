// строки
// let s = 'It is a long ttestablished fact that a reader will be distracted by the readable content of a page when looking at its layout.'
// console.log(s.charAt(0));
// console.log(s[s.length - 1]);
// console.log(s.length);
// if(s.length%2 == 0 ) {
//     console.log(s[Math.ceil(s.length/2)]);  
// }

// Дана строка . вывести  первые три символа и последний три символа, если 
// длина строки болmше 5
// иначе вывести первый симовл столько раз сколько строк.

// let s = 'Iam very wont to sleep fnd eat';
// if (s.length > 5) {
//     console.log(s.slice(0, 3));
//     console.log(s.slice(-3));
// } else {
//     let n = s.length;
//     for (let i = 0; i < n; i++) {
//         console.log(s[0]);
//     }


// }

// Дана строка. Показать третий, шестой девятый и тд
// let s = 'It is a long ttestablished fact that a reader will be distracted by the readable content of a page when looking at its layout.'
// for(let i = 0; i<s.length; i=i+3){
//     console.log(s[i]);
// }

// Дана строка. Создайте две строки первая из нечетных символов исходной строки, 
// вторая из четных символов
// let s = 'It is a long ttestablished fact that a reader will be distracted by the readable content of a page when looking at its layout.'
// let n = "";
// let m = "";
// for(let i = 0; i<s.length; i++){

//     if(i%2==0){
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
//  let s = '+-++0++--0--+++0+---+' 
//  let pluscount = 0;
//  let minuscount = 0;
//  let minuswithzeo = 0;
//  for (let i = 0; i<s.length; i++){
//      if (s[i]=="+"){
//          pluscount++;
//      }
//      else if (s[i]=='-'){
//          minuscount++;
//      }
//      if((s[i]=='-' || s[i] == "+") && i<s.length-1 && s[i+1]=="0"){
//          minuswithzeo++;
//      }
//  }
// console.log(pluscount);
// console.log(minuscount);
// console.log(minuswithzeo);

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

