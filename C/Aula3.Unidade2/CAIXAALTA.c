#include <stdio.h>
#include <locale.h>
#include <ctype.h>

#define NOME_TAM 30

int main(){
    setlocale(LC_ALL, "Portuguese");

    char nome[NOME_TAM];
    int i;
    printf("\n Digite o nome do(a) aluno(a): ");
    fgets(nome, NOME_TAM, stdin);
    printf("\n Nome ANTES da mudan�a: %s", nome);

    for (int i = 0; i < NOME_TAM; i++)
    {
        nome[i] =  toupper(nome[i]);
    }
    
    printf("\n Nome DEPOIS da mudan�a: %s", nome);
    return 0;
}