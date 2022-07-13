#include <stdio.h>
#include <locale.h>

int main(void){

setlocale(LC_ALL, "Portuguese");

    char para;
    float nota;
    printf("\n Digite a nota final do aluno: ");
    scanf("%f", &nota);
    while (nota < 0 || nota > 10)
    {
        printf("\n Nota inválida! Digite a nota final do aluno: ");
        scanf("%f", &nota);
    }

    return 0;    
}