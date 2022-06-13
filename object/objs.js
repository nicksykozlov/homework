// let user = {
//     name: "John",
//     age: 30
//   };

//   let key = prompt("Что вы хотите узнать о пользователе?", "name");
//   let age = prompt("возваст", "age" )

//   // доступ к свойству через переменную
//   alert( user[key] ); // John (если ввели "name")
//   alert(user[age])

// let fruit = prompt("Какой фрукт купить?");

// let bag = {
//   [fruit]: 5, // имя свойства будет взято из переменной fruit
// };
// alert( bag.yandex ); // 5, если fruit="apple"
// //вычесляемые свойтсва не совсем понятно
//Свойство из переменной
// function makeUser(name, age) {
//     return {
//       name: name,
//       age: age
//       // ...другие свойства
//     };
//   }

//   let user = makeUser("John", 50);
//   alert( user.name); // John

// //проверка сущестовнаия свойства in при испольвзовани in свойтсво должно быть слева в ковычках
// let user = { name: "John", age: 30 };

// alert( "age" in user ); // true, user.age существует
// alert( "blabla" in user ); // false, user.blabla не существует

//Цикл «for…in» для выведения всех свойт объкта

// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
//   };

//   for (let key in user) {
//     // ключи
//     console.log(key); // name, age, isAdmin
//     // значения ключей
//     console.log(user[key]);
//   }

// let user = {
//     name: "John",
//     surname: "Smith"
//   };
//   user.age = 25; // добавим ещё одно свойство
//   user.tel = +38;

//   // не целочисленные свойства перечислены в порядке создания
//   for (let prop in user) {
//     console.log(prop); // name, surname, age
//   }

// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false

// function isEmpty(obj) {
//   for (let key in obj) {
//     // если тело цикла начнет выполняться - значит в объекте есть свойства
//     return false;
//   }
//   return true;
// }

//Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0;
//  for (let key in salaries){
//      sum+=salaries[key];
//  }
//  console.log(sum);

// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };

// //   multiplyNumeric(menu);

//   // после вызова функции
// //   menu = {
// //     width: 400,
// //     height: 600,
// //     title: "My menu"
// //   };

// let newmenu ={};


// function multiplyNumeric(obj) {
//     for (let key in menu) {
//       if (typeof obj[key] == 'number') {
//         obj[key] *= 2;
//       }
//     }
//   }
// console.log(multiplyNumeric(newmenu));

// коприрование объектов

// let user = { name: "Иван",
// adge:25,};

// let admin = user; // копируется ссылка
// admin.name = 'Петя'

// console.log(user);

// клонирвоание объектов 

// let user = {
//     name: "Иван",
//     age: 30
//   };

//   let clone = {}; // новый пустой объект

//   // скопируем все свойства user в него
//   for (let key in user) {
//     clone[key] = user[key];
//   }

//   // теперь в переменной clone находится абсолютно независимый клон объекта
//   clone.name = "Пётр"; // изменим в нём данные

//   alert(clone.name); // в оригинальном объекте значение свойства `name` осталось прежним – Иван.
// Использование Object.assign

// let user = { name: "Иван" };

// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };

// // копируем все свойства из permissions1 и permissions2 в user
// Object.assign(user, permissions1, permissions2);

// // теперь user = { name: "Иван", canView: true, canEdit: true }
// console.log(user);

//Мы также можем использовать Object.assign для замены for..in на простое клонирование:

// let user = {
//   name: "Иван",
//   age: 30
// };

// let clone = Object.assign({}, user);
// console.log(clone);


// Метод this

// let user = {
//     name: "Джон",
//     age: 30
//   };

//   user.sayHi = function() {
//     alert("Привет!");
//   };
//   user.sayHi(); // Привет!

// let user = {
//     name: "Джон",
//     age: 30,

//     sayHi() {
//       // this - это "текущий объект"
//       alert(this.name);
//     }

//   };

//   user.sayHi(); // Джон

// let user = {
//     name: "Джон",
//     age: 30,

//     sayHi() {
//       alert( user.name ); // приведёт к ошибке
//     }

//   };
//   user.sayHi();

//   let admin = user;
//   user = null; // обнулим переменную для наглядности, теперь она не хранит ссылку на объект.

