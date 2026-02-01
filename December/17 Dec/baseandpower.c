#include <stdio.h>
#include <math.h>

int main() {
    int base, power, result;
    printf("Enter Base: ");
    scanf("%d", &base);
    printf("Enter Power: ");
    scanf("%d", &power);
    result = pow(base, power);
    printf("Result: %d\n", result);
}