#include<stdio.h>
#include<locale.h>

int main(){
    setlocale(LC_ALL, "Portuguese");

    int linha, coluna;
    int matriz[3][3];
    for (linha = 0; linha < 3; linha++)
    {
        for (coluna = 0; coluna < 3; coluna++)
        {
        printf("\n Digitar os valores da matriz para [linha %d, coluna %d]: ", linha + 1, coluna + 1);
        scanf("%d", &matriz[linha][coluna]);
        }
    }
    printf("\n \n Veja a sua Matriz\n");
    for ( linha = 0; linha <= 2; linha++)
    {
        for( coluna = 0; coluna < 3; coluna++)
        {
            printf("%d\t", matriz[linha][coluna]);
        }
        printf("\n");
    }
    return 0;
}