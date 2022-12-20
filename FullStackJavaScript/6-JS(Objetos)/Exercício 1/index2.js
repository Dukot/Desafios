/*
    Faremos um aplicativo que fará o "mapeamento de velocidade" de uma espaçonave.

    Neste aplicativo vamos cadastrar uma espaçonave com seu "nome", "tipo" e a "velocidade máxima" que esta nave pode atingir para que não entre em combustão.

    1. A Nave deve partir da velocidade 0km/s

    2. Menu deve ser exibido para o usuário perguntando se ele quer "acelerar" ou "parar" a nave.
        *Se ele quiser parar , uma mensagem deve ser exibida com as características da nave(nome e tipo) e em que velocidade ele estava.

        *Se ele quiser acelerar, deve ser exibido um prompt para que ele informe quanto ele quer acelerar e este valor será incrementado na velocidade.
    
    3. Quando a velocidade for incrementada, deve se fazer uma verificação para ver se a espaçonave está acima da velocidade máxima dela.
        *Se ela estiver, uma mensagem deve ser exibida informando a velocidade da nave e a velocidade máxima permitida.
*/

/*
    Para resolver estes problemas precisaremos:

    - Exibir um prompt para o nome da nave
    - Exibir um prompt para o tipo da nave
    - Exibir um prompt para a velocidade máxima desta nave
    - Exibir um prompt perguntando se o usuário quer acelerar ou parar
    - Se ele quiser parar, vamos exibir a mensagem final
        - Se ele quiser acelerar, precisamos de um prompt para que o usuário informe o quanto quer acelerar
        - Exibir uma mensagem de alerta quando a velocidade máxima for ultrapassada
    - Criar um objeto para a nave    

    PS: USE FUNÇÕES/ MÉTODOS À VONTADE
*/


let spaceship = {
    velocity: 0,
    speedUp: function(acceleration) {
        this.velocity += acceleration
    }
}

function registerSpaceship() {
    spaceship.name = prompt("Qual o nome da nave? ")
    spaceship.type = prompt("Qual o tipo da nave? ")
    spaceship.maxVelocity = Number(prompt("Qual a velocidade máxima da nave? "))
}

function stopSpaceship() {
    alert("Nave: " + spaceship.name +
        "\nTipo: " + spaceship.type +
        "\nVelocidade Final: " + spaceship.velocity)
    spaceship.velocity = 0
}

function acelerateSpaceship() {
    let acceleration = Number(prompt("Quanto você deseja acelerar? "))
    spaceship.speedUp(acceleration)
    if (spaceship.velocity > spaceship.maxVelocity) {
        alert("Velocidade atual: " + spaceship.velocity +
            "Velocidade máxima: " + spaceship.maxVelocity + "km/s" +
            "\nVelocidade Máxima ultrapassada! PERIGO!")
    }
}

function showMenu() {
    let chosenOption
    do {
        chosenOption = prompt("Você deseja:\n1- Acelerar.\n2- Parar.")
        switch (chosenOption) {
            case "1":
                acelerateSpaceship()
                break;
            case "2":
                stopSpaceship()
                break;
            default:
                alert("Opção inválida")
        }
    } while (chosenOption != "2");
}

registerSpaceship()
showMenu()