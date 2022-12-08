/*
    Vamos criar um sistema de monitoramento de uma nave espacial.

    Logo que o sistema é iniciado, ele deve pedir os dados da nave.

    Para a nave, que for cadastrada, precisamos de:
        Nome
        Quantidade de Tripulantes
    
    Os veículos podem ser de batalha ou de transporte

    Caso seja de batalha: ele também deverá pedir quantas armas a nave tem disponíveis.

    Caso seja de transporte: o número de lugares que ela comporta

    Além disso, a nave deve ser iniciada com velocidade atual igual a 0

    Um Menu deverá ser apresentado ao usuário com as opções:
        1- Acelerar a nave
        2- Trocar a Nave
        3- Imprimir e sair

    Para acelerar a nave, é necessário pedir a aceleração

    A velocidade deve aumentar 83% da aceleração passada como parâmetro devido à taxa de desaceleração

    Para a nossa aplicação, toda aceleração tem uma taxa de desaceleração fixa de 17%
        Velocidade atual + (aceleração*(1-taxa de desaceleração)) 

    Outra importante funcionalidade é trocar de nave.

    Para trocar, todos os dados de cadastro serão solicitados novamente e a nova nave será iniciado com velocidade 0

    Na última opção, precisaremos imprimir a espaçonave e sair

    A impressão deve ser no formato:
        Nome: <nome>
        Quantidade de tripulantes: <quantidade>
        Velocidade atual: <velocidade atual>

    PS: Neste exercício, qualquer classe que for declarada deve ser separada num arquivo a parte, deixando no arquivo principal apenas a inicialização da aplicação e a chamada para as outras classes.
*/

class Spaceship {
    static get DECELERATION_RATE() {
        return 0.17
    }

    constructor(name, crewQuantity) {
        this.name = name
        this.crewQuantity = crewQuantity
    }

    speedUp(acceleration) {
        this.acceleration += acceleration * (1 - Spaceship.DECELERATION_RATE)
    }
}