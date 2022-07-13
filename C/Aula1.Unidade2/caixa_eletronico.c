#include <stdio.h>
#include <locale.h>

int main(){

setlocale(LC_ALL, "Portuguese"); //habilita a acentuação para o português.

    char x;
    float valor, desc, total;
    printf("\nDigite o valor da compra: ");
    scanf("%f", &valor);
    printf("\nDigite a letra que respresenta o seu desconto de acordo com a cor: ");
    printf("\na. Azul");
    printf("\nv. Vermelho");
    printf("\nb. Branco");
    printf("\nDigite a sua opção: ");
    scanf("%s", &x);
    switch (x){
    case 'a':
        printf("\nVocê escolheu a cor azul, seu desconto será de 30 por cento.");
        desc=30;
            break;

    case 'v':
        printf("\nVocê escolheu a cor vermelha, seu desconto será de 20 por cento.");
        desc=20;
            break;

    case 'b':
        printf("\nVocê escolheu a cor branco, seu desconto será de 10 por cento.");
        desc=10;
            break;

    default:
        printf("\nOpção inválida, não será concedido desconto.\n");
        desc=0;
    }
    total = valor - (valor * desc / 100);
    printf("\nO valor da sua compra é de R$ %.2f\n", total);

    return 0;
}