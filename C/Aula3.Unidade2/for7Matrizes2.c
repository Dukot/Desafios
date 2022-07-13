#include <stdio.h>
#include <locale.h>

int main(){
    setlocale(LC_ALL, "Portuguese");

    int linha, coluna;
    int matriz[3][3];
    int eh_diagonal = 1;

    for (linha = 0; linha < 3; linha++)
    {
        for( coluna = 0; coluna < 3; coluna++)
        {
            printf("\n Digitar os valores da matriz para [linha %d, coluna %d]: ", linha + 1, coluna + 1);
            scanf("%d", &matriz[linha][coluna]);
        }        
    }
    for( linha = 0; linha < 3; linha++)
    {
        for ( coluna = 0; coluna < 3; coluna++)
        {
            if (coluna != linha && matriz[linha][coluna] != 0)
            {
                    eh_diagonal = 0;
                    
            } 
            printf("%d\t", matriz[linha][coluna]);                       
        }      
        printf("\n");  
    }
    if (eh_diagonal = 1)
    {
        printf("\n\n Sua matriz é diagonal!");
    } else
    {
        printf("\n\n Sua matriz não é diagonal!");
    }
    return 0;
        
}