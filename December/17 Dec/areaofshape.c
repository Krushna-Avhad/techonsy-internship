#include <stdio.h>

float areaofcircle(float r) {
    float carea = 3.14159 * r * r;
    return carea;
}

float areaofrectangle(float l, float b) {
    float rarea = l * b;
    return rarea;
}

float areaoftriangel(float h, float b) {
    float tarea = 0.5 * b * h; 
    return tarea;
}

int main() {
    float r, l, b, h;
    printf("Enter radius of circle: ");
    scanf("%f", &r);
    printf("Area of Circle: %f\n", areaofcircle(r));
    printf("Enter length and breadth of rectangle: ");
    scanf("%f %f", &l, &b);
    printf("Area of Rectangle: %f\n", areaofrectangle(l, b));
    printf("Enter height and base of triangle: ");
    scanf("%f %f", &h, &b);
    printf("Area of Triangle: %f\n", areaoftriangel(h, b));
}