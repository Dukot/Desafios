#include <stdio.h>
#include <locale.h>


int main(void) {

setlocale(LC_ALL, "Portuguese");

  float nota_final;
  
  printf("\nInforme a nota do aluno: ");
  scanf("%f", &nota_final);

  if (nota_final>=60)
  {
    printf("\nAprovado.");
  } else
      if (nota_final>=50)
      {
        printf("\nAluno em Recuper��o.");
      } else {
        printf("\nReprovado.");
      }
  
  return 0;
}