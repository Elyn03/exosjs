class Personnage {

    constructor(name, sante) {
      this.name = name;
      this.sante = sante;
    }

    lose() {
        let l = this.sante --
        return l
    }
    
}

class Taxi {

    constructor(radio, feux, changement) {
        this.radio = radio;
        this.feux = feux;
        this.changement = changement;
    }

    getRandomInt() {
        return Math.floor(Math.random() * 5);
    }

    theMusic () {
        let l = this.getRandomInt()
        return this.radio[l]
    }

    changeTaxi() {
        let c = this.changement ++
        return c
    }
}

class Music {

    constructor(music1, music2, music3, music4, music5) {
        this.music1 = music1;
        this.music2 = music2;
        this.music3 = music3;
        this.music4 = music4;
        this.music5 = music5;
    }
}

music = [
    "Anissa - Wejdene",
    "Ensemble - Goldman",
    "Mirage - Pokora",
    "On - Joyce",
    "Changement - Orelsan",
]

function goingHome() {
    const p = new Personnage("John", 10);
    const m = new Music("Anissa - Wejdene", "Ensemble - Goldman", "Mirage - Pokora", "On - Joyce", "Changement - Orelsan",);
    const t = new Taxi(music, 30, 0);
    
    console.log("=>", p.name, "asks a taxi to take his home");

    for (let i = 1; i <= 30; i++) {
        mu = t.theMusic()
        t.feux --
        if (mu === "Anissa - Wejdene") {
            p.lose()
            if (p.sante === 0) {
                console.log("Musique joué :", mu, "et nombre de feux restant :", t.feux);
                console.log(p.name, "a explosé !");
                break
            }
            t.changeTaxi()
        }
        console.log("Musique joué :", mu, "et nombre de feux restant :", t.feux);
    }
    if (p.sante != 0) {
        console.log(p.name, "est bien arrivé à destination avec", t.changement, "changements de taxi.")
    }
    
    return "=> fin"
}

console.log(goingHome())

