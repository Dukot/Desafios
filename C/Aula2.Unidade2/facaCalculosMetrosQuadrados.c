#include <stdio.h>
#include <locale.h>

int main(){

setlocale(LC_ALL, "Portuguese");

    float metragem1, metragem2, resultado;
    int resp;
    metragem1 = 0;
    metragem2 = 0;
    resultado = 0;
    printf("\n C Á L C U L O  D E  M E T R O S  Q U A D R A D O S");
    do {
        printf("\n \n Digite a primeira metragem do terreno: ");
        scanf("%f", &metragem1);
        printf("\n Digite a segunda metragem do terreno: ");
        scanf("%f", &metragem2);
        resultado = metragem1 * metragem2;
        printf("\n \n O terreno tem = %.2f m2", resultado);
        printf("\n \n Digite 1 para continuar ou 2 para sair: ");
        scanf("%d", &resp);
        } while (resp==1);
        return 0;
}