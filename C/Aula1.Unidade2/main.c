#include <stdio.h>
#include <locale.h>

int main(){

setlocale(LC_ALL, "Portuguese"); //habilita a acentua��o para o portugu�s. Necess�rio reabrir com codifica��o ISO 8859-1.

    float orcamento;
    printf("\n Digite o valor do or�amento para a viagem \n");
    scanf("%f", &orcamento);
    if(orcamento>=10000){
        printf("\n Jo�o e Maria possuem or�amento para uma viagem internacional.");
    } else {
        printf("\n Jo�o e Maria ir�o optar por uma viagem nacional.");
    }

    return 0;
}