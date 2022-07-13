#include <stdio.h>
#include <locale.h>

int main(){

setlocale(LC_ALL, "Portuguese"); //habilita a acentua��o para o portugu�s.

    char x;
    float valor, desc, total;
    printf("\nDigite o valor da compra: ");
    scanf("%f", &valor);
    printf("\nDigite a letra que respresenta o seu desconto de acordo com a cor: ");
    printf("\na. Azul");
    printf("\nv. Vermelho");
    printf("\nb. Branco");
    printf("\nDigite a sua op��o: ");
    scanf("%s", &x);
    switch (x){
    case 'a':
        printf("\nVoc� escolheu a cor azul, seu desconto ser� de 30 por cento.");
        desc=30;
            break;

    case 'v':
        printf("\nVoc� escolheu a cor vermelha, seu desconto ser� de 20 por cento.");
        desc=20;
            break;

    case 'b':
        printf("\nVoc� escolheu a cor branco, seu desconto ser� de 10 por cento.");
        desc=10;
            break;

    default:
        printf("\nOp��o inv�lida, n�o ser� concedido desconto.\n");
        desc=0;
    }
    total = valor - (valor * desc / 100);
    printf("\nO valor da sua compra � de R$ %.2f\n", total);

    return 0;
}