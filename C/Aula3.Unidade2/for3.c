#include<stdio.h>
#include<locale.h>

int main(){
    setlocale(LC_ALL, "Portuguese");
        int parar_em = 31;
        for (int i = 0; i < 100; i++)
        {
            if (i == parar_em)
            {
                break;
            }
            printf("\n %d", i);
        }
        
}