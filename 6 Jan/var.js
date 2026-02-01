let age = 18;
let myname = "Krushna Avhad";
let marks = 99.9;
console.log("Name: " + myname + "<br>");
console.log("Age: " + age + "<br>");
console.log("Marks: " + marks + "<br>");
console.log("Name: " + myname + " Age: " + age + " Marks: " + marks + "<br>");

let a = 10;
let b = 20;
console.log("a + b = " + (a + b) + "<br>");
console.log("a - b = " + (a - b) + "<br>");
console.log("a * b = " + (a * b) + "<br>");
console.log("a / b = " + (a / b) + "<br>");
console.log("a % b = " + (a % b) + "<br>");

let userage = Number(prompt("Enter your age: "));
if(userage >= 18){
    console.log("You are eligible to vote.");
}
else{
    console.log("You are not eligible to vote. ");
}

// concepts covered:
// local scope (where variables are defined within a function)
// global scope (where variables are defined outside any function)
// rules of variable declaration
// snake case
// camel case
// pascal case
//let const var
// var is function scoped
// let and const are block scoped
// redeclaration is not allowed with let and const
// hoisting is allowed with var but not with let and const
// best practice is to use let and const instead of var
// operators: arithmetic(+, -, *, /, %), assignment(=, +=, -=, *=, /=, %=), comparison(==, ===, !=, !==, >, <, >=, <=), logical(&&, ||, !), string(+), conditional (ternary)
