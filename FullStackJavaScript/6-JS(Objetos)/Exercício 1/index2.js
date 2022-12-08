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

function cadastroSpaceship() {
    spaceship.name = prompt("Qual o nome da nave? ")
    spaceship.type = prompt("Qual o tipo da nave? ")
    spaceship.maxVelocity = prompt("Qual a velocidade máxima da nave? ")
}