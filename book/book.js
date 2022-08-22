const notQuitePi = parseFloat('3.14') 
const evenLessPi = parseInt('4.5')

console.log(notQuitePi);
console.log(evenLessPi);
let counter = 0
let riddle = counter++// будет ноль
let enigma = ++counter// будет 2
console.log(riddle, enigma);
let d = '"Hello"'
console.log(d);
let greeting = 'Hello \u{1F310}'
console.log(greeting);
let destination = 'world' // обычная строка
let greet = `Hello, ${destination.toUpperCase()}!`

let age = 43
let harry = { name: 'Harry Smith', age: age }
console.log(harry);

const mas=[1,2,3]
console.log(Array.isArray(mas));// проверяет является ли объект массивом

const obj={
    name: 'Harry',
    age: 25
}
console.log(JSON.stringify(obj));// преобразует объект js в json
//JSON.parse разбирает json и возвращает объект js

// Деструктиризация 
//Левая часть деструктурирующего присваивания на самом деле не является
//массивовым литералом, ведь переменные first и second еще не существуют.
//Считайте, что левая часть – это образец, описывающий, как следует сопо-
//ставлять переменные с правой частью
let pair = [1,2]
let [first, second] = [1,2];
console.log(second);

//ЗАДАЧИ

//Что будет, если прибавить 0 к значениям NaN, Infinity, false, true, null
//и undefined? Что будет, если конкатенировать пустую строку с NaN, Infinity,
//false, true, null и undefined? Сначала сообразите, а потом проверьте
// догадку.
//let upr = 0 + NaN; // будет NAN
//let upr = 0 + Infinity;//Будет Infinity
//let upr = 0 + false;// буудет 0
//let upr = 0 + true;// будет 1
//let upr = 0 + null;//null;
// let upr = 0 + undefined;// Nan
// console.log(upr);

let upr = {}+[];
console.log(upr);

//Условный оператор „?“
//let result = условие ? значение1 : значение2;
//Сначала вычисляется условие: если оно истинно, 
//тогда возвращается значение1, в противном случае – значение2.
let s = prompt('Сколько вам лет?', '');
let accessAllowed = (s > 18) ? alert('ура') : alert('кушай кашу');


