        let num = 1234;
        let rev = 0;
        let temp=num;

        while (num > 0) {
            let rem = num % 10;
            rev = rev * 10 + rem;
            num = Math.floor(num / 10);
        }
        console.log(temp==rev?"Palindrome":"Not a Palindrome");

buzz Number happy sad leap neon range of prime lcm hcm duck 