let a=[5,6,7];
//Accessing elements
console.log(a[2]);

// To get length of array
console.log(a.length);

for(let i=0;i<a.length;i++){
    console.log(a[i]);
}

//adding elements
//push just adds last element
a.push(8);
console.log(a);

//unshift - adds element at start
a.unshift(4);
console.log(a);

//pop - removes last element
a.pop();
console.log(a);

//shift - removes first element
a.shift();
console.log(a);

//to find index of an element
console.log(a.indexOf(6));

//Reduce method
b=[1,2,3,4,5,6,7];
let sum1=b.reduce(function(accumulator,currentValue){
    return accumulator+currentValue;
},0);
console.log(sum1);

//addition using for loop
let c = [1,2,3,4,5];
let sum=0;
for(let i=0;i<c.length;i++){
    sum+=c[i];
}
console.log(sum);