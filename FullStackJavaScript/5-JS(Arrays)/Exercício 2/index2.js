const hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
];

/* Com base neste array, nós queremos:
    1. Filtrar o nome das naves que tem mais de 9 tripulantes
    2. informar o número da plataforma em que está a primeira nave que ainda está com engate pendente.
        2.1 Utilize a função findIndex, que é bem parecida com o find, mas retorna o índice de um filtro em vez do elemento do Array
    3. Destacar o nome de todas as naves colando-as em caixa alta e exibindo.
    4. Exibir um alerta com todas estas informações.
 */

let filterSpaceships = hitchedSpaceships.findIndex(nameSpaceships => { return nameSpaceships[1] > 9 }).map(nameSpaceships => { return nameSpaceships[0] })

let ongoingHitchPLatform = hitchedSpaceships.findIndex(spaceship => {
    return spaceship[2] == false
})

let highlightedSpaceships = hitchedSpaceships.map(spaceship => {
    return spaceship[0].toUpperCase()
})

let message = "Espaçonaves com mais de 9 tripulantes: " + filterSpaceships.join(", ")
message += "\nPlataforma com processo de engate: " + (ongoingHitchPLatform + 1)
message += "\nEspaçonaves destacadas: " + highlightedSpaceships.join(", ")

alert(message)