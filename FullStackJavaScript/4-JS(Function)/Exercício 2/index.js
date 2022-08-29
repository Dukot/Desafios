/*
1- Considerem que a nave está a 150km/s.

2- Crie uma função para desacelerar 20km/s a cada segundo.
obs: Considere que, no código, que cada iteração de um laço de repetição é um segundo.

3- Está função será uma HOF e também deve imprimir cada atualização que houver na velocidade da nave.
    obs: Está impressão deve ser feita por meio da callback que essa função receberá.

4- Ao final, exiba uma mensagem informando que a nave está parada e as comportas podem ser abertas.
*/

let spaceshipVelocity = 150

function slowDown(velocity, printer) {
    let deceleration = 20

    while (velocity >= 0) {
        printer(velocity)
        velocity -= deceleration
    }
    alert("Nave parada. As comportas podem ser abertas.")
};

slowDown(spaceshipVelocity, function(velocity) {
    console.log("velocidade atual: " + velocity)
});