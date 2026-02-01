#include <stdio.h>
#include <math.h>

int main() {
    int arr[3];
    printf("Enter 3 numbers: ");
    for(int i=0; i<3; i++) {
        scanf("%d", &arr[i]);
    }
    int greater = math.max(arr);
    printf("Greater number: %d\n", greater);
    return 0;
}