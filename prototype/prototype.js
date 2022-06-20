// fetch('https://jsonplaceholder.typicode.com/todos')
// .then(res => res.json())
// .then(data => {
//     console.log(data);
//     // пишем отсюда
//     const title = data.filter(item => item.title.length < 15);
//     console.log(title);
//     const short = data.map(item => {
//         if (item.title.length > 15){
//             item.title = item.title.slice(0,12) + "...";
//         }
//         return item;
//     })
//     console.log(short);

// })

// .catch(e => {
//     console.error(e);
// })

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//         // пишем отсюда
//         const email = data.map(t => t.name + ":" + "  " + t.email);
//         console.log(email);

//         const domen = email.map(email => email.split('@').pop().split(".").shift());
//         console.log(domen);

//         const num = data.map(tel => tel.phone);
//         console.log(num);

//         const sum = num.map(user => ({}))
//         console.log(sum);

//     })

//     .catch(e => {
//         console.error(e);
//     })

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// Rabbit.prototype = {};

// alert( rabbit.eats ); // ? true Присвоение нового значения свойству Rabbit.prototype
//влияет на [[Prototype]] вновь создаваемых объектов, но не на прототип уже существующих.

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// Rabbit.prototype.eats = false;

// alert( rabbit.eats ); // ? false Объекты присваиваются по ссылке. Не создаётся копия Rabbit.prototype,
//это всегда один объект, на который ссылается и Rabbit.prototype, и [[Prototype]] объекта rabbit.
//Таким образом, когда мы изменяем этот объект по одной ссылке, изменения видны и по другой.

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// delete rabbit.eats;

// alert( rabbit.eats ); // true Операция delete применяется к свойствам конкретного объекта,
//на котором она вызвана. Здесь delete rabbit.eats пытается удалить свойство eats из объекта rabbit,
//но его там нет. Таким образом, просто ничего не произойдёт.

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// delete Rabbit.prototype.eats;

// alert( rabbit.eats ); // ? undifinded

//ДЗ
//Создайте объект shape и его наследников circle, rectangle.
// let shape = {
//   draw: function () {
//     alert("figura i wdtn"); //Oбъект shape содержит метод draw()(выводит название фигуры и ее цвет)
//   },
//   color: "rgb(204, 51, 204)", // переменную хранящую цвет.
// };

// let circle = Object.create(shape);//Oбъект circle содержит свойство radius
// circle.сircle = 2 * Math.PI;
// circle.x = 0;
// circle.y = 0;//Oбъекты circle, rectangle содержат координаты точек.


// let rectangle = Object.create(shape);//Oбъект rectangle содержит свойство хранящее длины двух его сторон
// rectangle.a = 10;
// rectangle.b = 10;
// rectangle.x = 0;
// rectangle.y = 0;//Oбъекты circle, rectangle содержат координаты точек.

// const obj = Object.assign(shape, rectangle, circle);
// const arr = Object.entries(obj); //Создать массив содержащий эти фигуры.
 //В цикле нарисовать их (вызвать метод draw).



//Реализуйте функции конструктор для Student и Aspirant,
//аспирант отличается от студента наличием некой научной работы.
//Student содержит свойства:
//firstName
//lastName
//group
//averageMark (содержащую среднюю оценку).
//Aspirant имеет дополнительное свойство work
//Создать метод getScholarship() для Student, который возвращает сумму стипендии.
//Если средняя оценка студента больше или равна 5, то сумма 100, иначе 80.
//Переопределить этот метод в Aspirant. Если средняя оценка аспиранта равна 5, то сумма 200, иначе 180.
//Создать несколько объектов типа Student и Aspirant.
//Создать массив содержащий объекты Student и Aspirant.
//Вызвать метод getScholarship() для каждого элемента массива.

// function Student(firstName, lastName, group, averageMark) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.group = group;
//   this.averageMark = averageMark;
// }
// function Aspirant(firstName, lastName, group, averageMark, work) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.group = group;
//   this.averageMark = averageMark;
//   this.work = work;
// }

// const student = new Student("Ivan", "Petrov", "B", 8);
// const aspirant = new Aspirant("Vasiliy", "Begunkov", "A", 10, "IT");

// // const sum = Object.values(student);
// // console.log(sum);

// function getScholarship(student) {
//   for (let value of Object.entries(student)) {
//     if ((averageMark[value] >= 5)) {
//       return 200;
//     } else {
//       return 100;
//     }
//   }
// }
// console.log(getScholarship(student));

// Создать метод getScholarship() для Student, который возвращает сумму стипендии.
// Если средняя оценка студента больше или равна 5, то сумма 100, иначе 80.

// let o = {
//     name: "Alice",
//     speak()
//         {
//             console.log("Hi, I'm " + this.name); //функция на вывод в конслоь
//         },
// };

// // Вызываем метод speak
// o.speak();//вызов функции

// Это функция-конструктор, которая описывает тип объекта, а потому именуется с прописной буквы
// function Student(firstName, lastName, group, averageMark) {
//       this.firstName = firstName;
//       this.lastName = lastName;
//       this.group = group;
//       this.averageMark = averageMark;
//       speak(){
//         console.log('Hi i Am' + firtsname);
//       };
//     };
// const arr = new Student ('Ivan', 'Petrov', 15, 10);
// console.log(arr);    
