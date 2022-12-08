/*
Neste exercício vamos criar um programa de bordo para nossa nave que receba o nome da nave.

A velocidade da nave deve ser inicialmente 0 e um menu deve ser exibido para que o usuário escolha entre as seguintes opções:

1. Acelerar a nave em 5km/s

2. Desacelerar em 5km/s
    Por mais que desacelere, a nave não pode ter uma velocidade menor que 0km/s

3. Imprimir dados de bordo
    Deve ser impresso o nome da nave com sua velocidade atual

4. Sair do programa.
    Caso a pessoa escolha um número que não está na lista, é necessário exibir o menu novamente até que seja escolhida uma opção válida.
    
Para fazer esse app precisamos:

    1. Criar uma função que exiba o menu e valide a opção escolhida.
    2. Uma função para cada ação do menu de acelerar.
    3. Encerrar o app somente quando digitar para sair.
*/
let spaceshipName = prompt("Digite o nome da nave: ")

let spaceshipVelocity = 0

let chosenOption

function showMenu() {
    let option
    while (option != "1" && option != "2" && option != "3" && option != "4") {
        option = prompt("O que deseja fazer?\n" +
            "1 - Acelerar a nave em 5km/s\n" +
            "2 - Desacelerar a nave em 5km/s\n" +
            "3 - Imprimir dados de bordo\n" +
            "4 - Sair do programa")
    }
    return option
}

const speedUp = velocity => {
    let newVelocity = velocity + 5
    return newVelocity
}

function slowDown(velocity) {
    let newVelocity = velocity - 5
    if (newVelocity < 0) {
        newVelocity = 0
    }
    return newVelocity
}

function printSpaceshipBoardData(name, velocity) {
    alert("Espaçonave: " + name + "\nvelocidade: " + velocity + "km/s")
}

do {
    chosenOption = showMenu()
    switch (chosenOption) {
        case "1":
            spaceshipVelocity = speedUp(spaceshipVelocity)
            break;
        case "2":
            spaceshipVelocity = slowDown(spaceshipVelocity)
            break;
        case "3":
            printSpaceshipBoardData(spaceshipName, spaceshipVelocity)
            break;
        default:
            alert("Encerrando programa de bordo")
            break;
    }
} while (chosenOption != "4")