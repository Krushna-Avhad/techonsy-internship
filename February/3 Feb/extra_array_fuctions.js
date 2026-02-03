//map function - to create a new array by applying a function to each element
let nums = [5, 10, 15, 20, 25];
let sq = nums.map(function(value){
    return value * value;
    });
console.log(sq);

//forEach function - to iterate over each element
let marks = [23, 67, 78, 90, 54];
// marks.forEach(function(value, index){
//     console.log("The marks of student " + index + " is " + value);
// });
marks.forEach(value =>console.log(value));
let bonusmarks = marks.map(value => value + 10);
console.log(bonusmarks);

//filter function - to filter out elements based on condition
let passed = marks.filter(value => value >= 40);
console.log(passed);

//Reduce function - to reduce the array to a single value
let a = [10, 20, 30, 40, 50];
let totalbill = a.reduce((sum, value) => sum + value, 0);
console.log(totalbill);

// even and odd numbers using filter
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = numbers.filter(num => num % 2 === 0);
let oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log("Even Numbers: " + evenNumbers);
console.log("Odd Numbers: " + oddNumbers);

//even and odd numbers using reduce

// find function - to find the first element that satisfies a condition
let found = numbers.find(num => num > 5);
console.log("First number greater than 5 is: " + found);

//lenght, join, slice, indexof, push, pop, shift, unshift, filter, flat, map, reduce, revese, sort, splice, includes, values, keys

//concat function - to merge two or more arrays
let ab = [1, 2, 3];
let cd = [4, 5, 6];
let ef = [7, 8, 9];
let mergedArrayall = ab.concat(cd, ef);
let mergedArrayabcd = ab.concat(cd);
console.log(mergedArrayabcd);
console.log(mergedArrayall);

//indexOf function - to find the index of an element in an array
let fruits = ["apple", "banana", "cherry", "date"];
let index = fruits.indexOf("cherry");
console.log("Index of cherry is: " + index);

//includes function - to check if an array contains a specific element
let hasBanana = fruits.includes("banana");
let hasMango = fruits.includes("mango");
console.log("Array contains banana: " + hasBanana);
console.log("Array contains mango: " + hasMango);
console.log(ab.includes(5));

//reverse function - to reverse the order of elements in an array
let revFruits = fruits.reverse();
console.log("Reversed fruits array: " + revFruits);

//sort function - to sort the elements of an array
let unsortedNumbers = [34, 12, 5, 78, 23];
let sortedNumbers = unsortedNumbers.sort((a, b) => a - b);
console.log("Sorted numbers: " + sortedNumbers);

//all methods combined
let abc = [12, 34];
let def = [56, 78];
let concatenated = abc.concat(def);
console.log("Concatenated array: " + concatenated);

let op1 = abc.indexOf(34);
console.log("Index of 34 in abc: " + op1);

let op2 = ab.findIndex((n) => n > 56);
console.log("Index of first number greater than 56 in ab: " + op2);

console.log(abc.includes(12));
console.log(def.includes(90));
console.log(abc.reverse());
console.log(def.sort());

// slice function - to extract a portion of an array
let x = [10, 20, 30, 40, 50, 60];
let slicedArray = x.slice(2, 5); // extracts elements from index 2 to 4
console.log("Sliced array: " + slicedArray);
console.log(x.slice(3)); // extracts elements from index 3 to end
console.log(x.slice(-3)); // extracts last 3 elements
console.log(x.slice(0, 3)); // extracts first 3 elements

// splice function - to add/remove elements from an array
let y = [100, 200, 300, 400, 500];
console.log("Original array: " + y);
console.log(y.splice(2, 1)); // removes 1 element at index 2
console.log(y.splice(1, 0, 150)); // adds 150 at index 1
// let yans = y.splice(1,1,230); // removes 1 element at index 1 and adds 230
// console.log(y);
console.log(y.splice(2, 2, 350));
console.log(y);