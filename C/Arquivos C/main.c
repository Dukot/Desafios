#include<stdio.h>
int main(){
    int idade1=0;
    int idade2=0;
    int resultado=0;
    printf("Digite a primeira idade: \n");
    scanf("%d", &idade1);
    printf("Digite a segunda idade: \n");
    scanf("%d", &idade2);
    resultado = idade1 + idade2;
    printf("Resultado = %d\n", resultado);
}