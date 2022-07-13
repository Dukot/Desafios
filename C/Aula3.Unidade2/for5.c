#include<stdio.h>
#include<locale.h>

int main(){
    setlocale(LC_ALL, "Portuguese");
    for (int i = 1; i < 30; i++)
    {
        if (i % 2 == 0)
        {
            continue;
        }
        printf("\n %d", i); 
    }
    
}