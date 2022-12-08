/*
1 - Filtrar o nome das naves que tem mais de 9 tripulantes

2 - Informar o número da plataforma em que está a primeira nave que ainda está com engate pendente
    2.1 - Utilize a função FINDINDEX, que é bem parecida com o FIND, mas retorna o índice de um filtro em vez do elemento do Array

3 - Destacar o nome de todas as naves colocando-as em caixa alta e exibindo

4 - Exibir um alerta com todos estas informações
*/


const hitchedSpaceship = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]

let crewGreaterThan9 = hitchedSpaceship.filter(spaceship => {
    return spaceship[1] > 9
}).map(spaceship => {
    return spaceship[0]
})

let ongoingHitchPlataform = hitchedSpaceship.findIndex(spaceship => {
    return spaceship[2] == false
})

let highlightedSpaceship = hitchedSpaceship.map(spaceship => {
    return spaceship[0].toUpperCase()
})

let message = "Espaçonaves com mais de 9 tripulantes: " + crewGreaterThan9.join(", ")
message += "\nPlataform com processo de engate: " + (ongoingHitchPlataform + 1)
message += "\nEspaçonaves destacadas: " + highlightedSpaceship.join(", ")

alert(message)