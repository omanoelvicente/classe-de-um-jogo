class Hero {
    constructor(name, age, typeOfHero) {
        this.name = name;
        this.age  = age;
        this.typeOfHero = typeOfHero;
    }

    attack() {
        switch (this.typeOfHero) {
            case 'mago':
                return "magia";
                break;
            case 'guerreiro':   
                return "espada"
                break;
            case 'monge':
                return "artes marciais"
                break;
            case 'ninja':
                return "shuriken"
                break;
        }

    }

    message() {
        console.log(`O ${this.typeOfHero} atacou usando ${this.attack()}`);
    }
}

let hero1 = new Hero("amatzu", 37, "mago");
hero1.message();
console.log("----------------------")
let hero2 = new Hero("Kiro", 33, "guerreiro");
hero2.message();