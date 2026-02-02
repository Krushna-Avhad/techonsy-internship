
        // alert("Hello, World!");
        // let sum = 1+2+3+4;
        // alert("Sum is: " + sum);

        let num = 1234;
        let sum = 0;
        while (num > 0) {
            let rem = num % 10;
            num = Math.floor(num / 10);
        }
        console.log("Sum of digits: " + sum);
