class Ninja {
    constructor(nombre) {
        this.nombre = nombre;
        this.salud = 100;  // Valor inicial de salud
        this.velocidad = 3;  // Valor predeterminado de velocidad
        this.fuerza = 3;  // Valor predeterminado de fuerza
    }

    sayName() {
        console.log(`Nombre del Ninja: ${this.nombre}`);
    }

    showStats() {
        console.log(`Nombre: ${this.nombre}, Fuerza: ${this.fuerza}, Velocidad: ${this.velocidad}, Salud: ${this.salud}`);
    }

    drinkSake() {
        this.salud += 10;
        console.log(`${this.nombre} ha bebido sake y ha aumentado su salud a ${this.salud}`);
    }
}

class Sensei extends Ninja {
    constructor(nombre) {
        super(nombre);
        this.salud = 200;
        this.velocidad = 10;
        this.fuerza = 10;
        this.sabiduría = 10;
    }

    speakWisdom() {
        this.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
    }
}


const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();  
// -> "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
superSensei.showStats();  
// -> "Nombre: Master Splinter, Salud: 210, Velocidad: 10, Fuerza: 10"
