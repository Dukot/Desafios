#include <stdio.h>
#include <locale.h>

int main(){

setlocale(LC_ALL, "Portuguese"); //habilita a acentuação para o português. Necessário reabrir com codificação ISO 8859-1.

    float orcamento;
    printf("\n Digite o valor do orçamento para a viagem \n");
    scanf("%f", &orcamento);
    if(orcamento>=10000){
        printf("\n João e Maria possuem orçamento para uma viagem internacional.");
    } else {
        printf("\n João e Maria irão optar por uma viagem nacional.");
    }

    return 0;
}