//   admin.sayHi(); // Ошибка! Внутри sayHi() используется user, которая больше не ссылается на объект!
// Если мы используем this.name вместо user.name внутри alert, тогда этот код будет работать.

// let user = { name: "Джон" };
// let admin = { name: "Админ" };

// function sayHi() {
//   alert( this.name );
// }

// // используем одну и ту же функцию в двух объектах
// user.f = sayHi;
// admin.f = sayHi;

// // вызовы функции, приведённые ниже, имеют разное значение this
// // "this" внутри функции является ссылкой на объект, который указан "перед точкой"
// user.f(); // Джон  (this == user)
// admin.f(); // Админ  (this == admin)

// user['f'](); // Админ (неважен способ доступа к методу - через точку или квадратные скобки)

// let user = {
//     name: "Джон",
//     go: function() { alert(this.name) }
//   };

//   user.go();

//В представленном ниже коде мы намерены вызвать obj.go() метод 4 раза подряд.

//Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.

// let calculator = {
//     sum() {
//       return this.a + this.b;
//     },

//     mul() {
//       return this.a * this.b;
//     },

//     read() {
//       this.a = +prompt("Введите первое число");
//       this.b = +prompt("Введите первое число");
//     }
//   };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

// New  конструктор объектов 

// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
//   }

//   let user = new User("Вася");
//   new User("Петя");

//   alert(user.name); // Вася
//   alert(user.isAdmin); // false

//Если в нашем коде большое количество строк, создающих один сложный объект, мы можем обернуть их в функцию-конструктор следующим образом:

// let user = new function() {
//   this.name = "Вася";
//   this.isAdmin = false;

// ...другой код для создания пользователя
// возможна любая сложная логика и выражения
// локальные переменные и т. д.


//ДЗ 
// 1
// Создайте объект city1 (let city1 = {}), укажите у него свойства name (название города, строка) 
//со значением «ГородN» и population (населенность города, число) со значением 10 млн.
// Создайте объект city2 через нотацию {name: "ГородM", population: 1e6}.
// Создайте у объектов city1 и city2 методы getName(), которые вернут соответствующие названия городов
// Создайте методы exportStr() у каждого из объектов. Этот метод должен возвращать информацию о городе в 
//формате «name=ГородN\npopulation=10000000\n». Для второго города будет строка со своими значениями.
// Создайте глобальную функцию getObj(), которая возвращает this. А у каждого из объектов city1 или city2 
//метод getCity, который ссылается на getObj. Проверьте работу метода. Примечание: к объекту вызова можно обратиться через this.

// let city1={ 
//       name:"ГородN", 
//       populetion: "10 миллионов", 
//   getCity(){ 
//       return getObj(); 
//   }, 

//      }; 
//   let city2={ 
//       name:"ГородM", 
//       populetion:1e6, 
//   getCity(){ 
//       return getObj(); 
//   }, 

//   // }; 
// function GetName(){ 
//     return this.name 

// }; 
// city1.GetName=GetName; 
// city2.GetName=GetName; 

// console.log(city1.GetName()) 
// console.log(city2.GetName()) 

// function ExportStr(){ 
//     return name=${this.name}\npopulation=${this.populetion}\n; 
//     }; 
// city1.ExportStr=ExportStr; 
// city2.ExportStr=ExportStr; 
// console.log(city1.ExportStr()) 
// console.log(city2.ExportStr()) 

// // function GetObj(){ 
// //     return this; 
// // }; 
// // city1.getcity=GetObj; 
// // city2.getcity=GetObj; 
// // console.log(city1.GetObj()); 

// function getObj(){ 
//     return this; 
// }



// let city1={ 
//     name:"ГородN", 
//     populetion: "10 миллионов", 
// getCity(){ 
//     return getObj(); 
// }, 

//    }; 
// let city2={ 
//     name:"ГородM", 
//     populetion:1e6, 
// getCity(){ 
//     return getObj(); 
// }, 

// }; 
// function GetName(){ 
//     return this.name 

// }; 
// city1.GetName=GetName; 
// city2.GetName=GetName; 

// console.log(city1.GetName()) 
// console.log(city2.GetName()) 

