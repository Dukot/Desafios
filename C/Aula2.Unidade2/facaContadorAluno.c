#include <stdio.h>
#include <locale.h>

int main(void){

    setlocale(LC_ALL, "Portuguese");

    char parar;
    float nota;
    do {
        printf("\n Digite a nota final do aluno (m�nimo: 0, m�ximo: 10): ");
        scanf("%f", &nota);
    } while (nota < 0 || nota > 10);
    
    return 0;
}