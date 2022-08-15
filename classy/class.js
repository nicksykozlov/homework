//создать класс имеющий марку, число цилинров, мощность.
// Определить конструктор и функцию печати. Создать производный класс - грузоввики, имеющий грузоподьемность кузова
// Определить конструктор, функции печати. Определить функции переназначение марки и грузоподьемности 

// class Auto {

//     constructor(marca, cilindr, power) {
//         this.marka = marca;
//         this.cilindr = cilindr;
//         this.power = power;

//     }

//     print() {
//         console.log(this.marka, this.cilindr, this.power);
//     }

// };

// class Gruzovik extends Auto {
//     constructor(marca, cilindr, power, cargo) {
//         super(marca, cilindr, power);
//         this.cargo=cargo;
                   
//     }
//     print() {
//         console.log(this.marka, this.cilindr, this.power, this.cargo);
//     }
// }
// let dusAuto = new Auto("VW", "10", "200");
// dusAuto.print();

// let gruzovik = new Gruzovik( "VW", "10", "200", "3500")
// gruzovik.print();

// function User(name, age, bally) {
//     this.name = name;
//     this.age = age;
//     this.bally = bally;
//   }
  
//   let user = new User("Вася", "12", "100");
//   console.log(user);
// class User {

//     constructor(name, age) {//методы 
//       this.name = name;
//       this.age = age;
//     }
  
//     sayHi() {//функция 
//       console.log(this.name, this.age);
//     }
  
//   }
  
//   // Использование:
//   let user = new User("Иван", "25");
//   user.sayHi();

//Класс Clock написан в функциональном стиле. Перепишите его, используя современный синтаксис классов.
// class Clock {
//     constructor({ template }) {
//       this.template = template;
//     }
  
//     render() {
//       let date = new Date();
  
//       let hours = date.getHours();
//       if (hours < 10) hours = '0' + hours;
  
//       let mins = date.getMinutes();
//       if (mins < 10) mins = '0' + mins;
  
//       let secs = date.getSeconds();
//       if (secs < 10) secs = '0' + secs;
  
//       let output = this.template
//         .replace('h', hours)
//         .replace('m', mins)
//         .replace('s', secs);
  
//       console.log(output);
//     }
  
//     stop() {
//       clearInterval(this.timer);
//     }
  
//     start() {
//       this.render();
//       this.timer = setInterval(() => this.render(), 1000);
//     }
//   }
  
  
//   let clock = new Clock({template: 'h:m:s'});
//   clock.start();


// дз

 // Реализуйте функции конструктор для Student и Aspirant, аспирант отличается от студента наличием некой
        // научной работы.
        // Student содержит свойства:
        // firstName
        // lastName
        // group
        // averageMark (содержащую среднюю оценку).

        // Aspirant имеет дополнительное свойство work

        // Создать метод getScholarship() для Student, который возвращает сумму стипендии. 
        //Если средняя оценка студента больше или равна 5, то сумма 100, иначе 80.
        // Переопределить этот метод в Aspirant. Если средняя оценка аспиранта равна 5, то сумма 200, иначе 180.
        // Создать несколько объектов типа Student и Aspirant. Создать массив содержащий объекты Student и Aspirant. 
        //Вызвать метод getScholarship() для каждого элемента массива.

        class Student {
            constructor(firstName, lastName, group, averageMark) {
                this.firstName = firstName;
                this.lastName = lastName;
                this.group = group;
                this.averageMark = averageMark;
            }
            getScholarship() {
                return this.averageMark === 5 ? 100 : 80;
            }

        }
        class Aspirant extends Student {
            constructor(firstName, lastName, group, averageMark, work) {
                super(firstName, lastName, group, averageMark);
                this.work = work;
            }
            getScholarship() {
                return super.getScholarship() + 100;
            }
        }
        const people = 
        [new Student('Nadin', 'Fomina', 'A5', 5),
        new Student('Nikolai', 'Kozlov', 'C3', 4),
        new Student('Alla', 'Fox', 'C3', 5),
        new Aspirant('Alex', 'Fomin', 'B9', 5, 'Guru'),
        new Aspirant('Olga', 'Lissabon', 'D3', 3, 'Midle'), ];
       

     people.forEach(people => console.log(`${people.firstName} получит стипендию в размере  ${ people.getScholarship()} `));