// function ExportStr(){ 
//     return name=${this.name}\npopulation=${this.populetion}\n; 
//     }; 
// city1.ExportStr=ExportStr; 
// city2.ExportStr=ExportStr; 
// console.log(city1.ExportStr()) 
// console.log(city2.ExportStr()) 

// // function GetObj(){ 
// //     return this; 
// // }; 
// // city1.getcity=GetObj; 
// // city2.getcity=GetObj; 
// // console.log(city1.GetObj()); 

// function getObj(){ 
//     return this; 
// }

// function getObj() {
//   return this;
// };


// let city1 = {
//   name: '«ГородN»',
//   population: 10e6,
//   getName() {
//     return this.name
//   },
//   exportStr() {
//     return `name; ${ГородN}\npopulation: ${10000000}\n»`
//   },
//   getCity () {
//     return getObj()
//   }

// };

// let city2 = {
//   name: '«ГородN»',
//   population: 10e6,
//   getName() {
//     return this.name
//   },
//   exportStr() {
//     return `name; ${ГородN}\npopulation: ${10000000}\n»`
//   },
// };
// city1.name = getName;
// city2.getName = getName;
// console.log(city1.getName());


//Cоздать объект obj, с методами method1(), method2() и method3(). В методе method3() 
//должна возвращаться строка «метод3». 
//Сделайте так, чтобы было возможно выполнение кода obj.method1().method2().method3().
// const obj = {
//     method1: function() {
//         return this;
//     },
//     method2: function () {
//       return this; 
//     },
//     method3: function() {
//         return `«метод3»`;
//     },

// };
// console.log (obj.method1().method2().method3());

//Создайте структуру с именем train, 
//содержащую поля: название пункта назначения, номер поезда, время отправления.
//Ввести данные в массив из пяти элементов типа train, 
//упорядочить элементы по номерам поездов. 
//Добавить возможность вывода информации о поезде, номер которого введен пользователем.
// Добавить возможность сортировки массив по пункту назначения, 
//причем поезда с одинаковыми пунктами назначения должны быть 
//упорядочены по времени отправления.


// function Train(name, punkt, number, time,) {
//   this.name = name;
//   this.punkt = punkt;
//   this.number = number;
//   this.time = time;
//   this.showInfoAboutTrain= function() {
//       return `name:${this.name} \ npunkt: ${this.punkt}\nTime: ${this.time}`
//     };

// }
// const train1 = new Train("скоростной", "Brest", 356, 15.45)
// const train2 = new Train("скоростной", "Минск", 756, 11.45)
// const train3 = new Train("купе", "Питер", 789, 18.45)
// const train4 = new Train("плацкарт", "Москва", 777, 15.00)
// const train5 = new Train("скоростной", 'Brest', 785, 22.45)
// const train6 = new Train("купе", 'Pinsk', 552, 15.03)
// let vseTrain = [train1, train2, train3, train4, train5];
// vseTrain = vseTrain.sort((train1, train2) => {
//   if (train1.number > train2.number) {
//       return 1;
//   }
//   if (train1.number < train2.number) {
//       return -1;
//   }
//   if (train1.number == train2.number) {
//       return 0;
//   }
// });
// console.log(vseTrain);
// let n=prompt('введите номер поезда, для получения информации');
// const findTrains =  vseTrain.find(train1 => train1.number == n)?.showInfoAboutTrain() ?? 'not found!';  
// console.log(findTrains);



// сколкько уникальных чисел содержиться 
// сколько повторяющихся

// let arr = [1,2,3,5,5,5,5,5,8,6,3,8,7,4,5,];
// let unicum = new Set(arr);
// console.log(unicum.size);
// console.log(arr.length-unicum.size); //не правильно считает

// Описать объект пердоставляющий треугольник
// 

// 13/06/2022

// function Treugolnik(a, b, c, ) {
//   this.a = a;
//   this.b = b;
//   this.c = c;
//   this.istreangle = function(){
//     return !!this.a && !!this.b && !!this.b && this.a+this.b>this.c;
//   }
//   Object.defineProperty(this, 'perimetr',{
//     get: function(){
//       return this.a + this.b + this.c
//     },
//     configurable: true
//   })
// };
// const triangl = new Treugolnik(10,1,7); // создал новую const в которую положил конструктор

// console.log(triangl.istreangle());
// console.log(triangl.perimetr);