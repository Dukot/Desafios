#include <stdio.h>
#include <locale.h>

int main(){
setlocale(LC_ALL, "Portuguese");
    int x, y;
    for (y= 0; y <= 10; y += 2) {
        printf("\ny = %d", y);
    }
    return 0;            
}