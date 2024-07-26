class Ninja {
    constructor(nombre) {
        this.nombre = nombre;
        this.salud = 100;
        this.velocidad = 3;
        this.fuerza = 3;
    }

    sayName() {
        return `Ninja's name: ${this.nombre}`;
    }

    showStats() {
        return `Name: ${this.nombre}, Strength: ${this.fuerza}, Speed: ${this.velocidad}, Health: ${this.salud}`;
    }

    drinkSake() {
        this.salud += 10;
        return `${this.nombre} drank sake and gained health. Current health: ${this.salud}`;
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
        return "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.";
    }
}

document.getElementById('createNinja').addEventListener('click', () => {
    const ninja = new Ninja("Hyabusa");
    const output = document.getElementById('output');
    output.innerHTML = `<p>${ninja.sayName()}</p><p>${ninja.showStats()}</p>`;
});

document.getElementById('createSensei').addEventListener('click', () => {
    const sensei = new Sensei("Master Splinter");
    const output = document.getElementById('output');
    const wisdom = sensei.speakWisdom();
    output.innerHTML = `<p>${wisdom}</p><p>${sensei.showStats()}</p>`;
});
