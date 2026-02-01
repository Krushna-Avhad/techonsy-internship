let num=4;
for(let i=1; i<=num; i++)
{
    let row=""
    for(let j=1; j<=num; j++)    
    {
        row+="* "
    }
    console.log(row);
}

console.log();
for(let i=1; i<=num; i++)
{
    let row=""
    for(let j=1; j<=num; j++)
    {
        row+=i+" "
    }
    console.log(row);
}

// 1111
// 0000
// 1111
// 0000
console.log();
for(let i=1; i<=num; i++)
{
    let row="";
    for(let j=1; j<=num; j++)
    {
        if(i%2==1){
          row+="1 "
        }
        else{
            row+="0 ";
        }
    }
    console.log(row);
}

console.log();
for(let i=1; i<=num; i++)
{
    let row="";
    for(let j=1; j<=num; j++)
    {
        if(j%2==1){
          row+="1 ";
        }
        else{
            row+="0 ";
        }
    }
    console.log(row);
}

// 1010
// 0101
// 1010
// 0101
console.log();
for(let i=1; i<=num; i++)
{
    let row="";
    for(let j=1; j<=num; j++)
    {
        if((j+i)%2==0){
          row+="1 ";
        }
        else{
            row+="0 ";
        }
    }
    console.log(row);
}
console.log();

let n=1
for(let i=1; i<=3; i++)
{
    let row="";   //always declare row here to make it empty for the next row
    for(let j=1; j<=3; j++)
    {
        row+=n+" ";
        n++;
    }
    console.log(row);
}
console.log();


for(let i=0; i<num; i++)
{
    let row="";
    let char= String.fromCharCode((97+i));
    for(let j=1; j<=num; j++)
    {
        row+=char+" ";
    }
    console.log(row);
}
console.log();

for(let i=1; i<=num; i++)
{
    let row="";
    for(let j=0; j<num; j++)
    {
        let char= String.fromCharCode((97+j));
        row+=char+" ";
    }
    console.log(row);
}
console.log();

let n1=0;
for(let i=1; i<=3; i++)
{
    let row="";
    for(let j=0; j<3; j++)
    {
        let char= String.fromCharCode((97+n1));
        row+=char+" ";
        n1+=2;
    }
    console.log(row);
}
console.log();

let n2=1;
for(let i=1; i<=3; i++)
{
    let row="";
    for(let j=0; j<3; j++)
    {
        let char= String.fromCharCode((97+n2));
        row+=char+" ";
        n2+=2;
    }
    console.log(row);
}
console.log();

let n3=12;
for(let i=1; i<=3; i++)
{
    let row="";
    for(let j=1; j<=3; j++)
    {
        row+=n3+" ";
        n3+=2;
    }
    console.log(row);
}
console.log();

for(let i=1; i<=num; i++)
{
    let row="";
    for(let j=1; j<=num; j++)
    {
        if((i==1 || i==num) || (j==1 || j==num))
        {
            row+="* ";
        }
        else{
            row+="  ";
        }
    }
    console.log(row);
}
console.log();

for(let i=1; i<=num; i++)
{
    let row="";
    for(let j=1; j<=i; j++)
    {
        if(i%2==1){
            row+="1 ";
        }
        else{
            row+="0 ";
        }
    }
    console.log(row);
}
console.log();

for(let i=1; i<=num; i++)
{
    let row="";
    for(let j=1; j<=i; j++)
    {
        if(j%2==1){
            row+="1 ";
        }
        else{
            row+="0 ";
        }
    }
    console.log(row);
}
console.log();

let n4=1;
for(let i=1; i<=num; i++)
{
    let row="";
    for(let j=1; j<=i; j++)
    {
        row+=n4+" ";
        n4++;
    }
    console.log(row);
}
console.log();


for(let i=1; i<=num; i++)
{
    let row="";
    for(let j=1; j<=i; j++)
    {
        row+=String.fromCharCode(97+(i-1));
        row+=" ";
    }
    console.log(row);
}
console.log();

for(let i=1; i<=num; i++)
{
    let row="";
    for(let j=1; j<=i; j++)
    {
        row+=String.fromCharCode(97+(j-1));
        row+=" ";
    }
    console.log(row);
}
console.log();

n5=0;
for(let i=1; i<=num; i++)
{
    let row="";
    for(let j=1; j<=i; j++)
    {
        row+=String.fromCharCode(97+n5);
        row+=" ";
        n5++;
    }
    console.log(row);
}
console.log();

for(let i=1; i<=num; i++)
{
    let row="";
    for(let j=1; j<=i; j++)
    {
        if((i+j)%2==1)
        {
            row+="1 ";
        }
        else{
            row+="0 ";
        }
    }
    console.log(row);
}
console.log();

