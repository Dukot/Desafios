/*
Temos uma estação que tem uma lista de naves engatadas.
Cada nave possui nome, quantidade de tripulantes, uma informação se está ou não engatada e outra informando se as portas de entrada estão abertas.
Para gerenciar esses dados, em menu deve ser exibido com as seguintes opções:

1- Realizar engate
    *Nesta opção deve ser possível cadastrar uma nave com nome e número de tripulantes.
    *Após o cadastro, a nave pode ser engatada. Quando uma nave é engatada, suas portas também são abertas. Então, além de alterar a propriedade da nave que informa se ela está engatada, altere também a propriedade que informa se as portas de entrada estão abertas.

2- Imprimir naves
    *A lista de naves deve ser impressa com um alert.
    
3- Sair do programa
    *Ao clicar sair, o programa é encerrado.
    
Para esse exercício:
    Crie apenas a classe para a espaçonave
        *Esta classe deve ter o método para engatar a nave.
    Crie uma array para armazenar as espaçonaves
    O programa deve ser encerrado somente quando o usuário digitar a opção para sair.
        *Caso o usuário escolha uma opção inválida, mostra o menu novamente.            
*/

class Spaceship {
    constructor(name, crewQuantity) {
        this.name = name;
        this.crewQuantity = crewQuantity;
        this.engage = false;
        this.dor = false;
    }
    hitch() {
        this.engage = true
        this.dor = true
    }
};

function registerSpaceship() {
    let spaceshipName = prompt("Informe o nome da nave: ")
    let crewQuantity = prompt("Informe o número de tripulantes: ")
    let spaceship = new Spaceship(spaceshipName, crewQuantity)
    return spaceship
};

function showMenu() {
    let chosenOption
    while (chosenOption != "1" && chosenOption != "2" && chosenOption != "3") {
        chosenOption = prompt("O que deseja fazer?" +
            "\n1- Engatar a nave" +
            "\n2- Imprimir naves" +
            "\n3- Sair do programa")
    }
    return chosenOption
}

function printSpaceshipList(spaceships) {
    let spaceshipList = ""
    spaceships.forEach((spaceship, index) => {
        spaceshipList += (index + 1) + "- " + spaceship.name + " ( " + spaceship.crewQuantity + " tripulantes )\n"
    });
    alert(spaceshipList)
}

let spaceshipList = [];

let chosenOption

while (chosenOption != "3") {
    chosenOption = showMenu()
    switch (chosenOption) {
        case "1":
            let spaceshipToAdd = registerSpaceship()
            spaceshipToAdd.hitch()
            spaceshipList.push(spaceshipToAdd)
            break;
        case "2":
            printSpaceshipList(spaceshipList)
            break;
    }
}