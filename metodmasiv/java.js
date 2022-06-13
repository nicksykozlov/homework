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
//можно через функцию можно через новую переменную

// let arr = [15,16,15,16,15,12,];
// let newarr = arr.every(s => s<=10);
// function big(element) {
//     return element >=10;
    
// }
// console.log(newarr);

// entries нужен для того что разбить масив на ключ и значение 
// вот так будет выглядить (2) [0, 15]
// что бы вывести только for of либо console.log(Object.entries(arr));
// let arr = [15,16,15,16,15,12,];
// let newarr = arr.entries();

// for(let ent of newarr){
//     console.log(ent);
// }

// console.log(Object.entries(arr));


// Array.prototype.fill()  заполняет все элементы массива от начального до конечного индексов одним значением.

// let arr = [15,16,15,16,15,12,];
// console.log(arr.fill(8, 0, 3 )); // первая цифра чем заполняем, вторая с какой позиции, третья до какой позиции

 // Filter созадет новый масив с отфильтрованми элементами Для фильтра можно писать функции
// let arr = [15,16,15,16,15,12,];
// let newarr = arr.filter((elem, index) => index%2==0, );
// console.log(newarr);


// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// function isPrime(num) {    //num в данном случае это цифры из масива 
//   for (let i = 2; num > i; i++) {  //пришло - 3 это сразу меньше счетчика сразу получим false
//     if (num % i == 0) {
//       return false;
//     }
//   }
//   return num > 1;
// }
// console.log(isPrime(9)); // [2, 3, 5, 7, 11, 13]

// function square(number) {
//     return number * number;
//   }

// console.log(square(10));

// Find find index для поиска первого занчения

// const array = [-3, -2, -1, 0, 1, 2, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// let arr = array.findIndex(item => item > 3 && item <= 4);
// console.log(arr);


// git 

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

    //8.06.2022
    // function Student(surname, inicial, grupa, ocenka) {
//     this.surname = surname;
//     this.inicial = inicial;
//     this.grupa = grupa;
//     this.ocenka = ocenka;
//     this.araund = function () {
//         return this.ocenka.reduce((a, b) => a + b)/this.ocenka.length
//     }
//     this.isPerfect = function(){
//         return this.ocenka.every(r => r >=4);
//     }
//     this.show = function (){
//         console.log('${this.surname} - ${this.grupa}');
//     }
// }

// const firstPerson = new Student('Petro', 'VA', '5', [1, 3, 0, 5, 6]);
// const secondPerson = new Student('Ivan', 'GA', '56', [1, 0, 0, 9, 6]);
// const thirdPerson = new Student('Grek', 'SA', '2', [1, 6, 8, 5, 8]);
// const fourPerson = new Student('Jhon', 'TR', '2', [1, 7, 8, 6, 1]);
// const fivePerson = new Student('Andrew', 'EW', '8', [1, 3, 8, 5, 6]);
// const sixPerson = new Student('Renat', 'KU', '8', [1, 1, 1, 5, 6]);
// const sevenPerson = new Student('Ahmet', 'UE', '8', [1, 8, 8, 5, 9]);
// const eightPerson = new Student('Oleg', 'UE', '11', [1, 4, 8, 6, 6]);
// const ten = new Student('Nikita', 'UE', '11', [1, 3, 1, 9, 9]);

// let card = [firstPerson, secondPerson, thirdPerson, fourPerson, fivePerson, sixPerson, sevenPerson, eightPerson, ten]


// card.forEach(s => console.log(s.araund()));
// // card.sort((s1, s2) => s1.araund()-s2.araund());
// card.filter(s=> s.isPerfect()).forEach(s=>s.show());
// console.log(card);




// function Train(adres, numpoezd, time) {
//     this.adres = adres;
//     this.numpoezd = numpoezd;
//     this.time = time;
  
// }


// const train1 = new Train('Vileyka', 135, 12.38);
// const train2 = new Train('Brest', 2, 12.49);
// const train3 = new Train('Grodno', 8, 12.28);
// const train4 = new Train('Minsk', 5, 12.38);
// const train5 = new Train('Vitebsk', 13, 12.18);

// let poezd = [train1, train2, train3, train4, train5];
// poezd.sort((s1, s2);

// console.log(poezd);