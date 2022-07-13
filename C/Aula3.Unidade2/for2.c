#include <stdio.h>
#include <locale.h>

int main(){
setlocale(LC_ALL, "Portuguese");
    int contador;
    printf("\n Digite um número para a contagem regressiva: ");
    scanf("%d", &contador);
    for (contador; contador >= 1; contador --){
        printf("\n %d", contador);
    }
    return 0;
}