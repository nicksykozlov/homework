// const numbers = [1, 4, 9];
// const doubles = numbers.map((k) => k * 2);
// console.log(doubles);
// let sum = (a, b) => a * b;
// console.log(sum(2,5));

// let sayHi = () => alert("Hello!");
// sayHi();

// let age = prompt("Сколько Вам лет?", 20);

// let welcome = (age < 18) ? // знак вопроса проверяет изначение в скобках (age < 18) если не верно пишет Привет  верно здраствуйте
//   () => alert('Привет!') : // значение TRUe
//   () => alert("Здравствуйте!"); //значение Falce

// welcome();

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }

//   ask(
//     "Вы согласны?",
//    () => alert("Вы согласились."),
//    () => alert("Вы отменили выполнение.")
//   )

// let ask = (question) =>
//   confirm(question)
//     ? alert("Вы согласились.")
//     : alert("Вы отменили выполнение.");

// ask("Вы согласны?");

// let arrNew = [1,2,"privet", "poka"];
// // arr.splice(0,2 , "davay" , "robim" , "nerobim" )
// // console.log(arr);



// let arr = ['w', 'y', 'k', 'o', 'p', 'i', 'b'];

// let ArrNew = arrNew.concat(arr);

// console.log(Object.entries(arr)); 


//EVERY
// function big(element) {
//     return element >=10;
    
// }
let arr = [14, 14, 14, 15].every(elem => elem >=10);
// let num = arr.every(elem => elem >= 10);
    console.log(arr);

//ДЗ 08.06
// let str = 'Lorem ipsum123 dolor 121233 3,7 sit amet, co1nsec856989tetur adipis7cing elit, sed d6o eiusmod temp567or incid6idunt ut l65abore et123 dolore magn256a aliqua. Ut enim4 ad minim veniam, quis nostrud'
// let num = str.split(' ').reduce()
// if (str.length !=0){
//         num++;
//         for (let i = 0; i<str.length; i++){
//             if (str.charAt(i) == "1" || str.charAt(i) == "2" || str.charAt(i) == "3" || str.charAt(i) == "4" || str.charAt(i) == "5" || str.charAt(i) == "6" || str.charAt(i) == "7" || str.charAt(i) == "8" || str.charAt(i) == "9" || str.charAt(i) == "0"){
//                 num ++;
//             }
//         }
// //     }
//     console.log(num);
//Найдите самое длинное слово в строке
    // str = 'Lorem ipsum dolor  sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco   laboris nisi ut aliquip ex ea commodo consequat. Duis aute    irure dolor in reprehenderit   in voluptate velit esse   cillum dolore eu fugiat nulla pariatur.    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'

    // let maxWord = str.split(' ').reduce( (word1, word2) => word1.length > word2.length ? word1 : word2);
    
    // console.log(maxWord);