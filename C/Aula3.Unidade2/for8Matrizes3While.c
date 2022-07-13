#include <stdio.h>
#include <locale.h>

int main(){
    setlocale(LC_ALL, "Portuguese");

    //Matriz Inicial
    int mat[3][5] = {
        1, 1, 1, 0, -1,
        1, 1, 1, 1, 1,
        0, 0, -1, -1, -1
    };

    int opcao;
    int numVoo;
    int reservou;

    do {
        printf("\n 1 - Reservar\n 2 - Sair\n Informe a opção desejada: ");
        scanf("%d", &opcao);
        switch (opcao)
        {
        case 1:
            printf("Informe o número do voo (1-3): ");
            scanf("%d", &numVoo);
            reservou = 0;
            if(numVoo >= 1 && numVoo <= 3) {
                for (int i = 0; i < 5 && reservou == 0; i++)            
                {
                    if (mat[numVoo - 1][i] == 0)
                    {
                        reservou = 1;
                        mat[numVoo - 1][i] =1;
                    }                    
                }
                if (reservou == 1)
                {
                    printf("\n Seu voo foi reservado com suceso!");
                } else {
                    printf("\n Não há poltronas disponíveis.");
                }
                
            } else
            {
                printf("\n Opção inválida.");
            }            
            break;
        case 2:
            printf("\n Saindo...");
            break;
        default:
            printf("\n Opção inválida.");
        }
    }
    while (opcao != 2);
    return 0;
}