class Tueur {

    constructor(name, life) {
        this.name = name;
        this.life = life;
    }

    degat(dommage) {
        let l = this.life - dommage
        return l
    }

}

class Survivant {

    constructor(name, carac) {
        this.name = name;
        this.carac = carac;
    }

}

class Caracteristiques {

    constructor(name, deadP, degatP, deadDP) {
        this.name = name;
        this.deadP = deadP;
        this.degatP = degatP;
        this.deadDP = deadDP;
    }

}

noms = ["Jean", "Pierre", "Marie", "Sarah", "Loic"]
cara = ["Samurai", "Sniper", "Archer", "Magicien", "Guerrier"]

let p1 = new Caracteristiques("Samurai", 0.5, 0.1, 0.4);
let p2 = new Caracteristiques("Sniper", 0.6, 0.1, 0.3);
let p3 = new Caracteristiques("Archer", 0.2, 0.5, 0.3);
let p4 = new Caracteristiques("Magicien", 0.2, 0.5, 0.3);
let p5 = new Caracteristiques("Guerrier", 0.8, 0.1, 0.1);

let tb = [p1, p2, p3, p4, p5]

tueur = new Tueur("Jason", 100);

function perso (tabP, tabC) {

    tab = []

    for (let i = 0; i < 5; i++) {
        tab.push([tabP[i], tabC[i]])
    }

    return tab
}

function personne(ns){
    return Math.floor(Math.random() * ns)
}

console.log(tb)

while (tueur.life > 0 && tb.length > 0) {

    let carac = personne(tb.length)
    let Survival = tb[carac]
    console.log(tb.length)

    let r = Math.random()

    console.log(Survival , r)

    if (r <= Survival.deadP) {
        console.log(tueur.name, "a tué", Survival.name)
        tb.splice(carac, 1)
    } else if (Survival.deadP <= r && r < Survival.deadP + Survival.degatP) {
        tueur.life -= 10
        console.log(Survival.name, 'a esquivé et a infligé 10 dmg.')
    } else  {
        tueur.life -= 15
        console.log(Survival.name, 'a infligé 15 dmg avant de mourir.')
        tb.splice(carac, 1)
    }

}

if (tueur.life <= 0) {
    console.log(tueur.name, "est mort, les survivants ont gagné")
} else {
    console.log("RIP à " + p1.name +" "+ p2.name +" "+ p3.name +" "+ p4.name +" "+ p5.name)
}