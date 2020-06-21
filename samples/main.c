#include <stdio.h>
#include <stdlib.h>

int main() {
    char firstname[20], lastname[20];

    printf("Ingrese su primer nombre: ");
    scanf("%s", firstname);
    printf("Ingrese su segundo nombre: ");
    scanf("%s", lastname);

    printf("Su nombre completo es %s %s", firstname, lastname);

    return 0;
}
