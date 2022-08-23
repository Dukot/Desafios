let nameSuperHero = prompt("Qual o nome do seu super herói favorito?")

let invertedName = ""

for (let i = nameSuperHero.length - 1; i >= 0; --i) {
    if (nameSuperHero[i] == "e") {
        break
    }
    invertedName += nameSuperHero[i]
}

alert("Novo Super Herói criado: " + invertedName)