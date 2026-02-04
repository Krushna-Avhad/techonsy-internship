// hw: arr > triple > odd > multiplication 
// use only 2 array one for arr and one for multiplication
// arr ----> multiplication
// arr ---->

let a = [1,2,3,4,5];

console.log(a);
console.log(a.map(x => x * 3));
console.log(a.map(x => x * 3).reduce((acc, x) => {
    if (x % 2 !== 0) {
        return acc * x;
    }
    return acc;
}, 1));

let b = [1,2,3,4,5];
console.log(b.map(x => x * 3).filter(x => x % 2 !== 0).reduce((acc, x) => acc * x, 1));