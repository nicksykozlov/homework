//создать класс имеющий марку, число цилинров, мощность.
// Определить конструктор и функцию печати. Создать производный класс - грузоввики, имеющий грузоподьемность кузова
// Определить конструктор, функции печати. Определить функции переназначение марки и грузоподьемности 

class Auto {

    constructor(marca, cilindr, power) {
        this.marka = marca;
        this.cilindr = cilindr;
        this.power = power;

    }

    print() {
        console.log(this.marka, this.cilindr, this.power);
    }

};

class Gruzovik extends Auto {
    constructor(marca, cilindr, power, cargo) {
        super(marca, cilindr, power);
        this.cargo=cargo;
                   
    }
    print() {
        console.log(this.marka, this.cilindr, this.power, this.cargo);
    }
}
let dusAuto = new Auto("VW", "10", "200");
dusAuto.print();

let gruzovik = new Gruzovik( "VW", "10", "200", "3500")
gruzovik.print();