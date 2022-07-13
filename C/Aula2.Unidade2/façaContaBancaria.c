#include <stdio.h>
#include <locale.h>
int main() {
    setlocale(LC_ALL, "Portuguese");

    float soma=0;
    float valor;
    int opcao;

    do {
        printf("\n M E N U  D E  O P Ç Õ E S");
        printf("\n 1. Depósito");
        printf("\n 2. Saque");
        printf("\n 3. Saldo");
        printf("\n 4. Sair");
        printf("\n Informe a opção: ");
        scanf("%d", &opcao);

        switch (opcao) {
            case 1:
                printf("\n Informe o valor: ");
            scanf("%f", &valor);
            soma+=valor;
            break;

            case 2:
                printf("\n Informe o valor: ");
            scanf("%f", &valor);
            soma -=valor;
            break;

            case 3:
                printf("\n Saldo atual igual à R$ %.2f", soma);
            break;

            case 4:
                printf("\n Saindo...");
            break;

            default:
                printf("\n Opção inválida.");
        }

    } while (opcao != 4);
        printf("\n \n Fim das operações!"); 
    return 0;

}