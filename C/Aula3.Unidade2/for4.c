#include<stdio.h>
#include<locale.h>

#define VET_TAM 5

int main(){
setlocale(LC_ALL, "Portuguese");
    int vetor[VET_TAM];
    int num, i = 0, achou=0;

            //Preencher o Vetor
    for (int i = 0; i < VET_TAM; i++)
    {
        printf("\n Entre com um n�mero: ");
        scanf("%d", &vetor[i]);
    }

    printf("\n \n Informe o n�mero a ser encontrado: ");
    scanf("%d", &num);            

        while (i < VET_TAM)
        {
            if (vetor[i] == num){
                achou = 1;
                break;
            }
            i++;
        }
    if(achou == 1){
        printf("\n O n�mero %d foi encontrado na posi��o %d do vetor", num, i);
    } else {
        printf("\n O n�mero %d n�o foi encontrado no vetor", num);
    }
    return 0;        
}