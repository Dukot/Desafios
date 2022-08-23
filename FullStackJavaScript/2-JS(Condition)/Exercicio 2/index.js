let namePilot = prompt("Qual o nome do Piloto?")

let speedNave = 0

let newSpeedNave = prompt("A qual velocidade você gostaria de acelerar a nave?")

let confirmSpeed = confirm("Estamos acelerando para " + newSpeedNave + "km/s")

if (confirmSpeed) {
    speedNave = newSpeedNave
}

if (speedNave <= 0) {
    alert("Nave está parada. Considere partir e aumentar a velocidade.")
} else if (speedNave < 40) {
    alert("Você está devagar. Podemos aumentar mais.")
} else if (speedNave < 80) {
    alert("Parece uma boa velocidade para manter.")
} else if (speedNave < 100) {
    alert("Velocidade alta. Considere diminuir.")
} else {
    alert("Velocidade perigosa. Controle automático forçado.")
}

alert("Piloto: " + namePilot + "\nVelocidade: " + speedNave + "km/s")